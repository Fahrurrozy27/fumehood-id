import { NextRequest } from 'next/server';

const WEBSITE_NAME = 'FumeHood.id';

/**
 * Escape karakter HTML khusus agar aman untuk parse_mode HTML di Telegram.
 * Hanya perlu escape &, <, > sesuai dokumentasi Telegram Bot API.
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Format tanggal dan waktu dalam zona waktu WIB (Asia/Jakarta).
 */
function formatWaktuWIB(): string {
  return new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date()) + ' WIB';
}

/**
 * Kirim pesan ke Telegram Bot menggunakan sendMessage API.
 */
async function sendToTelegram(data: {
  nama: string;
  phone: string;
  institusi: string;
  source: string;
}): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error('Telegram credentials tidak ditemukan di environment variables');
  }

  const waktu = formatWaktuWIB();

  const message = [
    `📋 <b>LEAD BARU — ${escapeHtml(WEBSITE_NAME)}</b>`,
    ``,
    `👤 <b>Nama:</b> ${escapeHtml(data.nama)}`,
    `📱 <b>No. HP:</b> ${escapeHtml(data.phone)}`,
    `🏢 <b>Institusi:</b> ${escapeHtml(data.institusi)}`,
    ``,
    `📍 <b>Sumber:</b> ${escapeHtml(data.source)}`,
    `🕐 <b>Waktu:</b> ${escapeHtml(waktu)}`,
  ].join('\n');

  const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  const response = await fetch(telegramUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Telegram API error: ${response.status} — ${errorBody}`);
  }
}

/**
 * Kirim data lead ke Google Sheets via Apps Script Web App.
 */
async function sendToGoogleSheets(data: {
  nama: string;
  phone: string;
  institusi: string;
  source: string;
}): Promise<void> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error('Google Sheets webhook URL tidak ditemukan di environment variables');
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nama: data.nama,
      phone: data.phone,
      institusi: data.institusi,
      source: data.source,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Google Sheets API error: ${response.status} — ${errorBody}`);
  }
}

/**
 * POST /api/send-lead
 *
 * Menerima data lead dari form dan mengirimnya ke Telegram Bot
 * dan Google Sheets secara paralel. Jika salah satu gagal,
 * yang lain tetap berjalan (Promise.allSettled).
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { nama, phone, institusi, source } = body;

    // Validasi input
    if (!nama || !phone || !institusi || !source) {
      return Response.json(
        { success: false, error: 'Semua field wajib diisi: nama, phone, institusi, source' },
        { status: 400 }
      );
    }

    const leadData = {
      nama: String(nama).trim(),
      phone: String(phone).trim(),
      institusi: String(institusi).trim(),
      source: String(source).trim(),
    };

    // Kirim ke Telegram dan Google Sheets secara PARALEL
    const results = await Promise.allSettled([
      sendToTelegram(leadData),
      sendToGoogleSheets(leadData),
    ]);

    const [telegramResult, sheetsResult] = results;

    const status = {
      telegram: telegramResult.status === 'fulfilled' ? 'success' : 'failed',
      googleSheets: sheetsResult.status === 'fulfilled' ? 'success' : 'failed',
    };

    // Log error ke server console jika ada yang gagal
    if (telegramResult.status === 'rejected') {
      console.error('[send-lead] Telegram error:', telegramResult.reason);
    }
    if (sheetsResult.status === 'rejected') {
      console.error('[send-lead] Google Sheets error:', sheetsResult.reason);
    }

    return Response.json({ success: true, status });
  } catch (error) {
    console.error('[send-lead] Unexpected error:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

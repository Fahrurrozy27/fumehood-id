export default function SocialProofBar() {
  const clients = ["BRIN", "RS PERTAMINA", "UNIV. INDONESIA", "AZELIS", "EUROFRAGRANCE", "UT"];

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 border-b border-slate-100/80">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="shrink-0">
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] text-center md:text-left font-[var(--font-quicksand)]">
              Standar Kualitas Mengacu SEFA
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm sm:text-base font-extrabold tracking-[0.15em] uppercase text-slate-300 hover:text-slate-600 font-[var(--font-stack-sans)] transition-colors duration-300 cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

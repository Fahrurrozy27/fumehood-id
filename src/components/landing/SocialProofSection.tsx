import { Star, Quote, ArrowRight } from "lucide-react";

interface SocialProofProps {
  variant?: "light" | "dark";
  quote: string;
  author: string;
  role: string;
  company: string;
  ctaText: string;
  ctaHref: string;
}

export default function SocialProofSection({
  variant = "dark",
  quote,
  author,
  role,
  company,
  ctaText,
  ctaHref,
}: SocialProofProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        isDark ? "bg-slate-950 bg-dot-texture-dark" : "bg-dot-texture"
      }`}
    >
      {/* Ambient glow */}
      {isDark && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0ebd9f]/6 rounded-full blur-[120px] pointer-events-none" />
      )}

      <div className="mx-auto max-w-4xl relative z-10 text-center">
        {/* Quote Icon */}
        <div className="mb-6 flex justify-center">
          <div className={`p-2.5 rounded-xl ${isDark ? "bg-white/5 border border-white/[0.06]" : "bg-[#0ebd9f]/5 border border-[#0ebd9f]/10"}`}>
            <Quote className={`h-5 w-5 ${isDark ? "text-[#0ebd9f]" : "text-[#097765]"}`} />
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1 justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
          ))}
        </div>

        {/* Quote Text */}
        <blockquote
          className={`text-lg sm:text-xl font-semibold leading-relaxed italic mb-8 font-[var(--font-quicksand)] ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="mb-8">
          <p className={`font-extrabold tracking-wide font-[var(--font-stack-sans)] text-base ${isDark ? "text-white" : "text-slate-900"}`}>
            {author}
          </p>
          <p className={`text-xs font-semibold mt-1 font-[var(--font-quicksand)] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
            {role}, {company}
          </p>
        </div>

        {/* CTA */}
        <a
          href={ctaHref}
          className={`group inline-flex items-center gap-2 text-sm font-bold rounded-lg transition-all duration-200 font-[var(--font-quicksand)] ${
            isDark
              ? "btn-futuristic-green"
              : "px-5 py-3 text-white bg-slate-900 hover:bg-slate-800"
          }`}
        >
          {ctaText}
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

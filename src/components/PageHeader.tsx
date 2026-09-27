interface PageHeaderProps {
  title: string;
  emoji: string;
  subtitle: string;
  gradient?: string;
}

export default function PageHeader({ title, emoji, subtitle, gradient = "from-green-600 to-emerald-500" }: PageHeaderProps) {
  return (
    <div className={`bg-gradient-to-r ${gradient} py-10 px-4 text-white text-center relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-4 left-10 text-6xl">🌿</div>
        <div className="absolute top-8 right-16 text-5xl">🍃</div>
        <div className="absolute bottom-4 left-1/4 text-4xl">🌱</div>
        <div className="absolute bottom-6 right-1/3 text-5xl">🌻</div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="text-5xl md:text-6xl block mb-3 animate-bounce-slow">{emoji}</span>
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-3">{title}</h1>
        <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto">{subtitle}</p>

        {/* Website link */}
        <div className="mt-5">
          <a
            href="https://www.kidsknowledgenest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all hover:scale-105"
          >
            🌐 www.kidsknowledgenest.com
          </a>
        </div>
      </div>
    </div>
  );
}

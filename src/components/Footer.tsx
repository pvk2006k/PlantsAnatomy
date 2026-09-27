export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          {/* Website Link */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🌱</span>
            <a
              href="https://www.kidsknowledgenest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-bold text-yellow-300 hover:text-yellow-200 transition-colors underline decoration-wavy decoration-yellow-400/50 hover:decoration-yellow-300"
            >
              www.kidsknowledgenest.com
            </a>
          </div>

          {/* Tagline */}
          <p className="text-green-200 text-base md:text-lg">
            🌟 Where curious minds grow and knowledge blooms! 🌟
          </p>

          {/* Divider */}
          <div className="w-32 h-0.5 bg-green-500 mx-auto rounded-full" />

          {/* Copyright */}
          <p className="text-green-300 text-sm">
            © {new Date().getFullYear()} KidsKnowledgeNest. All rights reserved.
          </p>

          {/* Fun message */}
          <p className="text-green-400 text-xs italic">
            🌿 Learning about nature is the first step to saving it! 🌍
          </p>
        </div>
      </div>
    </footer>
  );
}

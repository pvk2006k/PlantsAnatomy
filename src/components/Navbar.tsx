import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home", emoji: "🏠" },
  { to: "/plant-anatomy", label: "Plant Anatomy", emoji: "🌿" },
  { to: "/photosynthesis", label: "Photosynthesis", emoji: "☀️" },
  { to: "/plant-importance", label: "Plant Importance", emoji: "💚" },
  { to: "/water-cycle", label: "Water Cycle", emoji: "💧" },
  { to: "/deforestation", label: "Deforestation", emoji: "🪓" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Website Name */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-extrabold text-lg md:text-xl hover:text-yellow-300 transition-colors"
          >
            <span className="text-2xl">🌱</span>
            <span className="hidden sm:inline">KidsKnowledgeNest</span>
            <span className="sm:hidden">KKN</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  location.pathname === link.to
                    ? "bg-white/20 text-yellow-300 shadow-inner"
                    : "text-white hover:bg-white/10 hover:text-yellow-200"
                }`}
              >
                <span className="mr-1">{link.emoji}</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-green-800 border-t border-green-600 animate-fadeIn">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                  location.pathname === link.to
                    ? "bg-white/20 text-yellow-300"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <span className="mr-2">{link.emoji}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

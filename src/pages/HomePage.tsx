import { Link } from "react-router-dom";

const menuItems = [
  {
    to: "/plant-anatomy",
    title: "Plant Anatomy",
    emoji: "🌿",
    description: "Explore the detailed structure of roots, stem, leaves, buds, and fruits with labeled diagrams!",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-300",
  },
  {
    to: "/photosynthesis",
    title: "Photosynthesis",
    emoji: "☀️",
    description: "Discover how plants make their own food using sunlight, water, and air — nature's magic recipe!",
    color: "from-yellow-400 to-orange-400",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-300",
  },
  {
    to: "/plant-importance",
    title: "Importance of Plants",
    emoji: "💚",
    description: "Learn why plants are essential for our survival — from food and oxygen to medicine and shelter!",
    color: "from-teal-400 to-green-500",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-300",
  },
  {
    to: "/water-cycle",
    title: "Plants & Water Cycle",
    emoji: "💧",
    description: "Understand how plants help maintain the water cycle through transpiration and absorption!",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
  },
  {
    to: "/deforestation",
    title: "Deforestation",
    emoji: "🪓",
    description: "Learn about the cutting of forests, its causes, effects, and what we can do to save our planet!",
    color: "from-red-400 to-rose-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-300",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-green-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-float-slow opacity-30">☁️</div>
        <div className="absolute top-20 right-20 text-5xl animate-float-medium opacity-20">☁️</div>
        <div className="absolute top-5 left-1/3 text-4xl animate-float-fast opacity-25">🦋</div>
        <div className="absolute top-32 right-1/3 text-3xl animate-float-slow opacity-20">🐝</div>
        <div className="absolute bottom-20 left-5 text-4xl animate-float-medium opacity-20">🌻</div>
        <div className="absolute bottom-32 right-10 text-3xl animate-float-fast opacity-20">🌺</div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-extrabold text-green-800 drop-shadow-lg mb-4">
            🌱 Kids Knowledge Nest 🌿
          </h1>
          <p className="text-xl md:text-2xl text-green-700 font-medium mb-6">
            Your Amazing Journey into the World of Plants!
          </p>

          {/* Website link */}
          <a
            href="https://www.kidsknowledgenest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            🌐 Visit www.kidsknowledgenest.com
          </a>
        </div>
      </div>

      {/* Menu Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-green-800 mb-3">
          📚 What Would You Like to Learn Today?
        </h2>
        <p className="text-center text-green-600 mb-8 text-lg">
          Click on any topic to start your adventure!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              className={`${item.bgColor} ${item.borderColor} border-2 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-4xl">{item.emoji}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 flex items-center text-green-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                Explore Now <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Fun Facts Banner */}
      <div className="relative z-10 bg-gradient-to-r from-green-700 to-emerald-600 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">🌍 Why Learn About Plants?</h3>
          <p className="text-green-100 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Plants are the foundation of life on Earth! They give us the oxygen we breathe, the food we eat,
            the medicine that heals us, and the beauty that inspires us. Understanding plants helps us protect
            our planet for future generations. Let's explore together! 🌱🌳🌸
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="relative z-10 py-12 px-4 bg-white/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-2xl shadow-md">
            <span className="text-4xl block mb-2">🌳</span>
            <p className="text-2xl font-bold text-green-700">3 Trillion</p>
            <p className="text-gray-600 text-sm">Trees on Earth</p>
          </div>
          <div className="text-center p-4 bg-white rounded-2xl shadow-md">
            <span className="text-4xl block mb-2">🌿</span>
            <p className="text-2xl font-bold text-green-700">390,000+</p>
            <p className="text-gray-600 text-sm">Plant Species</p>
          </div>
          <div className="text-center p-4 bg-white rounded-2xl shadow-md">
            <span className="text-4xl block mb-2">💨</span>
            <p className="text-2xl font-bold text-green-700">80%</p>
            <p className="text-gray-600 text-sm">Oxygen from Plants</p>
          </div>
          <div className="text-center p-4 bg-white rounded-2xl shadow-md">
            <span className="text-4xl block mb-2">🍎</span>
            <p className="text-2xl font-bold text-green-700">7,000+</p>
            <p className="text-gray-600 text-sm">Edible Plant Species</p>
          </div>
        </div>
      </div>
    </div>
  );
}

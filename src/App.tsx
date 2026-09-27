import { useState } from "react";
import { plantParts, PlantPart } from "./plantData";
import DetailModal from "./DetailModal";

const mainPlantImage = "https://image.qwenlm.ai/generated-images/ac95efa1-870e-4b5e-b1b2-fe5a8657151f/_result.png";

interface LabelPosition {
  id: string;
  top: string;
  left: string;
  emoji: string;
}

const labelPositions: LabelPosition[] = [
  { id: "root", top: "82%", left: "50%", emoji: "🌿" },
  { id: "stem", top: "55%", left: "50%", emoji: "🌱" },
  { id: "leaf", top: "35%", left: "25%", emoji: "🍃" },
  { id: "bud", top: "18%", left: "60%", emoji: "🌸" },
  { id: "fruit", top: "28%", left: "75%", emoji: "🍎" },
];

export default function App() {
  const [selectedPart, setSelectedPart] = useState<PlantPart | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const handlePartClick = (partId: string) => {
    const part = plantParts.find((p) => p.id === partId);
    if (part) {
      setSelectedPart(part);
    }
  };

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

      {/* Header */}
      <header className="relative z-10 text-center py-6 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 drop-shadow-lg">
          🌱 Plant Anatomy Explorer 🌿
        </h1>
        <p className="text-lg md:text-xl text-green-700 mt-2 font-medium">
          Click on any part of the plant to learn about its anatomy!
        </p>
      </header>

      {/* Main Plant Image with Labels */}
      <div className="relative z-10 flex justify-center px-4 pb-8">
        <div className="relative w-full max-w-2xl">
          {/* Plant Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-green-300 bg-white">
            <img
              src={mainPlantImage}
              alt="Complete Plant Anatomy"
              className="w-full h-auto"
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-200/50 to-transparent" />
          </div>

          {/* Clickable Labels */}
          {labelPositions.map((label) => {
            const part = plantParts.find((p) => p.id === label.id);
            if (!part) return null;
            const isHovered = hoveredPart === label.id;

            return (
              <button
                key={label.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer z-20 ${
                  isHovered ? "scale-125" : "scale-100 animate-pulse-gentle"
                }`}
                style={{ top: label.top, left: label.left }}
                onClick={() => handlePartClick(label.id)}
                onMouseEnter={() => setHoveredPart(label.id)}
                onMouseLeave={() => setHoveredPart(null)}
              >
                <div
                  className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                    isHovered ? "drop-shadow-xl" : "drop-shadow-lg"
                  }`}
                >
                  <span className="text-3xl md:text-4xl">{label.emoji}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs md:text-sm font-bold text-white shadow-lg transition-all duration-300 ${
                      isHovered ? "bg-opacity-100" : "bg-opacity-90"
                    }`}
                    style={{
                      backgroundColor:
                        label.id === "root"
                          ? "#92400e"
                          : label.id === "stem"
                          ? "#15803d"
                          : label.id === "leaf"
                          ? "#047857"
                          : label.id === "bud"
                          ? "#be185d"
                          : "#b91c1c",
                    }}
                  >
                    {part.name}
                  </span>
                  {isHovered && (
                    <span className="absolute -bottom-8 whitespace-nowrap bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-lg shadow-md animate-fadeIn">
                      Click to explore! 👆
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-6">
          📚 Explore Each Part
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {plantParts.map((part) => (
            <button
              key={part.id}
              className={`${part.bgColor} ${part.borderColor} border-2 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer text-center`}
              onClick={() => setSelectedPart(part)}
            >
              <span className="text-4xl block mb-2">{part.emoji}</span>
              <h3 className={`font-bold ${part.color} text-sm md:text-base`}>{part.name}</h3>
              <p className="text-gray-600 text-xs mt-1 line-clamp-2">{part.shortDescription}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Educational Banner */}
      <div className="relative z-10 bg-green-800 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2">🌍 Did You Know?</h3>
          <p className="text-green-100 text-lg">
            Plants are amazing! They make their own food using sunlight, give us oxygen to breathe,
            and provide food for all living things. Every part of a plant has an important job! 🌱
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      <DetailModal
        plantPart={selectedPart!}
        isOpen={selectedPart !== null}
        onClose={() => setSelectedPart(null)}
      />
    </div>
  );
}

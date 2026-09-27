import { useState } from "react";
import { plantParts, PlantPart } from "../plantData";
import DetailModal from "../DetailModal";
import PageHeader from "../components/PageHeader";

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

export default function PlantAnatomyPage() {
  const [selectedPart, setSelectedPart] = useState<PlantPart | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const handlePartClick = (partId: string) => {
    const part = plantParts.find((p) => p.id === partId);
    if (part) setSelectedPart(part);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <PageHeader
        title="Plant Anatomy"
        emoji="🌿"
        subtitle="Explore the hidden world inside plants — every part has a special job!"
        gradient="from-green-600 to-emerald-500"
      />

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-green-200">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">🔬 What is Plant Anatomy?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Just like our body has different parts — heart, lungs, brain, and bones — plants also have different parts
            that work together to keep them alive and growing! Each part of a plant has a special function. Some parts
            absorb water, some make food, some protect the plant, and some help it reproduce.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            In this section, you will learn about the five main parts of a plant: <strong className="text-amber-700">Roots</strong>,{" "}
            <strong className="text-green-700">Stem</strong>,{" "}
            <strong className="text-emerald-700">Leaves</strong>,{" "}
            <strong className="text-pink-700">Buds</strong>, and{" "}
            <strong className="text-red-700">Fruits</strong>. Click on any part in the diagram below to see its detailed
            anatomy with labels and descriptions! 👇
          </p>
        </div>
      </div>

      {/* Main Plant Image with Labels */}
      <div className="relative z-10 flex justify-center px-4 pb-8">
        <div className="relative w-full max-w-2xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-green-300 bg-white">
            <img src={mainPlantImage} alt="Complete Plant Anatomy" className="w-full h-auto" />
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
                <div className={`flex flex-col items-center gap-1 transition-all duration-300 ${isHovered ? "drop-shadow-xl" : "drop-shadow-lg"}`}>
                  <span className="text-3xl md:text-4xl">{label.emoji}</span>
                  <span
                    className="px-3 py-1 rounded-full text-xs md:text-sm font-bold text-white shadow-lg"
                    style={{
                      backgroundColor:
                        label.id === "root" ? "#92400e" :
                        label.id === "stem" ? "#15803d" :
                        label.id === "leaf" ? "#047857" :
                        label.id === "bud" ? "#be185d" : "#b91c1c",
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
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-6">
          📚 Click on Any Part to Learn More
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

      {/* Detail Modal */}
      <DetailModal
        plantPart={selectedPart!}
        isOpen={selectedPart !== null}
        onClose={() => setSelectedPart(null)}
      />
    </div>
  );
}

import { useEffect, useState } from "react";
import { PlantPart } from "./plantData";

interface DetailModalProps {
  plantPart: PlantPart;
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailModal({ plantPart, isOpen, onClose }: DetailModalProps) {
  const [activeLabel, setActiveLabel] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setImageLoaded(false);
      setShowContent(false);
      setActiveLabel(null);
      const timer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${plantPart.bgColor} border-4 ${plantPart.borderColor} transition-all duration-500 ${showContent ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold text-gray-600 hover:bg-red-100 hover:text-red-600 transition-all hover:scale-110 cursor-pointer"
        >
          ✕
        </button>

        {/* Header */}
        <div className={`p-6 pb-4 ${plantPart.bgColor} rounded-t-3xl`}>
          <div className="flex items-center gap-3">
            <span className="text-5xl animate-bounce-slow">{plantPart.emoji}</span>
            <div>
              <h2 className={`text-3xl md:text-4xl font-extrabold ${plantPart.color}`}>
                {plantPart.name}
              </h2>
              <p className="text-gray-600 text-lg mt-1">{plantPart.shortDescription}</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="px-6 py-4">
          <div className="relative rounded-2xl overflow-hidden bg-white shadow-inner border-2 border-white">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-spin text-4xl">🌱</div>
              </div>
            )}
            <img
              src={plantPart.image}
              alt={`${plantPart.name} Anatomy`}
              className={`w-full h-auto max-h-[400px] object-contain transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImageLoaded(true)}
            />
            {/* Animated overlay effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>

        {/* Description */}
        <div className="px-6 py-4">
          <div className="bg-white/80 rounded-2xl p-5 shadow-sm border border-white">
            <p className="text-gray-700 text-lg leading-relaxed">{plantPart.description}</p>
          </div>
        </div>

        {/* Labels Section */}
        <div className="px-6 py-4">
          <h3 className={`text-2xl font-bold ${plantPart.color} mb-4 flex items-center gap-2`}>
            🔬 Anatomy Labels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {plantPart.labels.map((label, index) => (
              <div
                key={index}
                className={`rounded-xl p-4 border-2 transition-all duration-300 cursor-pointer ${
                  activeLabel === index
                    ? `${plantPart.bgColor} ${plantPart.borderColor} shadow-lg scale-[1.02]`
                    : "bg-white/60 border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
                onClick={() => setActiveLabel(activeLabel === index ? null : index)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-2">
                  <span className={`text-lg font-bold ${plantPart.color} whitespace-nowrap`}>
                    {index + 1}.
                  </span>
                  <div>
                    <p className={`font-bold ${plantPart.color}`}>{label.name}</p>
                    {activeLabel === index && (
                      <p className="text-gray-600 text-sm mt-1 animate-fadeIn">
                        {label.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="px-6 py-4 pb-8">
          <h3 className={`text-2xl font-bold ${plantPart.color} mb-4 flex items-center gap-2`}>
            🤩 Fun Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {plantPart.funFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-xl p-4 shadow-sm border border-white hover:shadow-md transition-all hover:scale-[1.02]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="text-gray-700">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

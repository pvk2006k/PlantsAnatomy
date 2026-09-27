import PageHeader from "../components/PageHeader";

const photosynthesisImage = "https://image.qwenlm.ai/generated-images/bafdfee4-e62a-444c-8bcc-b42cc5944b46/_result.png";

export default function PhotosynthesisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <PageHeader
        title="Photosynthesis"
        emoji="☀️"
        subtitle="How plants make their own food using sunlight — nature's amazing recipe!"
        gradient="from-yellow-500 to-orange-400"
      />

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* What is Photosynthesis */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-yellow-200">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🤔</span> What is Photosynthesis?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The word <strong>"Photosynthesis"</strong> comes from two Greek words — <strong>"Photo"</strong> meaning <em>light</em> and{" "}
            <strong>"Synthesis"</strong> meaning <em>putting together</em>. So photosynthesis literally means{" "}
            <strong>"putting together using light"</strong>!
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Photosynthesis is the process by which green plants make their own food (glucose/sugar) using{" "}
            <strong>sunlight</strong>, <strong>water</strong>, and <strong>carbon dioxide</strong>. This process takes
            place mainly in the <strong>leaves</strong> of the plant, inside tiny structures called{" "}
            <strong>chloroplasts</strong> that contain a green pigment called <strong>chlorophyll</strong>.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            During photosynthesis, plants also release <strong>oxygen</strong> into the air — the same oxygen that we
            and all animals need to breathe! Without photosynthesis, there would be no life on Earth because there would
            be no food and no oxygen.
          </p>
        </section>

        {/* Chemical Equation */}
        <section className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-yellow-300">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">📝</span> The Chemical Equation
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Here is the balanced chemical equation for photosynthesis. This equation tells us exactly what goes in
            (reactants) and what comes out (products):
          </p>

          {/* Equation Box */}
          <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-orange-200 mb-6">
            <div className="text-center">
              <p className="text-xl md:text-3xl font-bold text-gray-800 mb-2">
                6CO₂ + 6H₂O + <span className="text-yellow-600">Light Energy</span> → C₆H₁₂O₆ + 6O₂
              </p>
              <div className="w-full h-0.5 bg-orange-300 my-4 rounded-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-bold text-blue-800 mb-2">📥 Reactants (What goes in):</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li><strong>6CO₂</strong> = 6 molecules of Carbon Dioxide (from air)</li>
                    <li><strong>6H₂O</strong> = 6 molecules of Water (from roots)</li>
                    <li><strong>Light Energy</strong> = Sunlight (absorbed by chlorophyll)</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-bold text-green-800 mb-2">📤 Products (What comes out):</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li><strong>C₆H₁₂O₆</strong> = 1 molecule of Glucose (plant food/sugar)</li>
                    <li><strong>6O₂</strong> = 6 molecules of Oxygen (released into air)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            In simple words: <strong>Six molecules of carbon dioxide</strong> from the air +{" "}
            <strong>six molecules of water</strong> from the soil + <strong>sunlight energy</strong> ={" "}
            <strong>one molecule of glucose</strong> (food) + <strong>six molecules of oxygen</strong> (which plants release for us to breathe)!
          </p>
        </section>

        {/* Image */}
        <section className="bg-white rounded-3xl p-6 shadow-lg border-2 border-yellow-200">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🖼️</span> Photosynthesis Process Diagram
          </h2>
          <div className="rounded-2xl overflow-hidden border-2 border-yellow-100 shadow-inner">
            <img src={photosynthesisImage} alt="Photosynthesis Process" className="w-full h-auto" />
          </div>
        </section>

        {/* How it works step by step */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-yellow-200">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">⚙️</span> How Does Photosynthesis Work? (Step by Step)
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-yellow-50 rounded-xl p-4 border border-yellow-200">
              <span className="text-3xl font-bold text-yellow-600 min-w-[40px]">1.</span>
              <div>
                <h4 className="font-bold text-gray-800 text-lg">Sunlight is Absorbed</h4>
                <p className="text-gray-700">
                  Sunlight falls on the green leaves. The green pigment <strong>chlorophyll</strong> (found in chloroplasts)
                  absorbs the light energy. This is why leaves appear green — they reflect green light and absorb other colors!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-blue-50 rounded-xl p-4 border border-blue-200">
              <span className="text-3xl font-bold text-blue-600 min-w-[40px]">2.</span>
              <div>
                <h4 className="font-bold text-gray-800 text-lg">Water is Absorbed</h4>
                <p className="text-gray-700">
                  Roots absorb water from the soil. This water travels up through the <strong>xylem</strong> tubes in the
                  stem and reaches the leaves. The water enters the leaf cells where photosynthesis happens.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
              <span className="text-3xl font-bold text-gray-600 min-w-[40px]">3.</span>
              <div>
                <h4 className="font-bold text-gray-800 text-lg">Carbon Dioxide Enters</h4>
                <p className="text-gray-700">
                  Carbon dioxide (CO₂) from the air enters the leaf through tiny pores called <strong>stomata</strong>
                  (mostly on the underside of leaves). Guard cells control the opening and closing of these stomata.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-green-50 rounded-xl p-4 border border-green-200">
              <span className="text-3xl font-bold text-green-600 min-w-[40px]">4.</span>
              <div>
                <h4 className="font-bold text-gray-800 text-lg">Food is Made (Glucose)</h4>
                <p className="text-gray-700">
                  Using the energy from sunlight, the plant converts water and carbon dioxide into{" "}
                  <strong>glucose</strong> (a type of sugar). This glucose is the plant's food — it gives the plant
                  energy to grow, make flowers, and produce fruits!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <span className="text-3xl font-bold text-emerald-600 min-w-[40px]">5.</span>
              <div>
                <h4 className="font-bold text-gray-800 text-lg">Oxygen is Released</h4>
                <p className="text-gray-700">
                  As a byproduct of making glucose, the plant releases <strong>oxygen</strong> through the stomata into
                  the air. This oxygen is what we and all animals breathe! Plants are like nature's oxygen factories! 🌬️
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Factors Affecting Photosynthesis */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-green-200">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">📊</span> Factors Affecting Photosynthesis
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The rate of photosynthesis depends on several factors. If any of these factors are limited, the rate of
            photosynthesis will slow down:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
              <h4 className="font-bold text-yellow-700 text-lg mb-1">☀️ Light Intensity</h4>
              <p className="text-gray-700">
                More light = faster photosynthesis (up to a point). That's why plants grow towards light!
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
              <h4 className="font-bold text-blue-700 text-lg mb-1">💧 Water Availability</h4>
              <p className="text-gray-700">
                Without enough water, stomata close and CO₂ can't enter. Plants in dry areas have special adaptations!
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
              <h4 className="font-bold text-gray-700 text-lg mb-1">🌫️ CO₂ Concentration</h4>
              <p className="text-gray-700">
                More CO₂ means more raw material for making food. Greenhouses sometimes add extra CO₂!
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
              <h4 className="font-bold text-red-700 text-lg mb-1">🌡️ Temperature</h4>
              <p className="text-gray-700">
                Photosynthesis works best at 25-35°C. Too hot or too cold and the enzymes slow down!
              </p>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-orange-200">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🤩</span> Amazing Facts About Photosynthesis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-gray-700 text-lg">🌍 A single large tree can produce enough oxygen for <strong>4 people</strong> to breathe every day!</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-gray-700 text-lg">🍃 Plants use only about <strong>1-2%</strong> of the sunlight that falls on them for photosynthesis!</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-gray-700 text-lg">🌊 The oxygen we breathe was originally part of a <strong>water molecule</strong> that was split during photosynthesis!</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-gray-700 text-lg">🏭 All the fossil fuels (coal, oil, gas) we use are actually <strong>stored sunlight</strong> from ancient plants!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

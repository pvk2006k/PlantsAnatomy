import PageHeader from "../components/PageHeader";

const waterCycleImage = "https://image.qwenlm.ai/generated-images/67a4fb06-c9c2-482b-9337-6b5be7311a70/_result.png";

export default function WaterCyclePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <PageHeader
        title="Plants & The Water Cycle"
        emoji="💧"
        subtitle="How plants play a vital role in nature's water recycling system!"
        gradient="from-blue-600 to-cyan-500"
      />

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Introduction */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-blue-200">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🔄</span> What is the Water Cycle?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The <strong>water cycle</strong> (also called the <strong>hydrological cycle</strong>) is nature's amazing way
            of recycling water over and over again. Water is constantly moving between the Earth's surface, the atmosphere,
            and back again. It evaporates from oceans, lakes, and rivers, forms clouds, falls as rain, and then flows back
            into water bodies — and the cycle continues forever!
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            But here's something many people don't know — <strong>plants play a HUGE role</strong> in the water cycle!
            Without plants, the water cycle would work very differently, and our planet's climate would be much harsher.
            Plants act as nature's water pumps, pulling water from the ground and releasing it into the air through a
            process called <strong>transpiration</strong>.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Let's understand the complete water cycle and how plants are involved at every stage! 💧
          </p>
        </section>

        {/* Water Cycle Diagram */}
        <section className="bg-white rounded-3xl p-6 shadow-lg border-2 border-blue-200">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🖼️</span> The Water Cycle Diagram
          </h2>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-100 shadow-inner">
            <img src={waterCycleImage} alt="Water Cycle with Plants" className="w-full h-auto" />
          </div>
          <p className="text-center text-gray-500 text-sm mt-3 italic">
            The water cycle showing how plants contribute through transpiration and absorption
          </p>
        </section>

        {/* Stages of Water Cycle */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-blue-200">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">📖</span> Stages of the Water Cycle
          </h2>

          <div className="space-y-5">
            {/* Stage 1: Evaporation */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-5 border border-orange-200">
              <h3 className="text-xl font-bold text-orange-700 mb-2 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                ☀️ Evaporation
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                The sun heats up water in oceans, rivers, lakes, and other water bodies. This heat energy converts liquid
                water into <strong>water vapor</strong> (gas), which rises up into the atmosphere. About{" "}
                <strong>80% of evaporation</strong> happens from the oceans, and the remaining 20% from freshwater bodies
                and moist soil. The warmer the temperature, the faster water evaporates!
              </p>
            </div>

            {/* Stage 2: Transpiration */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-2 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                🌿 Transpiration (Plants' Special Role!)
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-3">
                This is where plants become superstars of the water cycle! <strong>Transpiration</strong> is the process
                by which plants absorb water from the soil through their roots, transport it up through the stem, and
                release it as <strong>water vapor</strong> through tiny pores (stomata) in their leaves.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-3">
                Think of it like this — plants are like giant straws! Their roots suck up water from the ground, and their
                leaves "breathe out" water vapor into the air. A single large tree can release{" "}
                <strong>hundreds of liters of water</strong> into the atmosphere every day through transpiration!
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Together, all the plants on Earth contribute about <strong>10% of the moisture</strong> in the atmosphere
                through transpiration. In dense forests like the Amazon, this number can be as high as{" "}
                <strong>50%</strong>! This is why cutting down forests reduces rainfall in that area. 🌧️
              </p>
            </div>

            {/* Stage 3: Condensation */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-5 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-700 mb-2 flex items-center gap-2">
                <span className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                ☁️ Condensation
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                As water vapor rises higher in the atmosphere, it encounters cooler temperatures. The cold air causes the
                water vapor to <strong>cool down and change back into tiny liquid water droplets</strong>. These tiny
                droplets gather together around dust particles in the air and form <strong>clouds</strong>. This process
                of water vapor turning back into liquid water is called condensation. The higher you go, the colder it
                gets, and the more condensation happens!
              </p>
            </div>

            {/* Stage 4: Precipitation */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                🌧️ Precipitation
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                When the water droplets in clouds become too heavy to stay suspended in the air, they fall back to Earth
                as <strong>precipitation</strong>. This can be in the form of <strong>rain</strong>, <strong>snow</strong>,{" "}
                <strong>hail</strong>, or <strong>sleet</strong>, depending on the temperature. Most precipitation falls
                back into oceans, but some falls on land where plants and animals can use it!
              </p>
            </div>

            {/* Stage 5: Collection & Absorption */}
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-5 border border-cyan-200">
              <h3 className="text-xl font-bold text-cyan-700 mb-2 flex items-center gap-2">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                🌱 Collection & Absorption (Plants Again!)
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-3">
                When rain falls on land, some of it flows into rivers and lakes (called <strong>surface runoff</strong>),
                and some of it seeps into the ground to become <strong>groundwater</strong>. Here's where plants play
                another important role!
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-3">
                Plant roots <strong>absorb</strong> a significant amount of this water from the soil. The roots act like
                a sponge, holding water in the soil and preventing it from running off too quickly. This is why areas with
                lots of vegetation have better groundwater levels and fewer floods!
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                The absorbed water is then used by the plant for photosynthesis, transported to leaves, and eventually
                released back into the air through transpiration — and the cycle continues! 🔄
              </p>
            </div>
          </div>
        </section>

        {/* Why Plants are Important in Water Cycle */}
        <section className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-emerald-200">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🌟</span> Why Are Plants So Important in the Water Cycle?
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
              <h4 className="font-bold text-emerald-700 text-lg mb-1">🌧️ They Increase Rainfall</h4>
              <p className="text-gray-700">
                Through transpiration, forests release massive amounts of water vapor into the air, which forms clouds
                and causes rainfall. Areas with more trees get more rain! This is called "biotic precipitation" — rain
                created by living things!
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
              <h4 className="font-bold text-emerald-700 text-lg mb-1">🏔️ They Prevent Floods</h4>
              <p className="text-gray-700">
                Plant roots and leaf litter act like a giant sponge, absorbing rainwater and slowing down its flow.
                Without plants, rainwater would rush downhill causing devastating floods. Forests are nature's flood control!
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
              <h4 className="font-bold text-emerald-700 text-lg mb-1">💧 They Recharge Groundwater</h4>
              <p className="text-gray-700">
                By slowing down water flow and allowing it to seep into the ground, plants help recharge underground
                water tables. This is why wells near forests rarely dry up!
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
              <h4 className="font-bold text-emerald-700 text-lg mb-1">🌡️ They Regulate Climate</h4>
              <p className="text-gray-700">
                Transpiration cools the surrounding air (just like sweating cools our body). Large forests create their
                own microclimate, making the area cooler and more humid. This is why it always feels cooler inside a forest!
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
              <h4 className="font-bold text-emerald-700 text-lg mb-1">🏜️ They Prevent Droughts</h4>
              <p className="text-gray-700">
                By maintaining the water cycle, forests ensure regular rainfall. When forests are cut down, the area
                becomes drier and can eventually turn into a desert — this process is called "desertification"!
              </p>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 md:p-8 shadow-lg text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">🤩</span> Amazing Water Cycle Facts!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-lg">💧 The same water that dinosaurs drank millions of years ago is still on Earth today — it just keeps cycling!</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-lg">🌳 A single oak tree can transpire up to <strong>40,000 gallons</strong> of water per year!</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-lg">🌊 97% of Earth's water is in oceans, only 3% is fresh water — and plants help protect that 3%!</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-lg">🌧️ The Amazon rainforest creates its own rain — moisture from transpiration forms "flying rivers"!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

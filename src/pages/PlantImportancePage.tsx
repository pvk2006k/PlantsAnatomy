import PageHeader from "../components/PageHeader";

const plantImportanceImage = "https://image.qwenlm.ai/generated-images/2c8a02d9-23a2-45e3-acf7-d615177dd84f/_result.png";

export default function PlantImportancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-green-50">
      <PageHeader
        title="Importance of Plants in Our Life"
        emoji="💚"
        subtitle="Plants are the most important living things on Earth — here's why!"
        gradient="from-teal-600 to-green-500"
      />

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Introduction */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-teal-200">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🌍</span> Why Are Plants So Important?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Imagine a world without plants — no green trees, no colorful flowers, no fresh fruits, no cool shade on a hot
            summer day. It would be impossible to live! Plants are the <strong>foundation of all life on Earth</strong>.
            They are the only organisms that can make their own food using sunlight, and they form the base of every food
            chain on the planet.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            From the moment we wake up to the time we sleep, plants are a part of our lives in countless ways. The food
            we eat, the clothes we wear, the medicines that cure us, the wood for our furniture, the paper we write on —
            almost everything comes from plants! They even clean the air we breathe and help regulate the Earth's climate.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Let's explore all the amazing ways plants are important in our daily lives:
          </p>
        </section>

        {/* Image */}
        <section className="bg-white rounded-3xl p-6 shadow-lg border-2 border-teal-200">
          <div className="rounded-2xl overflow-hidden border-2 border-teal-100 shadow-inner">
            <img src={plantImportanceImage} alt="Importance of Plants in Our Life" className="w-full h-auto" />
          </div>
          <p className="text-center text-gray-500 text-sm mt-3 italic">
            Plants provide us with food, clothing, shelter, medicine, and much more!
          </p>
        </section>

        {/* Categories of Importance */}
        <section className="space-y-6">
          {/* 1. Oxygen */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-3 flex items-center gap-2">
              <span className="text-3xl">💨</span> 1. Plants Give Us Oxygen
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              This is perhaps the most important contribution of plants! Through the process of{" "}
              <strong>photosynthesis</strong>, plants absorb carbon dioxide from the air and release{" "}
              <strong>oxygen</strong>. Every breath you take contains oxygen that was produced by plants!
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Without plants, there would be no oxygen in the atmosphere, and no animal (including humans) could survive.
              A single mature tree can produce enough oxygen for <strong>2-4 people</strong> every day. The Amazon rainforest
              alone produces about <strong>20% of the world's oxygen</strong> — that's why it's called the "Lungs of the Earth"! 🌳
            </p>
          </div>

          {/* 2. Food */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-orange-800 mb-3 flex items-center gap-2">
              <span className="text-3xl">🍎</span> 2. Plants Give Us Food
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              All the food we eat ultimately comes from plants! Even when we eat meat, the animal we ate was eating plants
              first. Plants are the <strong>primary producers</strong> in every food chain. They convert sunlight into energy
              that all other living things depend on.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              We get so many types of food from plants:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <span className="text-2xl block">🌾</span>
                <p className="font-semibold text-gray-700 text-sm">Grains (Rice, Wheat, Corn)</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <span className="text-2xl block">🥬</span>
                <p className="font-semibold text-gray-700 text-sm">Vegetables</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <span className="text-2xl block">🍎</span>
                <p className="font-semibold text-gray-700 text-sm">Fruits</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <span className="text-2xl block">🥜</span>
                <p className="font-semibold text-gray-700 text-sm">Nuts & Seeds</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <span className="text-2xl block">🫘</span>
                <p className="font-semibold text-gray-700 text-sm">Pulses & Beans</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <span className="text-2xl block">🌿</span>
                <p className="font-semibold text-gray-700 text-sm">Spices & Herbs</p>
              </div>
            </div>
          </div>

          {/* 3. Medicine */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-purple-800 mb-3 flex items-center gap-2">
              <span className="text-3xl">💊</span> 3. Plants Give Us Medicine
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              For thousands of years, humans have used plants to treat diseases and stay healthy. Even today, about{" "}
              <strong>25% of all modern medicines</strong> are derived from plants! Many life-saving drugs like aspirin
              (from willow bark), quinine (from cinchona tree for malaria), and morphine (from poppy plant) all come from plants.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Traditional medicine systems like <strong>Ayurveda</strong>, <strong>Traditional Chinese Medicine</strong>,
              and <strong>Unani</strong> are entirely based on plant-based remedies. Common plants like Tulsi (Holy Basil),
              Neem, Aloe Vera, Turmeric, and Ginger are used in homes worldwide for their healing properties! 🌿
            </p>
          </div>

          {/* 4. Shelter & Materials */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-amber-200">
            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
              <span className="text-3xl">🏠</span> 4. Plants Give Us Shelter & Materials
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              Wood from trees is used to build houses, make furniture, create tools, and produce paper. Bamboo is used for
              construction and crafts. Many building materials like plywood, fiberboard, and even some types of insulation
              come from plant sources.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Even the <strong>paper</strong> you write your notes on comes from trees! The rubber in your erasers, the
              cork in your shoes, and many plastics are also derived from plant materials. Plants truly provide the
              building blocks of our civilization! 🪵
            </p>
          </div>

          {/* 5. Clothing */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-pink-200">
            <h3 className="text-2xl font-bold text-pink-800 mb-3 flex items-center gap-2">
              <span className="text-3xl">👕</span> 5. Plants Give Us Clothing
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              Many of the clothes we wear are made from plant fibers! <strong>Cotton</strong> (from cotton plants) is the
              most widely used natural fiber in the world. <strong>Linen</strong> is made from the flax plant,{" "}
              <strong>jute</strong> is used for bags and ropes, and <strong>hemp</strong> is used for durable fabrics.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Even the dyes that color our clothes often come from plants — indigo from the indigo plant, turmeric for
              yellow, and henna for reddish-brown colors. Before synthetic dyes were invented, ALL clothing colors came
              from plants! 🌸
            </p>
          </div>

          {/* 6. Environment */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-3 flex items-center gap-2">
              <span className="text-3xl">🌍</span> 6. Plants Protect Our Environment
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              Plants play a crucial role in maintaining the balance of our environment. They absorb{" "}
              <strong>carbon dioxide</strong> (a greenhouse gas) from the atmosphere, helping to fight{" "}
              <strong>global warming</strong> and climate change. Forests act as "carbon sinks" — storing massive amounts
              of carbon in their trunks, roots, and leaves.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              Plant roots hold the soil together, preventing <strong>soil erosion</strong> and landslides. Trees provide{" "}
              <strong>shade</strong> that cools the environment, and through <strong>transpiration</strong>, they release
              water vapor that helps form clouds and rain. Wetlands and mangroves protect coastlines from flooding!
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Plants also provide <strong>habitat</strong> for millions of species of animals, birds, insects, and
              microorganisms. A single tree can be home to hundreds of different species! 🦜🐿️🦋
            </p>
          </div>

          {/* 7. Economic Importance */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-indigo-200">
            <h3 className="text-2xl font-bold text-indigo-800 mb-3 flex items-center gap-2">
              <span className="text-3xl">💰</span> 7. Economic Importance
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              Agriculture (farming) is one of the largest industries in the world, and it's entirely based on plants!
              Millions of people earn their living by growing crops like rice, wheat, sugarcane, tea, coffee, cotton,
              and rubber. The global agricultural economy is worth trillions of dollars!
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Industries like <strong>timber</strong>, <strong>pharmaceuticals</strong>, <strong>textiles</strong>,{" "}
              <strong>food processing</strong>, <strong>perfumes</strong>, and <strong>cosmetics</strong> all depend
              heavily on plant raw materials. Even tourism benefits from plants — people travel to see beautiful forests,
              gardens, and national parks! 🌺
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-teal-600 to-green-600 rounded-3xl p-6 md:p-8 shadow-lg text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">✨</span> Remember!
          </h2>
          <p className="text-lg leading-relaxed text-teal-50">
            Plants are truly the most important organisms on our planet. They give us the air we breathe, the food we eat,
            the clothes we wear, the medicines that heal us, and the materials we build with. They protect our environment,
            support the economy, and make our world beautiful. We must respect plants, protect forests, and plant more trees
            to ensure a healthy future for all life on Earth! 🌱🌳💚
          </p>
        </section>
      </div>
    </div>
  );
}

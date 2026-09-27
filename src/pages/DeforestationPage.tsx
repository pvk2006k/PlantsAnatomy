import PageHeader from "../components/PageHeader";

const deforestationImage = "https://image.qwenlm.ai/generated-images/2c3ad0e4-d437-43e6-a3d7-7475c2be25e3/_result.png";

export default function DeforestationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <PageHeader
        title="Deforestation"
        emoji="🪓"
        subtitle="Understanding the destruction of our forests and what we can do to save them!"
        gradient="from-red-600 to-orange-500"
      />

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Introduction */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🌍</span> What is Deforestation?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Deforestation</strong> is the large-scale removal or clearing of forests and trees from land. The word
            itself tells us what it means — <strong>"De"</strong> (removal) + <strong>"Forest"</strong> +{" "}
            <strong>"-ation"</strong> (process) = the process of removing forests.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Every year, millions of hectares of forest are cut down or burned to make way for agriculture, urban
            development, mining, and other human activities. This is one of the <strong>most serious environmental
            problems</strong> facing our planet today. Forests that took hundreds or thousands of years to grow are being
            destroyed in just a few decades!
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            According to scientists, the Earth has already lost about <strong>one-third</strong> of its original forest
            cover, and we continue to lose approximately <strong>10 million hectares</strong> of forest every year — that's
            an area roughly the size of South Korea disappearing annually! 😢
          </p>
        </section>

        {/* Image */}
        <section className="bg-white rounded-3xl p-6 shadow-lg border-2 border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🖼️</span> Before & After: The Impact of Deforestation
          </h2>
          <div className="rounded-2xl overflow-hidden border-2 border-red-100 shadow-inner">
            <img src={deforestationImage} alt="Deforestation - Before and After" className="w-full h-auto" />
          </div>
          <p className="text-center text-gray-500 text-sm mt-3 italic">
            The devastating contrast between a healthy forest and a deforested landscape
          </p>
        </section>

        {/* Causes */}
        <section className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-orange-200">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🔍</span> Causes of Deforestation
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            There are many reasons why forests are being cut down. Some are direct human activities, while others are
            indirect consequences of our growing population and development needs:
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-100">
              <h3 className="font-bold text-orange-700 text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">🌾</span> 1. Agriculture & Farming
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                This is the <strong>biggest cause</strong> of deforestation worldwide! As the human population grows, we
                need more food. Large areas of forest are cleared to create farmland for crops like soy, palm oil, and
                cattle grazing. In tropical regions, slash-and-burn agriculture destroys vast areas of rainforest every year.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-100">
              <h3 className="font-bold text-orange-700 text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">🏙️</span> 2. Urbanization & Infrastructure
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                As cities expand, forests are cut down to build houses, roads, factories, malls, and other infrastructure.
                Growing populations need more space to live, work, and travel. Every new highway or housing complex often
                means fewer trees!
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-100">
              <h3 className="font-bold text-orange-700 text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">⛏️</span> 3. Mining
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Mining for minerals, metals, coal, and oil requires clearing large areas of forest. The mining process
                not only removes trees but also pollutes the soil and water with toxic chemicals, making it difficult
                for forests to regrow even after mining stops.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-100">
              <h3 className="font-bold text-orange-700 text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">🪵</span> 4. Logging & Timber Industry
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Trees are cut for wood used in construction, furniture, paper, and fuel. While some logging is legal and
                managed, <strong>illegal logging</strong> is a massive problem in many countries. Valuable trees like
                teak, mahogany, and sandalwood are often illegally harvested for profit.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-100">
              <h3 className="font-bold text-orange-700 text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">🔥</span> 5. Forest Fires
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                While some forest fires occur naturally (due to lightning or extreme heat), many are caused by humans —
                either accidentally (campfires, cigarettes) or deliberately (to clear land quickly). Climate change is
                making fires more frequent and severe, creating a vicious cycle!
              </p>
            </div>
          </div>
        </section>

        {/* Effects */}
        <section className="bg-gradient-to-r from-red-50 to-rose-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">⚠️</span> Effects of Deforestation
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The destruction of forests has devastating consequences for our planet and all living beings. These effects
            are interconnected — one problem leads to another, creating a chain reaction of environmental damage:
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-red-100">
              <h3 className="font-bold text-red-700 text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">🌡️</span> 1. Global Warming & Climate Change
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Trees absorb CO₂ (a greenhouse gas) from the atmosphere. When forests are cut or burned, not only do they
                stop absorbing CO₂, but the carbon stored in the trees is released back into the air. Deforestation
                contributes about <strong>15-20% of all greenhouse gas emissions</strong> worldwide! This accelerates
                global warming, leading to rising temperatures, melting ice caps, and extreme weather events.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-red-100">
              <h3 className="font-bold text-red-700 text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">🦜</span> 2. Loss of Biodiversity
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Forests are home to about <strong>80% of the world's terrestrial biodiversity</strong>. When forests are
                destroyed, countless species of animals, birds, insects, and plants lose their homes. Many species become{" "}
                <strong>endangered</strong> or go <strong>extinct</strong> before we even discover them! Animals like
                orangutans, tigers, pandas, and countless others are threatened by habitat loss.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-red-100">
              <h3 className="font-bold text-red-700 text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">🏜️</span> 3. Soil Erosion & Desertification
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Tree roots hold the soil together. Without them, rain washes away the fertile topsoil, leaving behind
                barren land. Over time, this land can become a desert — a process called{" "}
                <strong>desertification</strong>. Once the soil is gone, it takes hundreds of years to form new soil!
                This also causes landslides in hilly areas.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-red-100">
              <h3 className="font-bold text-red-700 text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">🌊</span> 4. Disruption of Water Cycle
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                As we learned earlier, plants play a crucial role in the water cycle through transpiration. When large
                areas of forest are removed, the amount of water vapor released into the air decreases dramatically.
                This leads to <strong>reduced rainfall</strong>, which can cause droughts. At the same time, without
                tree roots to absorb water, rain causes <strong>floods</strong> instead!
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-red-100">
              <h3 className="font-bold text-red-700 text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">👨‍👩‍👧‍👦</span> 5. Impact on Indigenous Communities
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Millions of indigenous people around the world depend on forests for their homes, food, medicine, and
                culture. When forests are destroyed, these communities lose their livelihood and traditional way of life.
                Many tribal communities have been displaced due to deforestation, losing everything they had.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-green-200">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">💡</span> Solutions — What Can We Do?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            While deforestation is a serious problem, there are many things we can do — both as individuals and as a
            society — to fight against it and protect our forests:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
              <h4 className="font-bold text-green-700 text-lg mb-2">🌱 Plant More Trees (Afforestation)</h4>
              <p className="text-gray-700">
                The simplest solution! Plant trees in your garden, school, community parks, or join tree-planting drives.
                Even one tree makes a difference!
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
              <h4 className="font-bold text-green-700 text-lg mb-2">📜 Support Forest Protection Laws</h4>
              <p className="text-gray-700">
                Governments must enforce strict laws against illegal logging and create more national parks and wildlife
                sanctuaries to protect existing forests.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
              <h4 className="font-bold text-green-700 text-lg mb-2">♻️ Use Products Wisely</h4>
              <p className="text-gray-700">
                Reduce paper waste, use recycled products, buy furniture from sustainable sources, and avoid products made
                from endangered wood species.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
              <h4 className="font-bold text-green-700 text-lg mb-2">📢 Spread Awareness</h4>
              <p className="text-gray-700">
                Educate others about the importance of forests! Share knowledge with friends, family, and on social media.
                The more people know, the more they'll care!
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
              <h4 className="font-bold text-green-700 text-lg mb-2">🌿 Support Sustainable Farming</h4>
              <p className="text-gray-700">
                Agroforestry (growing crops alongside trees) and organic farming can reduce the need to clear more forest
                land for agriculture.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
              <h4 className="font-bold text-green-700 text-lg mb-2">🔋 Use Alternative Energy</h4>
              <p className="text-gray-700">
                In many areas, wood is the only fuel available. Providing solar cookers, biogas, and LPG can reduce the
                dependence on firewood and save trees!
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-6 md:p-8 shadow-lg text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">🌟</span> Be a Forest Hero!
          </h2>
          <p className="text-lg leading-relaxed text-green-50 mb-4">
            Remember, every tree you plant, every piece of paper you save, and every person you educate about forests
            makes a difference! The future of our planet depends on the actions we take TODAY.
          </p>
          <p className="text-lg leading-relaxed text-green-50 mb-4">
            As the famous proverb says: <em>"The best time to plant a tree was 20 years ago. The second best time is NOW!"</em> 🌱
          </p>
          <p className="text-lg leading-relaxed text-yellow-200 font-semibold">
            Together, we can save our forests and protect life on Earth! 💚🌳🌍
          </p>
        </section>

        {/* Statistics */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">📊</span> Alarming Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-2xl">
              <p className="text-3xl font-bold text-red-700">10M</p>
              <p className="text-gray-600 text-sm">Hectares lost per year</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-2xl">
              <p className="text-3xl font-bold text-red-700">1/3</p>
              <p className="text-gray-600 text-sm">Of forests already gone</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-2xl">
              <p className="text-3xl font-bold text-red-700">15%</p>
              <p className="text-gray-600 text-sm">Of CO₂ from deforestation</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-2xl">
              <p className="text-3xl font-bold text-red-700">80%</p>
              <p className="text-gray-600 text-sm">Of species live in forests</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

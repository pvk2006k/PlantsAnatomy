export interface PlantPart {
  id: string;
  name: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  image: string;
  shortDescription: string;
  description: string;
  funFacts: string[];
  labels: { name: string; description: string }[];
}

export const plantParts: PlantPart[] = [
  {
    id: "root",
    name: "Roots",
    emoji: "🌿",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-400",
    image: "https://image.qwenlm.ai/generated-images/59ce7146-3d49-41de-b9d0-e278dafd26ec/_result.png",
    shortDescription: "Roots hold the plant in the soil and drink water!",
    description:
      "Roots are the underground part of a plant. They act like a straw, sucking up water and minerals from the soil. They also anchor the plant so it doesn't fall over! Some roots even store food for the plant to use later.",
    funFacts: [
      "🥕 Carrots are actually roots we eat!",
      "💧 Roots can grow hundreds of meters long!",
      "🌳 A single tree can have millions of root hairs!",
      "🍠 Sweet potatoes are swollen roots full of food!",
    ],
    labels: [
      { name: "Root Cap", description: "A protective helmet at the tip that helps the root push through soil" },
      { name: "Root Hairs", description: "Tiny hair-like structures that absorb water and minerals from soil" },
      { name: "Root Tip", description: "The growing end where new cells are made" },
      { name: "Lateral Roots", description: "Side branches that spread out to find more water" },
      { name: "Cortex", description: "The middle layer that stores and transports food" },
      { name: "Vascular Tissue", description: "The plant's plumbing system inside the root" },
    ],
  },
  {
    id: "stem",
    name: "Stem",
    emoji: "🌿",
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-400",
    image: "https://image.qwenlm.ai/generated-images/ac65765e-f490-4a93-b152-d4bf15b254e4/_result.png",
    shortDescription: "The stem carries water up and food down!",
    description:
      "The stem is like a highway for the plant! It carries water and minerals UP from the roots through tubes called XYLEM, and carries food made in the leaves DOWN through tubes called PHLOEM. The stem also holds the plant up tall so it can reach sunlight!",
    funFacts: [
      "🎋 Bamboo is the fastest growing stem - up to 91cm per day!",
      "🌵 Cactus stems store water for the desert!",
      "🥔 Potato stems grow underground as tubers!",
      "💪 Some stems are so strong they can be used as building material!",
    ],
    labels: [
      { name: "Epidermis", description: "The outer protective skin of the stem" },
      { name: "Cortex", description: "Layer beneath the skin that provides support" },
      { name: "Xylem", description: "Tubes that carry water UP from roots (like a straw!)" },
      { name: "Phloem", description: "Tubes that carry food DOWN from leaves to the rest of the plant" },
      { name: "Pith", description: "The soft center that stores food and water" },
      { name: "Vascular Bundle", description: "A package of xylem and phloem working together" },
    ],
  },
  {
    id: "leaf",
    name: "Leaf",
    emoji: "🍃",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-400",
    image: "https://image.qwenlm.ai/generated-images/c8c71da5-6caf-41fc-b058-116095cc5853/_result.png",
    shortDescription: "Leaves make food using sunlight - it's called photosynthesis!",
    description:
      "Leaves are the food factories of the plant! They use sunlight, water, and carbon dioxide to make sugar (food) in a process called PHOTOSYNTHESIS. The green color comes from CHLOROPHYLL. Leaves also breathe through tiny holes called STOMATA!",
    funFacts: [
      "☀️ Leaves need sunlight to make food - just like solar panels!",
      "💨 Leaves breathe in CO2 and breathe out oxygen for us!",
      "🍂 Leaves change color in fall when chlorophyll breaks down!",
      "🌿 The biggest leaf in the world belongs to the Raffia palm - 25 meters long!",
    ],
    labels: [
      { name: "Cuticle", description: "A waxy coating on top that prevents water loss" },
      { name: "Upper Epidermis", description: "The top protective layer of the leaf" },
      { name: "Palisade Mesophyll", description: "Tall cells packed with chloroplasts - the main food factory!" },
      { name: "Spongy Mesophyll", description: "Loose cells with air spaces for gas exchange" },
      { name: "Stomata", description: "Tiny pores that let air in and out - like the leaf's nose!" },
      { name: "Guard Cells", description: "Cells that open and close the stomata like doors" },
    ],
  },
  {
    id: "bud",
    name: "Buds",
    emoji: "🌸",
    color: "text-pink-700",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-400",
    image: "https://image.qwenlm.ai/generated-images/099df162-1525-44a0-8a72-ebbbb711f51f/_result.png",
    shortDescription: "Buds are baby leaves and flowers waiting to grow!",
    description:
      "Buds are like sleeping babies wrapped in protective scales! They contain tiny new leaves or flowers that will grow when the time is right. The MERISTEM is the growing tip where cells divide and make new growth. Buds can be found at the tips of stems or on the sides!",
    funFacts: [
      "🌷 Some buds sleep all winter and pop open in spring!",
      "🫖 Some buds we eat are actually flower buds - like broccoli!",
      "🌹 A rose bud contains all the petals folded up tiny!",
      "🌱 Terminal buds make the plant grow taller!",
    ],
    labels: [
      { name: "Bud Scales", description: "Protective outer layers that shield the delicate inside" },
      { name: "Meristem", description: "The growing tip where new cells are constantly being made" },
      { name: "Leaf Primordia", description: "Tiny baby leaves folded up inside the bud" },
      { name: "Axillary Bud", description: "A side bud that can grow into a new branch" },
      { name: "Node", description: "The point on the stem where buds and leaves attach" },
      { name: "Internode", description: "The section of stem between two nodes" },
    ],
  },
  {
    id: "fruit",
    name: "Fruits",
    emoji: "🍎",
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-400",
    image: "https://image.qwenlm.ai/generated-images/65cda388-7a87-430d-9286-5ae4344e42e1/_result.png",
    shortDescription: "Fruits protect seeds and help them travel to new places!",
    description:
      "Fruits are like treasure boxes that protect the plant's seeds! After a flower is pollinated, it transforms into a fruit. The sweet, juicy flesh attracts animals who eat the fruit and spread the seeds in their droppings. This helps new plants grow in new places!",
    funFacts: [
      "🍓 Strawberries have seeds on the OUTSIDE - about 200 of them!",
      "🥑 Avocados have the largest seed of any fruit!",
      "🍉 Watermelons are 92% water!",
      "🫛 Peas and beans are fruits too - they have seeds inside!",
    ],
    labels: [
      { name: "Skin (Epicarp)", description: "The colorful outer layer that protects the fruit" },
      { name: "Flesh (Mesocarp)", description: "The juicy, sweet middle part we love to eat!" },
      { name: "Core (Endocarp)", description: "The tough inner layer that protects the seeds" },
      { name: "Seeds", description: "Baby plants waiting to grow into new trees!" },
      { name: "Calyx", description: "The dried remains of the flower at the bottom" },
      { name: "Stalk (Pedicel)", description: "The stem that connects the fruit to the tree" },
    ],
  },
];

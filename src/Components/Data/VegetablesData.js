
const productsData = [
  {
    id: 101,
    name: "Fresh Export-Grade Okra (Bhindi)",
    image: require("../../assets/products/vegetables/Bindi.jpg"),
    shortDescription:
      "Premium handpicked okra grown using sustainable farming practices. Perfect size and tenderness ideal for export markets.",
    fullDescription:
      "Our export-grade okra is sourced from the finest farms, hand-selected for uniform size, tenderness, and vibrant green color. Each pod is harvested at optimal maturity and processed under strict hygiene standards to ensure long-lasting freshness during export shipments.",
    category: "Vegetables",
    features: [
      "Uniform size and premium green color",
      "Naturally grown and chemical-safe",
      "Hand-sorted for export quality",
      "Long shelf life suitable for overseas shipments",
    ],
    specifications: {
      Origin: "Gujarat, India",
      Season: "All Year",
      Grade: "A-Grade Export",
      Packaging: "Ventilated mesh and corrugated boxes",
    },
  },

  {
    id: 102,
    name: "Fresh Orange Carrots",
    image: require("../../assets/products/vegetables/carrot.png"),
    shortDescription:
      "Crisp, sweet and nutrient-rich carrots grown in clean soil and packed fresh for international customers.",
    fullDescription:
      "Our export-quality carrots are known for their natural sweetness, firm texture, and high beta-carotene content. Grown under controlled conditions, they retain freshness even during long-distance shipments, making them ideal for global markets.",
    category: "Vegetables",
    features: [
      "Bright orange color",
      "Crunchy and sweet taste",
      "Rich in Vitamin A and antioxidants",
      "Long-lasting freshness for export",
    ],
    specifications: {
      Origin: "Maharashtra, India",
      Season: "All Year",
      Grade: "Premium Export",
      Packaging: "5kg / 10kg PP and corrugated boxes",
    },
  },

  {
    id: 103,
    name: "Fresh Desiparwar Beans",
    image: require("../../assets/products/vegetables/Desiparwar.png"),
    shortDescription:
      "Delicate, tender and fiber-rich flat beans selected from healthy green farms.",
    fullDescription:
      "Desiparwar beans are widely demanded in global markets for their tender texture and nutritional value. Each bean is sorted for freshness, firmness, and consistent size, ensuring top-grade export quality.",
    category: "Vegetables",
    features: [
      "Fiber-rich and tender",
      "Uniform size and color",
      "Naturally grown",
      "Ideal for export markets",
    ],
    specifications: {
      Origin: "Gujarat, India",
      Season: "September to March",
      Grade: "Premium Export",
      Packaging: "Ventilated export cartons",
    },
  },

  {
    id: 104,
    name: "Fresh Drumsticks (Moringa Pods)",
    image: require("../../assets/products/vegetables/drumstick.png"),
    shortDescription:
      "Firm, flavorful, and nutrient-rich drumsticks grown in clean environments for export quality.",
    fullDescription:
      "Our moringa drumsticks are handpicked, washed, and graded to meet international standards. Known for their high nutritional benefits, these pods stay fresh throughout export transit due to careful processing and packing.",
    category: "Vegetables",
    features: [
      "Rich in vitamins and minerals",
      "Firm and long pods",
      "Safe and chemical-free cultivation",
      "Ideal for cooking and medicinal use",
    ],
    specifications: {
      Origin: "South India",
      Season: "All Year",
      Grade: "A-Grade Export",
      Packaging: "Poly-lined export boxes",
    },
  },

  {
    id: 105,
    name: "Fresh Long Beans",
    image: require("../../assets/products/vegetables/Longbeans.png"),
    shortDescription:
      "Crisp, long and pesticide-safe beans ideal for premium export markets.",
    fullDescription:
      "Long beans are highly valued for their unique taste and length. Our beans are sourced from certified farms and undergo strict grading to ensure only export-quality produce reaches your customers.",
    category: "Vegetables",
    features: [
      "Light green and long size",
      "Crisp and fresh taste",
      "Carefully handpicked",
      "Suitable for long-distance shipping",
    ],
    specifications: {
      Origin: "Gujarat, India",
      Season: "All Year",
      Grade: "A-Grade Export",
      Packaging: "Ventilated vegetable cartons",
    },
  },

  {
    id: 106,
    name: "Fresh Long Dudhi (Bottle Gourd)",
    image: require("../../assets/products/vegetables/longdudhi.png"),
    shortDescription:
      "Smooth, fresh and export-quality bottle gourds known for their hydration and health benefits.",
    fullDescription:
      "Our export-grade bottle gourds are hand-selected for shape, freshness and firmness. Grown with minimal pesticides, each dudhi is packed to retain moisture and freshness during overseas transport.",
    category: "Vegetables",
    features: [
      "Smooth skin and perfect shape",
      "Naturally hydrating vegetable",
      "Fresh and long-lasting",
      "Ideal for export packaging",
    ],
    specifications: {
      Origin: "Maharashtra, India",
      Season: "All Year",
      Grade: "Premium Export",
      Packaging: "Shrink-wrap & ventilated boxes",
    },
  },

  {
    id: 107,
    name: "Fresh Cluster Beans (Gawar)",
    image: require("../../assets/products/vegetables/smallbeans.png"),
    shortDescription:
      "High-quality cluster beans with natural green texture and tenderness for export.",
    fullDescription:
      "Cluster beans are popular in multiple export regions. Our produce is cultivated naturally and harvested early morning to maintain freshness and tenderness. Perfect for high-end retail and wholesale export markets.",
    category: "Vegetables",
    features: [
      "Natural green shine",
      "Tender and flavorful",
      "Carefully washed and sorted",
      "High export demand",
    ],
    specifications: {
      Origin: "Rajasthan, India",
      Season: "June to January",
      Grade: "Export Premium",
      Packaging: "Mesh bags / Export cartons",
    },
  },

  {
    id: 108,
    name: "Fresh Suran (Elephant Foot Yam)",
    image: require("../../assets/products/vegetables/suran.png"),
    shortDescription:
      "Firm, nutritious and export-quality elephant foot yam used in traditional and modern cuisines.",
    fullDescription:
      "Suran is known for its medicinal and culinary uses. We supply export-grade yam that is fully matured, washed, cleaned, and cut (optional) as per customer requirement. Each piece is quality checked for consistency.",
    category: "Vegetables",
    features: [
      "High nutritional value",
      "Firm and fresh yam",
      "Cleaned and sorted",
      "Available in whole and sliced form",
    ],
    specifications: {
      Origin: "Gujarat, India",
      Season: "October to March",
      Grade: "A-Grade Export",
      Packaging: "Jute bags / Custom export boxes",
    },
  },

  {
    id: 109,
    name: "Fresh Valor Papdi",
    image: require("../../assets/products/vegetables/valorpapdi.png"),
    shortDescription:
      "Tender and aromatic valor papdi sourced from clean farms and packed for premium overseas markets.",
    fullDescription:
      "Valor papdi is widely used in Indian cuisine and has a growing export demand. Our fresh produce is sorted and cleaned thoroughly to maintain quality and freshness during long-distance export shipping.",
    category: "Vegetables",
    features: [
      "Tender and flavorful pods",
      "Perfect size and color",
      "Minimal pesticide residue",
      "Ideal for export packaging",
    ],
    specifications: {
      Origin: "Gujarat, India",
      Season: "November to February",
      Grade: "Export Premium",
      Packaging: "Export-approved ventilated boxes",
    },
  },
{
  id: 110,
  name: "Fresh Orange-Yellow Haldi (Turmeric Root)",
  image: require("../../assets/products/vegetables/orangeyellohaldi.png"),
  shortDescription:
    "Vibrant orange-yellow fresh turmeric root known for its rich aroma, purity, and export-grade quality.",
  fullDescription:
    "Our turmeric roots are harvested from premium organic farms and are highly valued for their rich curcumin content and medicinal benefits. Each root is cleaned, sorted, and packed under strict global export standards to retain its natural color and freshness.",
  category: "Vegetables",
  features: [
    "High curcumin content",
    "Naturally grown & chemical-free",
    "Bright aroma and golden color",
    "Globally certified export quality"
  ],
  specifications: {
    Origin: "Tamil Nadu / Maharashtra, India",
    Season: "October to March",
    Grade: "Premium Export",
    Packaging: "Jute bags / Vacuum-sealed export packs"
  }
},

{
  id: 111,
  name: "Fresh Papdi Dana",
  image: require("../../assets/products/vegetables/papdidana.png"),
  shortDescription:
    "Premium quality Papdi Dana seeds used in multiple traditional and international cuisines.",
  fullDescription:
    "Papdi Dana is widely consumed and exported due to its soft texture and rich taste. Our produce is selected from naturally grown farms, cleaned thoroughly, and packed carefully to maintain freshness during export transit.",
  category: "Vegetables",
  features: [
    "Soft and fresh texture",
    "Traditional and global food use",
    "Hand-sorted for purity",
    "Ideal for frozen/export markets"
  ],
  specifications: {
    Origin: "Gujarat, India",
    Season: "October to February",
    Grade: "Export Grade",
    Packaging: "600g – 1kg export pouches"
  }
},

{
  id: 112,
  name: "Fresh Pavta Papdi",
  image: require("../../assets/products/vegetables/pavtapapdi.png"),
  shortDescription:
    "Tender and high-quality Pavta Papdi pods specially curated for premium export markets.",
  fullDescription:
    "Our Pavta Papdi is known for its tender pods, fresh aroma, and consistent size. These are carefully harvested and sorted to ensure the highest export quality demanded by international buyers.",
  category: "Vegetables",
  features: [
    "Tender & flavorful pods",
    "Even size and fresh green color",
    "Carefully harvested and washed",
    "Maintains freshness during long shipment"
  ],
  specifications: {
    Origin: "Gujarat, India",
    Season: "November to February",
    Grade: "A-Grade Export",
    Packaging: "Ventilated export cartons"
  }
},

{
  id: 113,
  name: "Fresh Small Karela (Baby Bitter Gourd)",
  image: require("../../assets/products/vegetables/smallkarela.png"),
  shortDescription:
    "Premium baby bitter gourd known for its medicinal benefits and crisp taste, ideal for export.",
  fullDescription:
    "Small karela is popular in both Indian and overseas markets due to its rich nutritional profile. Our karela is handpicked early morning to retain its firm texture and natural bitterness.",
  category: "Vegetables",
  features: [
    "Rich in antioxidants",
    "Fresh, firm and chemical-safe",
    "High medicinal value",
    "Perfect for frozen & fresh export markets"
  ],
  specifications: {
    Origin: "Maharashtra, India",
    Season: "All Year",
    Grade: "Export Premium",
    Packaging: "Perforated vegetable crates"
  }
},

{
  id: 114,
  name: "Fresh Tinda (Round Gourd)",
  image: require("../../assets/products/vegetables/tinda.png"),
  shortDescription:
    "Fresh, round and tender Indian Tinda perfect for cooking and export shipments.",
  fullDescription:
    "Our tinda is soft, fresh and hand-selected for export quality based on size, texture, and smooth green skin. Carefully washed and packed to maintain freshness during global transport.",
  category: "Vegetables",
  features: [
    "Soft, fresh and tender",
    "Uniform round shape",
    "Naturally grown",
    "Long shelf life with export packing"
  ],
  specifications: {
    Origin: "Rajasthan, India",
    Season: "March to July",
    Grade: "Premium Export",
    Packaging: "Corrugated ventilated boxes"
  }
},

{
  id: 115,
  name: "Fresh Tuver Papdi",
  image: require("../../assets/products/vegetables/tuverpapdi.png"),
  shortDescription:
    "Fresh and tender tuver papdi, highly demanded in both domestic and global vegetarian markets.",
  fullDescription:
    "Tuver Papdi is known for its rich aroma and sweet flavor profile. Our export-quality papdi is handpicked, sorted and cleaned with utmost care to deliver top-tier freshness during international shipping.",
  category: "Vegetables",
  features: [
    "Sweet and soft pods",
    "High cooking quality",
    "Naturally cultivated",
    "Ideal for fresh & frozen export markets"
  ],
  specifications: {
    Origin: "Gujarat, India",
    Season: "October to February",
    Grade: "A-Grade Export",
    Packaging: "Export mesh bags & cartons"
  }
},

{
  id: 116,
  name: "Fresh Vellari (Short Melon / Cucumber)",
  image: require("../../assets/products/vegetables/vellari.png"),
  shortDescription:
    "Hydrating and refreshing Vellari cucumbers known for their freshness and export-approved quality.",
  fullDescription:
    "Vellari is a cooling and refreshing vegetable rich in water content and minerals. Our fresh produce is harvested early morning and packed in cool storage conditions to maintain crispness during export shipments.",
  category: "Vegetables",
  features: [
    "High water content & cooling effect",
    "Crisp and fresh texture",
    "Rich in minerals and vitamins",
    "Perfect for export due to long freshness"
  ],
  specifications: {
    Origin: "South India",
    Season: "All Year",
    Grade: "Premium Export",
    Packaging: "Plastic crates / Export cartons"
  }
}
];

export default productsData;
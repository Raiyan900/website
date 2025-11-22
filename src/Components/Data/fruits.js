const fruits = [
  {
    id: 301,
    name: "Fresh Apple Ber",
    image: require("../../assets/products/fruits/APPLEBER.jpg"),
    category: "Fruits",
    shortDescription: "Sweet and juicy apple ber sourced from premium orchards.",
    fullDescription:
      "Our Apple Ber is handpicked for superior taste and freshness. These crunchy and sweet fruits are graded to meet export quality standards.",
    features: [
      "Crisp texture",
      "Naturally sweet",
      "Handpicked quality",
      "High export demand",
    ],
    specifications: {
      Origin: "Gujarat, India",
      Season: "December – March",
      Grade: "A-Grade Export",
      Packaging: "5kg / 10kg cartons",
    },
  },

  {
    id: 302,
    name: "Fresh Big Guava",
    image: require("../../assets/products/fruits/BIGGUAVA.jpg"),
    category: "Fruits",
    shortDescription: "Large, firm and sweet guavas ideal for export.",
    fullDescription:
      "Big Guava is known for its crunchy texture and rich aroma. Each fruit is selected for size and firmness to ensure long shelf life.",
    features: ["Large size", "Crunchy", "Aromatic", "Perfect for export"],
    specifications: {
      Origin: "Maharashtra, India",
      Season: "All Year",
      Grade: "Premium Export",
      Packaging: "Individual wrapping + cartons",
    },
  },

  {
    id: 303,
    name: "Fresh Chameliber",
    image: require("../../assets/products/fruits/CHAMELIBER.jpg"),
    category: "Fruits",
    shortDescription: "Traditional Indian fruit with a rich sweet-tangy profile.",
    fullDescription:
      "Chameliber is widely loved for its unique flavor and medicinal benefits. Cleaned and sorted carefully for export.",
    features: ["Sweet-tangy taste", "Fresh aroma", "Rich nutrients"],
    specifications: {
      Origin: "India",
      Season: "Seasonal",
      Grade: "Export",
      Packaging: "Food-grade pouches",
    },
  },

  {
    id: 304,
    name: "Curry Banana",
    image: require("../../assets/products/fruits/CURRYBANANA.jpg"),
    category: "Fruits",
    shortDescription: "Fresh raw curry bananas perfect for cooking and export.",
    fullDescription:
      "Curry bananas are harvested early and packed securely to maintain firmness during long transportation.",
    features: ["Firm texture", "Ideal for cooking", "High shelf life"],
    specifications: {
      Origin: "Tamil Nadu",
      Season: "All Year",
      Grade: "A-Grade",
      Packaging: "Banana export cartons",
    },
  },

  {
    id: 305,
    name: "Fresh Custard Apple",
    image: require("../../assets/products/fruits/CUSTURDAPPLE.jpg"),
    category: "Fruits",
    shortDescription: "Soft, creamy and sweet custard apples.",
    fullDescription:
      "Sourced from premium farms, these custard apples are known for their rich pulp, sweetness, and export-worthy quality.",
    features: ["Creamy pulp", "High sweetness", "Premium selection"],
    specifications: {
      Origin: "Maharashtra, India",
      Season: "August – December",
      Grade: "Export",
      Packaging: "Foam net + cartons",
    },
  },

  {
    id: 306,
    name: "Elaichi Banana",
    image: require("../../assets/products/fruits/ELAICHIBANANA.jpg"),
    category: "Fruits",
    shortDescription: "Small, sweet, aromatic elaichi bananas.",
    fullDescription:
      "Elaichi bananas are soft, flavorful and high-demand fruits for premium export markets.",
    features: ["Sweet & soft", "Small size", "Aromatic"],
    specifications: {
      Origin: "Kerala, India",
      Season: "All Year",
      Grade: "Premium",
      Packaging: "Banana boxes",
    },
  },

  {
    id: 307,
    name: "Fresh Grapes",
    image: require("../../assets/products/fruits/GRAPES.jpg"),
    category: "Fruits",
    shortDescription: "Juicy, seedless export-quality grapes.",
    fullDescription:
      "Our grapes are harvested carefully, sorted for firmness, sweetness, and packed using global export standards.",
    features: ["Seedless", "Sweet & juicy", "Cold-chain packed"],
    specifications: {
      Origin: "Nashik, India",
      Season: "December – April",
      Grade: "Super Export",
      Packaging: "Punnets + Master Carton",
    },
  },

  {
    id: 308,
    name: "Fresh Guava",
    image: require("../../assets/products/fruits/GUAVA.jpg"),
    category: "Fruits",
    shortDescription: "Crisp, juicy and aromatic fresh guavas.",
    fullDescription:
      "Perfectly ripe guavas sorted for color, texture, and aroma, suitable for international markets.",
    features: ["Sweet", "Crispy", "Aromatic"],
    specifications: {
      Origin: "India",
      Season: "All Year",
      Grade: "A-Grade",
      Packaging: "Shrink-wrap + cartons",
    },
  },

  {
    id: 309,
    name: "Fresh Jalebi Imli",
    image: require("../../assets/products/fruits/JALEBIIMLI.jpg"),
    category: "Fruits",
    shortDescription: "Sweet tamarind variety known for jalebi-like texture.",
    fullDescription:
      "Jalebi Imli is popular for its sweet and tangy flavor, perfect for consumption and export.",
    features: ["Sweet", "Tangy", "Soft texture"],
    specifications: {
      Origin: "India",
      Season: "Seasonal",
      Grade: "Export",
      Packaging: "Pouches / Cartons",
    },
  },

  {
    id: 310,
    name: "Fresh Khatta Umda",
    image: require("../../assets/products/fruits/KHATUMDA.jpg"),
    category: "Fruits",
    shortDescription: "Sour, tangy and fresh umda fruit.",
    fullDescription:
      "Khatta Umda is rich in flavor and used for juices, pickles and cooking. Cleaned and sorted for export.",
    features: ["Tangy", "Fresh", "High demand"],
    specifications: {
      Origin: "India",
      Season: "Seasonal",
      Grade: "Standard Export",
      Packaging: "Pouches / Boxes",
    },
  },

  {
    id: 311,
    name: "Fresh Papaya",
    image: require("../../assets/products/fruits/PAPAYA.jpg"),
    category: "Fruits",
    shortDescription: "Sweet, orange-fleshed export papayas.",
    fullDescription:
      "Handpicked and graded papayas offering sweetness, nutrition, and perfect firmness for export.",
    features: ["Sweet pulp", "Rich in vitamins", "Long shelf life"],
    specifications: {
      Origin: "India",
      Season: "All Year",
      Grade: "Premium Export",
      Packaging: "Foam net + cartons",
    },
  },

  {
    id: 312,
    name: "Fresh Pink Guava",
    image: require("../../assets/products/fruits/PINKGUAVA.jpg"),
    category: "Fruits",
    shortDescription: "Pink-fleshed guava with natural aroma.",
    fullDescription:
      "Pink guava is known for its color, aroma and strong nutritional value. Sorted and packed carefully.",
    features: ["Pink flesh", "Sweet", "Aromatic"],
    specifications: {
      Origin: "India",
      Season: "All Year",
      Grade: "Export",
      Packaging: "Shrink wrap + cartons",
    },
  },

  {
    id: 313,
    name: "Fresh Pomegranate",
    image: require("../../assets/products/fruits/POMEGRANATE.jpg"),
    category: "Fruits",
    shortDescription: "Bright red arils with premium sweetness.",
    fullDescription:
      "Our pomegranates are selected for color, firmness, and sweetness. Packed using export-quality methods.",
    features: ["Juicy arils", "Bright red color", "High sweetness"],
    specifications: {
      Origin: "Maharashtra",
      Season: "All Year",
      Grade: "Super Export",
      Packaging: "5kg cartons",
    },
  },

  {
    id: 314,
    name: "Fresh Rayna Fruit",
    image: require("../../assets/products/fruits/RAYNA.jpg"),
    category: "Fruits",
    shortDescription: "Seasonal fruit with natural freshness.",
    fullDescription:
      "Rayna fruit is handpicked and packed fresh to maintain taste and nutritional value.",
    features: ["Seasonal taste", "Fresh aroma"],
    specifications: {
      Origin: "India",
      Season: "Seasonal",
      Grade: "Standard",
      Packaging: "Custom cartons",
    },
  },

  {
    id: 315,
    name: "Fresh Sapota (Chikoo)",
    image: require("../../assets/products/fruits/SAPOTACHIKU.jpg"),
    category: "Fruits",
    shortDescription: "Naturally sweet chikoo with soft texture.",
    fullDescription:
      "Sapota is harvested carefully and sorted for export size and sweetness. Each fruit is cleaned and packed hygienically.",
    features: ["Soft pulp", "Sweet", "High demand"],
    specifications: {
      Origin: "Gujarat, India",
      Season: "All Year",
      Grade: "Export",
      Packaging: "Foam net + cartons",
    },
  },

  {
    id: 316,
    name: "Fresh Tadgola (Ice Apple)",
    image: require("../../assets/products/fruits/TADGOLA.jpg"),
    category: "Fruits",
    shortDescription:
      "Cooling, hydrating and refreshing ice apple sourced fresh.",
    fullDescription:
      "Tadgola is known for its extreme hydration benefits. Carefully cleaned and packed in temperature-controlled conditions.",
    features: ["Hydrating", "Cooling", "Soft pulp"],
    specifications: {
      Origin: "South India",
      Season: "March – June",
      Grade: "Premium",
      Packaging: "Cold-chain boxes",
    },
  },

  {
    id: 317,
    name: "Fresh Watermelon",
    image: require("../../assets/products/fruits/WATERMALON.jpg"),
    category: "Fruits",
    shortDescription:
      "Juicy, red-fleshed watermelon ideal for export.",
    fullDescription:
      "Large, sweet and hydrating watermelons selected by size and sweetness, perfect for international markets.",
    features: ["Sweet", "Refreshing", "Large size"],
    specifications: {
      Origin: "India",
      Season: "Summer",
      Grade: "A-Grade Export",
      Packaging: "Mesh bags / cartons",
    },
  },
];

export default fruits;

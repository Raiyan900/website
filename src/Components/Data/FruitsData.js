const fruitsData = [
  {
    id: 301,
    name: "Apple Ber",
    image: require("../../assets/products/fruits/AppleBer.png"),
    category: "Fruits",
    shortDescription: "Fresh and sweet Apple Ber sourced from premium Indian orchards.",
    fullDescription: "Apple Ber is a crisp, sweet fruit known for its refreshing taste and nutrition.",
    features: ["Crisp texture", "Rich natural sweetness", "High in fiber", "Long shelf life"],
    specifications: {
      Origin: "Gujarat, India",
      Season: "Dec – Mar",
      Grade: "A-Grade Export",
      Packaging: "Ventilated fruit cartons"
    }
  },

  {
    id: 302,
    name: "Big Guava",
    image: require("../../assets/products/fruits/BigGuava.png"),
    category: "Fruits",
    shortDescription: "Large-sized aromatic guava rich in Vitamin C.",
    fullDescription:
      "Big Guava is known for its thick pulp, sweetness, and export durability.",
    features: ["Rich in Vitamin C", "Thick pulp", "Aromatic flavor", "Ideal for export"],
    specifications: {
      Origin: "Maharashtra",
      Season: "Aug – Jan",
      Grade: "Premium Export",
      Packaging: "5kg & 10kg cartons"
    }
  },

  {
    id: 303,
    name: "Chameli Ber",
    image: require("../../assets/products/fruits/ChameliBer.png"),
    category: "Fruits",
    shortDescription: "Soft and nutritious Chameli Ber.",
    fullDescription: "Chameli Ber is valued for its soft texture and health benefits.",
    features: ["Soft texture", "Naturally sweet", "Rich nutrients", "High demand"],
    specifications: {
      Origin: "Rajasthan",
      Season: "Dec – Feb",
      Grade: "Premium",
      Packaging: "Fruit crates"
    }
  },

  {
    id: 304,
    name: "Chaniya Ber",
    image: require("../../assets/products/fruits/ChaniyaBer.png"),
    category: "Fruits",
    shortDescription: "Firm and sweet Chaniya Ber ideal for export.",
    fullDescription: "Chaniya Ber has firm bite and natural sweetness. Long shelf life.",
    features: ["Firm texture", "Naturally sweet", "Shelf-stable", "Handpicked"],
    specifications: {
      Origin: "Gujarat",
      Season: "Jan – Mar",
      Grade: "Export Quality",
      Packaging: "Mesh bags / Cartons"
    }
  },

  {
    id: 305,
    name: "Custard Apple",
    image: require("../../assets/products/fruits/CustardApple.png"),
    category: "Fruits",
    shortDescription: "Creamy and sweet custard apple.",
    fullDescription: "Custard apples are soft, sweet, and packed with nutrients.",
    features: ["Soft creamy pulp", "Rich aroma", "High nutritional value"],
    specifications: {
      Origin: "Maharashtra",
      Season: "Aug – Nov",
      Grade: "Premium",
      Packaging: "Foam net + cartons"
    }
  },

  {
    id: 306,
    name: "Grapes",
    image: require("../../assets/products/fruits/Grapes.png"),
    category: "Fruits",
    shortDescription: "Juicy, fresh export-grade grapes.",
    fullDescription: "Fresh grapes grown in Nashik, packed in punnets.",
    features: ["Juicy taste", "Natural sweetness", "Premium export quality"],
    specifications: {
      Origin: "Nashik",
      Season: "Dec – Apr",
      Grade: "A-Grade",
      Packaging: "Punnets / Trays"
    }
  },

  {
    id: 307,
    name: "Guava",
    image: require("../../assets/products/fruits/Guava.png"),
    category: "Fruits",
    shortDescription: "Sweet guavas with high Vitamin C.",
    fullDescription: "Fresh guavas known for aroma and pulp consistency.",
    features: ["Aromatic", "Rich pulp", "Handpicked"],
    specifications: {
      Origin: "Gujarat",
      Season: "Jul – Feb",
      Grade: "Export",
      Packaging: "Fruit cartons"
    }
  },

  {
    id: 308,
    name: "Jalebi Imli",
    image: require("../../assets/products/fruits/JalebiImli.png"),
    category: "Fruits",
    shortDescription: "Tangy Jalebi Imli.",
    fullDescription: "Used in chutneys and traditional dishes.",
    features: ["Rich tangy flavor", "High pulp"],
    specifications: {
      Origin: "Maharashtra",
      Season: "Oct – Jan",
      Grade: "Premium",
      Packaging: "Export pouches"
    }
  },

  {
    id: 309,
    name: "Jamun",
    image: require("../../assets/products/fruits/Jamun.png"),
    category: "Fruits",
    shortDescription: "Fresh, dark-purple jamun.",
    fullDescription:
      "Jamun is rich in antioxidants and exported globally.",
    features: ["Rich antioxidants", "Juicy taste"],
    specifications: {
      Origin: "South India",
      Season: "May – Aug",
      Grade: "A-Grade",
      Packaging: "Cushioned trays"
    }
  },

  {
    id: 310,
    name: "Kamrakh (Starfruit)",
    image: require("../../assets/products/fruits/Kamrakh.png"),
    category: "Fruits",
    shortDescription: "Juicy starfruit.",
    fullDescription: "Kamrakh has a refreshing sour-sweet taste.",
    features: ["Star shape", "Fresh & juicy"],
    specifications: {
      Origin: "Kerala",
      Season: "All Year",
      Grade: "Premium",
      Packaging: "Foam-net cartons"
    }
  },

  {
    id: 311,
    name: "Khatumda",
    image: require("../../assets/products/fruits/Khatumda.png"),
    category: "Fruits",
    shortDescription: "Seasonal fruit with unique taste.",
    fullDescription:
      "Khatumda is hand-selected for freshness and aroma.",
    features: ["Unique flavor", "Seasonal"],
    specifications: {
      Origin: "Rajasthan",
      Season: "Jan – Feb",
      Grade: "Export",
      Packaging: "Fruit-grade boxes"
    }
  },

  {
    id: 312,
    name: "Musk Melon",
    image: require("../../assets/products/fruits/MuskMelon.png"),
    category: "Fruits",
    shortDescription: "Sweet, juicy musk melon.",
    fullDescription: "Rich in hydration and aroma.",
    features: ["Juicy pulp", "Hydrating"],
    specifications: {
      Origin: "Punjab",
      Season: "Mar – Jun",
      Grade: "Premium",
      Packaging: "Foam net + cartons"
    }
  },

  {
    id: 313,
    name: "Papaya",
    image: require("../../assets/products/fruits/Papaya.png"),
    category: "Fruits",
    shortDescription: "Fresh, sweet papayas.",
    fullDescription:
      "Hand-selected for size and ripeness.",
    features: ["Sweet taste", "Rich in fiber"],
    specifications: {
      Origin: "Maharashtra",
      Season: "All Year",
      Grade: "A-Grade",
      Packaging: "Carton boxes"
    }
  },

  {
    id: 314,
    name: "Pink Guava",
    image: require("../../assets/products/fruits/PinkGuava.png"),
    category: "Fruits",
    shortDescription: "Fresh pink guava.",
    fullDescription: "Known for soft texture and sweetness.",
    features: ["Soft pulp", "Aromatic"],
    specifications: {
      Origin: "Gujarat",
      Season: "Aug – Feb",
      Grade: "Export Grade",
      Packaging: "Fruit cartons"
    }
  },

  {
    id: 315,
    name: "Pomegranate",
    image: require("../../assets/products/fruits/Pomegranate.png"),
    category: "Fruits",
    shortDescription: "Premium red pomegranates.",
    fullDescription: "Selected for shine, size and sweetness.",
    features: ["Sweet arils", "Long shelf life"],
    specifications: {
      Origin: "Maharashtra",
      Season: "Aug – Apr",
      Grade: "AAA Export",
      Packaging: "Foam-wrapped cartons"
    }
  },

  {
    id: 316,
    name: "Red Ber",
    image: require("../../assets/products/fruits/RedBer.png"),
    category: "Fruits",
    shortDescription: "Fresh red ber.",
    fullDescription: "Sweet-tart flavor and long shelf stability.",
    features: ["Sweet flavor", "Firm texture"],
    specifications: {
      Origin: "Gujarat",
      Season: "Feb – Apr",
      Grade: "Premium",
      Packaging: "Mesh bags / Cartons"
    }
  },

  {
    id: 317,
    name: "Red Dates",
    image: require("../../assets/products/fruits/RedDates.png"),
    category: "Fruits",
    shortDescription: "Fresh red dates.",
    fullDescription:
      "Natural sweetness and long shelf life.",
    features: ["Natural sugar", "High nutrients"],
    specifications: {
      Origin: "Rajasthan",
      Season: "Mar – May",
      Grade: "A-Grade",
      Packaging: "Pouches / Cartons"
    }
  },

  {
    id: 318,
    name: "Sapota Chiku",
    image: require("../../assets/products/fruits/SapotaChiku.png"),
    category: "Fruits",
    shortDescription: "Sweet sapota.",
    fullDescription: "Filled with sweet brown pulp.",
    features: ["Soft texture", "Rich sweet pulp"],
    specifications: {
      Origin: "Gujarat",
      Season: "Oct – Mar",
      Grade: "Premium",
      Packaging: "Fruit trays"
    }
  },

  {
    id: 319,
    name: "Singoda",
    image: require("../../assets/products/fruits/Singoda.png"),
    category: "Fruits",
    shortDescription: "Fresh seasonal singoda.",
    fullDescription: "Harvested from clean water bodies.",
    features: ["Seasonal fruit", "Rich in minerals"],
    specifications: {
      Origin: "Bihar",
      Season: "Nov – Jan",
      Grade: "Standard Export",
      Packaging: "Mesh bags"
    }
  },

  {
    id: 320,
    name: "Tadgola (Ice Apple)",
    image: require("../../assets/products/fruits/Tadgola.png"),
    category: "Fruits",
    shortDescription: "Cooling and hydrating.",
    fullDescription: "Packed in temperature-controlled boxes.",
    features: ["Cooling fruit", "Hydrating"],
    specifications: {
      Origin: "South India",
      Season: "Mar – Jun",
      Grade: "Premium Fresh",
      Packaging: "Cold-chain boxes"
    }
  },

  {
    id: 321,
    name: "Watermelon",
    image: require("../../assets/products/fruits/WaterMelon.png"),
    category: "Fruits",
    shortDescription: "Large, juicy watermelons perfect for hydration.",
    fullDescription:
      "Selected for sweetness and size. Packed fresh for export.",
    features: ["Juicy pulp", "Refreshing taste"],
    specifications: {
      Origin: "Gujarat",
      Season: "Mar – Jun",
      Grade: "A-Grade Export",
      Packaging: "Foam net + Cartons"
    }
  }
];

export default fruitsData;

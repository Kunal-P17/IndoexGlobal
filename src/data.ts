import { 
  ProductCategory, 
  ServiceItem, 
  IndustryItem, 
  TradeCountry, 
  CertificationItem, 
  GalleryItem, 
  TestimonialItem, 
  FAQItem 
} from "./types";

import turmericFingers from "./Imgs/turmeric-fingers.png";
import turmericPowder from "./Imgs/Turmeric-Powder.png";
import wholeRedChilli from "./Imgs/red-chilli.png";
import redChilliPowder from "./Imgs/red-chilli-powder.png";
import cuminSeeds from "./Imgs/cumin-seeds.png";
import blackPepper from "./Imgs/black-pepper.png";
import moringaPowder from "./Imgs/moringa-powder.png";
import onionPowder from "./Imgs/onion-powder.png";
import garlicPowder from "./Imgs/garlic-powder.png";
import rice from "./Imgs/indrayani-rice.png";
import tiles from "./Imgs/tiles.png";
import granite from "./Imgs/granite.png";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "agricultural-products",
    name: "Agricultural Products",
    icon: "Wheat",
    description: "Premium spices, hygienically processed dehydrated powders, and high-quality food grains sourced from reliable Indian producers.",
    subCategories: ["Spices", "Dehydrated Powder", "Cereals"],
    items: [
      {
        id: "spices-pepper",
        name: "Turmeric Fingers",
        description: "Premium export-quality turmeric fingers carefully selected for their rich natural colour, excellent aroma, and high purity. Ideal for food processing.",
        image: turmericFingers,
        hsCode: "09103020",
        subCategory: "Spices"
      },
      {
        id: "spices-turmeric",
        name: "Turmeric Powder",
        description: "Premium export-quality turmeric powder with vibrant natural colour, rich aroma, and high curcumin content. Suitable for seasoning and spice blends.",
        image: turmericPowder,
        hsCode: "09103030",
        subCategory: "Spices"
      },
      {
        id: "spices-cardamom",
        name: "Whole Red Chilli",
        description: "Premium whole dried red chillies offering vibrant colour, balanced pungency, and superior quality for global food industries.",
        image: wholeRedChilli,
        hsCode: "09042190",
        subCategory: "Spices"
      },
      {
        id: "dehydrated-onion",
        name: "Red Chilli Powder",
        description: "Premium red chilli powder processed from selected chillies to deliver excellent colour, aroma, and pungency for international food applications.",
        image: redChilliPowder,
        hsCode: "09042211",
        subCategory: "Spices"
      },
      {
        id: "dehydrated-garlic",
        name: "Cumin Seeds",
        description: "High-purity cumin seeds with a strong aroma and authentic flavour, widely used in spice blends, seasoning, and food manufacturing.",
        image: cuminSeeds,
        hsCode: "09093129",
        subCategory: "Spices"
      },
      {
        id: "dehydrated-ginger",
        name: "Black Pepper",
        description: "Premium black pepper sourced from India's leading spice growing regions, offering exceptional aroma, flavour, and export-grade quality.",
        image: blackPepper,
        hsCode: "09041130",
        subCategory: "Spices"
      },
      {
        id: "cereals-ric",
        name: "Moringa Powder",
        description: "Premium nutrient-rich moringa powder processed from carefully selected leaves. Widely used in nutraceutical and health food industries.",
        image: moringaPowder,
        hsCode: "12119029",
        subCategory: "Dehydrated Powder"
      },
      {
        id: "cereals-wheat",
        name: "Onion Powder",
        description: "Finely processed dehydrated onion powder offering strong flavour, excellent consistency, and extended shelf life for food manufacturers.",
        image: onionPowder,
        hsCode: "07122000",
        subCategory: "Dehydrated Powder"
      },
      {
        id: "cereals-maize",
        name: "Garlic Powder",
        description: "Premium dehydrated garlic powder known for its rich aroma, pungent flavour, and extensive applications across the food industry",
        image: garlicPowder,
        hsCode: "07129040",
        subCategory: "Dehydrated Powder"
      },
      {
        id: "cereals-rice",
        name: "Premium Rice (Non-Basmati)",
        description: "Premium aromatic Indrayani rice cultivated in Maharashtra, appreciated for its soft texture, pleasant aroma, and authentic taste.",
        image: rice,
        hsCode: "10063090",
        subCategory: "Cereals"
      }
    ]
  },
  {
    id: "construction-material",
    name: "Construction Material",
    icon: "Layers",
    description: "Premium double charged vitrified tiles, polished natural granite slabs, and structural building components.",
    items: [
      {
        id: "construction-tiles",
        name: "Tiles & Flooring",
        description: "Premium ceramic, vitrified, and porcelain tiles designed for residential, commercial, and infrastructure projects with exceptional durability.",
        image: tiles,
        hsCode: "69010030",
      },
      {
        id: "construction-granite",
        name: "Granite",
        description: "Premium Indian granite available in multiple colours and finishes for architectural, commercial, and infrastructure  projects worldwide.",
        image: granite,
        hsCode: "68022310",
      }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "global-sourcing",
    title: "Global Supplier Audit & Sourcing",
    icon: "SearchCode",
    description: "We verify and audit factory operations, ensuring you receive goods from suppliers complying with human rights and ISO standards.",
    details: [
      "Rigorous background & credit checks of supplier mills",
      "Factory capacity & machinery validation audits",
      "Ethical sourcing (GOTS, OEKO-TEX, HACCP) certificates screening",
      "Cost negotiation and production timeline planning"
    ]
  },
  {
    id: "quality-assurance",
    title: "SGS & Bureau Veritas QC Inspections",
    icon: "ShieldCheck",
    description: "Every shipment undergoes standard pre-shipment inspections by neutral third-party inspection firms (SGS/BV) to guarantee grade specifications.",
    details: [
      "On-site random batch sampling and laboratory testing",
      "Packaging, sealing, and barcode verification audits",
      "Container loading supervision and anti-moisture sealant checks",
      "Issuance of comprehensive visual and technical reports within 24 hours"
    ]
  },
  {
    id: "customs-brokerage",
    title: "Customs Brokerage & Compliance",
    icon: "FileCheck",
    description: "Our certified trade compliance specialists manage all tariff codes (HS classification), import taxes, licensing, and trade treaty exemptions.",
    details: [
      "Complete HS Code classification and duty tariff optimization",
      "Export/Import declarations filing at major sea/air custom gates",
      "Sourcing GSP Form A (Certificates of Origin) for zero-duty benefit",
      "Phytosanitary, chemical safety (SDS), and FDA document filing"
    ]
  },
  {
    id: "multimodal-logistics",
    title: "End-to-End Multimodal Logistics",
    icon: "Ship",
    description: "We deploy optimized dry and climate-controlled container units through top-tier shipping alliances (Maersk, MSC, CMA CGM).",
    details: [
      "FCL (Full Container) and LCL (Less Container) booking flexibility",
      "Consolidated freight hubs for multi-product bulk shipments",
      "Real-time satellite GPS tracking from departure port to gate delivery",
      "Full marine insurance coverage (ICC-A Grade) policies"
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "ind-agri",
    name: "Agri-Business & Food Processing",
    icon: "Apple",
    description: "Powering regional food security through secure bulk shipments of grains, oils, and spices under strict sanitary measures.",
    bgImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "ind-construction",
    name: "Construction & Infrastructure",
    icon: "Wrench",
    description: "Supplying high-density vitrified tiles, polished granite slabs, and structural steel coils for large-scale construction.",
    bgImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
  }
];

export const TRADE_COUNTRIES: TradeCountry[] = [
  {
    name: "United States",
    region: "Americas",
    role: "Export Destination",
    volume: "12,400+ TEUs / Year",
    flag: "🇺🇸"
  },
  {
    name: "Germany",
    region: "Europe",
    role: "Bilateral Hub",
    volume: "8,900+ TEUs / Year",
    flag: "🇩🇪"
  },
  {
    name: "United Arab Emirates",
    region: "Middle East",
    role: "Bilateral Hub",
    volume: "15,200+ TEUs / Year",
    flag: "🇦🇪"
  },
  {
    name: "Singapore",
    region: "Southeast Asia",
    role: "Sourcing Desk",
    volume: "22,100+ TEUs / Year",
    flag: "🇸🇬"
  },
  {
    name: "India",
    region: "South Asia",
    role: "Sourcing Desk",
    volume: "18,600+ TEUs / Year",
    flag: "🇮🇳"
  },
  {
    name: "Australia",
    region: "Oceania",
    role: "Export Destination",
    volume: "6,400+ TEUs / Year",
    flag: "🇦🇺"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-udyam",
    name: "MSME (Udyam) Registration",
    logoText: "MSME",
  },
  {
    id: "cert-iec",
    name: "IEC - Import Export Code",
    logoText: "IEC"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Triple-E Class Container Cargo Vessel",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
    description: "Loading and securing IndoEx Global's grain shipments onto a modern heavy-duty ocean freighter."
  },
  {
    id: "gal-2",
    title: "High-Bay Temperature Controlled Warehouse",
    category: "Warehousing",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "A state-of-the-art secure logistics warehouse hub maintaining constant optimal humidity for high-grade textiles."
  },
  {
    id: "gal-3",
    title: "SGS Grade Specification Lab Analysis",
    category: "Inspection",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    description: "Verifying absolute purity indices and chemical standards of incoming aluminum profile billets."
  },
  {
    id: "gal-4",
    title: "Precision Anodized Profiles Packaging",
    category: "Products",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=800",
    description: "Heavy structural aluminum alloys being foam-wrapped and banded on heavy-duty wooden pallets."
  },
  {
    id: "gal-5",
    title: "Strategic Port-Side Storage Silos",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800",
    description: "Securing dry grains in climate-controlled port silos before containerization and moisture sealing."
  },
  {
    id: "gal-6",
    title: "Organic Cotton Yarn Spindles Quality Audit",
    category: "Products",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
    description: "Ring-spun spindles audit confirming thread count uniformity and high-speed tensile durability metrics."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Marcus Sterling",
    role: "VP of Supply Chain",
    company: "Apex Agrifoods Corp",
    country: "United States",
    content: "IndoEx Global has streamlined our bulk wheat sourcing completely. Their SGS inspection reports are meticulous, and we have experienced zero compliance delays across 40 shipping cycles.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-2",
    name: "Katarina Weber",
    role: "Chief Procurement Officer",
    company: "Automotive Precision GmbH",
    country: "Germany",
    content: "Our manufacturing line relies on the continuous supply of custom anodized aluminum extrusions. IndoEx Global consistently delivers exact ASTM-spec profiles with impeccable anti-rust packaging.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-3",
    name: "Akira Tanaka",
    role: "Global Logistics Director",
    company: "Nippon Electronics Hub",
    country: "Singapore",
    content: "FCL shipping container timelines have been extremely erratic recently, but IndoEx Global's priority bookings with top shipping lines ensure our touch display panels arrive strictly on schedule.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are your standard Payment Terms for international bulk trades?",
    answer: "We support industry-standard B2B secure payment structures. Typically, we operate on 100% Confirmed, Irrevocable Letter of Credit (L/C) at sight, or Telegraphic Transfer (T/T) with a 30% advance deposit and 70% payment against the scanned presentation of clean Bill of Lading (B/L) and SGS certificates."
  },
  {
    id: "faq-2",
    question: "How do you guarantee product specifications match our exact standards?",
    answer: "We mandate strict Quality Assurance. All factory suppliers undergo pre-evaluation audits. Additionally, we contract world-leading neutral inspection companies (SGS, Bureau Veritas, or Intertek) to pull samples, run physical lab analyses, supervise container stuffing, and seal the containers. No cargo sails without an active SGS verification certificate."
  },
  {
    id: "faq-3",
    question: "What Incoterms (Inco Terms) do you typically quote?",
    answer: "We primarily quote Free On Board (FOB) at the load ports, or Cost, Insurance & Freight (CIF) at your selected destination port of entry. We are also fully equipped to quote EXW (Ex Works) or DDP (Delivered Duty Paid) depending on your country's legal clearance capabilities."
  },
  {
    id: "faq-4",
    question: "What is IndoEx Global's standard Minimum Order Quantity (MOQ)?",
    answer: "Because we handle wholesale commercial containerized freight, our standard MOQ is one Full Container Load (FCL), equivalent to a 20-foot (20ft) dry van. For dense materials (e.g. steel coils, metals), this represents roughly 20-25 metric tons. For specialty commodities like organic coffee, we can facilitate consolidated LCL shipments."
  },
  {
    id: "faq-5",
    question: "Do you assist with custom licensing and import tariffs in my local country?",
    answer: "Yes, our dedicated trade customs brokerage desk provides professional assistance. We map your components or commodities to precise Harmonized System (HS) Codes, check eligibility for bilateral free trade duty exemptions, and draft standard declarations to prevent gridlocks at local ports of entry."
  }
];

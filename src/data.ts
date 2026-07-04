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
        name: "Premium Bold Black Pepper",
        description: "High-grade Malabar black pepper, steam-sterilized, high piperine content, and strictly audited for premium freshness.",
        image: "https://images.unsplash.com/photo-1596790011568-d01c0db725f0?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Piperine Content: Min 5.5%",
          "Moisture Content: Max 12.0%",
          "Foreign Matter: Max 0.2%",
          "Purity: 99.8% SGS Certified"
        ],
        hsCode: "0904.11.00",
        grade: "Bold Malabar 550GL",
        subCategory: "Spices"
      },
      {
        id: "spices-turmeric",
        name: "High-Curcumin Alleppey Turmeric",
        description: "Polished whole turmeric fingers and ground turmeric powder boasting exceptional color intensity and rich natural curcumin content.",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Curcumin Content: Min 5.0% to 6.5%",
          "Moisture Content: Max 9.0%",
          "Total Ash: Max 7.0%",
          "Lead (Pb): Undetectable (FDA & EU Compliant)"
        ],
        hsCode: "0910.30.00",
        grade: "Premium Alleppey Finger",
        subCategory: "Spices"
      },
      {
        id: "spices-cardamom",
        name: "Premium Green Cardamom Pods",
        description: "Bold green cardamom pods graded perfectly by size, offering full-bodied, highly fragrant seeds.",
        image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Size / Diameter: 7mm - 8mm+ (Bold)",
          "Color: Deep Green",
          "Volatile Oil: Min 1.5%",
          "Immature Pods: Max 1.0%"
        ],
        hsCode: "0908.31.00",
        grade: "Grade Extra Bold",
        subCategory: "Spices"
      },
      {
        id: "dehydrated-onion",
        name: "Premium Dehydrated Onion Powder",
        description: "Made from fresh white onions. Retains strong natural flavor and sweetness with perfect solubility.",
        image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Appearance: Free-flowing creamish-white powder",
          "Moisture Content: Max 4.0%",
          "Flavor Retention: Min 95%",
          "Pathogens: Absent per 25g"
        ],
        hsCode: "0712.20.00",
        grade: "A-Grade Premium Food Grade",
        subCategory: "Dehydrated Powder"
      },
      {
        id: "dehydrated-garlic",
        name: "Premium Dehydrated Garlic Powder",
        description: "Finely ground garlic powder with a sharp, natural aroma and long shelf life, perfect for commercial seasonings.",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Moisture Content: Max 5.0%",
          "Mesh Size: 80 - 100 mesh",
          "Total Plate Count: Max 50,000 CFU/g",
          "Heavy Metals: Undetectable"
        ],
        hsCode: "0712.90.13",
        grade: "Premium Commercial Grade",
        subCategory: "Dehydrated Powder"
      },
      {
        id: "dehydrated-ginger",
        name: "Premium Dehydrated Ginger Powder",
        description: "Ground from dried whole ginger rhizomes. Delivers a robust pungent heat and distinct warm aroma.",
        image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Moisture Content: Max 8.0%",
          "Volatile Oil: Min 1.5%",
          "Starch Content: Min 50%",
          "Insolubles: Max 0.5%"
        ],
        hsCode: "0910.11.00",
        grade: "Fine Grade A",
        subCategory: "Dehydrated Powder"
      },
      {
        id: "cereals-rice",
        name: "Premium 1121 Extra Long Grain Basmati Rice",
        description: "Fully matured aromatic long grain Basmati rice, boasting elegant elongation and non-sticky cooking characteristics.",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Average Grain Length: 8.35 mm+ (Before Cooking)",
          "Purity Index: Min 95%",
          "Admixture Content: Max 5.0%",
          "Moisture Content: Max 12.0%"
        ],
        hsCode: "1006.30.20",
        grade: "Matured 1121 Export Grade",
        subCategory: "Cereals"
      },
      {
        id: "cereals-wheat",
        name: "Premium Non-GMO Milling Wheat",
        description: "High-gluten milling wheat ideal for large-scale bread manufacturers and commercial flour mills worldwide.",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Protein Content: Min 13.5% (dry basis)",
          "Moisture Content: Max 12.0%",
          "Falling Number: Min 300 sec",
          "Test Weight: Min 78 kg/hl"
        ],
        hsCode: "1001.99.00",
        grade: "Grade A - Food Grade",
        subCategory: "Cereals"
      },
      {
        id: "cereals-maize",
        name: "Premium Bulk Yellow Maize",
        description: "High-energy yellow corn, thoroughly screened for aflatoxin and optimized for starch or animal feed manufacturing.",
        image: "https://images.unsplash.com/photo-1551754625-70c904ab7239?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Moisture Content: Max 14.0%",
          "Admixture Content: Max 1.5%",
          "Damaged Kernels: Max 3.0%",
          "Aflatoxin Count: Max 20 PPB"
        ],
        hsCode: "1005.90.00",
        grade: "Premium Feed/Food Grade",
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
        name: "Double Charged Glazed Vitrified Tiles",
        description: "High-density glazed tiles with ultra-low water absorption, built for elegant commercial and heavy residential flooring.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Water Absorption: < 0.05% (ISO 13006)",
          "Modulus of Rupture: Min 35 N/mm²",
          "Thickness Options: 9.0mm - 12.0mm",
          "Surface Finish: High Gloss / Matte / Satin"
        ],
        hsCode: "6907.21.00",
        grade: "Premium Export AAA"
      },
      {
        id: "construction-granite",
        name: "Polished Natural Granite Slabs",
        description: "Sourced from premier quarries. Uniform grains and exquisite compression strength make this granite perfect for luxury surfaces.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Compressive Strength: 150 - 200 MPa",
          "Water Absorption: 0.15% average",
          "Slab Dimensions: Gangsaw Size (280cm x 160cm+)",
          "Glossiness Index: 90+ Gloss Meter"
        ],
        hsCode: "6802.23.00",
        grade: "First Choice Premium"
      },
      {
        id: "construction-steel",
        name: "Hot-Dipped Galvanized Steel Coils",
        description: "Superior rust-resistant galvanized steel coils with uniform spangle for construction roofing and steel frameworks.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Standard Compliance: ASTM A653 / EN10346",
          "Zinc Coating: Z120 - Z275 g/m²",
          "Thickness Range: 0.15mm - 4.5mm",
          "Tensile Strength: 270 - 500 MPa"
        ],
        hsCode: "7210.49.00",
        grade: "SGCC / DX51D"
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
    id: "cert-iso",
    name: "ISO 9001:2015",
    authority: "International Quality Management Standard",
    logoText: "ISO",
    number: "QMS-094838-A2",
    validity: "Expires Dec 2028"
  },
  {
    id: "cert-sgs",
    name: "SGS Verified Trader",
    authority: "Société Générale de Surveillance S.A.",
    logoText: "SGS",
    number: "SGS-IND-94883-T",
    validity: "Verified Annually"
  },
  {
    id: "cert-fda",
    name: "FDA Registered Facility",
    authority: "U.S. Food & Drug Administration",
    logoText: "FDA",
    number: "FDA-Reg-104958392",
    validity: "Current Active Status"
  },
  {
    id: "cert-gots",
    name: "GOTS Organic Standard",
    authority: "Global Organic Textile Standard",
    logoText: "GOTS",
    number: "GOTS-TX-394827",
    validity: "Expires Oct 2027"
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

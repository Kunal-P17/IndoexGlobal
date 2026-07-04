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
    id: "agriculture",
    name: "Agricultural Commodities",
    icon: "Wheat",
    description: "Premium bulk non-GMO agricultural products harvested from globally certified sustainable farms.",
    items: [
      {
        id: "ag-grains",
        name: "Premium Non-GMO Milling Wheat",
        description: "High-gluten milling wheat suitable for bulk commercial bakers and manufacturers worldwide.",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Protein Content: Min 13.5% (dry basis)",
          "Moisture: Max 12.0%",
          "Falling Number: Min 300 sec",
          "Test Weight: Min 78 kg/hl"
        ],
        hsCode: "1001.99.00",
        grade: "Grade A - Food Grade"
      },
      {
        id: "ag-coffee",
        name: "Specialty Organic Arabica Coffee Beans",
        description: "Single-origin, shade-grown high-altitude green coffee beans with exceptional sensory profiles.",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Variety: 100% Organic Arabica",
          "Altitude: 1,200m - 1,800m",
          "Moisture Content: 11.2%",
          "Defect Rate: < 0.5% (SCA Standard)"
        ],
        hsCode: "0901.11.00",
        grade: "SCA Specialty Premium"
      },
      {
        id: "ag-spices",
        name: "Organic Bulk Black Pepper & Cardamom",
        description: "Premium, steam-sterilized spices sourced directly from historical estates in South Asia.",
        image: "https://images.unsplash.com/photo-1596790011568-d01c0db725f0?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Piperine Content: Min 5.5%",
          "Volatile Oils: Min 2.2%",
          "Foreign Matter: Max 0.2%",
          "Purity: 99.8% SGS Certified"
        ],
        hsCode: "0904.11.00",
        grade: "Bold Malabar 550GL"
      }
    ]
  },
  {
    id: "raw-materials",
    name: "Industrial Raw Materials & Metals",
    icon: "Layers",
    description: "High-grade metallurgical steel, alloys, and structural profiles for industrial manufacturing.",
    items: [
      {
        id: "raw-steel",
        name: "Hot-Dipped Galvanized Steel Coils",
        description: "Excellent rust-resistant galvanized steel coils with uniform spangle for automotive and roof manufacturing.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Standard: ASTM A653 / EN10346",
          "Zinc Coating: Z120 - Z275 g/m²",
          "Thickness: 0.15mm - 4.5mm",
          "Tensile Strength: 270 - 500 MPa"
        ],
        hsCode: "7210.49.00",
        grade: "SGCC / DX51D"
      },
      {
        id: "raw-aluminum",
        name: "Precision Anodized Aluminium Extrusion Profiles",
        description: "Custom architectural and structural aluminium alloys with superior thermal and structural metrics.",
        image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Alloy Type: 6063-T5 / 6061-T6",
          "Surface Finish: Clear/Black Anodized (15μm)",
          "Length: Standard 5.8m / 6.0m (Custom cut)",
          "Hardness: Min 8 Websters"
        ],
        hsCode: "7604.21.00",
        grade: "Aero-Architectural Grade"
      }
    ]
  },
  {
    id: "textiles",
    name: "Textiles & Organic Apparel",
    icon: "Scissors",
    description: "OEKO-TEX certified fabrics and customizable institutional uniforms made with organic long-staple cotton.",
    items: [
      {
        id: "tex-yarn",
        name: "Combed Long-Staple Organic Cotton Yarn",
        description: "GOTS-certified ring-spun organic cotton yarn designed for high-speed luxury knitting looms.",
        image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Certification: 100% GOTS / Organic Standard",
          "Count Range: 20s - 80s Single & Plied",
          "Twist Direction: Z-Twist / Custom",
          "Tenacity: Min 18.5 RKM"
        ],
        hsCode: "5205.22.00",
        grade: "Ne 40/1 Combed Ring Spun"
      },
      {
        id: "tex-fabric",
        name: "Bulk Performance Technical Fabric",
        description: "Moisture-wicking, antibacterial, and fire-retardant industrial textiles for protective outerwear.",
        image: "https://images.unsplash.com/photo-1558258695-2e1152a46e1d?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Composition: 85% Recycle Polyester / 15% Spandex",
          "Weight: 220 GSM ± 5%",
          "Flame Retardancy: NFPA 701 Compliant",
          "UV Protection: UPF 50+"
        ],
        hsCode: "5903.90.00",
        grade: "Commercial Duty Tech-Weave"
      }
    ]
  },
  {
    id: "electronics",
    name: "Industrial Electronics & Sensors",
    icon: "Cpu",
    description: "High-reliability industrial micro-controllers, advanced sensor nodes, and commercial optoelectronic modules.",
    items: [
      {
        id: "el-sensors",
        name: "Industrial Optoelectronic Precision Sensors",
        description: "Automated optical inspection and infrared proximity sensors engineered for harsh automated environments.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Enclosure Rating: IP67 Waterproof / Oil-resistant",
          "Response Time: < 0.5 ms",
          "Sensing Range: 50mm - 2000mm",
          "Input Voltage: 12V - 24V DC"
        ],
        hsCode: "8541.40.00",
        grade: "Heavy Automation Certified"
      },
      {
        id: "el-assemblies",
        name: "TFT-LCD Multi-Touch Display Assemblies",
        description: "Commercial capacitive touch display modules with anti-glare finish for medical and industrial consoles.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
        specifications: [
          "Screen Size: 7.0\" / 10.1\" / 15.6\" options",
          "Brightness: 1000 nits (Sunlight readable)",
          "Interface: HDMI / LVDS / I2C Touch",
          "Operating Temp: -20°C to +70°C"
        ],
        hsCode: "8528.59.00",
        grade: "Military-Medical Industrial"
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
    name: "Agri-Business & Food processing",
    icon: "Apple",
    description: "Powering regional food security through secure bulk shipments of grains, oils, and spices under strict sanitary measures.",
    bgImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "ind-mfg",
    name: "Heavy Manufacturing & Auto-assembly",
    icon: "Wrench",
    description: "Supplying top-tier steel coils, aluminum profiles, and automated sensors directly to factory assembly lines.",
    bgImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "ind-apparel",
    name: "Fashion Brands & Industrial Apparel",
    icon: "Shirt",
    description: "Providing high-grade sustainable fibers and ready-to-wear institutional apparel for international commercial chains.",
    bgImage: "https://images.unsplash.com/photo-1558258695-2e1152a46e1d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "ind-tech",
    name: "Infrastructure & Commercial Technology",
    icon: "MonitorPlay",
    description: "Enabling smooth hardware procurement with customized optoelectronic sensors and rugged console display assemblies.",
    bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
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
    description: "Loading and securing Vanguard's grain shipments onto a modern heavy-duty ocean freighter."
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
    content: "Vanguard Global Trade has streamlined our bulk wheat sourcing completely. Their SGS inspection reports are meticulous, and we have experienced zero compliance delays across 40 shipping cycles.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-2",
    name: "Katarina Weber",
    role: "Chief Procurement Officer",
    company: "Automotive Precision GmbH",
    country: "Germany",
    content: "Our manufacturing line relies on the continuous supply of custom anodized aluminum extrusions. Vanguard consistently delivers exact ASTM-spec profiles with impeccable anti-rust packaging.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-3",
    name: "Akira Tanaka",
    role: "Global Logistics Director",
    company: "Nippon Electronics Hub",
    country: "Singapore",
    content: "FCL shipping container timelines have been extremely erratic recently, but Vanguard's priority bookings with top shipping lines ensure our touch display panels arrive strictly on schedule.",
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
    question: "What is Vanguard's standard Minimum Order Quantity (MOQ)?",
    answer: "Because we handle wholesale commercial containerized freight, our standard MOQ is one Full Container Load (FCL), equivalent to a 20-foot (20ft) dry van. For dense materials (e.g. steel coils, metals), this represents roughly 20-25 metric tons. For specialty commodities like organic coffee, we can facilitate consolidated LCL shipments."
  },
  {
    id: "faq-5",
    question: "Do you assist with custom licensing and import tariffs in my local country?",
    answer: "Yes, our dedicated trade customs brokerage desk provides professional assistance. We map your components or commodities to precise Harmonized System (HS) Codes, check eligibility for bilateral free trade duty exemptions, and draft standard declarations to prevent gridlocks at local ports of entry."
  }
];

/**
 * Avenur — Verified Rentals Platform
 * Interactive Prototype State Machine & Controller
 */

// ==========================================
// 1. DATA STORE (Verified Properties Dataset)
// ==========================================
const INITIAL_PROPERTIES = [
  {
    id: "avenur-westlands-2br",
    title: "Silverstone Executive 2BR Apartment",
    area: "Westlands",
    city: "Nairobi",
    price: 45000,
    deposit: 45000,
    period: "month",
    type: "2bed",
    beds: 2,
    baths: 2,
    parking: 1,
    floor: "4th",
    rating: 9.8,
    reviewCount: 42,
    badge: "Featured",
    verified: true,
    furnished: true,
    gated: true,
    distanceHint: "3 mins to Sarit Centre",
    description: "Architectural two-bedroom luxury apartment in a high-security gated compound with sweeping city views. Features Italian porcelain tiling, fitted open-plan kitchen with granite counters, master en-suite, and high-speed elevator access.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&auto=format&fit=crop"
    ],
    amenities: ["Water 24/7", "Backup Generator", "High-Speed Lift", "Borehole Backup", "CCTV & Biometric Entry", "Fiber Internet Ready", "Balcony", "Dedicated Parking"],
    landlord: {
      name: "Marcus Mwangi (Verified Landlord)",
      phone: "+254 722 849 102",
      whatsapp: "254722849102",
      caretaker: "John (Available 8am - 6pm)",
      responseTime: "Under 15 mins"
    },
    unitMix: [
      { type: "1 Bedroom", size: "62 sqm", price: 35000, deposit: 35000, available: 2 },
      { type: "2 Bedroom Executive", size: "95 sqm", price: 45000, deposit: 45000, available: 3 },
      { type: "3 Bedroom Penthouse", size: "140 sqm", price: 75000, deposit: 75000, available: 1 }
    ]
  },
  {
    id: "avenur-kilimani-3br",
    title: "Kilimani Heights 3BR with Panoramic Skyline View",
    area: "Kilimani",
    city: "Nairobi",
    price: 95000,
    deposit: 95000,
    period: "month",
    type: "3bed",
    beds: 3,
    baths: 3,
    parking: 2,
    floor: "7th",
    rating: 9.6,
    reviewCount: 28,
    badge: "Popular",
    verified: true,
    furnished: false,
    gated: true,
    distanceHint: "Near Yaya Centre",
    description: "Expansive 3-bedroom residence with expansive floor-to-ceiling glass balconies overlooking the Nairobi skyline. Solar water heating, separate domestic staff quarters (DSQ), heated swimming pool, and gym access.",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop"
    ],
    amenities: ["Swimming Pool", "Equipped Gym", "DSQ En-suite", "Solar Water Heating", "24hr Manned Guard Gate", "Borehole", "Intercom System"],
    landlord: {
      name: "Beatrice Omondi (Property Manager)",
      phone: "+254 711 390 488",
      whatsapp: "254711390488",
      caretaker: "Samuel (On premise)",
      responseTime: "Under 1 hour"
    },
    unitMix: [
      { type: "3 Bedroom Standard", size: "130 sqm", price: 95000, deposit: 95000, available: 1 }
    ]
  },
  {
    id: "avenur-nyali-ocean",
    title: "Nyali Ocean-Breeze Coastal Short Stay & Villa",
    area: "Nyali",
    city: "Mombasa",
    price: 6500,
    deposit: 3000,
    period: "night",
    type: "bnb",
    beds: 2,
    baths: 2,
    parking: 2,
    floor: "Ground",
    rating: 9.9,
    reviewCount: 84,
    badge: "New",
    verified: true,
    furnished: true,
    gated: true,
    distanceHint: "200m from Nyali Beach",
    description: "Sun-drenched luxury beach getaway in Old Nyali. Direct garden access, private pool, fully air-conditioned rooms, smart TVs with Netflix, and chef-on-call option. Ideal for short stays, vacations, and remote work.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop"
    ],
    amenities: ["Air Conditioning", "Private Plunge Pool", "Fast WiFi (100Mbps)", "Daily Housekeeping", "Full Kitchen & Coffee Bar", "Beach Access"],
    landlord: {
      name: "Captain Omar Nassir (Superhost)",
      phone: "+254 733 992 110",
      whatsapp: "254733992110",
      caretaker: "Amina (Resident Host)",
      responseTime: "Under 5 mins"
    },
    unitMix: [
      { type: "Full Garden Villa", size: "180 sqm", price: 6500, deposit: 3000, available: 1 }
    ]
  },
  {
    id: "avenur-karen-plains",
    title: "Karen Plains Furnished Country 2BR Suite",
    area: "Karen",
    city: "Nairobi",
    price: 70000,
    deposit: 70000,
    period: "month",
    type: "2bed",
    beds: 2,
    baths: 2,
    parking: 2,
    floor: "Ground + 1",
    rating: 9.7,
    reviewCount: 19,
    badge: "Price drop",
    verified: true,
    furnished: true,
    gated: true,
    distanceHint: "5 mins to The Hub Karen",
    description: "Peaceful country-style haven enveloped in indigenous trees and manicured gardens. Wooden parquet floors, wood-burning fireplace, modern Scandinavian kitchen, and private patio.",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop"
    ],
    amenities: ["Fireplace", "Garden Patio", "Perimeter Electric Fence", "Quiet Green Setting", "Inverter Power Backup", "Pet Friendly"],
    landlord: {
      name: "David Kimani (Owner)",
      phone: "+254 720 445 789",
      whatsapp: "254720445789",
      caretaker: "Moses (On site)",
      responseTime: "Under 30 mins"
    },
    unitMix: [
      { type: "2 Bedroom Garden Wing", size: "110 sqm", price: 70000, deposit: 70000, available: 1 }
    ]
  },
  {
    id: "avenur-ruaka-studio",
    title: "Ruaka Ridge Modern Studio & Workspace",
    area: "Ruaka",
    city: "Kiambu",
    price: 18000,
    deposit: 18000,
    period: "month",
    type: "studio",
    beds: 0,
    baths: 1,
    parking: 1,
    floor: "3rd",
    rating: 9.3,
    reviewCount: 31,
    badge: "New",
    verified: true,
    furnished: false,
    gated: true,
    distanceHint: "Quick access to Two Rivers Mall",
    description: "Vibrant and smart studio apartment tailored for tech professionals and students. Generous natural lighting, compact kitchen with breakfast bar, tiled bathroom, and prepaid token meter.",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop"
    ],
    amenities: ["Tokens Meter", "Rooftop Drying Area", "Water 24/7", "CCTV Surveillance", "High-speed Fiber Ready"],
    landlord: {
      name: "Hannah Wanjiku (Landlady)",
      phone: "+254 728 550 123",
      whatsapp: "254728550123",
      caretaker: "Peter (Front Gate)",
      responseTime: "Under 20 mins"
    },
    unitMix: [
      { type: "Standard Studio", size: "38 sqm", price: 18000, deposit: 18000, available: 4 },
      { type: "1 Bedroom Corner", size: "52 sqm", price: 26000, deposit: 26000, available: 1 }
    ]
  },
  {
    id: "avenur-syokimau-1br",
    title: "Syokimau Gateway Modern 1BR Apartment",
    area: "Syokimau",
    city: "Machakos",
    price: 24000,
    deposit: 24000,
    period: "month",
    type: "1bed",
    beds: 1,
    baths: 1,
    parking: 1,
    floor: "2nd",
    rating: 9.4,
    reviewCount: 22,
    badge: "Popular",
    verified: true,
    furnished: false,
    gated: true,
    distanceHint: "7 mins to Nairobi SGR Station & Airport",
    description: "Contemporary one-bedroom apartment in a secure gated estate along Mombasa Road corridor. Balcony, fitted wardrobes, continuous borehole water supply, and easy highway connectivity.",
    images: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80&auto=format&fit=crop"
    ],
    amenities: ["Borehole Water", "Controlled Gate Access", "Kids Play Area", "Prepaid Electricity", "Ample Parking"],
    landlord: {
      name: "Eng. Geoffrey Mutua",
      phone: "+254 701 987 654",
      whatsapp: "254701987654",
      caretaker: "Dennis (Gatehouse)",
      responseTime: "Under 15 mins"
    },
    unitMix: [
      { type: "1 Bedroom Standard", size: "55 sqm", price: 24000, deposit: 24000, available: 3 }
    ]
  },
  {
    id: "avenur-lavington-townhouse",
    title: "Lavington Green 4BR Gated Townhouse",
    area: "Lavington",
    city: "Nairobi",
    price: 140000,
    deposit: 140000,
    period: "month",
    type: "4bed",
    beds: 4,
    baths: 4,
    parking: 3,
    floor: "Ground + 2",
    rating: 9.9,
    reviewCount: 15,
    badge: "Featured",
    verified: true,
    furnished: false,
    gated: true,
    distanceHint: "Near Lavington Mall",
    description: "Prestigious multi-level residence set within an exclusive enclave of only 8 homes. Private landscaped backyard, family room, rooftop entertainment terrace, and perimeter electric security fence.",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop"
    ],
    amenities: ["Private Garden", "Rooftop Terrace", "Full Backup Generator", "Borehole Water", "24/7 Armed Response", "2 DSQ Units"],
    landlord: {
      name: "Victoria Mutiso (Estate Trustee)",
      phone: "+254 722 109 888",
      whatsapp: "254722109888",
      caretaker: "Geoffrey (On site)",
      responseTime: "Under 10 mins"
    },
    unitMix: [
      { type: "4BR Townhouse with Garden", size: "320 sqm", price: 140000, deposit: 140000, available: 1 }
    ]
  },
  {
    id: "avenur-cbd-bedsitter",
    title: "Kenyatta Ave Cityscape Bedsitter",
    area: "CBD",
    city: "Nairobi",
    price: 15000,
    deposit: 15000,
    period: "month",
    type: "bedsitter",
    beds: 0,
    baths: 1,
    parking: 0,
    floor: "5th",
    rating: 9.1,
    reviewCount: 40,
    badge: "New",
    verified: true,
    furnished: false,
    gated: false,
    distanceHint: "Central Nairobi Commercial District",
    description: "High-density convenience in the city center. Perfect for working professionals needing minimal commute. CCTV secured building, high-speed elevator, clean tile finishes, and reliable water tanks.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop"
    ],
    amenities: ["Elevator Access", "Biometric Building Entry", "Water Tank Storage", "Prepaid Tokens"],
    landlord: {
      name: "Apex Properties Management",
      phone: "+254 700 333 444",
      whatsapp: "254700333444",
      caretaker: "Desk Concierge",
      responseTime: "Under 10 mins"
    },
    unitMix: [
      { type: "Bedsitter Unit", size: "26 sqm", price: 15000, deposit: 15000, available: 2 }
    ]
  },
  {
    id: "avenur-ruaka-bedsitter",
    title: "Joyland Heights Clean Bedsitter with Reliable Water",
    area: "Ruaka",
    city: "Kiambu",
    price: 13500,
    deposit: 13500,
    period: "month",
    type: "bedsitter",
    beds: 0,
    baths: 1,
    parking: 1,
    floor: "2nd",
    rating: 9.6,
    reviewCount: 19,
    badge: "Verified Hot",
    verified: true,
    furnished: false,
    gated: true,
    distanceHint: "6 mins to Two Rivers Mall & Quick Northern Bypass access",
    description: "Budget-friendly, verified bedsitter in Ruaka with private ceramic balcony, clean tiled finishes, large aluminum windows, prepaid KPLC electricity token, and verified borehole water storage so you never suffer shortages.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop"
    ],
    amenities: ["Borehole Backup", "Token Meter (KPLC)", "CCTV Security", "Private Balcony", "Water 24/7", "Perimeter Wall"],
    landlord: {
      name: "Dennis Gitau (Verified Landlord)",
      phone: "+254 721 990 114",
      whatsapp: "254721990114",
      caretaker: "Peter (On-site)",
      responseTime: "Under 10 mins"
    },
    unitMix: [
      { type: "Standard Bedsitter", size: "28 sqm", price: 13500, deposit: 13500, available: 2 },
      { type: "Executive Bedsitter", size: "34 sqm", price: 15000, deposit: 15000, available: 1 }
    ]
  },
  {
    id: "avenur-kilimani-2br",
    title: "Chaka Court Modern 2BR with Borehole Backup",
    area: "Kilimani",
    city: "Nairobi",
    price: 55000,
    deposit: 55000,
    period: "month",
    type: "2bed",
    beds: 2,
    baths: 2,
    parking: 1,
    floor: "5th",
    rating: 9.7,
    reviewCount: 38,
    badge: "Borehole Ready",
    verified: true,
    furnished: false,
    gated: true,
    distanceHint: "Off Argwings Kodhek, 4 mins to Yaya Centre",
    description: "Exceptionally well-maintained 2 bedroom apartment in the heart of Kilimani. Equipped with an industrial-grade on-site borehole filtration plant and rooftop storage tanks guaranteeing non-stop 24/7 pressurized water. Includes master en-suite, fitted kitchen cabinets, high-speed lift, and backup generator for common areas.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop"
    ],
    amenities: ["Borehole Backup", "Water 24/7", "Backup Generator", "High-Speed Lift", "Master En-suite", "Balcony", "CCTV & 24hr Guards", "Dedicated Parking"],
    landlord: {
      name: "Grace Kariuki (Verified Property Manager)",
      phone: "+254 723 555 889",
      whatsapp: "254723555889",
      caretaker: "Samuel (Office Ground Floor)",
      responseTime: "Under 15 mins"
    },
    unitMix: [
      { type: "2 Bedroom Master En-suite", size: "90 sqm", price: 55000, deposit: 55000, available: 2 },
      { type: "3 Bedroom En-suite", size: "125 sqm", price: 75000, deposit: 75000, available: 1 }
    ]
  },
  {
    id: "avenur-westlands-furnished-suite",
    title: "Rhapta Haven Furnished Executive Suite",
    area: "Westlands",
    city: "Nairobi",
    price: 5500,
    deposit: 5000,
    period: "night",
    type: "bnb",
    beds: 1,
    baths: 1,
    parking: 1,
    floor: "6th",
    rating: 9.9,
    reviewCount: 52,
    badge: "Short Stay",
    verified: true,
    furnished: true,
    gated: true,
    distanceHint: "Rhapta Road, 5 mins to Sarit Centre & Westgate",
    description: "Fully furnished and serviced executive 1-bedroom suite in Westlands tailored for short stays, business travelers, and expats. Features high-speed fiber Wi-Fi (100 Mbps), smart Netflix TV, fully outfitted kitchenette, rooftop swimming pool, gym, daily housekeeping, 24/7 power backup, and borehole water.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80&auto=format&fit=crop"
    ],
    amenities: ["Furnished & Serviced", "High-Speed Wi-Fi", "Borehole Backup", "Backup Generator", "Rooftop Pool & Gym", "Smart TV & Streaming", "Daily Housekeeping", "CCTV & Guards"],
    landlord: {
      name: "Avenur Concierge Stays",
      phone: "+254 799 444 111",
      whatsapp: "254799444111",
      caretaker: "Front Desk Concierge (24/7)",
      responseTime: "Instant (Under 5 mins)"
    },
    unitMix: [
      { type: "Furnished Studio / Suite", size: "45 sqm", price: 5500, deposit: 5000, available: 4 },
      { type: "Furnished 2BR Penthouse", size: "110 sqm", price: 10500, deposit: 10000, available: 1 }
    ]
  }
];

// ==========================================
// 2. HERO SLIDESHOW SPECIFICATIONS
// ==========================================
const HERO_SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=80&auto=format&fit=crop",
    title: "Find a verified home with absolute certainty.",
    subtitle: "Browse high-resolution photos of verified residential rentals across Kenya. Reach landlords directly — zero middlemen.",
    badge: "Direct Contact Guarantee",
    propertyId: "avenur-westlands-2br",
    propertyTitle: "Silverstone Executive 2BR · Westlands"
  },
  {
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=2000&q=80&auto=format&fit=crop",
    title: "Silverstone 2 Bedroom Apartment · Westlands",
    subtitle: "KES 45,000/mo · Bright two-bedroom with fitted kitchen, high-security gate, and city views.",
    badge: "Westlands Top Pick",
    propertyId: "avenur-westlands-2br",
    propertyTitle: "View Westlands Silverstone Listing"
  },
  {
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=2000&q=80&auto=format&fit=crop",
    title: "Kilimani Heights 3BR with Panoramic Skyline View",
    subtitle: "KES 95,000/mo · Heated swimming pool, gym, solar water heating, and high-floor balcony.",
    badge: "Kilimani Prime",
    propertyId: "avenur-kilimani-3br",
    propertyTitle: "View Kilimani Heights Listing"
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80&auto=format&fit=crop",
    title: "Nyali Ocean-Breeze Coastal Villa & Short Stay",
    subtitle: "KES 6,500/night · 200m to Nyali Beach with private plunge pool and garden patio.",
    badge: "Mombasa Short Stay",
    propertyId: "avenur-nyali-ocean",
    propertyTitle: "View Nyali Ocean Stay"
  },
  {
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=2000&q=80&auto=format&fit=crop",
    title: "Karen Plains Furnished Country 2BR Suite",
    subtitle: "KES 70,000/mo · Serene green sanctuary, parquet wooden floors, and fireplace.",
    badge: "Karen Sanctuary",
    propertyId: "avenur-karen-plains",
    propertyTitle: "View Karen Plains Listing"
  },
  {
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=2000&q=80&auto=format&fit=crop",
    title: "Lavington Green 4BR Gated Townhouse",
    subtitle: "KES 140,000/mo · Private garden, 2 staff quarters, and full backup generator.",
    badge: "Lavington Townhouse",
    propertyId: "avenur-lavington-townhouse",
    propertyTitle: "View Lavington Townhouse"
  }
];

// ==========================================
// 2.5 SUPABASE CLOUD BACKEND CONFIGURATION
// ==========================================
const SUPABASE_CONFIG = {
  url: "https://zwqxjojnbhpybqurmtkt.supabase.co",
  publishableKey: "sb_publishable_NGqm4M_-hiEgoTgrtg9OgQ_yssoGsr5"
};

let supabaseClient = null;
function getSupabaseClient() {
  if (!supabaseClient && typeof window !== 'undefined' && window.supabase && window.supabase.createClient) {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.publishableKey);
    } catch (e) {
      console.warn("Supabase init error:", e);
    }
  }
  return supabaseClient;
}

const ADMIN_EMAILS = new Set(['avenurliving@gmail.com']);

function isAdmin(user = null) {
  const target = user || (typeof store !== 'undefined' ? store.currentUser : null);
  if (!target) return false;
  if (target.role === 'admin') return true;
  const email = (target.email || '').toLowerCase().trim();
  return ADMIN_EMAILS.has(email);
}

// ==========================================
// 3. APPLICATION STATE STORE
// ==========================================
class AppStore {
  constructor() {
    this.properties = [...INITIAL_PROPERTIES];
    this.currentView = 'home'; // 'home' | 'catalog' | 'detail' | 'landlord'
    this.currentListingId = 'avenur-westlands-2br';
    this.viewMode = 'grid'; // 'grid' | 'list'
    this.savedIds = new Set(['avenur-westlands-2br', 'avenur-nyali-ocean']);
    this.contactedIds = new Set(['avenur-westlands-2br']);
    let savedUser = null;
    try {
      const su = localStorage.getItem('avenur_current_user');
      if (su) savedUser = JSON.parse(su);
    } catch (e) {}
    this.currentUser = savedUser || { name: "Sarah K.", role: "tenant", phone: "+254 712 345 678", isApproved: false };
    this.slideIndex = 0;
    this.isSlideshowPlaying = true;
    this.slideTimer = null;
    this.launchMode = 'seed'; // 'seed' (pilot live properties) | 'day0' (zero inventory mode)

    // Business Channels & WhatsApp Credentials
    this.businessWhatsapp = "254798792730";
    this.businessPhone = "+254 798 792 730";
    this.whatsappChannelUrl = "https://whatsapp.com/channel/0029VbDw7Xv6mYPT4pPeZK02";
    this.telegramChannelUrl = "https://t.me/avenurliving";
    this.telegramBotToken = "9209369220:AAGKpOjw7xuh6INcPbDFIXfERJRDGkW_P9g";
    this.telegramChannelUsername = "@avenurliving";
    this.conciergePlacementFee = 3000; // Flat success-only sourcing fee in KES
    
    // Catalog filters
    this.filters = {
      area: '',
      type: '',
      maxPrice: 200000,
      bedrooms: 'any',
      verifiedOnly: false,
      furnishedOnly: false,
      gatedOnly: false,
      sortBy: 'rating'
    };

    // Load local storage if available
    try {
      const storedSaved = localStorage.getItem('avenur_saved');
      if (storedSaved) this.savedIds = new Set(JSON.parse(storedSaved));
      const storedContacted = localStorage.getItem('avenur_contacted');
      if (storedContacted) this.contactedIds = new Set(JSON.parse(storedContacted));
    } catch (e) {
      // safe fallback
    }
  }

  toggleLaunchMode() {
    this.launchMode = this.launchMode === 'seed' ? 'day0' : 'seed';
    const btn = document.getElementById('hud-toggle-mode');
    if (btn) {
      btn.textContent = this.launchMode === 'seed' ? 'Mode: Seed Inventory' : 'Mode: Day-0 Zero Inventory';
      btn.classList.toggle('active', this.launchMode === 'day0');
    }
    showToast(this.launchMode === 'seed' ? 'Switched to Live Pilot Seed Inventory' : 'Switched to Day-0 Zero-Inventory Mode');
    renderCatalog();
    renderFeaturedCarousel();
  }

  save() {
    try {
      localStorage.setItem('avenur_saved', JSON.stringify([...this.savedIds]));
      localStorage.setItem('avenur_contacted', JSON.stringify([...this.contactedIds]));
    } catch (e) {}
  }

  toggleSaved(id) {
    if (this.savedIds.has(id)) {
      this.savedIds.delete(id);
      showToast("Removed from saved homes");
    } else {
      this.savedIds.add(id);
      showToast("Property saved to your collection! ❤️");
    }
    this.save();
    updateSavedCounters();
    renderCatalog();
    renderFeaturedCarousel();
    renderSavedDrawer();
  }

  unlockContact(id) {
    this.contactedIds.add(id);
    this.save();
    updateSavedCounters();
    renderCatalog();
    renderFeaturedCarousel();
  }

  getCurrentListing() {
    return this.properties.find(p => p.id === this.currentListingId) || this.properties[0];
  }

  addListing(newListing) {
    this.properties.unshift(newListing);
    showToast("🎉 New property listing published live!");
    renderCatalog();
    renderFeaturedCarousel();
    renderLandlordTable();
  }
}

const store = new AppStore();

// ==========================================
// 4. ROUTER & VIEW SWITCHER (HOTSPOT LINKING)
// ==========================================
function navigateTo(viewName, listingId = null, seoSlug = null) {
  store.currentView = viewName;
  if (listingId) store.currentListingId = listingId;

  // Toggle view containers
  document.querySelectorAll('.view-screen').forEach(el => el.classList.remove('active'));
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add('active');

  // Update nav link active states
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.toggle('active', el.dataset.view === viewName);
  });
  document.querySelectorAll('.mobile-tab-btn').forEach(el => {
    el.classList.toggle('active', el.dataset.view === viewName);
  });

  // Update prototype HUD
  document.querySelectorAll('.hud-pill').forEach(el => {
    el.classList.toggle('active', el.dataset.view === viewName);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render view-specific content
  if (viewName === 'catalog') {
    renderCatalog();
  } else if (viewName === 'detail') {
    renderDetailView();
  } else if (viewName === 'landlord') {
    renderLandlordTable();
  } else if (viewName === 'home') {
    renderFeaturedCarousel();
  } else if (viewName === 'pseo') {
    renderPseoPage(seoSlug || store.currentPseoSlug || 'bedsitters-in-ruaka-under-15k');
  }
}

// ==========================================
// 5. TOAST NOTIFICATION ENGINE
// ==========================================
function showToast(message) {
  const container = document.getElementById('toast-center');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

// ==========================================
// 6. HERO SLIDESHOW COMPONENT
// ==========================================
function initHeroSlideshow() {
  const container = document.getElementById('hero-slides-container');
  const dotsContainer = document.getElementById('hero-dots');
  if (!container || !dotsContainer) return;

  container.innerHTML = HERO_SLIDES.map((slide, idx) => `
    <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
      <div class="hero-slide-bg" style="background-image: url('${slide.img}')"></div>
      <div class="hero-overlay"></div>
    </div>
  `).join('');

  dotsContainer.innerHTML = HERO_SLIDES.map((_, idx) => `
    <button class="hero-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>
  `).join('');

  dotsContainer.querySelectorAll('.hero-dot').forEach(btn => {
    btn.addEventListener('click', (e) => {
      setHeroSlide(parseInt(e.target.dataset.index, 10));
    });
  });

  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const playBtn = document.getElementById('hero-play-btn');

  if (prevBtn) prevBtn.addEventListener('click', () => stepHeroSlide(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => stepHeroSlide(1));
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      store.isSlideshowPlaying = !store.isSlideshowPlaying;
      playBtn.innerHTML = store.isSlideshowPlaying ? `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="14" y="4" width="4" height="16" rx="1"></rect><rect x="6" y="4" width="4" height="16" rx="1"></rect></svg>
      ` : `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      `;
      if (store.isSlideshowPlaying) startHeroTimer();
      else clearInterval(store.slideTimer);
    });
  }

  updateHeroText();
  startHeroTimer();
}

function startHeroTimer() {
  clearInterval(store.slideTimer);
  store.slideTimer = setInterval(() => {
    if (store.isSlideshowPlaying) stepHeroSlide(1);
  }, 6000);
}

function stepHeroSlide(delta) {
  let next = (store.slideIndex + delta + HERO_SLIDES.length) % HERO_SLIDES.length;
  setHeroSlide(next);
}

function setHeroSlide(index) {
  store.slideIndex = index;
  document.querySelectorAll('.hero-slide').forEach((el, idx) => {
    el.classList.toggle('active', idx === index);
  });
  document.querySelectorAll('.hero-dot').forEach((el, idx) => {
    el.classList.toggle('active', idx === index);
  });
  updateHeroText();
}

function updateHeroText() {
  const slide = HERO_SLIDES[store.slideIndex];
  const titleEl = document.getElementById('hero-dynamic-title');
  const subtitleEl = document.getElementById('hero-dynamic-subtitle');
  const badgeEl = document.getElementById('hero-dynamic-badge');
  const captionTag = document.getElementById('hero-caption-tag');

  if (titleEl) titleEl.textContent = slide.title;
  if (subtitleEl) subtitleEl.textContent = slide.subtitle;
  if (badgeEl) badgeEl.textContent = slide.badge;
  if (captionTag) {
    captionTag.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A5B4FC" stroke-width="2.2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
      <span>${slide.propertyTitle}</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"></path></svg>
    `;
    captionTag.onclick = () => navigateTo('detail', slide.propertyId);
  }
}

// ==========================================
// 7. PROPERTY CARD TEMPLATE RENDERER
// ==========================================
function renderPropertyCard(p, mode = 'grid') {
  const isSaved = store.savedIds.has(p.id);
  const isContacted = store.contactedIds.has(p.id);
  const formattedPrice = `KES ${p.price.toLocaleString()}`;

  const badgeClass = p.badge === 'Featured' ? 'badge-featured' :
                     p.badge === 'New' ? 'badge-new' :
                     p.badge === 'Popular' ? 'badge-popular' : 'badge-pricedrop';

  if (mode === 'list') {
    return `
      <article class="prop-card-list" onclick="navigateTo('detail', '${p.id}')">
        <div class="prop-card-media">
          <img src="${p.images[0]}" alt="${p.title}" class="prop-card-img" loading="lazy">
          <div class="watermark-stamp"><span class="watermark-text">AVENUR VERIFIED</span></div>
          ${p.badge ? `<span class="badge-tag ${badgeClass}">${p.badge}</span>` : ''}
          <button type="button" class="fav-btn ${isSaved ? 'active' : ''}" onclick="event.stopPropagation(); store.toggleSaved('${p.id}');" aria-label="Save property">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? '#EF4444' : 'none'}" stroke="currentColor" stroke-width="2.2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
          </button>
          ${isContacted ? `
            <span class="contacted-ribbon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Contacted
            </span>
          ` : ''}
        </div>
        <div class="prop-card-body">
          <div class="prop-card-list-main">
            <div class="prop-title-row">
              <h3 class="prop-card-title">${p.title}</h3>
            </div>
            <div class="prop-loc-meta">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <strong>${p.area}, ${p.city}</strong> · <span>${p.distanceHint}</span>
            </div>
            <div class="prop-specs-tags">
              <span class="spec-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path></svg> ${p.beds === 0 ? 'Studio' : p.beds + ' Beds'}</span>
              <span class="spec-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.12 0l-.88.88a1.5 1.5 0 0 0 0 2.12L6 9"></path><path d="m2 16 4-4"></path><path d="m14 4 4 4"></path></svg> ${p.baths} Bath${p.baths > 1 ? 's' : ''}</span>
              <span class="spec-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="12" x="3" y="6" rx="2"></rect><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle></svg> ${p.parking} Parking</span>
              <span class="spec-item">Floor: ${p.floor}</span>
            </div>
            <p class="prop-desc-snippet">${p.description}</p>
            <div style="margin-top: 0.6rem; display: flex; gap: 0.4rem; flex-wrap: wrap;">
              ${p.amenities.slice(0, 3).map(a => `<span style="font-size:0.75rem; background:#F1F5F9; color:#475569; padding:0.15rem 0.5rem; border-radius:4px; font-weight:600;">${a}</span>`).join('')}
              ${p.amenities.length > 3 ? `<span style="font-size:0.75rem; color:#64748B; font-weight:600;">+${p.amenities.length - 3} more</span>` : ''}
            </div>
          </div>
          <div class="prop-card-list-side">
            <div style="display:flex; justify-content:flex-end;">
              <span class="score-badge">${p.rating.toFixed(1)}</span>
            </div>
            <div>
              <div class="prop-deposit-tag">${p.period === 'month' ? `Deposit: KES ${p.deposit.toLocaleString()}` : 'Per night incl. taxes'}</div>
              <div class="prop-price">${formattedPrice} <span class="prop-price-period">/ ${p.period}</span></div>
              <button class="btn btn-primary btn-sm" style="width:100%; margin-top:0.6rem;">See details</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // Grid Layout
  return `
    <article class="prop-card" onclick="navigateTo('detail', '${p.id}')">
      <div class="prop-card-media">
        <img src="${p.images[0]}" alt="${p.title}" class="prop-card-img" loading="lazy">
        <div class="watermark-stamp"><span class="watermark-text">AVENUR VERIFIED</span></div>
        ${p.badge ? `<span class="badge-tag ${badgeClass}">${p.badge}</span>` : ''}
        <button type="button" class="fav-btn ${isSaved ? 'active' : ''}" onclick="event.stopPropagation(); store.toggleSaved('${p.id}');" aria-label="Save property">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? '#EF4444' : 'none'}" stroke="currentColor" stroke-width="2.2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        </button>
        ${isContacted ? `
          <span class="contacted-ribbon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Contacted
          </span>
        ` : ''}
      </div>
      <div class="prop-card-body">
        <div class="prop-title-row">
          <h3 class="prop-card-title">${p.title}</h3>
          <span class="score-badge">${p.rating.toFixed(1)}</span>
        </div>
        <div class="prop-loc-meta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <strong>${p.area}, ${p.city}</strong>
        </div>
        <div class="prop-specs-tags">
          <span class="spec-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path></svg> ${p.beds === 0 ? 'Studio' : p.beds + ' Beds'}</span>
          <span class="spec-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.12 0l-.88.88a1.5 1.5 0 0 0 0 2.12L6 9"></path><path d="m2 16 4-4"></path><path d="m14 4 4 4"></path></svg> ${p.baths} Bath</span>
          ${p.parking > 0 ? `<span class="spec-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="12" x="3" y="6" rx="2"></rect><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle></svg> ${p.parking}</span>` : ''}
        </div>
        <p class="prop-desc-snippet">${p.description}</p>
        <div class="prop-price-row">
          <div>
            <div class="prop-price">${formattedPrice} <span class="prop-price-period">/ ${p.period}</span></div>
            <div class="prop-deposit-tag">${p.period === 'month' ? `Deposit: KES ${p.deposit.toLocaleString()}` : 'Taxes included'}</div>
          </div>
          <button class="btn btn-outline btn-sm">Details</button>
        </div>
      </div>
    </article>
  `;
}

// ==========================================
// 8. CATALOG RENDERING & FILTERING
// ==========================================
function renderCatalog() {
  const container = document.getElementById('catalog-results-grid');
  const countText = document.getElementById('catalog-count');
  if (!container) return;

  const filtered = store.properties.filter(p => {
    if (store.filters.area && !p.area.toLowerCase().includes(store.filters.area.toLowerCase()) && !p.city.toLowerCase().includes(store.filters.area.toLowerCase())) {
      return false;
    }
    if (store.filters.type && p.type !== store.filters.type) {
      return false;
    }
    if (p.price > store.filters.maxPrice) {
      return false;
    }
    if (store.filters.bedrooms !== 'any') {
      const b = parseInt(store.filters.bedrooms, 10);
      if (b === 0 && p.beds !== 0) return false;
      if (b > 0 && p.beds < b) return false;
    }
    if (store.filters.verifiedOnly && !p.verified) return false;
    if (store.filters.furnishedOnly && !p.furnished) return false;
    if (store.filters.gatedOnly && !p.gated) return false;
    return true;
  });

  // Sorting
  if (store.filters.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (store.filters.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (store.filters.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (store.launchMode === 'day0') {
    filtered.length = 0; // Empty day-0 state
  }

  if (countText) {
    if (store.launchMode === 'day0') {
      countText.textContent = `Early Access: Verification audit in progress across Kenya`;
    } else {
      countText.textContent = `${filtered.length} verified home${filtered.length === 1 ? '' : 's'} available in Kenya`;
    }
  }

  if (filtered.length === 0) {
    const searchLoc = store.filters.area ? `in "${store.filters.area}"` : 'in this search';
    container.className = 'property-cards-grid';
    container.innerHTML = `
      <div class="concierge-card">
        <div class="concierge-icon-circle">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="2.3">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <polyline points="9 12 12 15 17 9"></polyline>
          </svg>
        </div>
        <span style="background:#EEF2FF; color:#4F46E5; font-size:0.75rem; font-weight:800; padding:0.25rem 0.65rem; border-radius:4px; text-transform:uppercase; letter-spacing:0.05em;">Zero Ghost Listings Guarantee</span>
        <h3 class="concierge-title" style="margin-top:0.75rem;">No verified homes listed ${searchLoc} yet</h3>
        <p class="concierge-desc">
          To protect tenants, <strong>we strictly refuse to list unverified or ghost properties</strong>. Every unit on Avenur must undergo an in-person physical audit of water supply, security, and verified title ownership.
        </p>
        
        <div class="concierge-perks">
          <span class="concierge-perk-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Free 48h Hand-Audit Match
          </span>
          <span class="concierge-perk-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Direct Landlord Pricing
          </span>
          <span class="concierge-perk-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Zero Broker Viewing Fees
          </span>
        </div>

        <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap; margin-top:1.5rem;">
          <button class="btn btn-primary" onclick="openConciergeModal('${store.filters.area || ''}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
            <span>Request a Verified Match</span>
          </button>
          <button class="btn btn-outline" onclick="openPhotoAuditModal()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <span>Are you an Owner? Book Free Audit</span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  container.className = store.viewMode === 'list' ? 'property-cards-list-view' : 'property-cards-grid';
  container.innerHTML = filtered.map(p => renderPropertyCard(p, store.viewMode)).join('');
}

function toggleMobileFilters() {
  const sidebar = document.getElementById('catalog-filters-sidebar');
  const btnText = document.getElementById('mobile-filter-btn-text');
  if (!sidebar) return;
  sidebar.classList.toggle('mobile-open');
  if (btnText) {
    btnText.textContent = sidebar.classList.contains('mobile-open') ? 'Hide Filters ▴' : 'Filter Homes & Budget ▾';
  }
}

function resetFilters() {
  store.filters = {
    area: '',
    type: '',
    maxPrice: 200000,
    bedrooms: 'any',
    verifiedOnly: false,
    furnishedOnly: false,
    gatedOnly: false,
    sortBy: 'rating'
  };
  const areaInput = document.getElementById('filter-area-input');
  if (areaInput) areaInput.value = '';
  const priceSlider = document.getElementById('filter-price-slider');
  if (priceSlider) priceSlider.value = 200000;
  const priceVal = document.getElementById('filter-price-val');
  if (priceVal) priceVal.textContent = 'Up to KES 200,000';
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.toggle-switch input').forEach(t => t.checked = false);
  renderCatalog();
}

function renderFeaturedCarousel() {
  const container = document.getElementById('featured-homes-carousel');
  if (!container) return;

  if (store.launchMode === 'day0') {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 2.5rem; text-align: center;">
        <span style="background:#EEF2FF; color:#4F46E5; font-size:0.75rem; font-weight:800; padding:0.25rem 0.65rem; border-radius:4px; text-transform:uppercase;">Day-0 Early Access</span>
        <h3 style="font-size:1.35rem; font-weight:800; color:#0F172A; margin-top:0.6rem;">Currently Auditing Live Inventory</h3>
        <p style="font-size:0.9375rem; color:#64748B; max-width:540px; margin:0.4rem auto 1.5rem auto;">
          Our physical photography audit team is currently inspecting apartment compounds in Kilimani & Westlands. Zero ghost listings will be published.
        </p>
        <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="openPhotoAuditModal()">Landlords: Book Free Photo Verification</button>
          <button class="btn btn-outline" onclick="openConciergeModal()">Tenants: Join Priority Notification List</button>
        </div>
      </div>
    `;
    return;
  }

  const featured = store.properties.slice(0, 4);
  container.innerHTML = featured.map(p => renderPropertyCard(p, 'grid')).join('');
}

// ==========================================
// 9. DETAIL VIEW RENDERER (FEATURE STATE)
// ==========================================
function renderDetailView() {
  const p = store.getCurrentListing();
  const isSaved = store.savedIds.has(p.id);
  const isContacted = store.contactedIds.has(p.id);

  // Breadcrumbs
  const breadcrumbLoc = document.getElementById('detail-breadcrumb-loc');
  const breadcrumbTitle = document.getElementById('detail-breadcrumb-title');
  if (breadcrumbLoc) breadcrumbLoc.textContent = `${p.area}, ${p.city}`;
  if (breadcrumbTitle) breadcrumbTitle.textContent = p.title;

  // Gallery
  const mainImg = document.getElementById('detail-main-img');
  const thumbsCol = document.getElementById('detail-thumbs-col');
  if (mainImg) mainImg.src = p.images[0];
  if (thumbsCol) {
    thumbsCol.innerHTML = p.images.slice(1, 3).map((img, i) => `
      <div class="gallery-thumb-item" onclick="switchMainImage('${img}')">
        <img src="${img}" alt="Thumbnail ${i + 2}">
      </div>
    `).join('');
  }

  // Header and Specs
  const titleEl = document.getElementById('detail-title');
  const locEl = document.getElementById('detail-location');
  const scoreEl = document.getElementById('detail-score');
  const reviewsEl = document.getElementById('detail-reviews');
  const descEl = document.getElementById('detail-description');

  if (titleEl) titleEl.textContent = p.title;
  if (locEl) locEl.textContent = `${p.area}, ${p.city} · ${p.distanceHint}`;
  if (scoreEl) scoreEl.textContent = p.rating.toFixed(1);
  if (reviewsEl) reviewsEl.textContent = `${p.reviewCount} verified tenant reviews`;
  if (descEl) descEl.textContent = p.description;

  // Specs Strip
  const specsStrip = document.getElementById('detail-specs-strip');
  if (specsStrip) {
    specsStrip.innerHTML = `
      <div class="detail-spec-unit">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="2.2"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path></svg>
        <span>${p.beds === 0 ? 'Studio Layout' : p.beds + ' Bedrooms'}</span>
      </div>
      <div class="detail-spec-unit">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="2.2"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.12 0l-.88.88a1.5 1.5 0 0 0 0 2.12L6 9"></path><path d="m2 16 4-4"></path><path d="m14 4 4 4"></path></svg>
        <span>${p.baths} Bathrooms</span>
      </div>
      <div class="detail-spec-unit">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="2.2"><rect width="18" height="12" x="3" y="6" rx="2"></rect><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle></svg>
        <span>${p.parking} Parking</span>
      </div>
      <div class="detail-spec-unit">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
        <span>Floor: ${p.floor}</span>
      </div>
    `;
  }

  // Amenities Grid
  const amenitiesList = document.getElementById('detail-amenities-list');
  if (amenitiesList) {
    amenitiesList.innerHTML = p.amenities.map(a => `
      <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem; font-weight:600; color:#334155; padding:0.4rem 0;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${a}</span>
      </div>
    `).join('');
  }

  // Unit Mix Table
  const unitMixTable = document.getElementById('detail-unit-mix');
  if (unitMixTable) {
    if (p.unitMix && p.unitMix.length > 0) {
      unitMixTable.innerHTML = `
        <table class="unit-mix-table">
          <thead>
            <tr>
              <th>Unit Configuration</th>
              <th>Approx. Size</th>
              <th>Rent / mo</th>
              <th>Deposit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${p.unitMix.map(u => `
              <tr>
                <td><strong>${u.type}</strong></td>
                <td>${u.size}</td>
                <td style="color:#4F46E5; font-weight:700;">KES ${u.price.toLocaleString()}</td>
                <td>KES ${u.deposit.toLocaleString()}</td>
                <td><span style="background:#ECFDF5; color:#059669; padding:0.15rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:700;">${u.available} Units</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else {
      unitMixTable.innerHTML = `<p style="font-size:0.875rem; color:#64748B;">Single standalone unit.</p>`;
    }
  }

  // Booking Card
  const bookingPrice = document.getElementById('booking-price');
  const bookingPeriod = document.getElementById('booking-period');
  const bookingDeposit = document.getElementById('booking-deposit');
  const unlockBtn = document.getElementById('btn-unlock-contact');
  const saveDetailBtn = document.getElementById('btn-save-detail');

  if (bookingPrice) bookingPrice.textContent = `KES ${p.price.toLocaleString()}`;
  if (bookingPeriod) bookingPeriod.textContent = `/ ${p.period}`;
  if (bookingDeposit) bookingDeposit.textContent = `Deposit: KES ${p.deposit.toLocaleString()}`;

  if (unlockBtn) {
    if (isContacted) {
      unlockBtn.className = 'btn btn-primary';
      unlockBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <span>View Landlord Contact (${p.landlord.name.split(' ')[0]})</span>
      `;
      unlockBtn.onclick = () => openContactModal(p);
    } else {
      unlockBtn.className = 'btn btn-primary';
      unlockBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        <span>Unlock Landlord Direct Number</span>
      `;
      unlockBtn.onclick = () => openContactModal(p);
    }
  }

  if (saveDetailBtn) {
    saveDetailBtn.innerHTML = isSaved ? `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#EF4444" stroke="#EF4444" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
      <span>Saved in Favorites</span>
    ` : `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
      <span>Save to Favorites</span>
    `;
    saveDetailBtn.onclick = () => {
      store.toggleSaved(p.id);
      renderDetailView();
    };
  }

  // Similar Nearby Homes Strip
  const similarContainer = document.getElementById('similar-homes-grid');
  if (similarContainer) {
    const similar = store.properties.filter(item => item.id !== p.id && item.area === p.area).slice(0, 3);
    const fallback = similar.length > 0 ? similar : store.properties.filter(item => item.id !== p.id).slice(0, 3);
    similarContainer.innerHTML = fallback.map(item => renderPropertyCard(item, 'grid')).join('');
  }
}

function switchMainImage(src) {
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) mainImg.src = src;
}

// ==========================================
// 10. ACCORDION COMPONENT LOGIC
// ==========================================
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.accordion-item');
      if (parent) {
        parent.classList.toggle('open');
      }
    });
  });
}

// ==========================================
// 11. LANDLORD PORTAL / DASHBOARD TABLE
// ==========================================
function renderLandlordTable() {
  const banner = document.getElementById('landlord-auth-banner');
  const addBtn = document.getElementById('btn-landlord-add-listing');
  const dashTabAdmin = document.getElementById('dash-tab-admin-approvals');

  const adminMode = isAdmin();
  if (dashTabAdmin) {
    dashTabAdmin.style.display = adminMode ? 'inline-flex' : 'none';
  }

  if (banner) {
    if (adminMode) {
      banner.innerHTML = `
        <div style="background:#EEF2FF; border:1px solid #C7D2FE; border-radius:8px; padding:0.85rem 1.25rem; margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <div style="color:#4F46E5; font-size:1.25rem;">🛡️</div>
            <div>
              <strong style="color:#1E1B4B; font-size:0.9375rem;">Master Administrator (${store.currentUser.email || 'avenurliving@gmail.com'})</strong>
              <span style="color:#4338CA; font-size:0.8125rem; margin-left:0.5rem;">· Verification Desk & Full Publishing Access Active</span>
            </div>
          </div>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn btn-sm" style="background:#4F46E5; color:#FFF; font-weight:700;" onclick="switchDashboardTab('admin-approvals')">Landlord Approvals Desk</button>
            <button class="btn btn-outline btn-sm" onclick="handleSignOut()">Sign Out</button>
          </div>
        </div>
      `;
      if (addBtn) addBtn.style.opacity = '1';
    } else if (!store.currentUser || store.currentUser.role === 'tenant') {
      banner.innerHTML = `
        <div style="background:#FEF3C7; border:1px solid #FCD34D; border-radius:8px; padding:1rem 1.25rem; margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <div style="color:#D97706; font-size:1.35rem;">🔒</div>
            <div>
              <strong style="color:#92400E; display:block; font-size:0.9375rem;">Guest / Tenant Mode Active</strong>
              <span style="color:#B45309; font-size:0.8125rem;">You must sign in as an approved landlord or admin to post and manage properties.</span>
            </div>
          </div>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn btn-sm" style="background:#D97706; color:#FFF; font-weight:700;" onclick="openAuthModal(); switchAuthTab('landlord');">Sign in as Landlord</button>
          </div>
        </div>
      `;
      if (addBtn) addBtn.style.opacity = '0.7';
    } else if (store.currentUser.role === 'landlord' && !store.currentUser.isApproved) {
      banner.innerHTML = `
        <div style="background:#FFFBEB; border:1px solid #FDE68A; border-radius:8px; padding:1rem 1.25rem; margin-bottom:1.5rem;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem;">
            <div style="display:flex; align-items:flex-start; gap:0.75rem;">
              <div style="color:#D97706; font-size:1.35rem;">⏳</div>
              <div>
                <strong style="color:#92400E; display:block; font-size:0.9375rem;">Landlord Account Pending Verification: ${store.currentUser.name || store.currentUser.email}</strong>
                <span style="color:#B45309; font-size:0.8125rem; display:block; margin-top:0.25rem;">
                  Under Avenur's Zero-Ghost Listing Policy, our inspection team physically confirms landlord title or agency rights before live property publishing is unlocked.
                </span>
              </div>
            </div>
            <div style="display:flex; gap:0.5rem; align-items:center;">
              <a href="https://wa.me/${store.businessWhatsapp}?text=${encodeURIComponent(`Hi Avenur Admin, I have registered as a landlord (${store.currentUser.email || store.currentUser.name}). Please review and approve my account for listing.`)}" target="_blank" class="btn btn-sm" style="background:#10B981; color:#FFF; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:0.35rem;">
                <span>WhatsApp Admin to Verify</span>
              </a>
              <button class="btn btn-outline btn-sm" onclick="handleSignOut()">Sign Out</button>
            </div>
          </div>
        </div>
      `;
      if (addBtn) addBtn.style.opacity = '0.7';
    } else {
      // Approved landlord
      banner.innerHTML = `
        <div style="background:#ECFDF5; border:1px solid #A7F3D0; border-radius:8px; padding:0.85rem 1.25rem; margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <div style="color:#059669; font-size:1.2rem;">✅</div>
            <div>
              <strong style="color:#065F46; font-size:0.9375rem;">Approved Landlord: ${store.currentUser.name || store.currentUser.email}</strong>
              <span style="color:#047857; font-size:0.8125rem; margin-left:0.5rem;">· Verified Publisher</span>
            </div>
          </div>
          <button class="btn btn-outline btn-sm" onclick="handleSignOut()">Sign Out</button>
        </div>
      `;
      if (addBtn) addBtn.style.opacity = '1';
    }
  }

  const tbody = document.getElementById('landlord-properties-tbody');
  if (!tbody) return;

  tbody.innerHTML = store.properties.map(p => `
    <tr>
      <td>
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <img src="${p.images[0]}" alt="" style="width:48px; height:48px; border-radius:6px; object-fit:cover;">
          <div>
            <strong style="color:#0F172A; font-size:0.9375rem;">${p.title}</strong>
            <div style="font-size:0.75rem; color:#64748B;">${p.area}, ${p.city} · ${p.type}</div>
          </div>
        </div>
      </td>
      <td><strong>KES ${p.price.toLocaleString()}</strong> / ${p.period}</td>
      <td>
        <span style="background:${p.verified ? '#ECFDF5' : '#FFFBEB'}; color:${p.verified ? '#059669' : '#D97706'}; font-size:0.75rem; font-weight:700; padding:0.2rem 0.6rem; border-radius:4px;">
          ${p.verified ? 'Verified & Active' : 'Pending Verification'}
        </span>
      </td>
      <td><strong>${Math.floor(p.rating * 4) + 12}</strong> views</td>
      <td><strong style="color:#4F46E5;">${Math.floor(p.rating * 1.5)}</strong> unlocked</td>
      <td>
        <div style="display:flex; gap:0.4rem;">
          <button class="btn btn-outline btn-sm" onclick="navigateTo('detail', '${p.id}')">View</button>
          <button class="btn btn-outline btn-sm" onclick="showToast('Listing settings updated')">Edit</button>
        </div>
      </td>
    </tr>
  `).join('');

  if (adminMode) {
    updateAdminPendingBadge();
  }
}

function switchDashboardTab(tab) {
  const tabProps = document.getElementById('dash-tab-props');
  const tabAdmin = document.getElementById('dash-tab-admin-approvals');
  const panelProps = document.getElementById('dash-panel-properties');
  const panelAdmin = document.getElementById('dash-panel-admin-approvals');

  if (tab === 'admin-approvals') {
    if (tabProps) tabProps.classList.remove('active');
    if (tabAdmin) tabAdmin.classList.add('active');
    if (panelProps) panelProps.style.display = 'none';
    if (panelAdmin) panelAdmin.style.display = 'block';
    fetchAndRenderAdminLandlords();
  } else {
    if (tabAdmin) tabAdmin.classList.remove('active');
    if (tabProps) tabProps.classList.add('active');
    if (panelAdmin) panelAdmin.style.display = 'none';
    if (panelProps) panelProps.style.display = 'block';
  }
}

async function updateAdminPendingBadge() {
  const counter = document.getElementById('admin-pending-count');
  const sb = getSupabaseClient();
  if (!sb || !counter) return;
  try {
    const { data: pending } = await sb
      .from('profiles')
      .select('id, is_approved')
      .eq('is_approved', false);
    if (pending) {
      counter.textContent = pending.length;
    }
  } catch (e) {}
}

async function fetchAndRenderAdminLandlords() {
  const tbody = document.getElementById('admin-landlords-tbody');
  const counter = document.getElementById('admin-pending-count');
  const sb = getSupabaseClient();
  if (!sb || !tbody) return;

  tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:2rem; color:#64748B;">Connecting to Supabase...</td></tr>`;

  try {
    const { data: profiles, error } = await sb
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:2rem; color:#DC2626;">Error: ${error.message}</td></tr>`;
      return;
    }

    const landlords = (profiles || []).filter(p => !ADMIN_EMAILS.has((p.email || '').toLowerCase()));
    const pending = landlords.filter(p => !p.is_approved);
    if (counter) counter.textContent = pending.length;

    if (landlords.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:2.5rem; color:#64748B;">No landlord accounts registered yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = landlords.map(l => {
      const isApproved = !!l.is_approved;
      const cleanPhone = (l.phone || '').replace(/\s+/g, '');
      const dateStr = l.created_at ? new Date(l.created_at).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' }) : 'Recently';
      const displayName = l.full_name || l.email.split('@')[0];

      return `
        <tr>
          <td>
            <div style="font-weight:700; color:#0F172A;">${displayName}</div>
            <div style="font-size:0.75rem; color:#64748B;">${l.email}</div>
          </td>
          <td>
            ${l.phone ? `
              <div style="display:flex; align-items:center; gap:0.4rem;">
                <span>${l.phone}</span>
                <a href="https://wa.me/${cleanPhone.startsWith('0') ? '254' + cleanPhone.slice(1) : cleanPhone}?text=Hi%20${encodeURIComponent(displayName)},%20this%20is%20Avenur%20Verification%20Desk." target="_blank" class="btn btn-sm" style="padding:0.2rem 0.45rem; background:#10B981; color:#fff; font-size:0.7rem; border-radius:4px; text-decoration:none;">WhatsApp</a>
              </div>
            ` : '<span style="color:#94A3B8;">No phone</span>'}
          </td>
          <td style="font-size:0.8125rem; color:#64748B;">${dateStr}</td>
          <td>
            <span style="background:${isApproved ? '#ECFDF5' : '#FFFBEB'}; color:${isApproved ? '#059669' : '#D97706'}; font-size:0.75rem; font-weight:700; padding:0.25rem 0.6rem; border-radius:4px; display:inline-flex; align-items:center; gap:0.3rem;">
              ${isApproved ? '✅ Approved' : '⏳ Pending Audit'}
            </span>
          </td>
          <td>
            ${isApproved ? `
              <button class="btn btn-outline btn-sm" style="color:#DC2626; border-color:#FCA5A5;" onclick="toggleLandlordApproval('${l.id}', false, '${displayName}')">
                Revoke
              </button>
            ` : `
              <button class="btn btn-sm" style="background:#10B981; color:#FFFFFF; font-weight:800; border:1px solid #10B981;" onclick="toggleLandlordApproval('${l.id}', true, '${displayName}', '${cleanPhone}')">
                ✓ Approve Landlord
              </button>
            `}
          </td>
        </tr>
      `;
    }).join('');
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:2rem; color:#DC2626;">Error loading landlords: ${err.message}</td></tr>`;
  }
}

async function toggleLandlordApproval(landlordId, newStatus, landlordName, phone) {
  const sb = getSupabaseClient();
  if (!sb) return;

  showToast(newStatus ? `Approving ${landlordName}...` : `Updating ${landlordName}...`);
  try {
    const { error } = await sb
      .from('profiles')
      .update({ is_approved: newStatus })
      .eq('id', landlordId);

    if (error) {
      showToast(`❌ Update failed: ${error.message}`);
      return;
    }

    showToast(newStatus ? `🎉 Landlord ${landlordName} approved live!` : `Status revoked for ${landlordName}.`);
    fetchAndRenderAdminLandlords();

    if (newStatus && phone) {
      const waText = encodeURIComponent(`Hi ${landlordName}, your Avenur landlord account has been verified and approved! You can now log in at https://avenurliving.co.ke to publish your properties live.`);
      const targetPhone = phone.startsWith('0') ? '254' + phone.slice(1) : phone;
      setTimeout(() => {
        if (confirm(`Notify ${landlordName} on WhatsApp that their account has been approved?`)) {
          window.open(`https://wa.me/${targetPhone}?text=${waText}`, '_blank');
        }
      }, 300);
    }
  } catch (err) {
    showToast(`❌ Error: ${err.message}`);
  }
}

// ==========================================
// 12. SAVED FAVORITES FLYOUT DRAWER
// ==========================================
function renderSavedDrawer() {
  const container = document.getElementById('saved-drawer-content');
  if (!container) return;

  const savedList = store.properties.filter(p => store.savedIds.has(p.id));

  if (savedList.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:#64748B;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="1.8" style="margin-bottom:0.75rem;"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        <p style="font-weight:700; color:#0F172A; font-size:1rem;">No saved properties yet</p>
        <p style="font-size:0.8125rem; margin-top:0.25rem;">Tap the heart icon on any listing to save it here for easy comparison.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = savedList.map(p => `
    <div style="display:flex; gap:0.75rem; padding:0.75rem; border:1px solid #E2E8F0; border-radius:8px; background:#FFFFFF;">
      <img src="${p.images[0]}" alt="" style="width:72px; height:72px; border-radius:6px; object-fit:cover; flex-shrink:0;">
      <div style="flex:1; min-width:0;">
        <h4 style="font-size:0.875rem; font-weight:700; color:#0F172A; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.title}</h4>
        <div style="font-size:0.75rem; color:#64748B; margin-top:0.15rem;">${p.area}, ${p.city}</div>
        <div style="font-size:0.875rem; font-weight:800; color:#4F46E5; margin-top:0.35rem;">KES ${p.price.toLocaleString()}/${p.period}</div>
        <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
          <button class="btn btn-primary btn-sm" style="padding:0.25rem 0.6rem; font-size:0.75rem;" onclick="closeDrawer(); navigateTo('detail', '${p.id}')">View</button>
          <button class="btn btn-outline btn-sm" style="padding:0.25rem 0.6rem; font-size:0.75rem; color:#EF4444;" onclick="store.toggleSaved('${p.id}')">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openDrawer() {
  renderSavedDrawer();
  const drawer = document.getElementById('saved-drawer-overlay');
  if (drawer) drawer.classList.add('active');
}

function closeDrawer() {
  const drawer = document.getElementById('saved-drawer-overlay');
  if (drawer) drawer.classList.remove('active');
}

function updateSavedCounters() {
  const count = store.savedIds.size;
  document.querySelectorAll('.saved-counter-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline-grid' : 'none';
  });
}

// ==========================================
// 13. MULTI-STEP MODAL OVERLAYS
// ==========================================
function openContactModal(p) {
  const modal = document.getElementById('modal-contact-unlock');
  if (!modal) return;
  modal.classList.add('active');

  const step1 = document.getElementById('contact-step-1');
  const step2 = document.getElementById('contact-step-2');
  
  if (store.contactedIds.has(p.id)) {
    // Show already unlocked
    if (step1) step1.style.display = 'none';
    if (step2) {
      step2.style.display = 'block';
      fillContactStep2(p);
    }
  } else {
    // Show step 1
    if (step1) step1.style.display = 'block';
    if (step2) step2.style.display = 'none';
  }

  // Setup confirm unlock button
  const confirmBtn = document.getElementById('btn-confirm-unlock');
  if (confirmBtn) {
    confirmBtn.onclick = () => {
      store.unlockContact(p.id);
      step1.style.display = 'none';
      step2.style.display = 'block';
      fillContactStep2(p);
      showToast("Verified landlord contact unlocked!");
      renderDetailView();
    };
  }
}

function fillContactStep2(p) {
  const nameEl = document.getElementById('landlord-display-name');
  const phoneEl = document.getElementById('landlord-display-phone');
  const caretakerEl = document.getElementById('landlord-display-caretaker');
  const whatsappBtn = document.getElementById('landlord-whatsapp-link');

  if (nameEl) nameEl.textContent = p.landlord.name;
  if (phoneEl) {
    phoneEl.textContent = p.landlord.phone;
    phoneEl.href = `tel:${p.landlord.phone.replace(/\s+/g, '')}`;
  }
  if (caretakerEl) caretakerEl.textContent = p.landlord.caretaker;
  if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/${p.landlord.whatsapp}?text=Hi,%20I'm%20interested%20in%20viewing%20${encodeURIComponent(p.title)}%20listed%20on%20Avenur.`;
  }
}

function openScheduleModal() {
  const modal = document.getElementById('modal-schedule-tour');
  if (modal) modal.classList.add('active');
}

function openReportModal() {
  const modal = document.getElementById('modal-report-listing');
  if (modal) modal.classList.add('active');
}

function openConciergeModal(prefillArea = '') {
  const modal = document.getElementById('modal-concierge-match');
  if (!modal) return;
  const areaInput = document.getElementById('concierge-area');
  if (areaInput && prefillArea) areaInput.value = prefillArea;
  modal.classList.add('active');
}

function openPhotoAuditModal() {
  const modal = document.getElementById('modal-photo-audit');
  if (modal) modal.classList.add('active');
}

function openAddListingModal() {
  const modal = document.getElementById('modal-add-listing');
  if (modal) modal.classList.add('active');
}

let landlordAuthMode = 'signin';

function switchAuthTab(tab) {
  const tenantTab = document.getElementById('tab-auth-tenant');
  const landlordTab = document.getElementById('tab-auth-landlord');
  const tenantPanel = document.getElementById('auth-panel-tenant');
  const landlordPanel = document.getElementById('auth-panel-landlord');
  const title = document.getElementById('auth-modal-title');

  if (tab === 'tenant') {
    if (tenantTab) {
      tenantTab.classList.add('active');
      tenantTab.style.color = '#4F46E5';
      tenantTab.style.borderBottom = '2px solid #4F46E5';
    }
    if (landlordTab) {
      landlordTab.classList.remove('active');
      landlordTab.style.color = '#64748B';
      landlordTab.style.borderBottom = 'none';
    }
    if (tenantPanel) tenantPanel.style.display = 'block';
    if (landlordPanel) landlordPanel.style.display = 'none';
    if (title) title.textContent = 'Sign in to Avenur';
  } else {
    if (landlordTab) {
      landlordTab.classList.add('active');
      landlordTab.style.color = '#4F46E5';
      landlordTab.style.borderBottom = '2px solid #4F46E5';
    }
    if (tenantTab) {
      tenantTab.classList.remove('active');
      tenantTab.style.color = '#64748B';
      tenantTab.style.borderBottom = 'none';
    }
    if (tenantPanel) tenantPanel.style.display = 'none';
    if (landlordPanel) landlordPanel.style.display = 'block';
    if (title) title.textContent = landlordAuthMode === 'signin' ? 'Landlord Sign In' : 'Landlord Registration';
  }
}

function toggleLandlordAuthMode() {
  landlordAuthMode = landlordAuthMode === 'signin' ? 'signup' : 'signin';
  const label = document.getElementById('landlord-mode-label');
  const toggle = document.getElementById('landlord-mode-toggle');
  const signupFields = document.getElementById('landlord-signup-fields');
  const submitBtn = document.getElementById('btn-landlord-auth-submit');
  const title = document.getElementById('auth-modal-title');

  if (landlordAuthMode === 'signup') {
    if (label) label.textContent = 'Register New Landlord Account';
    if (toggle) toggle.textContent = 'Already have an account? Sign In';
    if (signupFields) signupFields.style.display = 'block';
    if (submitBtn) submitBtn.textContent = 'Submit Registration for Approval';
    if (title) title.textContent = 'Landlord Registration';
  } else {
    if (label) label.textContent = 'Sign in to manage properties';
    if (toggle) toggle.textContent = 'Need an account? Register';
    if (signupFields) signupFields.style.display = 'none';
    if (submitBtn) submitBtn.textContent = 'Sign In to Landlord Dashboard';
    if (title) title.textContent = 'Landlord Sign In';
  }
}

function handleTenantQuickLogin() {
  const phone = document.getElementById('auth-phone')?.value || '+254 712 345 678';
  store.currentUser = {
    name: 'Sarah K.',
    role: 'tenant',
    phone: phone,
    isApproved: false,
    isDemo: false
  };
  try {
    localStorage.setItem('avenur_current_user', JSON.stringify(store.currentUser));
  } catch (e) {}
  updateHeaderAuthDisplay();
  closeAllModals();
  showToast('Signed in successfully as Tenant.');
}

function handleDemoLogin(role) {
  if (role === 'landlord') {
    store.currentUser = {
      name: 'David M. (Verified Landlord)',
      email: 'david@apexrentals.co.ke',
      phone: '+254 798 792 730',
      role: 'landlord',
      isApproved: true,
      isDemo: true
    };
    try {
      localStorage.setItem('avenur_current_user', JSON.stringify(store.currentUser));
    } catch (e) {}
    updateHeaderAuthDisplay();
    closeAllModals();
    showToast('Signed in as Approved Demo Landlord.');
    renderLandlordTable();
    navigateTo('landlord');
  } else {
    store.currentUser = {
      name: 'Sarah K. (Demo Tenant)',
      role: 'tenant',
      phone: '+254 712 345 678',
      isApproved: false,
      isDemo: true
    };
    try {
      localStorage.setItem('avenur_current_user', JSON.stringify(store.currentUser));
    } catch (e) {}
    updateHeaderAuthDisplay();
    closeAllModals();
    showToast('Signed in as Demo Tenant.');
  }
}

function handleHeaderAuthClick() {
  if (store.currentUser && store.currentUser.role === 'landlord') {
    navigateTo('landlord');
  } else {
    openAuthModal();
  }
}

function handleLandlordAddListingClick() {
  if (!store.currentUser || store.currentUser.role === 'tenant') {
    showToast('🔒 Landlord sign-in required to post listings.');
    openAuthModal();
    switchAuthTab('landlord');
    return;
  }
  if (!store.currentUser.isApproved) {
    showToast('⏳ Your account is pending verification. Only approved landlords can post.');
    return;
  }
  openAddListingModal();
}

async function handleSignOut() {
  const sb = getSupabaseClient();
  if (sb) {
    try { await sb.auth.signOut(); } catch (e) {}
  }
  store.currentUser = null;
  try {
    localStorage.removeItem('avenur_current_user');
  } catch (e) {}
  updateHeaderAuthDisplay();
  showToast('Signed out successfully.');
  renderLandlordTable();
  navigateTo('home');
}

function updateHeaderAuthDisplay() {
  const btn = document.getElementById('header-auth-btn');
  if (!btn) return;
  if (isAdmin()) {
    btn.innerHTML = `🛡️ Admin Desk`;
    btn.title = `Signed in as Master Admin (${store.currentUser.email}). Click to view Landlord Approvals Desk.`;
    btn.onclick = () => {
      navigateTo('landlord');
      switchDashboardTab('admin-approvals');
    };
  } else if (store.currentUser && store.currentUser.role === 'landlord') {
    const firstName = store.currentUser.name ? store.currentUser.name.split(' ')[0] : 'Landlord';
    btn.innerHTML = `👤 ${firstName} ${store.currentUser.isApproved ? '✓' : '(Pending)'}`;
    btn.title = `Signed in as ${store.currentUser.name || store.currentUser.email}. Click to view Landlord Portal.`;
    btn.onclick = () => navigateTo('landlord');
  } else if (store.currentUser && store.currentUser.role === 'tenant') {
    btn.innerHTML = `👤 ${store.currentUser.name || 'Tenant'}`;
    btn.title = 'Tenant Pass Active';
    btn.onclick = () => openAuthModal();
  } else {
    btn.innerHTML = `Sign in`;
    btn.onclick = () => openAuthModal();
  }
}

async function initSupabaseAuthAndData() {
  updateHeaderAuthDisplay();
  const sb = getSupabaseClient();
  if (!sb) return;

  try {
    // 1. Check existing session
    const { data: { session } } = await sb.auth.getSession();
    if (session && session.user) {
      const { data: profile } = await sb
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .maybeSingle();

      const isMasterAdmin = ADMIN_EMAILS.has((session.user.email || '').toLowerCase());
      store.currentUser = {
        id: session.user.id,
        email: session.user.email,
        name: profile?.full_name || session.user.user_metadata?.full_name || (isMasterAdmin ? 'Master Admin' : session.user.email.split('@')[0]),
        phone: profile?.phone || session.user.user_metadata?.phone || '',
        role: isMasterAdmin ? 'admin' : (profile?.role || 'landlord'),
        isApproved: isMasterAdmin ? true : (profile ? !!profile.is_approved : false),
        isDemo: false
      };
      try {
        localStorage.setItem('avenur_current_user', JSON.stringify(store.currentUser));
      } catch (e) {}

      if (isMasterAdmin && profile?.role !== 'admin') {
        try {
          await sb.from('profiles').update({ role: 'admin', is_approved: true }).eq('id', session.user.id);
        } catch (e) {}
      }

      updateHeaderAuthDisplay();
      if (store.currentView === 'landlord') renderLandlordTable();
    }

    // 2. Auth State Change Listener
    sb.auth.onAuthStateChange(async (event, session) => {
      if (session && session.user) {
        const { data: profile } = await sb
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .maybeSingle();

        const isMasterAdmin = ADMIN_EMAILS.has((session.user.email || '').toLowerCase());
        store.currentUser = {
          id: session.user.id,
          email: session.user.email,
          name: profile?.full_name || session.user.user_metadata?.full_name || (isMasterAdmin ? 'Master Admin' : session.user.email.split('@')[0]),
          phone: profile?.phone || session.user.user_metadata?.phone || '',
          role: isMasterAdmin ? 'admin' : (profile?.role || 'landlord'),
          isApproved: isMasterAdmin ? true : (profile ? !!profile.is_approved : false),
          isDemo: false
        };
        try {
          localStorage.setItem('avenur_current_user', JSON.stringify(store.currentUser));
        } catch (e) {}
      } else {
        if (store.currentUser && !store.currentUser.isDemo) {
          store.currentUser = null;
          try { localStorage.removeItem('avenur_current_user'); } catch (e) {}
        }
      }
      updateHeaderAuthDisplay();
      if (store.currentView === 'landlord') renderLandlordTable();
    });

    // 3. Fetch verified properties from Supabase
    const { data: dbProps, error } = await sb
      .from('properties')
      .select('*')
      .eq('status', 'available')
      .order('created_at', { ascending: false });

    if (!error && Array.isArray(dbProps) && dbProps.length > 0) {
      const mapped = dbProps.map(row => ({
        id: row.id,
        title: row.title,
        area: row.area,
        city: row.estate || 'Nairobi',
        price: Number(row.rent) || 30000,
        deposit: Number(row.deposit) || Number(row.rent) || 30000,
        period: 'month',
        type: row.bedrooms === '0' || row.bedrooms === 0 ? 'studio' : `${row.bedrooms}bed`,
        beds: isNaN(Number(row.bedrooms)) ? 2 : Number(row.bedrooms),
        baths: Number(row.bathrooms) || 1,
        parking: 1,
        floor: '2nd',
        rating: 9.8,
        reviewCount: 1,
        badge: 'Verified Live',
        verified: row.verified !== false,
        furnished: false,
        gated: true,
        distanceHint: 'Verified Location',
        description: row.title + ' — Audited and verified live on Avenur.',
        images: Array.isArray(row.photos) && row.photos.length > 0 ? row.photos : [
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&auto=format&fit=crop'
        ],
        amenities: Array.isArray(row.features) && row.features.length > 0 ? row.features : ['Water 24/7', 'Perimeter Security'],
        landlord: {
          name: row.landlord_name || 'Verified Property Owner',
          phone: row.landlord_phone || store.businessPhone,
          whatsapp: store.businessWhatsapp,
          caretaker: 'On-site caretaker',
          responseTime: 'Within 15 mins'
        },
        unitMix: [
          { type: `${row.bedrooms || 2} Bedroom`, size: '80 sqm', price: Number(row.rent), deposit: Number(row.deposit || row.rent), available: 1 }
        ]
      }));

      const dbIds = new Set(mapped.map(m => m.id));
      const remainingSeed = INITIAL_PROPERTIES.filter(p => !dbIds.has(p.id));
      store.properties = [...mapped, ...remainingSeed];

      renderCatalog();
      renderFeaturedCarousel();
      if (store.currentView === 'landlord') renderLandlordTable();
    }
  } catch (err) {
    console.warn("Supabase fetch error:", err);
  }
}

function openAuthModal() {
  const modal = document.getElementById('modal-auth');
  if (modal) modal.classList.add('active');
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

function openAlertsModal(prefillArea = '', prefillBeds = '', prefillBudget = '') {
  const modal = document.getElementById('modal-alerts');
  if (!modal) return;
  const areaInput = document.getElementById('alert-area');
  const budgetInput = document.getElementById('alert-budget');
  if (areaInput && prefillArea) areaInput.value = prefillArea.replace(/,\s*Kenya/gi, '').trim();
  if (budgetInput && prefillBudget && prefillBudget < 200000) budgetInput.value = prefillBudget;
  modal.classList.add('active');
}

async function broadcastToTelegramChannel(p) {
  if (!store.telegramBotToken || !store.telegramChannelUsername) return;
  const botToken = store.telegramBotToken;
  const chatId = store.telegramChannelUsername;
  
  const rentStr = `KES ${p.price.toLocaleString()} / ${p.period}`;
  const specsStr = `${p.beds === 0 ? 'Studio / Bedsitter' : p.beds + ' Bedroom'} · ${p.baths || 1} Bath`;
  const siteUrl = `https://avenurliving.co.ke/#/detail/${p.id}`;
  
  const messageText = `🔥 *NEW VERIFIED LISTING ALERT!* 🔥\n\n` +
    `🏡 *${p.title}*\n` +
    `📍 *Location:* ${p.area}, ${p.city || 'Nairobi'}\n` +
    `💰 *Rent:* ${rentStr}\n` +
    `🛏️ *Layout:* ${specsStr}\n` +
    `🛡️ *Verification:* 100% Physically Audited · Zero Advance Viewing Fees\n\n` +
    `🔗 *View Photos & Direct Landlord Number:*\n` +
    `${siteUrl}`;
    
  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: 'Markdown'
      })
    });
    const data = await res.json();
    if (data.ok) {
      showToast("📢 Broadcasted live to Telegram Channel @avenurliving!");
    } else {
      console.log('Telegram broadcast notice:', data);
    }
  } catch (err) {
    console.log('Telegram broadcast attempt:', err);
  }
}

// ==========================================
// 14. PROGRAMMATIC SEO (pSEO) ROUTING & RENDERING ENGINE
// ==========================================
const PSEO_KNOWLEDGE_BASE = {
  areas: {
    ruaka: {
      name: "Ruaka",
      county: "Kiambu / Greater Nairobi",
      avgRent: "KES 14,200",
      avgRentSub: "Bedsitters & Studios",
      depositStandard: "1 Month Strict",
      depositSub: "Escrow Protected",
      waterRating: "98% Borehole",
      waterSub: "Non-stop private supply",
      commute: "25 min to Westlands",
      commuteSub: "Northern Bypass corridor",
      guideTips: [
        {
          title: "Water & Borehole Reliability",
          desc: "Unlike older Nairobi suburbs on municipal rationing, Ruaka developments rely predominantly on dedicated private boreholes with large rooftop reserves. Water rationing is virtually non-existent in vetted buildings."
        },
        {
          title: "Electricity Token Transparency",
          desc: "Every audited Avenur property in Ruaka features individual prepaid KPLC sub-meters. You never share split bills or face sudden arbitrary utility surcharges from caretakers."
        },
        {
          title: "Express Transit & Commute",
          desc: "Direct access to the Northern Bypass connects Ruaka to Westlands in 20-25 mins and Gigiri / UN complex in 15 mins. Matatu route 106 operates frequent 24-hour service from Nairobi CBD."
        }
      ],
      related: [
        { title: "Bedsitters in Ruaka under 15k", slug: "bedsitters-in-ruaka-under-15k" },
        { title: "1 bedroom apartments in Ruaka under 20k", slug: "1-bedroom-apartments-in-ruaka-under-20k" },
        { title: "2 bedroom apartments in Ruaka with borehole", slug: "2-bedroom-apartments-in-ruaka-with-borehole" },
        { title: "Modern studios near Two Rivers Mall", slug: "modern-studios-near-two-rivers-mall" }
      ]
    },
    kilimani: {
      name: "Kilimani",
      county: "Nairobi",
      avgRent: "KES 65,000",
      avgRentSub: "2 Bedroom Units",
      depositStandard: "1 Month Rent",
      depositSub: "Strict Landlord Escrow",
      waterRating: "96% Borehole + NCWSC",
      waterSub: "Dual-source backup",
      commute: "10 min to CBD / Upper Hill",
      commuteSub: "Argwings Kodhek corridor",
      guideTips: [
        {
          title: "Borehole Filtration & Pressure",
          desc: "Audited Kilimani properties feature on-site treatment plants and backup pump generators, overcoming local municipal rationing. Pressure is verified at all taps before listing."
        },
        {
          title: "Power Backup Standard",
          desc: "Prime 2 and 3-bedroom complexes feature automatic-switch soundproof generators powering both internal sockets and common elevators during grid downtime."
        },
        {
          title: "Security & Accessibility",
          desc: "Controlled biometric access, 24/7 security guards, electric boundary fencing, and quick access to Yaya Centre, Adlife Plaza, and major international schools."
        }
      ],
      related: [
        { title: "2 bedroom apartments in Kilimani with borehole", slug: "2-bedroom-apartments-in-kilimani-with-borehole" },
        { title: "3 bedroom apartments in Kilimani with pool", slug: "3-bedroom-apartments-in-kilimani-with-pool" },
        { title: "Furnished apartments in Kilimani for short stay", slug: "furnished-apartments-in-kilimani-for-short-stay" },
        { title: "1 bedroom apartments in Kilimani under 45k", slug: "1-bedroom-apartments-in-kilimani-under-45k" }
      ]
    },
    westlands: {
      name: "Westlands",
      county: "Nairobi",
      avgRent: "KES 5,500/night",
      avgRentSub: "Furnished Short Stay",
      depositStandard: "Zero Deposit Daily",
      depositSub: "Instant Card / M-Pesa",
      waterRating: "100% Pressurized",
      waterSub: "Full borehole + generator",
      commute: "Walking to Tech Hubs",
      commuteSub: "Expressway to JKIA in 15m",
      guideTips: [
        {
          title: "Short Stay Turnkey Amenities",
          desc: "All furnished suites include 100 Mbps fiber internet, smart streaming TV, hotel-grade linens, fully equipped kitchens, and complimentary housekeeping."
        },
        {
          title: "Borehole & Continuous Backup",
          desc: "Zero disruption guarantee: industrial boreholes with multi-stage reverse osmosis filtration and full standby generators keep power and hot water running uninterrupted."
        },
        {
          title: "Nightlife & Commercial Proximity",
          desc: "Prime positioning along Rhapta, Mpaka, and Woodvale Grove. Steps away from Sarit Centre, Westgate, and top dining spots."
        }
      ],
      related: [
        { title: "Furnished apartments in Westlands for short stay", slug: "furnished-apartments-in-westlands-for-short-stay" },
        { title: "2 bedroom executive apartments in Westlands", slug: "2-bedroom-executive-apartments-in-westlands" },
        { title: "Serviced studios in Westlands under 60k", slug: "serviced-studios-in-westlands-under-60k" },
        { title: "Luxury penthouses in Westlands with pool", slug: "luxury-penthouses-in-westlands-with-pool" }
      ]
    },
    syokimau: {
      name: "Syokimau",
      county: "Machakos / Nairobi Border",
      avgRent: "KES 24,000",
      avgRentSub: "Modern 1 Bedroom",
      depositStandard: "1 Month Rent",
      depositSub: "Direct Owner Lease",
      waterRating: "94% Borehole",
      waterSub: "Mavoko water backup",
      commute: "15 min to JKIA / SGR",
      commuteSub: "Expressway link",
      guideTips: [
        {
          title: "SGR & Airport Commuters",
          desc: "Ideal for aviation staff and frequent regional travelers. Gateway Mall and Nairobi Expressway access allow bypass of Mombasa Road traffic."
        },
        {
          title: "Modern Finishes & Spacious Balconies",
          desc: "Recently constructed developments boast wider floor plans, dedicated laundry yards, and master en-suite layouts at 40% lower rent than inner Nairobi."
        }
      ],
      related: [
        { title: "1 bedroom apartments in Syokimau under 25k", slug: "1-bedroom-apartments-in-syokimau-under-25k" },
        { title: "2 bedroom master ensuite in Syokimau under 35k", slug: "2-bedroom-master-ensuite-in-syokimau-under-35k" }
      ]
    },
    lavington: {
      name: "Lavington",
      county: "Nairobi",
      avgRent: "KES 140,000",
      avgRentSub: "4BR Gated Townhouses",
      depositStandard: "1-2 Months",
      depositSub: "Formal Lease Agreement",
      waterRating: "99% High-Yield Borehole",
      waterSub: "Solar water heating",
      commute: "15 min to Westlands / CBD",
      commuteSub: "James Gichuru corridor",
      guideTips: [
        {
          title: "Private Compounds & Security",
          desc: "Audited Lavington townhouses feature private fenced gardens, detached DSQs (Domestic Staff Quarters), UN-approved security standards, and perimeter barrier beams."
        }
      ],
      related: [
        { title: "Lavington 4BR townhouse with garden", slug: "lavington-4br-townhouse-with-garden" },
        { title: "Modern 3BR apartments in Lavington under 90k", slug: "modern-3br-apartments-in-lavington-under-90k" }
      ]
    },
    karen: {
      name: "Karen",
      county: "Nairobi",
      avgRent: "KES 70,000",
      avgRentSub: "Furnished Country Suite",
      depositStandard: "1 Month Rent",
      depositSub: "Direct Landlord",
      waterRating: "98% Clean Spring Borehole",
      waterSub: "Filtered country water",
      commute: "20 min to Upper Hill",
      commuteSub: "Southern Bypass link",
      guideTips: [
        {
          title: "Serenity & Green Canopy",
          desc: "Surrounded by lush indigenous trees, birdsong, and horseback trails. Features parquet flooring, wood-burning fireplaces, and mature private grounds."
        }
      ],
      related: [
        { title: "Karen 2 bedroom country suite furnished", slug: "karen-2-bedroom-country-suite-furnished" },
        { title: "Cottages for rent in Karen Nairobi", slug: "cottages-for-rent-in-karen-nairobi" }
      ]
    },
    nyali: {
      name: "Nyali",
      county: "Mombasa Coast",
      avgRent: "KES 6,500/night",
      avgRentSub: "Beachfront Villa",
      depositStandard: "Zero Deposit Daily",
      depositSub: "Card / M-Pesa",
      waterRating: "95% Desalinated Borehole",
      waterSub: "Continuous pressure",
      commute: "5 min walk to Nyali Beach",
      commuteSub: "Links Road access",
      guideTips: [
        {
          title: "Coastal Holiday & Workation",
          desc: "Air-conditioned ocean-breeze retreats equipped with high-speed Wi-Fi, swimming pool access, and walking distance to Nyali Beach and City Mall."
        }
      ],
      related: [
        { title: "Nyali ocean view villas short stay", slug: "nyali-ocean-view-villas-short-stay" },
        { title: "Furnished apartments in Nyali Mombasa", slug: "furnished-apartments-in-nyali-mombasa" }
      ]
    },
    cbd: {
      name: "CBD",
      county: "Nairobi Central",
      avgRent: "KES 15,000",
      avgRentSub: "City Bedsitters",
      depositStandard: "1 Month Rent",
      depositSub: "Building Management",
      waterRating: "92% Rooftop Storage",
      waterSub: "Tank automated pump",
      commute: "0 min - Walk to Work",
      commuteSub: "Zero Matatu expenses",
      guideTips: [
        {
          title: "Walk-to-Work Economy",
          desc: "Save up to KES 8,000 per month on daily commuter fares. Secure buildings with biometric elevator access and CCTV surveillance."
        }
      ],
      related: [
        { title: "Affordable bedsitters in Nairobi CBD under 15k", slug: "affordable-bedsitters-in-nairobi-cbd-under-12k" },
        { title: "1 bedroom apartments in Nairobi CBD", slug: "1-bedroom-apartments-in-nairobi-cbd" }
      ]
    }
  }
};

function parseSeoSlug(rawSlug) {
  const clean = (rawSlug || 'bedsitters-in-ruaka-under-15k').toLowerCase().replace(/^#\/rentals\//, '').replace(/^\//, '');
  
  // 1. Identify Area
  let areaKey = 'ruaka';
  let areaName = 'Ruaka';
  if (clean.includes('ruaka')) { areaKey = 'ruaka'; areaName = 'Ruaka'; }
  else if (clean.includes('kilimani')) { areaKey = 'kilimani'; areaName = 'Kilimani'; }
  else if (clean.includes('westlands')) { areaKey = 'westlands'; areaName = 'Westlands'; }
  else if (clean.includes('syokimau')) { areaKey = 'syokimau'; areaName = 'Syokimau'; }
  else if (clean.includes('lavington')) { areaKey = 'lavington'; areaName = 'Lavington'; }
  else if (clean.includes('karen')) { areaKey = 'karen'; areaName = 'Karen'; }
  else if (clean.includes('nyali')) { areaKey = 'nyali'; areaName = 'Nyali'; }
  else if (clean.includes('cbd')) { areaKey = 'cbd'; areaName = 'CBD'; }

  const areaMeta = PSEO_KNOWLEDGE_BASE.areas[areaKey] || PSEO_KNOWLEDGE_BASE.areas.ruaka;

  // 2. Identify Beds / Type
  let beds = null;
  let type = null;
  let typeLabel = 'Apartments & Rentals';

  if (clean.includes('bedsitter') || clean.includes('bedsitters')) {
    beds = 0;
    type = 'bedsitter';
    typeLabel = 'Bedsitters';
  } else if (clean.includes('studio') || clean.includes('studios')) {
    beds = 0;
    type = 'studio';
    typeLabel = 'Modern Studios';
  } else if (clean.includes('1-bedroom') || clean.includes('1-bed') || clean.includes('1br') || clean.includes('1 bedroom')) {
    beds = 1;
    type = '1bed';
    typeLabel = '1 Bedroom Apartments';
  } else if (clean.includes('2-bedroom') || clean.includes('2-bed') || clean.includes('2br') || clean.includes('2 bedroom')) {
    beds = 2;
    type = '2bed';
    typeLabel = '2 Bedroom Apartments';
  } else if (clean.includes('3-bedroom') || clean.includes('3-bed') || clean.includes('3br') || clean.includes('3 bedroom')) {
    beds = 3;
    type = '3bed';
    typeLabel = '3 Bedroom Apartments';
  } else if (clean.includes('4-bedroom') || clean.includes('4br') || clean.includes('townhouse') || clean.includes('4 bedroom')) {
    beds = 4;
    type = '4bed';
    typeLabel = '4 Bedroom Townhouses';
  } else if (clean.includes('villa') || clean.includes('villas')) {
    type = 'bnb';
    typeLabel = 'Ocean Villas & Stays';
  }

  // 3. Price Limit
  let maxPrice = null;
  const priceMatch = clean.match(/under-(\d+)(k|m)?/);
  if (priceMatch) {
    let num = parseInt(priceMatch[1], 10);
    const unit = priceMatch[2];
    if (unit === 'k') num *= 1000;
    else if (unit === 'm') num *= 1000000;
    maxPrice = num;
  }

  // 4. Feature and Amenity flags
  const requiresBorehole = clean.includes('borehole');
  const requiresGenerator = clean.includes('generator');
  const requiresGarden = clean.includes('garden');
  const requiresPool = clean.includes('pool');
  const requiresFurnished = clean.includes('furnished');
  const isShortStay = clean.includes('short-stay') || clean.includes('shortstay') || clean.includes('daily');

  // Human Readable Title
  let h1 = '';
  if (type === 'bedsitter') {
    h1 = `Verified Bedsitters in ${areaName}`;
  } else if (type === 'studio') {
    h1 = `Audited Studios in ${areaName}`;
  } else if (beds !== null && beds > 0) {
    h1 = `Verified ${beds} Bedroom Apartments in ${areaName}`;
  } else if (requiresFurnished) {
    h1 = `Furnished Apartments in ${areaName}`;
  } else {
    h1 = `Verified Rental Properties in ${areaName}`;
  }

  if (requiresBorehole) h1 += ` with Borehole Backup`;
  if (requiresGarden) h1 += ` with Private Garden`;
  if (requiresPool) h1 += ` with Swimming Pool`;
  if (isShortStay) h1 += ` for Short Stay`;
  if (maxPrice) h1 += ` Under KES ${maxPrice.toLocaleString()}`;

  const metaDesc = `Find authentic, 100% physically inspected ${typeLabel.toLowerCase()} in ${areaName}, ${areaMeta.county}. Guaranteed reliable water supply, prepaid electricity tokens, zero hidden agent fees, and direct verified landlord contacts.`;

  return {
    slug: clean,
    areaKey,
    areaName,
    areaMeta,
    beds,
    type,
    typeLabel,
    maxPrice,
    requiresBorehole,
    requiresGenerator,
    requiresGarden,
    requiresPool,
    requiresFurnished,
    isShortStay,
    h1,
    metaDesc
  };
}

function renderPseoPage(slug) {
  store.currentPseoSlug = slug;
  const parsed = parseSeoSlug(slug);

  // 1. Update Document Title
  document.title = `${parsed.h1} | Avenur Verified Rentals Kenya`;

  // 2. Breadcrumbs
  const crumbArea = document.getElementById('pseo-crumb-area');
  const crumbQuery = document.getElementById('pseo-crumb-query');
  if (crumbArea) crumbArea.textContent = `${parsed.areaName}, Kenya`;
  if (crumbQuery) crumbQuery.textContent = parsed.typeLabel;

  // 3. Hero Banner
  const h1El = document.getElementById('pseo-h1');
  const descEl = document.getElementById('pseo-desc');
  if (h1El) h1El.textContent = parsed.h1;
  if (descEl) descEl.textContent = parsed.metaDesc;

  // 4. Market Insights Summary Grid
  const insightsGrid = document.getElementById('pseo-insights-grid');
  if (insightsGrid) {
    insightsGrid.innerHTML = `
      <div class="insight-metric-item">
        <span class="insight-label">Average Rent (${parsed.areaName})</span>
        <span class="insight-val" style="color:#4F46E5;">${parsed.areaMeta.avgRent}</span>
        <span class="insight-sub">${parsed.areaMeta.avgRentSub}</span>
      </div>
      <div class="insight-metric-item">
        <span class="insight-label">Security Deposit Standard</span>
        <span class="insight-val">${parsed.areaMeta.depositStandard}</span>
        <span class="insight-sub">${parsed.areaMeta.depositSub}</span>
      </div>
      <div class="insight-metric-item">
        <span class="insight-label">Water Supply Reliability</span>
        <span class="insight-val" style="color:#059669;">${parsed.areaMeta.waterRating}</span>
        <span class="insight-sub">${parsed.areaMeta.waterSub}</span>
      </div>
      <div class="insight-metric-item">
        <span class="insight-label">Transit & Commute</span>
        <span class="insight-val">${parsed.areaMeta.commute}</span>
        <span class="insight-sub">${parsed.areaMeta.commuteSub}</span>
      </div>
    `;
  }

  // 5. Query Properties Database Dynamically
  const allProps = store.properties;
  const matched = allProps.filter(p => {
    // Area match
    const areaMatch = p.area.toLowerCase() === parsed.areaName.toLowerCase();
    if (!areaMatch) return false;

    // Bed match
    if (parsed.beds !== null && p.beds !== parsed.beds) {
      if (!(parsed.type === 'bedsitter' && (p.type === 'bedsitter' || p.type === 'studio'))) {
        return false;
      }
    }

    // Price match (for monthly or nightly)
    if (parsed.maxPrice !== null && p.price > parsed.maxPrice) {
      return false;
    }

    // Borehole match
    if (parsed.requiresBorehole) {
      const hasBorehole = p.amenities && p.amenities.some(a => 
        a.toLowerCase().includes('borehole') || a.toLowerCase().includes('water 24/7')
      );
      if (!hasBorehole) return false;
    }

    // Furnished match
    if (parsed.requiresFurnished && !p.furnished) {
      return false;
    }

    // Short stay match
    if (parsed.isShortStay && p.period !== 'night' && p.type !== 'bnb' && !p.furnished) {
      return false;
    }

    return true;
  });

  const resultsGrid = document.getElementById('pseo-results-grid');
  const fallbackBox = document.getElementById('pseo-concierge-fallback');
  const resultsCount = document.getElementById('pseo-results-count');
  const resultsTitle = document.getElementById('pseo-results-title');

  if (resultsTitle) resultsTitle.textContent = `Verified Matching Units in ${parsed.areaName}`;

  if (matched.length > 0) {
    if (resultsCount) resultsCount.textContent = `Found ${matched.length} audited listing${matched.length > 1 ? 's' : ''} with 100% physical field verification in ${parsed.areaName}`;
    if (resultsGrid) {
      resultsGrid.style.display = 'grid';
      resultsGrid.innerHTML = matched.map(p => renderPropertyCard(p, 'grid')).join('');
    }
    if (fallbackBox) fallbackBox.style.display = 'none';
  } else {
    // 0 Matches (or Day-0 Mode) - Display Zero-Ghost Hand-Audit Concierge Card!
    if (resultsCount) resultsCount.textContent = `0 public listings currently live that passed our strict physical verification.`;
    if (resultsGrid) {
      resultsGrid.style.display = 'none';
      resultsGrid.innerHTML = '';
    }
    if (fallbackBox) {
      fallbackBox.style.display = 'block';
      fallbackBox.innerHTML = `
        <div class="concierge-match-card" style="margin-top:0;">
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.75rem;">
            <span class="pseo-badge-pill pseo-badge-emerald">Zero Ghost Guarantee</span>
            <span class="pseo-badge-pill pseo-badge-indigo">${parsed.areaName} Concierge Desk</span>
          </div>
          <h3 style="font-size:1.4rem; font-weight:800; color:#FFFFFF; margin-bottom:0.5rem;">
            Looking for ${parsed.h1}?
          </h3>
          <p style="color:#E2E8F0; font-size:0.925rem; line-height:1.6; max-width:680px; margin-bottom:1.5rem;">
            We strictly refuse to publish outdated, fake, or unverified landlord listings. Our on-the-ground team is actively verifying rental properties in ${parsed.areaName} this week. Request a <strong>free, direct landlord match</strong> with zero viewing fee.
          </p>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <button class="btn btn-primary" style="background:#10B981; border-color:#10B981;" onclick="openConciergeModal('${parsed.areaName} - ${parsed.h1}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Request Free WhatsApp Match in ${parsed.areaName}</span>
            </button>
            <button class="btn btn-outline" style="border-color:rgba(255,255,255,0.3); color:#FFFFFF;" onclick="store.filters.area='${parsed.areaName}'; navigateTo('catalog');">
              Browse All ${parsed.areaName} Units
            </button>
          </div>
        </div>
      `;
    }
  }

  // 6. Tenant Advisory Report
  const guideContent = document.getElementById('pseo-guide-content');
  if (guideContent) {
    guideContent.innerHTML = parsed.areaMeta.guideTips.map(tip => `
      <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:1.25rem;">
        <h4 style="font-size:0.95rem; font-weight:800; color:#0F172A; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.4rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${tip.title}</span>
        </h4>
        <p style="font-size:0.875rem; color:#475569; margin:0; line-height:1.55;">${tip.desc}</p>
      </div>
    `).join('');
  }

  // 7. Related Keyword Cloud
  const relatedWrap = document.getElementById('pseo-related-pills');
  if (relatedWrap) {
    relatedWrap.innerHTML = parsed.areaMeta.related.map(item => `
      <button type="button" class="related-seo-pill" onclick="navigateToPseo('${item.slug}')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <span>${item.title}</span>
      </button>
    `).join('');
  }
}

function navigateToPseo(slug) {
  window.location.hash = `#/rentals/${slug}`;
  navigateTo('pseo', null, slug);
}

function handleHashRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#/rentals/')) {
    const slug = hash.replace('#/rentals/', '').trim();
    if (slug) {
      navigateTo('pseo', null, slug);
    }
  } else if (hash === '#/catalog') {
    navigateTo('catalog');
  } else if (hash === '#/landlord') {
    navigateTo('landlord');
  }
}

// ==========================================
// 15. EVENT LISTENERS & BOOTSTRAP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Navigation Bar Click handlers
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(el.dataset.nav);
    });
  });

  // Hero init
  initHeroSlideshow();

  // Accordions init
  initAccordions();

  // Floating Search Form handler
  const heroSearchForm = document.getElementById('hero-search-form');
  if (heroSearchForm) {
    heroSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const loc = document.getElementById('search-location-input')?.value || '';
      const type = document.getElementById('search-type-select')?.value || '';
      const budget = document.getElementById('search-budget-select')?.value || '200000';

      store.filters.area = loc;
      store.filters.type = type;
      store.filters.maxPrice = parseInt(budget, 10);

      navigateTo('catalog');
    });
  }

  // Catalog Filter Events
  const areaInput = document.getElementById('filter-area-input');
  if (areaInput) {
    areaInput.addEventListener('input', (e) => {
      store.filters.area = e.target.value;
      renderCatalog();
    });
  }

  const priceSlider = document.getElementById('filter-price-slider');
  const priceVal = document.getElementById('filter-price-val');
  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      store.filters.maxPrice = val;
      if (priceVal) priceVal.textContent = `Up to KES ${val.toLocaleString()}`;
      renderCatalog();
    });
  }

  // Type chips
  document.querySelectorAll('.filter-chip[data-type]').forEach(chip => {
    chip.addEventListener('click', () => {
      const isSelected = chip.classList.contains('active');
      document.querySelectorAll('.filter-chip[data-type]').forEach(c => c.classList.remove('active'));
      if (!isSelected) {
        chip.classList.add('active');
        store.filters.type = chip.dataset.type;
      } else {
        store.filters.type = '';
      }
      renderCatalog();
    });
  });

  // Bedroom chips
  document.querySelectorAll('.filter-chip[data-bed]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-bed]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      store.filters.bedrooms = chip.dataset.bed;
      renderCatalog();
    });
  });

  // Toggles
  const verifiedToggle = document.getElementById('filter-toggle-verified');
  if (verifiedToggle) {
    verifiedToggle.addEventListener('change', (e) => {
      store.filters.verifiedOnly = e.target.checked;
      renderCatalog();
    });
  }

  const furnishedToggle = document.getElementById('filter-toggle-furnished');
  if (furnishedToggle) {
    furnishedToggle.addEventListener('change', (e) => {
      store.filters.furnishedOnly = e.target.checked;
      renderCatalog();
    });
  }

  const gatedToggle = document.getElementById('filter-toggle-gated');
  if (gatedToggle) {
    gatedToggle.addEventListener('change', (e) => {
      store.filters.gatedOnly = e.target.checked;
      renderCatalog();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      store.filters.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // View Mode Switches
  const btnGrid = document.getElementById('btn-view-grid');
  const btnList = document.getElementById('btn-view-list');
  if (btnGrid && btnList) {
    btnGrid.addEventListener('click', () => {
      store.viewMode = 'grid';
      btnGrid.classList.add('active');
      btnList.classList.remove('active');
      renderCatalog();
    });
    btnList.addEventListener('click', () => {
      store.viewMode = 'list';
      btnList.classList.add('active');
      btnGrid.classList.remove('active');
      renderCatalog();
    });
  }

  // Modal Closers
  document.querySelectorAll('.modal-close-trigger').forEach(el => {
    el.addEventListener('click', closeAllModals);
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });

  // Drawer Closers
  const drawerOverlay = document.getElementById('saved-drawer-overlay');
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) closeDrawer();
    });
  }

  // Schedule Tour Form Submit
  const scheduleForm = document.getElementById('form-schedule-tour');
  if (scheduleForm) {
    scheduleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeAllModals();
      showToast("📅 Viewing appointment requested! Landlord notified.");
    });
  }

  // Report Form Submit
  const reportForm = document.getElementById('form-report-listing');
  if (reportForm) {
    reportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeAllModals();
      showToast("🛡️ Report received. Avenur verification team will audit within 24h.");
    });
  }

  // Add Listing Form Submit (With Supabase Cloud Persistence & Telegram Broadcast)
  const addListingForm = document.getElementById('form-add-listing');
  if (addListingForm) {
    addListingForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!store.currentUser || !store.currentUser.isApproved) {
        showToast("⚠️ Only approved landlords can publish live properties.");
        return;
      }

      const title = document.getElementById('new-prop-title')?.value || 'Modern Urban Apartment';
      const area = document.getElementById('new-prop-area')?.value || 'Kilimani';
      const city = document.getElementById('new-prop-city')?.value || 'Nairobi';
      const price = parseInt(document.getElementById('new-prop-price')?.value || '35000', 10);
      const beds = parseInt(document.getElementById('new-prop-beds')?.value || '2', 10);
      const baths = parseInt(document.getElementById('new-prop-baths')?.value || '1', 10);
      const desc = document.getElementById('new-prop-desc')?.value || 'Recently completed modern rental home.';

      const newListing = {
        id: `avenur-custom-${Date.now()}`,
        title,
        area,
        city,
        price,
        deposit: price,
        period: "month",
        type: beds === 0 ? "studio" : `${beds}bed`,
        beds,
        baths,
        parking: 1,
        floor: "3rd",
        rating: 9.5,
        reviewCount: 1,
        badge: "New",
        verified: true,
        furnished: false,
        gated: true,
        distanceHint: "Prime location",
        description: desc,
        images: [
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop"
        ],
        amenities: ["Water 24/7", "Perimeter Security", "CCTV", "Balcony"],
        landlord: {
          name: store.currentUser.name || "Verified Landlord",
          phone: store.currentUser.phone || store.businessPhone,
          whatsapp: store.businessWhatsapp,
          caretaker: "Caretaker on-call",
          responseTime: "Instant"
        },
        unitMix: [
          { type: `${beds} Bedroom Unit`, size: "75 sqm", price, deposit: price, available: 1 }
        ]
      };

      // Try saving to Supabase if logged in with real account
      const sb = getSupabaseClient();
      if (sb && store.currentUser && store.currentUser.id && !store.currentUser.isDemo) {
        try {
          const { error } = await sb.from('properties').insert([{
            id: newListing.id,
            title: newListing.title,
            area: newListing.area,
            estate: newListing.city,
            rent: newListing.price,
            deposit: newListing.deposit,
            bedrooms: String(newListing.beds),
            bathrooms: newListing.baths,
            type: newListing.type,
            features: newListing.amenities,
            photos: newListing.images,
            verified: true,
            watermark: 'Avenur Verified · 0798792730',
            landlord_name: newListing.landlord.name,
            landlord_phone: newListing.landlord.phone,
            status: 'available'
          }]);
          if (error) console.warn("Supabase insert warning:", error);
        } catch (err) {
          console.warn("Supabase insert error:", err);
        }
      }

      store.addListing(newListing);
      broadcastToTelegramChannel(newListing);
      closeAllModals();
    });
  }

  // Landlord Supabase Auth Form Submit (Login & Register)
  const landlordAuthForm = document.getElementById('form-landlord-auth');
  if (landlordAuthForm) {
    landlordAuthForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('landlord-email')?.value.trim();
      const password = document.getElementById('landlord-password')?.value;
      const sb = getSupabaseClient();

      if (!sb) {
        showToast("⚠️ Database client initializing. Please try again.");
        return;
      }

      if (landlordAuthMode === 'signin') {
        const submitBtn = document.getElementById('btn-landlord-auth-submit');
        if (submitBtn) submitBtn.disabled = true;
        showToast("Signing in to Supabase...");

        const { data, error } = await sb.auth.signInWithPassword({ email, password });
        if (submitBtn) submitBtn.disabled = false;

        if (error) {
          showToast("❌ " + error.message);
          return;
        }

        // Fetch landlord profile
        const { data: profile } = await sb
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .maybeSingle();

        const isMaster = ADMIN_EMAILS.has((data.user.email || '').toLowerCase());
        store.currentUser = {
          id: data.user.id,
          email: data.user.email,
          name: profile?.full_name || (isMaster ? 'Master Admin' : data.user.email.split('@')[0]),
          phone: profile?.phone || '',
          role: isMaster ? 'admin' : (profile?.role || 'landlord'),
          isApproved: isMaster ? true : (profile ? !!profile.is_approved : false),
          isDemo: false
        };

        if (isMaster && profile?.role !== 'admin') {
          try {
            await sb.from('profiles').update({ role: 'admin', is_approved: true }).eq('id', data.user.id);
          } catch(e) {}
        }

        try {
          localStorage.setItem('avenur_current_user', JSON.stringify(store.currentUser));
        } catch (err) {}

        updateHeaderAuthDisplay();
        closeAllModals();
        showToast(isMaster ? `🛡️ Welcome back, Master Admin!` : `✅ Welcome back, ${store.currentUser.name}!`);
        renderLandlordTable();
        navigateTo('landlord');
        if (isMaster) switchDashboardTab('admin-approvals');
      } else {
        // Sign Up Mode
        const fullName = document.getElementById('landlord-fullname')?.value.trim() || 'Landlord';
        const phone = document.getElementById('landlord-phone')?.value.trim() || '';
        const submitBtn = document.getElementById('btn-landlord-auth-submit');
        if (submitBtn) submitBtn.disabled = true;

        showToast("Registering landlord account...");
        const { data, error } = await sb.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName, phone: phone }
          }
        });
        if (submitBtn) submitBtn.disabled = false;

        if (error) {
          showToast("❌ " + error.message);
          return;
        }

        // Insert pending profile
        const isMaster = ADMIN_EMAILS.has((email || '').toLowerCase());
        if (data?.user) {
          try {
            await sb.from('profiles').insert([{
              id: data.user.id,
              email: email,
              full_name: isMaster ? 'Master Admin' : fullName,
              phone: phone,
              role: isMaster ? 'admin' : 'landlord',
              is_approved: isMaster ? true : false
            }]);
          } catch (err) {
            console.warn("Profile insert notice:", err);
          }

          store.currentUser = {
            id: data.user.id,
            email: email,
            name: isMaster ? 'Master Admin' : fullName,
            phone: phone,
            role: isMaster ? 'admin' : 'landlord',
            isApproved: isMaster ? true : false,
            isDemo: false
          };
          try {
            localStorage.setItem('avenur_current_user', JSON.stringify(store.currentUser));
          } catch (err) {}
        }

        updateHeaderAuthDisplay();
        closeAllModals();
        showToast(isMaster ? "🛡️ Master Admin registered & activated!" : "📝 Registration received! Account pending admin approval under our Zero-Ghost policy.");
        renderLandlordTable();
        navigateTo('landlord');
        if (isMaster) switchDashboardTab('admin-approvals');
      }
    });
  }

  // Concierge Match Form Submit (With Sourcing Fee & WhatsApp Launch)
  const conciergeForm = document.getElementById('form-concierge-match');
  if (conciergeForm) {
    conciergeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('concierge-name')?.value || 'Tenant';
      const phone = document.getElementById('concierge-phone')?.value || '';
      const area = document.getElementById('concierge-area')?.value || 'Kilimani';
      const budget = document.getElementById('concierge-budget')?.value || '45000';
      const beds = document.getElementById('concierge-beds')?.value || '2bed';
      closeAllModals();
      showToast(`🎯 Verified match request received for ${area}! Zero viewing fee — flat KES 3,000 only payable upon lease signing.`);

      const waText = encodeURIComponent(`Hi Avenur, my name is ${name}. I have submitted a Concierge "Find It For Me" Request for a ${beds} in ${area} (Budget: KES ${budget}). I understand viewing is free and the KES 3,000 placement fee is only payable upon successful lease signing.`);
      setTimeout(() => {
        window.open(`https://wa.me/${store.businessWhatsapp}?text=${waText}`, '_blank');
      }, 500);
    });
  }

  // Tailored 1-on-1 Rental Alert Form Submit
  const tailoredAlertForm = document.getElementById('form-tailored-alert');
  if (tailoredAlertForm) {
    tailoredAlertForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const area = document.getElementById('alert-area')?.value || 'Nairobi';
      const beds = document.getElementById('alert-beds')?.value || '2 Bedrooms';
      const budget = document.getElementById('alert-budget')?.value || '45000';
      closeAllModals();
      showToast(`🔔 Direct WhatsApp alert activated for ${beds} in ${area} under KES ${budget}!`);

      const waText = encodeURIComponent(`Hi Avenur, please send me instant WhatsApp alerts when a verified ${beds} in ${area} under KES ${budget} is listed.`);
      setTimeout(() => {
        window.open(`https://wa.me/${store.businessWhatsapp}?text=${waText}`, '_blank');
      }, 400);
    });
  }

  // Landlord Photo Verification Audit Form Submit
  const photoAuditForm = document.getElementById('form-photo-audit');
  if (photoAuditForm) {
    photoAuditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const building = document.getElementById('audit-building-name')?.value || 'Your Property';
      closeAllModals();
      showToast(`📸 Free photography audit booked for ${building}! Verification team assigned.`);
    });
  }

  // Auth Tabs & Demo Login
  document.querySelectorAll('.auth-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Prototype HUD Hotspots
  document.querySelectorAll('.hud-pill[data-view]').forEach(pill => {
    pill.addEventListener('click', () => {
      navigateTo(pill.dataset.view);
    });
  });

  // Programmatic SEO URL Router listener
  window.addEventListener('hashchange', handleHashRoute);

  // Initial renders
  updateSavedCounters();
  renderCatalog();
  renderFeaturedCarousel();
  updateHeaderAuthDisplay();

  // Initialize Supabase Auth state & load live properties
  initSupabaseAuthAndData();

  // Check initial hash route (e.g. #/rentals/bedsitters-in-ruaka-under-15k)
  if (window.location.hash) {
    handleHashRoute();
  }
});

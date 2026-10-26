export interface TrainingProgram {
  id: string;
  title: string;
  shortDescription: string;
  tag: string;
  requiresConfirmation: boolean;
  image: string;
  rawImage?: string;
  isRealPhoto: boolean;
  features: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  rawImage?: string;
  badge: string;
  isRealPhoto: boolean;
}

export interface MembershipTier {
  id: string;
  name: string;
  duration: string;
  status: string;
  description: string;
  placeholderFeatures: string[];
}

export const STUDIO_DATA = {
  name: "Shivoham Fitness Studio",
  category: "Gym / Fitness Studio",
  location: {
    addressLine: "18/2, Kalikapur, Santoshpur",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700075",
    fullAddress: "18/2, Kalikapur, Santoshpur, Kolkata, West Bengal 700075",
    googleMapsQuery: "Shivoham Fitness Studio, Kalikapur, Santoshpur, Kolkata",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shivoham+Fitness+Studio+Kalikapur+Santoshpur+Kolkata",
    embedMapSrc: "https://maps.google.com/maps?q=Shivoham+Fitness+Studio+Kalikapur+Santoshpur+Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  contact: {
    phone: "083360 57826",
    phoneTel: "tel:08336057826",
    phoneRaw: "08336057826"
  },
  rating: {
    score: "4.8",
    reviewCount: 82,
    source: "Google Maps listing",
    verificationNote: "Supplied for demo purposes. Please verify before official launch."
  },
  disclaimer: {
    conceptNotice: "Website concept prepared for review by Shivoham Fitness Studio. This is an unofficial design draft. All unconfirmed services, schedules, and membership tiers are placeholders pending business verification."
  },
  photos: {
    teamWall: {
      url: "/assets/enhanced/team_wall_enhanced.webp",
      rawUrl: "/assets/aistudio/unnamed__3__c214f6c8.webp",
      title: "Shivoham Studio Identity & Community",
      caption: "Authentic studio photo featuring the illuminated Shivoham wall and fitness team in Kalikapur, Kolkata. Enhanced for clarity and sharpness.",
      isVerified: true
    },
    gymFloor: {
      url: "/assets/enhanced/gym_floor_enhanced.webp",
      rawUrl: "/assets/aistudio/unnamed__1__63ffee9f.webp",
      title: "Main Strength & Conditioning Floor",
      caption: "Interior view showing selectorized machines, cable towers, and training floor. Enhanced naturally for brightness and contrast.",
      isVerified: true
    },
    muralArt: {
      url: "/assets/enhanced/mural_art_enhanced.webp",
      rawUrl: "/assets/aistudio/unnamed_bfb168d1.webp",
      title: "Warrior Wall Mural & Coach",
      caption: "Iconic wall art inside Shivoham Fitness Studio representing strength, discipline, and focus. Enhanced for fine line detail.",
      isVerified: true
    },
    freeWeights: {
      url: "/assets/enhanced/free_weights_enhanced.webp",
      rawUrl: "/assets/aistudio/unnamed__2__b87be704.webp",
      title: "Free Weights & Resistance Section",
      caption: "Dumbbells, heavy plates, and upper body stations. Enhanced for metallic and texture definition.",
      isVerified: true
    }
  },
  trainingPrograms: [
    {
      id: "strength-training",
      title: "Strength Training",
      shortDescription: "Progressive resistance training focused on muscle development, bone density, and functional power.",
      tag: "Strength & Power",
      requiresConfirmation: true,
      image: "/assets/enhanced/free_weights_enhanced.webp",
      rawImage: "/assets/aistudio/unnamed__2__b87be704.webp",
      isRealPhoto: true,
      features: ["Progressive overload guidance", "Compound lifting stations", "Targeted muscle group focus"]
    },
    {
      id: "general-fitness",
      title: "General Fitness",
      shortDescription: "Holistic workouts combining cardiovascular endurance, flexibility, and daily stamina.",
      tag: "Conditioning & Stamina",
      requiresConfirmation: true,
      image: "/assets/enhanced/gym_floor_enhanced.webp",
      rawImage: "/assets/aistudio/unnamed__1__63ffee9f.webp",
      isRealPhoto: true,
      features: ["Cardiovascular conditioning", "Functional body movement", "Routine lifestyle balance"]
    },
    {
      id: "personal-training",
      title: "Personal Training",
      shortDescription: "One-on-one tailored coaching structured around individual health goals and body mechanics.",
      tag: "Custom Coaching",
      requiresConfirmation: true,
      image: "/assets/enhanced/team_wall_enhanced.webp",
      rawImage: "/assets/aistudio/unnamed__3__c214f6c8.webp",
      isRealPhoto: true,
      features: ["Individual form correction", "Milestone tracking", "Personalized motivation"]
    },
    {
      id: "fitness-guidance",
      title: "Fitness Guidance",
      shortDescription: "Structured workout routines and equipment orientation tailored for beginners and experienced members.",
      tag: "Orientation & Safety",
      requiresConfirmation: true,
      image: "/assets/enhanced/mural_art_enhanced.webp",
      rawImage: "/assets/aistudio/unnamed_bfb168d1.webp",
      isRealPhoto: true,
      features: ["Machine safety walkthrough", "Routine sequencing", "Warm-up & recovery practices"]
    }
  ] as TrainingProgram[],
  facilities: [
    {
      id: "machine-line",
      title: "Selectorized & Cable Stations",
      description: "Dual cable crossover units, lat pull-downs, and targeted isolation stations for balanced strength conditioning.",
      image: "/assets/enhanced/gym_floor_enhanced.webp",
      rawImage: "/assets/aistudio/unnamed__1__63ffee9f.webp",
      badge: "Real Studio Photograph",
      isRealPhoto: true
    },
    {
      id: "free-weights",
      title: "Free Weight & Dumbbell Area",
      description: "Graded dumbbells, Olympic disc plates, and flat/incline utility benches for foundational resistance work.",
      image: "/assets/enhanced/free_weights_enhanced.webp",
      rawImage: "/assets/aistudio/unnamed__2__b87be704.webp",
      badge: "Real Studio Photograph",
      isRealPhoto: true
    },
    {
      id: "studio-identity",
      title: "Shivoham Signature Community Area",
      description: "Illuminated studio logo wall with vibrant turf backdrop, creating a welcoming and energized atmosphere.",
      image: "/assets/enhanced/team_wall_enhanced.webp",
      rawImage: "/assets/aistudio/unnamed__3__c214f6c8.webp",
      badge: "Real Studio Photograph",
      isRealPhoto: true
    },
    {
      id: "mural-zone",
      title: "Inspirational Mural & Posing Area",
      description: "Custom hand-crafted warrior artwork celebrating discipline, determination, and Kolkata's cultural resilience.",
      image: "/assets/enhanced/mural_art_enhanced.webp",
      rawImage: "/assets/aistudio/unnamed_bfb168d1.webp",
      badge: "Real Studio Photograph",
      isRealPhoto: true
    }
  ] as FacilityItem[],
  membershipOptions: [
    {
      id: "monthly",
      name: "Monthly Membership",
      duration: "1 Month Duration",
      status: "Pricing to be confirmed by studio",
      description: "Flexible short-term gym access suitable for trial workouts or visiting fitness enthusiasts.",
      placeholderFeatures: [
        "Full gym floor access during operating hours",
        "Free weights & selectorized machine access",
        "Initial facility walkthrough"
      ]
    },
    {
      id: "quarterly",
      name: "Quarterly Commitment",
      duration: "3 Months Duration",
      status: "Pricing to be confirmed by studio",
      description: "Recommended baseline for establishing consistent workout habits and measurable stamina improvements.",
      placeholderFeatures: [
        "Full gym floor access during operating hours",
        "Strength & conditioning equipment",
        "Workout routine orientation"
      ]
    },
    {
      id: "annual",
      name: "Annual Membership",
      duration: "12 Months Duration",
      status: "Pricing to be confirmed by studio",
      description: "Comprehensive yearly fitness membership for dedicated individuals seeking long-term transformation.",
      placeholderFeatures: [
        "Unrestricted access across all operational slots",
        "All gym equipment & training zones",
        "Priority renewal terms"
      ]
    },
    {
      id: "personal-coaching",
      name: "Dedicated Personal Coaching",
      duration: "Custom Session Blocks",
      status: "Pricing to be confirmed by studio",
      description: "Direct personal mentorship with dedicated workout programs and movement screening.",
      placeholderFeatures: [
        "One-on-one trainer supervision",
        "Technique & form optimization",
        "Goal-oriented workout programming"
      ]
    }
  ] as MembershipTier[],
  verificationAuditItems: [
    { label: "Google Maps Rating", value: "4.8★ (82 reviews)", status: "Supplied for demo — verify with live Google listing" },
    { label: "Studio Address", value: "18/2, Kalikapur, Santoshpur, Kolkata, WB 700075", status: "Verified from listing" },
    { label: "Phone Number", value: "083360 57826", status: "Verified from listing" },
    { label: "Operating Hours", value: "Not yet provided", status: "Needs confirmation from business" },
    { label: "Pricing & Fees", value: "Not yet provided", status: "Needs confirmation from business" },
    { label: "Trainer Credentials", value: "Not yet provided", status: "Needs confirmation from business" }
  ]
};

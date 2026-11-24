/**
 * A1 ELECTRICAL & SECURITY - Core Application Data & Translations
 * Client: Farooqui Sufiyan
 * Location: Gate No. 05, Malvani, Malad (West), Mumbai
 * Phone: 8767964993 | WhatsApp: 7506191312
 */

const APP_DATA = {
  client: {
    name: "A1 Electrical & Security",
    owner: "Farooqui Sufiyan",
    phone: "8767964993",
    phoneDisplay: "+91 87679 64993",
    whatsapp: "7506191312",
    whatsappDisplay: "+91 75061 91312",
    address: "Gate No. 05, Malvani, Malad (West), Mumbai, Maharashtra 400095",
    mapQuery: "Gate+No+05+Malvani+Malad+West+Mumbai",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15074.887858652614!2d72.8080!3d19.1963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6ff0dc399ab%3A0xc00f13f1e9c20a40!2sGate%20No.%205%2C%20Malvani%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400095!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Gate+No.+05+Malvani+Malad+West+Mumbai"
  },

  services: [
    {
      id: "cctv-installation",
      title: "All Types of CCTV Camera Installation",
      icon: "fa-solid fa-video",
      shortDesc: "Complete high-definition IP, HD-TVI, and wireless CCTV surveillance camera setup for residential buildings, commercial shops, and offices.",
      features: [
        "4K / Full HD Day & Night Vision",
        "Mobile App Live Remote Viewing",
        "Neat Concealed BNC & CAT6 Cabling",
        "Weatherproof Outdoor Enclosures"
      ]
    },
    {
      id: "electrical-fitting",
      title: "Electrical Fitting",
      icon: "fa-solid fa-plug",
      shortDesc: "Precision installation of designer lighting, modular switches, DB panels, ceiling fans, chandeliers, and high-load appliance points.",
      features: [
        "Modular Switchboards & Sockets",
        "Architectural & Profile LED Lights",
        "Distribution Board (DB) Fitting",
        "Safe Appliance Point Setup (AC / Geyser)"
      ]
    },
    {
      id: "electrical-wiring",
      title: "Electrical Wiring",
      icon: "fa-solid fa-bolt",
      shortDesc: "Comprehensive concealed and open electrical wiring for new constructions, complete flat renovations, and heavy load commercial rewiring.",
      features: [
        "Fire-Retardant FRLS Copper Wiring",
        "Circuit Balancing & Phase Distribution",
        "Conduit Piping & Wall Chasing",
        "Heavy Duty MCB & ELCB Protection"
      ]
    },
    {
      id: "electrical-repairing",
      title: "Electrical Repairing",
      icon: "fa-solid fa-screwdriver-wrench",
      shortDesc: "Rapid fault diagnostics and repair services for tripping breakers, short circuits, voltage fluctuations, and damaged electrical points.",
      features: [
        "Rapid Short-Circuit Troubleshooting",
        "MCB & Fuse Replacement",
        "Earthing & Neutral Fault Rectification",
        "Burned Wire & Socket Repairs"
      ]
    },
    {
      id: "cctv-maintenance",
      title: "CCTV Installation & Maintenance",
      icon: "fa-solid fa-shield-halved",
      shortDesc: "Routine health checks, hard disk recovery, camera lens realignments, and annual maintenance contracts for reliable non-stop security.",
      features: [
        "DVR / NVR Hard Drive Health Audits",
        "Camera Angle & Lens Tuning",
        "Power Supply & SMPS Replacement",
        "Network & Remote View Troubleshooting"
      ]
    },
    {
      id: "security-solutions",
      title: "Security Solutions",
      icon: "fa-solid fa-lock",
      shortDesc: "Integrated protection systems combining surveillance, audio intercoms, smart video doorbells, and perimeter security safeguards.",
      features: [
        "Video Door Phone (VDP) Systems",
        "Commercial Multi-Screen Control Desks",
        "Biometric & Access Control Integration",
        "Battery Backup & Inverter Linkage"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Commercial 4K IP CCTV Setup",
      category: "cctv",
      categoryLabel: "CCTV Surveillance",
      location: "Malad West, Mumbai",
      image: "assets/images/project-cctv-1.svg",
      description: "Installation of 8-channel high-resolution bullet CCTV cameras with night vision, centralized NVR storage, and continuous remote smartphone monitoring."
    },
    {
      id: 2,
      title: "Main Distribution Board & MCB Upgrade",
      category: "electrical",
      categoryLabel: "Electrical Fitting",
      location: "Malvani Residential Complex",
      image: "assets/images/project-electrical-1.svg",
      description: "Complete replacement of an outdated fuse board with a certified 3-phase DIN-rail MCB/RCCB distribution box to prevent electrical hazards and overloading."
    },
    {
      id: 3,
      title: "Indoor HD Dome Surveillance Network",
      category: "cctv",
      categoryLabel: "CCTV Surveillance",
      location: "Retail Store, Malad",
      image: "assets/images/project-cctv-2.svg",
      description: "Discreet wide-angle dome cameras positioned across store aisles and cash counters with clean concealed conduit cabling and cloud backup."
    },
    {
      id: 4,
      title: "Concealed Wiring & Modular Lighting",
      category: "wiring",
      categoryLabel: "Electrical Wiring",
      location: "Commercial Office, Malad",
      image: "assets/images/project-wiring-1.svg",
      description: "Full office concealed copper rewiring with modern modular switchboards, energy-efficient suspended LED illumination, and dedicated server power lines."
    },
    {
      id: 5,
      title: "16-Channel NVR Security Desk",
      category: "cctv",
      categoryLabel: "Security Solutions",
      location: "Co-operative Housing Society",
      image: "assets/images/project-security-1.svg",
      description: "Society perimeter surveillance integrating 16 high-range cameras, a dedicated control rack, and synchronized live monitoring for security personnel."
    },
    {
      id: 6,
      title: "Load Balancing & Electrical Maintenance",
      category: "maintenance",
      categoryLabel: "Repair & Maintenance",
      location: "Malvani, Malad West",
      image: "assets/images/project-maintenance-1.svg",
      description: "Prompt troubleshooting of recurring voltage drops, earthing renewal, and comprehensive safety load balancing for mixed commercial-residential units."
    }
  ],

  translations: {
    en: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        projects: "Projects",
        whyUs: "Why Choose Us",
        contact: "Contact",
        callNow: "Call Now",
        whatsapp: "WhatsApp"
      },
      hero: {
        status: "OPERATIONAL & ACTIVE // MALAD (WEST)",
        headline: "Professional CCTV & Electrical Engineering You Can Trust",
        subheadline: "Specialized in certified CCTV camera installations, electrical fitting, concealed wiring, and rapid maintenance for homes, retail, and commercial properties across Malad, Malvani, and Mumbai.",
        btnCall: "Call: 8767964993",
        btnWhatsapp: "Chat on WhatsApp",
        btnQuote: "Get Free Quote",
        badge1: "100% Genuine Work",
        badge2: "Local Malad Service",
        badge3: "CCTV & Power Specialist"
      },
      about: {
        tag: "ABOUT THE BUSINESS",
        title: "Dedicated Local Expertise in Security & Electrical Infrastructure",
        p1: "Founded and managed by Farooqui Sufiyan, A1 Electrical & Security delivers honest, safe, and dependable electrical solutions and modern surveillance systems from our base at Gate No. 05, Malvani, Malad (West), Mumbai.",
        p2: "Rather than treating electrical and security work as separate tasks, we integrate both disciplines seamlessly. Proper camera performance demands stable, surge-protected electrical cabling, while your property's electrical grid deserves certified, fire-safe engineering.",
        ownerBadge: "Proprietor: Farooqui Sufiyan",
        locationBadge: "Location: Gate No. 05, Malvani, Malad (West), Mumbai"
      },
      servicesSection: {
        tag: "SPECIALIZED CAPABILITIES",
        title: "Comprehensive Security & Electrical Services",
        subtitle: "From individual device setups to full-property infrastructure wiring and camera surveillance networks.",
        btnGetQuote: "Get Quote"
      },
      projectsSection: {
        tag: "PORTFOLIO & WORK SAMPLES",
        title: "Recent Projects & Verified Installations",
        subtitle: "A showcase of surveillance setups, panel upgrades, and precision wiring executed with meticulous craftsmanship.",
        filterAll: "All Projects",
        filterCctv: "CCTV Installations",
        filterElectrical: "Electrical Fitting",
        filterWiring: "Wiring & Rewiring",
        btnView: "View Details"
      },
      whyUs: {
        tag: "THE A1 ADVANTAGE",
        title: "Why Property Owners Choose A1 Electrical & Security",
        subtitle: "Straightforward, honest workmanship with zero exaggerated claims and total accountability.",
        reasons: [
          {
            title: "CCTV & Electrical Under One Roof",
            desc: "No conflicting technicians. We handle both surveillance systems and electrical wiring concurrently, ensuring neat cabling and matched power requirements."
          },
          {
            title: "Direct Owner Accountability",
            desc: "Every project is supervised directly by Farooqui Sufiyan. You receive direct communication, honest pricing, and personal dedication on every site visit."
          },
          {
            title: "Local Malad & Malvani Presence",
            desc: "Based at Gate No. 05 Malvani, we provide rapid response times for critical electrical faults, urgent breaker repairs, and on-site camera realignments."
          },
          {
            title: "Safety & Fire Prevention First",
            desc: "We strictly utilize genuine ISI-standard copper wiring, appropriately sized MCBs, and durable PVC conduits to protect your family and property."
          },
          {
            title: "Transparent & Honest Estimates",
            desc: "No hidden charges or unnecessary part replacements. We inspect the issue first, clearly explain the remedy, and quote genuine rates."
          },
          {
            title: "Continuous Maintenance Support",
            desc: "Our commitment does not end when the installation is complete. We stand behind our work with reliable follow-up servicing and repairs."
          }
        ]
      },
      contact: {
        tag: "GET IN TOUCH",
        title: "Request an Estimate or Schedule an On-Site Visit",
        subtitle: "Contact us directly via call, WhatsApp, or submit your requirement below for a prompt response.",
        directCall: "Direct Phone Call",
        whatsappChat: "Instant WhatsApp Chat",
        visitUs: "Workshop & Office Location",
        getDirections: "Get Directions on Google Maps",
        formTitle: "Send an Instant Enquiry",
        fieldName: "Full Name",
        placeholderName: "e.g. Rahul Sharma",
        fieldPhone: "Mobile Number (10 Digits)",
        placeholderPhone: "e.g. 9876543210",
        fieldEmail: "Email Address (Optional)",
        placeholderEmail: "e.g. rahul@example.com",
        fieldService: "Select Service Required",
        fieldMessage: "Project Details / Message",
        placeholderMessage: "Describe your requirement (e.g., number of cameras needed, flat rewiring, or repair details)...",
        btnSubmit: "Submit & Open WhatsApp Inquiry",
        successMsg: "Thank you! Your enquiry has been recorded. Redirecting to WhatsApp with your details...",
        privacyNote: "Your information is kept strictly confidential and only used to respond to your service inquiry."
      },
      footer: {
        tagline: "Premier CCTV Camera Installation, Concealed Wiring & Precision Electrical Services in Malad (West), Mumbai.",
        quickLinks: "Quick Navigation",
        servicesHeader: "Our Core Services",
        contactHeader: "Contact Information",
        rights: "All rights reserved. Professional CCTV & Electrical Solutions."
      }
    }
  }
};

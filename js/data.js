/**
 * A1 ELECTRICAL & SECURITY - Core Application Data & Bilingual Dictionaries
 * Client: Farooqui Sufiyan
 * Address: Gate No. 05, Malvani, Malad (West), Mumbai
 * Call: 8767964993 | WhatsApp: 7506191312
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.277953259929!2d72.8091179758557!3d19.19639564858348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6fe557999ab%3A0xc00f13f1e9c20a40!2sGate%20No.%205%2C%20Malvani%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400095!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Gate+No.+05+Malvani+Malad+West+Mumbai"
  },

  services: [
    {
      id: "cctv-installation",
      titleEn: "All Types of CCTV Camera Installation",
      titleHi: "सभी प्रकार के CCTV कैमरा इंस्टालेशन",
      icon: "fa-solid fa-video",
      descEn: "Complete high-definition IP, HD-TVI, and wireless surveillance camera installation for residential buildings, retail shops, and commercial offices.",
      descHi: "सोसायटी, दुकानों और ऑफिसों के लिए 4K IP, HD-TVI और वायरलेस CCTV कैमरों की संपूर्ण और सुरक्षित फिटिंग।",
      featuresEn: [
        "4K / Full HD Day & Night Vision",
        "Mobile App Live Remote Viewing",
        "Neat Concealed BNC & CAT6 Cabling",
        "Weatherproof Outdoor Enclosures"
      ],
      featuresHi: [
        "4K / फुल HD डे और नाइट विज़न",
        "मोबाइल ऐप पर लाइव वीडियो एक्सेस",
        "साफ-सुथरी कंसील्ड केबलिंग",
        "वेदरप्रूफ आउटडोर फिटिंग"
      ]
    },
    {
      id: "electrical-fitting",
      titleEn: "Electrical Fitting",
      titleHi: "इलेक्ट्रिकल फिटिंग",
      icon: "fa-solid fa-plug",
      descEn: "Precision installation of modular switches, DB panels, designer lighting, ceiling fans, chandeliers, and high-load power points.",
      descHi: "मॉड्यूलर स्विचबोर्ड, DB पैनल, प्रोफाइल LED लाइट्स, पंखे और हैवी लोड अप्लायंस पॉइंट्स की आधुनिक फिटिंग।",
      featuresEn: [
        "Modular Switchboards & Sockets",
        "Architectural & Profile LED Lights",
        "Distribution Board (DB) Fitting",
        "High-Load Points (AC / Geyser)"
      ],
      featuresHi: [
        "मॉड्यूलर स्विच और सॉकेट्स",
        "आर्किटेक्चरल प्रोफाइल LED लाइट्स",
        "डिस्ट्रिब्यूशन बोर्ड (DB) इंस्टालेशन",
        "AC व गीज़र के लिए पावर पॉइंट्स"
      ]
    },
    {
      id: "electrical-wiring",
      titleEn: "Electrical Wiring",
      titleHi: "इलेक्ट्रिकल वायरिंग",
      icon: "fa-solid fa-bolt",
      descEn: "Full-scale concealed conduit and open copper wiring for new constructions, complete flat renovations, and commercial rewiring.",
      descHi: "नए निर्माण, फ्लैट रेनोवेशन और कमर्शियल साइट्स के लिए ISI प्रमाणित कंसील्ड कॉपर वायरिंग।",
      featuresEn: [
        "Fire-Retardant FRLS Copper Wiring",
        "Circuit Balancing & Phase Distribution",
        "Conduit Piping & Wall Chasing",
        "Heavy Duty MCB & ELCB Protection"
      ],
      featuresHi: [
        "अग्नि-सुरक्षित FRLS कॉपर वायरिंग",
        "सर्किट और फेज बैलेंसिंग",
        "कंसील्ड पाइपिंग और वॉल चेज़िंग",
        "MCB और ELCB सेफ्टी प्रोटेक्शन"
      ]
    },
    {
      id: "electrical-repairing",
      titleEn: "Electrical Repairing",
      titleHi: "इलेक्ट्रिकल रिपेयरिंग",
      icon: "fa-solid fa-screwdriver-wrench",
      descEn: "Rapid fault diagnostics and repair services for tripping breakers, short circuits, voltage fluctuations, and damaged electrical lines.",
      descHi: "बार-बार ट्रिप होने वाले ब्रेकर्स, शॉर्ट सर्किट, वोल्टेज की समस्या और खराब वायरिंग की त्वरित रिपेयरिंग।",
      featuresEn: [
        "Rapid Short-Circuit Troubleshooting",
        "MCB & Fuse Replacement",
        "Earthing & Neutral Fault Rectification",
        "Burned Wire & Socket Repairs"
      ],
      featuresHi: [
        "शॉर्ट सर्किट फॉल्ट डायग्नोसिस",
        "MCB और फ्यूज रिप्लेसमेंट",
        "अर्थिंग और न्यूट्रल फॉल्ट सुधार",
        "जले हुए तार और सॉकेट रिपेयर"
      ]
    },
    {
      id: "cctv-maintenance",
      titleEn: "CCTV Installation & Maintenance",
      titleHi: "CCTV इंस्टालेशन और मेंटेनेंस",
      icon: "fa-solid fa-shield-halved",
      descEn: "Routine health checks, hard disk storage verification, camera lens realignments, and annual maintenance support for non-stop security.",
      descHi: "DVR/NVR हार्ड डिस्क जांच, कैमरा एंगल री-अलाइनमेंट, पावर सप्लाई रिप्लेसमेंट और नियमित मेंटेनेंस सपोर्ट।",
      featuresEn: [
        "DVR / NVR Hard Drive Health Audits",
        "Camera Angle & Lens Tuning",
        "Power Supply & SMPS Replacement",
        "Network & Remote View Troubleshooting"
      ],
      featuresHi: [
        "DVR / NVR हार्ड ड्राइव जांच",
        "कैमरा एंगल और लेंस ट्यूनिंग",
        "SMPS और पावर सप्लाई रिपेयर",
        "नेटवर्क और मोबाइल व्यू रिस्टोर"
      ]
    },
    {
      id: "security-solutions",
      titleEn: "Security Solutions",
      titleHi: "सिक्योरिटी सॉल्यूशंस",
      icon: "fa-solid fa-lock",
      descEn: "Integrated property security solutions combining video surveillance, audio intercoms, smart doorbells, and multi-screen monitoring desks.",
      descHi: "वीडियो डोर फोन (VDP), इंटरकॉम, मल्टी-स्क्रीन कंट्रोल डेस्क और व्यापक सुरक्षा सिस्टम समाधान।",
      featuresEn: [
        "Video Door Phone (VDP) Systems",
        "Commercial Multi-Screen Control Desks",
        "Intercom & Door Lock Integration",
        "Battery Backup & Inverter Linkage"
      ],
      featuresHi: [
        "वीडियो डोर फोन (VDP) सिस्टम",
        "कमर्शियल मॉनिटरिंग कंट्रोल डेस्क",
        "स्मार्ट इंटरकॉम और डोर एक्सेस",
        "इन्वर्टर और बैटरी बैकअप लिंकेज"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      titleEn: "Commercial 4K IP CCTV Setup",
      titleHi: "कमर्शियल 4K IP CCTV सेटअप",
      category: "cctv",
      categoryLabelEn: "CCTV Surveillance",
      categoryLabelHi: "CCTV सर्विलांस",
      locationEn: "Malad West, Mumbai",
      locationHi: "मलाड (वेस्ट), मुंबई",
      image: "assets/images/project-cctv-1.svg",
      descEn: "Installation of 8-channel high-resolution bullet CCTV cameras with night vision, centralized NVR storage, and continuous remote smartphone monitoring.",
      descHi: "8-चैनल हाई-रिज़ॉल्यूशन बुलेट कैमरों का इंस्टालेशन, नाइट विज़न, सेंट्रलाइज्ड NVR और मोबाइल पर 24/7 लाइव मॉनिटरिंग।"
    },
    {
      id: 2,
      titleEn: "Main Distribution Board & MCB Upgrade",
      titleHi: "मेन डिस्ट्रिब्यूशन बोर्ड और MCB अपग्रेड",
      category: "electrical",
      categoryLabelEn: "Electrical Fitting",
      categoryLabelHi: "इलेक्ट्रिकल फिटिंग",
      locationEn: "Malvani Residential Complex",
      locationHi: "मालवणी रेसिडेंशियल कॉम्प्लेक्स",
      image: "assets/images/project-electrical-1.svg",
      descEn: "Complete replacement of an outdated fuse board with a certified 3-phase DIN-rail MCB/RCCB distribution box to prevent electrical hazards and overloading.",
      descHi: "ओवरलोडिंग और शॉर्ट सर्किट के जोखिम से बचने के लिए पुराने फ्यूज बोर्ड को नए 3-फेज MCB/RCCB पैनल से बदलना।"
    },
    {
      id: 3,
      titleEn: "Indoor HD Dome Surveillance Network",
      titleHi: "इंडोर HD डोम सर्विलांस नेटवर्क",
      category: "cctv",
      categoryLabelEn: "CCTV Surveillance",
      categoryLabelHi: "CCTV सर्विलांस",
      locationEn: "Retail Store, Malad",
      locationHi: "रिटेल स्टोर, मलाड",
      image: "assets/images/project-cctv-2.svg",
      descEn: "Discreet wide-angle dome cameras positioned across store aisles and cash counters with clean concealed conduit cabling and cloud backup.",
      descHi: "दुकान के गलियारों और कैश काउंटर के लिए 360-डिग्री डोम कैमरे, साफ कंसील्ड वायरिंग के साथ।"
    },
    {
      id: 4,
      titleEn: "Concealed Wiring & Modular Lighting",
      titleHi: "कंसील्ड वायरिंग और मॉड्यूलर लाइटिंग",
      category: "wiring",
      categoryLabelEn: "Electrical Wiring",
      categoryLabelHi: "इलेक्ट्रिकल वायरिंग",
      locationEn: "Commercial Office, Malad",
      locationHi: "कमर्शियल ऑफिस, मलाड",
      image: "assets/images/project-wiring-1.svg",
      descEn: "Full office concealed copper rewiring with modern modular switchboards, energy-efficient suspended LED illumination, and dedicated server power lines.",
      descHi: "ऑफिस के लिए संपूर्ण कंसील्ड कॉपर वायरिंग, मॉड्यूलर स्विचबोर्ड और आधुनिक प्रोफाइल LED लाइट इंस्टालेशन।"
    },
    {
      id: 5,
      titleEn: "16-Channel NVR Security Desk",
      titleHi: "16-चैनल NVR सिक्योरिटी डेस्क",
      category: "cctv",
      categoryLabelEn: "Security Solutions",
      categoryLabelHi: "सिक्योरिटी सॉल्यूशंस",
      locationEn: "Housing Society, Malad West",
      locationHi: "हाउसिंग सोसायटी, मलाड वेस्ट",
      image: "assets/images/project-security-1.svg",
      descEn: "Society perimeter surveillance integrating 16 high-range cameras, a dedicated control rack, and synchronized live monitoring for security personnel.",
      descHi: "हाउसिंग सोसायटी की बाउंड्री सुरक्षा के लिए 16 कैमरों का नेटवर्क और मुख्य सुरक्षा केबिन में मल्टी-स्क्रीन डेस्क।"
    },
    {
      id: 6,
      titleEn: "Load Balancing & Electrical Maintenance",
      titleHi: "लोड बैलेंसिंग और इलेक्ट्रिकल मेंटेनेंस",
      category: "maintenance",
      categoryLabelEn: "Repair & Maintenance",
      categoryLabelHi: "रिपेयर और मेंटेनेंस",
      locationEn: "Malvani, Malad West",
      locationHi: "मालवणी, मलाड वेस्ट",
      image: "assets/images/project-maintenance-1.svg",
      descEn: "Prompt troubleshooting of recurring voltage drops, earthing renewal, and comprehensive safety load balancing for mixed commercial-residential units.",
      descHi: "वोल्टेज में उतार-चढ़ाव की जांच, नई अर्थिंग और सुरक्षित लोड बैलेंसिंग की संपूर्ण टेस्टिंग।"
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
        langToggle: "हिन्दी"
      },
      hero: {
        status: "OPERATIONAL & ACTIVE // MALAD (WEST)",
        headline: "Professional CCTV & Electrical Engineering You Can Trust",
        subheadline: "Specialized in certified CCTV camera installations, electrical fitting, concealed wiring, and rapid maintenance for homes, retail, and commercial properties across Malad, Malvani, and Mumbai.",
        btnCall: "Call: 8767964993",
        btnWhatsapp: "Chat on WhatsApp",
        btnExplore: "Explore Services",
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
        locationBadge: "Location: Gate No. 05, Malvani, Malad (West), Mumbai",
        cardName: "Farooqui Sufiyan",
        cardRole: "Proprietor & Lead Technician",
        c1: "Direct on-site inspection, diagnostics, and transparent quotes.",
        c2: "All types of bullet, dome, IP, and wireless camera installations.",
        c3: "Complete residential and commercial concealed conduit rewiring.",
        c4: "Circuit breaker, MCB/RCCB distribution box upgrades & load safety.",
        c5: "Prompt repair response across Malad West, Malvani, and suburbs."
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
        callSubtext: "Speak directly with Farooqui Sufiyan for emergency repairs or consultation.",
        whatsappChat: "Instant WhatsApp Chat",
        whatsappSubtext: "Send photos of your switchboard, damaged wires, or camera installation layout.",
        visitUs: "Workshop & Base Location",
        getDirections: "Get Directions",
        formTitle: "Send an Instant Enquiry",
        formSubtitle: "Fill in your requirement. Submitting will save your request and open WhatsApp directly with all details pre-filled.",
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
    },

    hi: {
      nav: {
        home: "होम",
        about: "हमारे बारे में",
        services: "सेवाएं",
        projects: "प्रोजेक्ट्स",
        whyUs: "हमें क्यों चुनें",
        contact: "संपर्क करें",
        callNow: "कॉल करें",
        langToggle: "English"
      },
      hero: {
        status: "सक्रिय और कार्यरत // मालवणी, मलाड (वेस्ट)",
        headline: "भरोसेमंद CCTV और इलेक्ट्रिकल इंजीनियरिंग सेवाएं",
        subheadline: "मलाड, मालवणी और मुंबई भर में आवासीय, खुदरा और व्यावसायिक संपत्तियों के लिए प्रमाणित CCTV कैमरा इंस्टालेशन, कंसील्ड वायरिंग, स्विचबोर्ड फिटिंग और त्वरित मेंटेनेंस विशेषज्ञ।",
        btnCall: "कॉल: 8767964993",
        btnWhatsapp: "व्हाट्सएप पर बात करें",
        btnExplore: "सेवाएं देखें",
        badge1: "100% प्रामाणिक काम",
        badge2: "लोकल मलाड सर्विस",
        badge3: "CCTV व पावर एक्सपर्ट"
      },
      about: {
        tag: "व्यवसाय के बारे में",
        title: "सुरक्षा और इलेक्ट्रिकल कार्यों में समर्पित स्थानीय विशेषज्ञता",
        p1: "फारूकी सुफियान द्वारा स्थापित और संचालित, A1 इलेक्ट्रिकल एंड सिक्योरिटी गेट नंबर 05, मालवणी, मलाड (वेस्ट), मुंबई से सुरक्षित, ईमानदार और विश्वसनीय इलेक्ट्रिकल समाधान और आधुनिक निगरानी प्रणालियां प्रदान करता है।",
        p2: "हम इलेक्ट्रिकल और सिक्योरिटी को अलग-अलग नहीं बल्कि एक साथ जोड़कर करते हैं। कैमरों के टिकाऊ प्रदर्शन के लिए सही वोल्टेज और सुरक्षित वायरिंग जरूरी है, और आपकी संपत्ति की सुरक्षा के लिए उच्च कोटि का काम आवश्यक है।",
        ownerBadge: "मालिक: फारूकी सुफियान",
        locationBadge: "पता: गेट नंबर 05, मालवणी, मलाड (वेस्ट), मुंबई",
        cardName: "फारूकी सुफियान",
        cardRole: "प्रोपराइटर और मुख्य तकनीशियन",
        c1: "साइट पर प्रत्यक्ष निरीक्षण, जांच और पारदर्शी कोटेशन।",
        c2: "सभी प्रकार के बुलेट, डोम, IP और वायरलेस कैमरा इंस्टालेशन।",
        c3: "घरों और दुकानों की संपूर्ण कंसील्ड कॉपर वायरिंग।",
        c4: "सर्किट ब्रेकर, MCB/RCCB बॉक्स अपग्रेड और लोड सुरक्षा।",
        c5: "मलाड वेस्ट, मालवणी और आसपास त्वरित रिपेयरिंग सहायता।"
      },
      servicesSection: {
        tag: "हमारी मुख्य विशेषताएं",
        title: "व्यापक सुरक्षा और इलेक्ट्रिकल सेवाएं",
        subtitle: "छोटे रिपेयरिंग काम से लेकर संपूर्ण प्रॉपर्टी वायरिंग और हाई-डेफिनिशन कैमरा सर्विलांस नेटवर्क तक।",
        btnGetQuote: "कोटेशन लें"
      },
      projectsSection: {
        tag: "किए गए कार्य और पोर्टफोलियो",
        title: "हाल के प्रोजेक्ट्स और सत्यापित इंस्टालेशन",
        subtitle: "सटीकता और सुरक्षा मानकों के साथ पूरे किए गए सर्विलांस सेटअप और इलेक्ट्रिकल फिटिंग का प्रदर्शन।",
        filterAll: "सभी प्रोजेक्ट्स",
        filterCctv: "CCTV इंस्टालेशन",
        filterElectrical: "इलेक्ट्रिकल फिटिंग",
        filterWiring: "वायरिंग और री-वायरिंग",
        btnView: "विवरण देखें"
      },
      whyUs: {
        tag: "A1 की विशेषताएं",
        title: "ग्राहक A1 इलेक्ट्रिकल एंड सिक्योरिटी को क्यों चुनते हैं",
        subtitle: "सच्चा काम, सीधी बात, बिना किसी बनावटी दावों के पूर्ण जवाबदेही।",
        reasons: [
          {
            title: "CCTV और इलेक्ट्रिकल एक ही छत के नीचे",
            desc: "अलग-अलग टेक्नीशियन ढूंढने की आवश्यकता नहीं। हम कैमरा वायरिंग और पावर सप्लाई दोनों को सही तालमेल से पूरा करते हैं।"
          },
          {
            title: "मालिक की प्रत्यक्ष जिम्मेदारी",
            desc: "हर काम फारूकी सुफियान की प्रत्यक्ष देखरेख में होता है। आपको उचित मूल्य और काम में पूरी ईमानदारी मिलती है।"
          },
          {
            title: "मालवणी और मलाड में स्थानीय उपस्थिति",
            desc: "गेट नंबर 05 मालवणी में स्थित होने के कारण हम आपातकालीन रिपेयर और फॉल्ट ठीक करने के लिए तुरंत पहुंचते हैं।"
          },
          {
            title: "सुरक्षा और अग्नि-रोकथाम सर्वोच्च प्राथमिकता",
            desc: "हम केवल ISI-मानक कॉपर वायर, सही क्षमता वाले MCB और मजबूत PVC पाइप का उपयोग करते हैं।"
          },
          {
            title: "पारदर्शी और वास्तविक मूल्य",
            desc: "कोई छुपा हुआ शुल्क या अनावश्यक पार्ट्स बदलने की सलाह नहीं। समस्या की सही जांच कर उचित रेट दिया जाता है।"
          },
          {
            title: "काम के बाद भी मेंटेनेंस सहयोग",
            desc: "काम खत्म होने के बाद भी हमारा साथ बना रहता है। हम अपने काम पर पूरा भरोसा रखते हैं और सर्विस सपोर्ट देते हैं।"
          }
        ]
      },
      contact: {
        tag: "संपर्क करें",
        title: "अनुमानित खर्च जानें या विजिट बुक करें",
        subtitle: "कॉल या व्हाट्सएप द्वारा सीधे संपर्क करें अथवा नीचे दिया गया फॉर्म भरें।",
        directCall: "सीधा फोन कॉल",
        callSubtext: "आपातकालीन रिपेयरिंग या परामर्श के लिए सीधे फारूकी सुफियान से बात करें।",
        whatsappChat: "व्हाट्सएप चैट",
        whatsappSubtext: "अपने स्विचबोर्ड, क्षतिग्रस्त तारों या कैमरा लोकेशन की फोटो भेजें।",
        visitUs: "वर्कशॉप और मुख्य लोकेशन",
        getDirections: "रास्ता देखें",
        formTitle: "तुरंत पूछताछ भेजें",
        formSubtitle: "अपनी आवश्यकता लिखें। सबमिट करने पर आपकी जानकारी सुरक्षित होगी और व्हाट्सएप पर पूरा मैसेज तैयार खुलेगा।",
        fieldName: "पूरा नाम",
        placeholderName: "उदा. राहुल शर्मा",
        fieldPhone: "मोबाइल नंबर (10 अंक)",
        placeholderPhone: "उदा. 9876543210",
        fieldEmail: "ईमेल आईडी (वैकल्पिक)",
        placeholderEmail: "उदा. rahul@example.com",
        fieldService: "आवश्यक सेवा चुनें",
        fieldMessage: "काम का विवरण / संदेश",
        placeholderMessage: "अपनी आवश्यकता विस्तार से लिखें (जैसे कैमरों की संख्या, फ्लैट वायरिंग आदि)...",
        btnSubmit: "सबमिट करें और व्हाट्सएप पर भेजें",
        successMsg: "धन्यवाद! आपका विवरण दर्ज कर लिया गया है। आपको व्हाट्सएप पर रीडायरेक्ट किया जा रहा है...",
        privacyNote: "आपकी जानकारी पूर्णतः गोपनीय रखी जाती है और केवल आपकी सेवा के लिए उपयोग की जाती है।"
      },
      footer: {
        tagline: "मलाड (वेस्ट), मुंबई में उच्च स्तरीय CCTV कैमरा इंस्टालेशन, कंसील्ड वायरिंग और इलेक्ट्रिकल सेवाएं।",
        quickLinks: "महत्वपूर्ण लिंक",
        servicesHeader: "मुख्य सेवाएं",
        contactHeader: "संपर्क विवरण",
        rights: "सर्वाधिकार सुरक्षित। व्यावसायिक CCTV और इलेक्ट्रिकल समाधान।"
      }
    }
  }
};

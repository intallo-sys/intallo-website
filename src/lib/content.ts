export const brand = {
  name: "Intallo",
  tagline: "Turn Manual Work Into Digital Solutions.",
  canonicalUrl: "https://intallo.in",
  publicEmail: "contact@intallo.in",
  copyright: "© 2026 Intallo. All rights reserved.",
};

// Header navigation
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export const headerCta = { label: "Start a Project", href: "/contact" };

export const footer = {
  tagline: "Turn Manual Work Into Digital Solutions.",
  description:
    "Intallo designs and builds high-performance web platforms, custom operational systems, and automated workflows that eliminate manual bottlenecks for growing businesses.",
  copyright: "© 2026 Intallo. All rights reserved.",
  columns: [
    {
      title: "Solutions",
      links: [
        { label: "Work & Demos", href: "/work" },
        { label: "Services", href: "/services" },
        { label: "Industry Solutions", href: "/solutions" },
        { label: "Delivery Process", href: "/process" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Intallo", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Direct Connect",
      links: [
        { label: "contact@intallo.in", href: "mailto:contact@intallo.in" },
        { label: "+91 63636 20308", href: "tel:+916363620308" },
        { label: "+91 76249 55229", href: "tel:+917624955229" },
        { label: "+91 94831 65634", href: "tel:+919483165634" },
        { label: "+91 84314 98500", href: "tel:+918431498500" },
        { label: "Schedule Discovery Call", href: "/contact" },
      ],
    },
  ],
};

export const home = {
  hero: {
    eyebrow: "INTALLO // SYSTEMS & AUTOMATION",
    badge: "OPERATIONAL SYSTEMS & AUTOMATION",
    headlinePart1: "Turn Manual Work",
    headlinePart2: "Into",
    headlinePart3: "Digital Solutions.",
    body:
      "We engineer high-performance web platforms, custom operational software, and automated workflows that eliminate manual bottlenecks for growing businesses.",
    primaryCta: { label: "Start a Project", href: "/contact" },
    secondaryCta: { label: "View Selected Work", href: "/#showreel" },
    systemStatus: [
      { value: "2+", label: "Working Demos" },
      { value: "You Own", label: "What We Build" },
      { value: "Next.js & Edge", label: "Modern Architecture" },
      { value: "Host Anywhere", label: "Zero Vendor Lock-in" },
    ],
  },

  projectShowreel: {
    eyebrow: "CONCEPT ARCHITECTURES & SYSTEMS",
    heading: "Selected systems in action.",
    subheading: "Explore concept architectures and operational system designs.",
    items: [
      {
        id: "nova-house",
        title: "NOVA HOUSE",
        category: "BOUTIQUE HOTEL BOOKING PLATFORM",
        description:
          "A complete direct-reservation system with a guest booking journey, payment flow and front-desk admin console. Built to show how independent hotels can reduce OTA commissions.",
        tags: ["Boutique Hotel", "Direct Reservations", "Payment Gateway", "Admin Console"],
        metrics: "Zero Commission · Real-Time Availability · Instant Confirmation",
        href: "/work/nova-house",
        image: "/images/work/nova-property.jpg",
        imageAlt: "NOVA HOUSE boutique hotel booking system on desktop and mobile displays",
        accentColor: "#1A76FF",
      },
      {
        id: "dinepulse",
        title: "DinePulse",
        category: "RESTAURANT AUTOMATION",
        description:
          "Digital QR ordering and live kitchen ticket system connecting guest orders instantly to the kitchen display.",
        tags: ["QR Ordering", "Kitchen Display System", "Order Management"],
        metrics: "Sub-Second Ticket Dispatch · Live Table Status · Zero Staff Bottlenecks",
        href: "/work#dinepulse",
        image: "/images/work/dinepulse.jpg",
        imageAlt: "DinePulse restaurant ordering system terminal",
        accentColor: "#0C34C5",
      },
      {
        id: "smartflow",
        title: "SmartFlow",
        category: "OPERATIONAL WORKFLOW ENGINE",
        description:
          "Automated production scheduling and recurring order workflow system for bakeries and commercial food producers.",
        tags: ["Bakery Logistics", "Batch Scheduling", "Invoice Dispatch"],
        metrics: "Automated Daily Batches · WhatsApp Sync · Instant Invoicing",
        href: "/work#smartflow",
        image: "/images/work/smartflow.jpg",
        imageAlt: "SmartFlow automation dashboard interface",
        accentColor: "#00A3FF",
      },
    ],
  },

  positioning: {
    eyebrow: "ENGINEERING PHILOSOPHY",
    heading: "We combine design craft, software engineering, and business automation.",
    body:
      "Most growing businesses waste hours every day juggling spreadsheets, phone messages, paper orders, and disconnected tools. Intallo replaces friction with reliable digital platforms built specifically around how your business operates.",
    stats: [
      { value: "You Own", label: "What We Build Specifically" },
      { value: "Perpetual", label: "Background IP License" },
      { value: "Edge", label: "Serverless Performance" },
    ],
  },

  featuredWork: {
    eyebrow: "FEATURED WORK",
    heading: "Digital work designed to make an impact.",
    subheading: "Concept architectures and operational systems engineered for real business outcomes.",
    items: [
      {
        id: "nova-house",
        number: "01",
        category: "HOTEL BOOKING PLATFORM",
        badge: "LIVE DEMO",
        name: "NOVA HOUSE",
        tagline: "Direct boutique hotel reservations without OTA commission fees.",
        description:
          "A complete direct-reservation system featuring a guest booking journey, payment flow, and front-desk admin console. Built to demonstrate how independent boutique hotels can eliminate 15–25% third-party OTA commissions.",
        highlights: [
          "Direct guest reservations with immediate payment capture flow",
          "Automated confirmation email triggers and instant PDF receipts",
          "Front-desk management console for room inventory & check-in status",
        ],
        cta: { label: "View Live Demo", href: "https://novahouse.intallo.in", external: true },
        secondaryCta: { label: "Read Case Study →", href: "/work/nova-house" },
        image: "/images/work/nova-property.jpg",
        imageAlt: "NOVA HOUSE boutique hotel direct booking engine preview",
      },
      {
        id: "dinepulse",
        number: "02",
        category: "RESTAURANT ORDERING SYSTEM",
        name: "DinePulse",
        tagline: "Sub-second digital ordering from table to kitchen.",
        description:
          "An integrated digital menu and kitchen order management platform for dining establishments. Guests scan table-specific QR codes to order and pay, while the kitchen display updates in real time with audio alerts and item timers.",
        highlights: [
          "Zero app downloads needed for guests — runs entirely in mobile browser",
          "Live kitchen ticket routing with automated item statuses",
          "Staff table oversight and daily revenue reconciliation",
        ],
        cta: { label: "View Architecture & Specs →", href: "/work#dinepulse" },
        image: "/images/work/dinepulse.jpg",
        imageAlt: "DinePulse restaurant ordering system preview",
      },
      {
        id: "smartflow",
        number: "03",
        category: "WORKFLOW AUTOMATION",
        name: "SmartFlow",
        tagline: "End-to-end production automation for bakeries & retail.",
        description:
          "A unified operations portal designed for artisanal bakeries and commercial kitchens. Ingests wholesale standing orders, calculates ingredient batch weights automatically, and dispatches delivery manifests without manual calculation.",
        highlights: [
          "Automated batch aggregation and ingredient scaling",
          "One-click PDF dispatch for delivery route drivers",
          "Synchronized inventory updates and order audit trail",
        ],
        cta: { label: "View Architecture & Specs →", href: "/work#smartflow" },
        image: "/images/work/smartflow.jpg",
        imageAlt: "SmartFlow operations workflow preview",
      },
    ],
  },

  services: {
    eyebrow: "OUR SERVICES",
    heading: "Engineered around how your business operates.",
    subheading: "Everything you need to modernize operations and accelerate growth.",
    items: [
      {
        number: "01",
        title: "Web Applications & Portals",
        description:
          "Custom web platforms, customer dashboards, and internal operational tools built with Next.js, React, and TypeScript.",
        deliverables: ["Custom Web Apps", "Client Portals", "Responsive Dashboards"],
      },
      {
        number: "02",
        title: "High-Performance Websites",
        description:
          "Fast, editorial-grade business websites engineered for maximum conversion, top SEO rankings, and seamless device responsiveness.",
        deliverables: ["Editorial Layouts", "SEO Architecture", "Fast Edge Delivery"],
      },
      {
        number: "03",
        title: "Workflow Automation",
        description:
          "Eliminate manual data transfer between order forms, spreadsheets, CRMs, and email with reliable backend automation pipelines.",
        deliverables: ["Multi-Step Triggers", "Scheduled Workflows", "Instant Alerts"],
      },
      {
        number: "04",
        title: "API & System Integrations",
        description:
          "Connect payment processors (Stripe/Razorpay), accounting tools, POS hardware, and messaging channels into one unified backend.",
        deliverables: ["Webhook Pipelines", "Payment Gateways", "REST/GraphQL APIs"],
      },
      {
        number: "05",
        title: "Cloud Infrastructure & Maintenance",
        description:
          "Serverless cloud deployments, SSL hardening, database backups, uptime monitoring, and continuous technical support.",
        deliverables: ["Vercel/Edge Deploy", "PostgreSQL Backups", "Dedicated Support"],
      },
    ],
  },

  platforms: {
    eyebrow: "CAPABILITIES & PLATFORMS",
    heading: "Modern, verified technologies.",
    subheading: "We build on robust, industry-standard foundations — zero legacy baggage.",
    items: [
      { name: "Next.js 16", category: "Framework", icon: "Code" },
      { name: "React 19", category: "Frontend", icon: "Layers" },
      { name: "TypeScript", category: "Language", icon: "FileCode" },
      { name: "PostgreSQL", category: "Database", icon: "Database" },
      { name: "Node.js", category: "Runtime", icon: "Server" },
      { name: "Tailwind CSS", category: "Styling", icon: "Palette" },
      { name: "Cloudflare", category: "Security & Edge", icon: "Shield" },
      { name: "Stripe & Razorpay", category: "Payments", icon: "CreditCard" },
    ],
  },

  packages: {
    eyebrow: "ENGAGEMENT MODELS",
    heading: "Clear scope. Predictable delivery.",
    subheading:
      "Every project receives a customized scope-based quote based on your exact business requirements.",
    items: [
      {
        id: "launch",
        title: "Business Launch Platform",
        badge: "SCOPE-BASED QUOTE",
        popular: false,
        summary:
          "For businesses that need an editorial web presence, high search visibility, and frictionless customer enquiry capture.",
        deliverables: [
          "Bespoke editorial UI/UX design",
          "Next.js App Router performance build",
          "Technical SEO, metadata & sitemap setup",
          "Validated anti-spam lead capture",
          "Mobile-first responsive optimization",
          "Deployment to global CDN infrastructure",
        ],
        idealFor: "Professional services, boutique brands, corporate agencies",
      },
      {
        id: "operations",
        title: "Operations & Booking Engine",
        badge: "SCOPE-BASED QUOTE",
        popular: true,
        summary:
          "For hotels, restaurants, and service providers that need direct digital bookings, payments, and automated customer workflows.",
        deliverables: [
          "Everything in Launch Platform",
          "Interactive booking / ordering web app",
          "Direct payment integration (Stripe / Razorpay)",
          "Automated email & messaging notifications",
          "Live manager portal for reservations & orders",
          "Role-based staff authentication",
        ],
        idealFor: "Hotels, restaurants, bakeries, experiential businesses",
      },
      {
        id: "custom",
        title: "Custom Digital System",
        badge: "SCOPE-BASED QUOTE",
        popular: false,
        summary:
          "For scaling enterprises requiring complex database architecture, multiple user roles, external API integrations, and automation.",
        deliverables: [
          "Full custom database schema & API engineering",
          "Multi-role client & administrative portals",
          "Third-party software & webhook integrations",
          "Custom automated data pipelines & reporting",
          "Security review (no guarantee) & code audit",
          "Dedicated post-launch maintenance & updates",
        ],
        idealFor: "Multi-location businesses, logistics, specialized operations",
      },
    ],
  },

  approach: {
    eyebrow: "OUR PROCESS",
    heading: "From manual bottleneck to working software.",
    subheading: "A proven, disciplined 5-stage engineering methodology.",
    steps: [
      {
        number: "01",
        title: "Discovery & Workflow Audit",
        description:
          "We analyze your daily operational workflows, pinpoint where manual time is lost, and define clear technical requirements.",
      },
      {
        number: "02",
        title: "Architecture & Interactive Design",
        description:
          "We map database schemas, user journeys, and high-fidelity screen designs before writing a single line of production code.",
      },
      {
        number: "03",
        title: "Full-Stack Development",
        description:
          "We engineer clean, typed, modular software with automated test coverage using Next.js, TypeScript, and modern cloud databases.",
      },
      {
        number: "04",
        title: "Rigorous Quality Assurance",
        description:
          "We stress-test performance, edge-case validation, device responsiveness, security headers, and cross-browser reliability.",
      },
      {
        number: "05",
        title: "Deployment & Full Handover",
        description:
          "We execute zero-downtime deployment, deliver team training, and handover full ownership of custom code with a perpetual license to foundational components.",
      },
    ],
  },

  faqs: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    heading: "Everything you need to know.",
    subheading: "Clear answers to how engagements start, run, and complete.",
    items: [
      {
        question: "How does an engagement with Intallo typically begin?",
        answer:
          "Every collaboration starts with a direct discovery session. We review your current operations, identify manual bottlenecks, evaluate any existing systems, and establish a clear scope of work before providing a formal technical proposal.",
      },
      {
        question: "What materials or information do we need to provide?",
        answer:
          "To kick off, we need an overview of your current workflow, any brand assets you have (logos, colors, typography), and access to any third-party services you wish to integrate (such as payment gateways, CRMs, or POS systems).",
      },
      {
        question: "How are project timelines and milestones determined?",
        answer:
          "Timelines depend on project complexity. A focused business launch platform typically completes in 2–3 weeks, while comprehensive booking engines or custom operational systems take 4–8 weeks with weekly milestone reviews and staging demonstrations.",
      },
      {
        question: "Do we own the source code and digital assets upon completion?",
        answer:
          "You own everything built specifically for you. Our reusable components are licensed to you perpetually. Host anywhere with zero vendor lock-in.",
      },
      {
        question: "Do you offer post-launch support and maintenance?",
        answer:
          "Yes. We provide comprehensive post-launch warranty, uptime monitoring, security patching, and ongoing retainer arrangements to continually evolve your digital systems as your business expands.",
      },
    ],
  },

  cta: {
    eyebrow: "START YOUR TRANSFORMATION",
    heading: "Turn Manual Work Into Digital Solutions.",
    body:
      "Tell us what you're trying to build or where your operations are slowing down. We'll engineer a clear, practical digital system built specifically for your business.",
    button: { label: "Start a Project →", href: "/contact" },
    contactEmail: "contact@intallo.in",
  },
};

export const about = {
  hero: {
    eyebrow: "ABOUT INTALLO",
    headingLines: ["Engineered for businesses", "that demand efficiency", "and reliability."],
    body:
      "Intallo is an engineering-driven digital studio based in Bengaluru, India. We build custom software, web applications, and automated systems for businesses ready to replace manual operations with connected digital infrastructure.",
    image: "/images/about/building.jpg",
    imageAlt: "Modern architectural glass office",
  },
  whoWeAre: {
    eyebrow: "OUR IDENTITY",
    headingLine1: "More than a web agency.",
    headingLine2: "We are systems engineers.",
    body:
      "We believe technology should simplify business operations, not complicate them. Our team unifies design aesthetics, robust full-stack software development, and automation engineering.",
    image: "/images/about/team-office.jpg",
    imageAlt: "Intallo engineering team collaboration session",
  },
  mission: {
    eyebrow: "OUR PILLARS",
    headingLines: [
      "To build digital systems that are",
      "practical, scalable, and genuinely",
      "valuable from day one.",
    ],
    pillars: [
      {
        title: "Practical Impact",
        icon: "Cpu",
        lines: ["Targeting real business", "bottlenecks with direct", "operational solutions."],
      },
      {
        title: "Editorial Craft",
        icon: "Palette",
        lines: ["Oversized typography,", "high contrast, and", "flawless responsiveness."],
      },
      {
        title: "Code Ownership",
        icon: "Shield",
        lines: ["You own what we build for you.", "Reusable components licensed", "perpetually. Host anywhere."],
      },
    ],
  },
  why: {
    eyebrow: "WHY INTALLO?",
    heading: "What Makes Us Different",
    items: [
      { number: "01", title: "Practical Solutions", lines: ["Targeting operational bottlenecks", "with modern code."] },
      { number: "02", title: "Modern Technology", lines: ["Built on Next.js, TypeScript", "and global edge networks."] },
      { number: "03", title: "Clear IP Ownership", lines: ["You own what we build for you.", "Foundational components licensed", "perpetually. Host anywhere."] },
      { number: "04", title: "Dedicated Support", lines: ["We grow with our clients", "through continuous updates."] },
    ],
  },
  team: {
    eyebrow: "OUR TEAM",
    heading: "The engineers & leaders behind Intallo",
    intro: "Based in Bengaluru, India — a focused engineering team combining systems architecture, full-stack development, and commercial discipline.",
    members: [
      {
        name: "Shashidhar Pawadashetti",
        role: "Founder & CEO, Project Manager",
        description:
          "Directs company vision, digital strategy, client collaboration, and end-to-end project execution from Bengaluru, India.",
        descriptionLines: [
          "Directs company vision,",
          "digital strategy, and",
          "end-to-end project execution.",
        ],
        photo: "/images/team/shashidhar.png",
        photoAlt: "Shashidhar Pawadashetti, Founder & CEO, Project Manager at Intallo",
        links: { linkedin: null, github: null, email: "mailto:contact@intallo.in" },
      },
      {
        name: "Sujal Vaidya",
        role: "CTO",
        description:
          "Architects technical strategy, backend infrastructure, cloud systems, and high-performance automation engines across client platforms.",
        descriptionLines: [
          "Architects technical strategy,",
          "cloud infrastructure, and",
          "high-performance automation engines.",
        ],
        photo: "/images/team/sujal.jpeg",
        photoAlt: "Sujal Vaidya, CTO at Intallo",
        links: { linkedin: null, github: null, email: "mailto:contact@intallo.in" },
      },
      {
        name: "Ujwal Bilagi",
        role: "Assistant Technical Lead",
        description:
          "Drives engineering implementation, full-stack application development, software design patterns, and code quality standards.",
        descriptionLines: [
          "Drives engineering implementation,",
          "full-stack application development,",
          "and code quality standards.",
        ],
        photo: "/images/team/ujwal.jpeg",
        photoAlt: "Ujwal Bilagi, Assistant Technical Lead at Intallo",
        links: { linkedin: null, github: null, email: "mailto:contact@intallo.in" },
      },
      {
        name: "Jeevan Bennur",
        role: "CFO",
        description:
          "Manages financial modeling, fiscal planning, commercial contracts, operational budgets, and resource allocation.",
        descriptionLines: [
          "Manages financial modeling,",
          "commercial contracts, and",
          "operational fiscal planning.",
        ],
        photo: "/images/team/jeevan.jpeg",
        photoAlt: "Jeevan Bennur, CFO at Intallo",
        links: { linkedin: null, github: null, email: "mailto:contact@intallo.in" },
      },
    ],
  },
};

export const servicesData = {
  hero: {
    eyebrow: "OUR SERVICES",
    headingLines: [
      "Full-stack software &",
      "automation engineered",
      "for modern business.",
    ],
    body:
      "From bespoke web applications and direct reservation platforms to deep workflow automation, we engineer software that simplifies your business operations.",
  },
  items: [
    {
      id: "web-apps",
      number: "01",
      title: "Web Applications & Portals",
      tagline: "High-performance software built for modern browsers.",
      description:
        "We build responsive, secure web platforms and customer portals using Next.js and TypeScript. Designed for speed, accessibility, and high data density.",
      deliverables: [
        "Client and staff dashboards",
        "Role-based authentication",
        "Real-time data synchronization",
        "Mobile-first responsive interfaces",
      ],
    },
    {
      id: "websites",
      number: "02",
      title: "Business Websites & Conversion Engines",
      tagline: "Editorial typography meets high-converting structure.",
      description:
        "Modern business websites designed to build trust, communicate your offering clearly, and drive qualified enquiries without visual bloat.",
      deliverables: [
        "Bespoke editorial UI/UX",
        "Advanced technical SEO & OpenGraph",
        "Fast global CDN delivery",
        "Anti-spam lead capture forms",
      ],
    },
    {
      id: "automation",
      number: "03",
      title: "Workflow Automation & Pipelines",
      tagline: "Eliminate repetitive tasks and manual human handoffs.",
      description:
        "Connect your front-facing websites directly to your operational workflows, sending automated notifications, generating invoices, and updating databases instantly.",
      deliverables: [
        "Multi-step automated workflows",
        "Instant WhatsApp & email notifications",
        "Automated PDF invoice generation",
        "Spreadsheet-to-database synchronization",
      ],
    },
    {
      id: "integrations",
      number: "04",
      title: "API & System Integrations",
      tagline: "Seamless bridges between your business tools.",
      description:
        "We connect payment gateways (Stripe, Razorpay), third-party CRMs, POS terminals, and communication APIs into a reliable, coherent data pipeline.",
      deliverables: [
        "Payment gateway integrations",
        "Webhook event receivers & retries",
        "Custom REST & GraphQL endpoints",
        "Legacy database synchronization",
      ],
    },
    {
      id: "cloud",
      number: "05",
      title: "Cloud Infrastructure & DevOps",
      tagline: "Reliable, scalable hosting with zero maintenance anxiety.",
      description:
        "We deploy on edge-native serverless infrastructure (Vercel, Cloudflare, AWS), setting up automated CI/CD, SSL certificates, automated database backups, and health checks.",
      deliverables: [
        "Zero-downtime CI/CD pipelines",
        "Automated PostgreSQL snapshots",
        "DDoS protection & security headers",
        "Dedicated uptime & error monitoring",
      ],
    },
  ],
};

export const solutionsData = {
  hero: {
    eyebrow: "INDUSTRY SOLUTIONS",
    headingLines: [
      "Custom digital systems",
      "built for real industry",
      "workflows.",
    ],
    body:
      "We tailor our software engineering and automation frameworks to specific industry requirements, replacing fragmented tools with purpose-built systems.",
  },
  items: [
    {
      id: "hospitality",
      number: "01",
      title: "Hotels & Boutique Stays",
      summary:
        "Direct reservation platforms that eliminate 15–25% OTA commissions while providing guests with instant confirmations.",
      painPoints: [
        "High commission fees paid to booking aggregators",
        "Manual reservation tracking across spreadsheets and notebooks",
        "Delayed guest communication and check-in friction",
      ],
      solutionFeatures: [
        "Direct room booking engine with integrated payment capture",
        "Live room calendar with instant availability updates",
        "Automated WhatsApp & email reservation confirmations",
        "Front-desk management view for guest check-ins",
      ],
      demoLink: "/work/nova-house",
    },
    {
      id: "restaurants",
      number: "02",
      title: "Restaurants & Dining",
      summary:
        "Contactless QR digital ordering and live kitchen ticket management that accelerates table turnaround and eliminates order errors.",
      painPoints: [
        "High staff overhead during peak dinner rushes",
        "Paper kitchen tickets getting lost or miscommunicated",
        "Slow customer bill payment and payment terminal delays",
      ],
      solutionFeatures: [
        "Table-specific QR menus with instant mobile ordering",
        "Real-time kitchen display system (KDS) with audio alerts",
        "Direct digital payments at table without waiting for staff",
        "Live analytics on daily bestsellers and peak hours",
      ],
      demoLink: "/work#dinepulse",
    },
    {
      id: "bakeries",
      number: "03",
      title: "Bakeries & Commercial Kitchens",
      summary:
        "Production workflow automation that converts recurring wholesale orders into daily ingredient batch manifests and delivery routes.",
      painPoints: [
        "Manual calculation of daily baking batch quantities",
        "Orders arriving unpredictably across phone, WhatsApp, and email",
        "Time-consuming manual invoicing and delivery slip printing",
      ],
      solutionFeatures: [
        "Standing order schedule portal for wholesale retail clients",
        "Automated daily batch recipe weight aggregation",
        "One-click driver delivery sheet generation",
        "Synchronized inventory depletion tracking",
      ],
      demoLink: "/work#smartflow",
    },
    {
      id: "professional-services",
      number: "04",
      title: "Professional Services & Agencies",
      summary:
        "Client portals, automated onboarding forms, and enquiry qualification pipelines that accelerate client acquisition.",
      painPoints: [
        "Unqualified leads wasting valuable discovery call time",
        "Disorganized client onboarding document exchanges",
        "Fragmented communication scattered across email threads",
      ],
      solutionFeatures: [
        "Interactive project enquiry scoping forms with spam filtering",
        "Automated client onboarding questionnaire pipelines",
        "Secure document exchange and review portal",
        "Direct calendar booking integration",
      ],
      demoLink: "/contact",
    },
  ],
};

export const workData = {
  hero: {
    eyebrow: "PORTFOLIO & DEMOS",
    headingLines: ["Real software systems", "solving real business", "challenges."],
    body:
      "Explore our demonstration platforms and software architectures built to replace manual business workflows.",
  },
  projects: [
    {
      id: "nova-house",
      title: "NOVA HOUSE",
      subtitle: "Boutique Hotel Direct Booking Platform",
      badge: "LIVE DEMO",
      category: "Hospitality",
      summary:
        "A full-featured direct booking platform enabling boutique hotels to capture direct guest reservations, accept test card payments, and manage room inventory through a front-desk console without intermediary commission fees.",
      tags: ["Direct Booking", "Payment Gateway", "Front-Desk Admin", "Next.js"],
      metrics: "Zero OTA Commission · Instant Card Capture · Front-Desk Console",
      image: "/images/work/nova-property.jpg",
      imageAlt: "NOVA HOUSE boutique hotel reservation system preview",
      demoHref: "https://novahouse.intallo.in",
      caseStudyHref: "/work/nova-house",
      architecture: [
        "Next.js App Router for sub-second page transitions & SEO visibility",
        "Prisma ORM & PostgreSQL schema for real-time room availability",
        "Modular test payment adapter simulating card capture & webhook receipt",
        "Protected front-desk administration dashboard for reservation management",
      ],
    },
    {
      id: "dinepulse",
      title: "DinePulse",
      subtitle: "Restaurant QR Ordering & KDS",
      category: "Restaurants",
      summary:
        "A contactless QR ordering platform and kitchen display system that streamlines table ordering, kitchen ticket dispatch, and guest payment processing in dining establishments.",
      tags: ["QR Ordering", "Kitchen Display", "Real-Time Sync", "WebSocket"],
      metrics: "Sub-Second Ticket Dispatch · Live Table Status · Zero Staff Bottlenecks",
      image: "/images/work/dinepulse.jpg",
      imageAlt: "DinePulse restaurant ordering system preview",
      architecture: [
        "No-app mobile web app optimized for iOS and Android camera scanners",
        "Live ticket state synchronization between dining floor and kitchen",
        "Automated kitchen station routing (Grill, Cold, Beverage)",
        "Daily end-of-day sales reconciliation reporting",
      ],
    },
    {
      id: "smartflow",
      title: "SmartFlow",
      subtitle: "Bakery Operations & Batch Automation",
      category: "Commercial Kitchens",
      summary:
        "An automated workflow engine that converts wholesale standing orders into daily production batch schedules, ingredient manifests, and delivery route documentation for commercial bakeries.",
      tags: ["Workflow Automation", "Batch Scaling", "Inventory", "PDF Generation"],
      metrics: "Automated Daily Batches · WhatsApp Sync · Instant Invoicing",
      image: "/images/work/smartflow.jpg",
      imageAlt: "SmartFlow operations workflow preview",
      architecture: [
        "Automated order ingestion and batch weight calculation algorithms",
        "One-click PDF generation for drivers and packing line staff",
        "Automated customer delivery notification triggers",
        "Role-separated views for bakers, packers, and management",
      ],
    },
  ],
};

export const processData = {
  hero: {
    eyebrow: "OUR METHODOLOGY",
    headingLines: ["A disciplined approach", "to engineering digital", "systems."],
    body:
      "We follow a transparent, phased engineering process that ensures every project is delivered on schedule, with zero technical debt and complete client ownership.",
  },
  phases: [
    {
      phase: "Phase 01",
      title: "Discovery & Workflow Audit",
      timeline: "Days 1–5",
      description:
        "We interview your team, audit your operational bottlenecks, and analyze existing spreadsheets or software. We produce a clear technical scope with exact deliverables and architecture definitions.",
      deliverables: ["Operational workflow map", "Technical specification", "Fixed scope-based quote"],
    },
    {
      phase: "Phase 02",
      title: "Architecture & UI Prototype",
      timeline: "Days 6–12",
      description:
        "We design the complete user experience, database relationships, and component design systems. You click through an interactive prototype before code is written.",
      deliverables: ["Interactive screen prototype", "Database ERD & schema model", "API contract"],
    },
    {
      phase: "Phase 03",
      title: "Full-Stack Software Engineering",
      timeline: "Days 13–28",
      description:
        "We build the system using Next.js, TypeScript, and modern cloud databases. Weekly sprint demos allow you to test features on a live staging environment as they are finished.",
      deliverables: ["Clean, typed codebase", "Live staging preview", "Automated test suites"],
    },
    {
      phase: "Phase 04",
      title: "Quality Assurance & Stress Testing",
      timeline: "Days 29–35",
      description:
        "We rigorously test mobile responsiveness, security headers, edge-case validation, payment webhooks, and performance under simulated traffic.",
      deliverables: ["Security review report", "Performance audit", "Cross-device validation"],
    },
    {
      phase: "Phase 05",
      title: "Deployment & Custom IP Handover",
      timeline: "Launch & Beyond",
      description:
        "We configure DNS, provision SSL certificates, migrate production data, and deploy to global edge infrastructure. We conduct staff training and transfer full custom code ownership with a perpetual license to reusable components.",
      deliverables: ["Production edge deployment", "Staff training walk-through", "Custom code repository transfer"],
    },
  ],
};

export const contactData = {
  hero: {
    eyebrow: "PROJECT ENQUIRY",
    heading: "Let's build something exceptional.",
    body:
      "Tell us about your business, the manual workflows you want to eliminate, or the digital platform you want to build. We'll reply within 24 business hours.",
  },
  info: {
    email: "contact@intallo.in",
    canonicalUrl: "https://intallo.in",
    location: "Bengaluru, India",
    responsePromise: "We review and respond to every enquiry within 24 business hours.",
    phones: [
      { number: "+91 63636 20308", tel: "+916363620308", wa: "https://wa.me/916363620308" },
      { number: "+91 76249 55229", tel: "+917624955229", wa: "https://wa.me/917624955229" },
      { number: "+91 94831 65634", tel: "+919483165634", wa: "https://wa.me/919483165634" },
      { number: "+91 84314 98500", tel: "+918431498500", wa: "https://wa.me/918431498500" },
    ],
  },
};

// Compatibility aliases
export const services = servicesData;
export const contact = {
  hero: contactData.hero,
  info: {
    cardLabel: "Get in touch",
    subheading: "Let's connect",
    items: [
      { label: "Email", value: "contact@intallo.in", href: "mailto:contact@intallo.in" },
      { label: "Location", value: "Bengaluru, India", href: null },
    ],
    phones: contactData.info.phones,
    whatsapp: {
      label: "Chat on WhatsApp (+91 63636 20308)",
      href: "https://wa.me/916363620308?text=Hi%20Intallo%2C%20I%20would%20like%20to%20discuss%20a%20project.",
    },
    discoveryCall: {
      label: "Book Discovery Call (Use Form)",
      href: "#contact-form",
    },
    follow: {
      label: "Follow us",
      links: [
        { label: "GitHub", href: null },
      ],
    },
  },
  form: {
    heading: "Tell us about your project.",
    fields: [
      { name: "name", label: "Name:", placeholder: "Your name", type: "text" },
      { name: "email", label: "Email:", placeholder: "you@example.com", type: "email" },
      { name: "company", label: "Company:", placeholder: "Company name", type: "text" },
    ],
    message: {
      name: "message",
      hiddenLabel: "Project details",
      placeholder: "Tell us a little about your project or bottlenecks...",
    },
    submit: "Send Message",
    submitting: "Sending...",
  },
};


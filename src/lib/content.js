export const brand = {
  name: "Intallo",
  tagline: "Digital systems for modern businesses.",
  copyright: "© 2026 Intallo. All rights reserved.",
};

// Header navigation (same on all pages, in this order)
export const navLinks = [
  { label: "Solutions", href: "/services" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export const headerCta = { label: "Start a Project", href: "/contact" };

export const footer = {
  tagline: "Digital systems for modern businesses.",
  copyright: "© 2026 Intallo. All rights reserved.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Work", href: "/#selected-work" },
        { label: "Services", href: "/services" },
        { label: "Process", href: null },
        { label: "About", href: "/about" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Email", href: "mailto:hello@intallo.com" },
        { label: "LinkedIn", href: null },
        { label: "Instagram", href: null },
      ],
    },
  ],
};

export const home = {
  hero: {
    eyebrow: "DIGITAL SYSTEMS FOR MODERN BUSINESSES",
    headingLines: ["Digital experiences", "that move your", "business forward."],
    body:
      "We design simple, reliable digital systems that help modern businesses work smarter, serve customers better, and grow with confidence.",
    cta: { label: "Start a Project", href: "/contact" },
    image: "/images/hero/home-hero.jpg",
    imageAlt:
      "Modern office with a city skyline behind a laptop showing a hotel booking website",
  },

  whatWeDo: {
    eyebrow: "WHAT WE DO",
    heading: "Digital systems built around your business.",
    items: [
      {
        number: "01",
        title: "Web & Digital",
        description:
          "Websites and digital experiences designed to help your business grow.",
      },
      {
        number: "02",
        title: "Automation",
        description:
          "Automate repetitive tasks and connect the tools your business uses.",
      },
      {
        number: "03",
        title: "Business Systems",
        description:
          "Connected systems that simplify operations and improve customer experiences.",
      },
    ],
  },

  selectedWork: {
    id: "selected-work",
    eyebrow: "SELECTED WORK",
    heading: "Digital work designed to make an impact.",
    // Layout is a 2x2 checkerboard: item 0 = text card LEFT / image RIGHT,
    // item 1 = image LEFT / text card RIGHT.
    items: [
      {
        category: "HOTEL BOOKING PLATFORM",
        name: "Stayora",
        description:
          "A simple digital booking experience designed for modern hotels and travelers.",
        cta: { label: "View Case Study →", href: null },
        image: "/images/work/stayora.jpg",
        imageAlt: "Stayora hotel booking website shown on a laptop and a phone",
        imageSide: "right",
      },
      {
        category: "BUSINESS AUTOMATION",
        name: "SmartFlow",
        description:
          "A streamlined automation system that connects everyday business tasks and reduces repetitive work.",
        cta: { label: "View Case Study →", href: null },
        image: "/images/work/smartflow.jpg",
        imageAlt: "SmartFlow automation dashboard shown on a laptop and a phone",
        imageSide: "left",
      },
    ],
  },

  whyIntallo: {
    eyebrow: "WHY INTALLO",
    heading: "Built around how your business actually works.",
    body:
      "We combine thoughtful design, practical technology, and simple systems to create digital experiences that are easy to use and built to grow.",
    items: [
      {
        number: "01",
        title: "Practical",
        description:
          "We focus on solutions that are useful in real business situations.",
      },
      {
        number: "02",
        title: "Simple",
        description: "Clear experiences without unnecessary complexity.",
      },
      {
        number: "03",
        title: "Scalable",
        description: "Systems designed to grow as your business grows.",
      },
    ],
  },

  cta: {
    eyebrow: "LET'S BUILD SOMETHING USEFUL",
    heading: "Have a digital idea in mind?",
    body:
      "Tell us what you're trying to build. We'll help turn it into a clear, practical digital solution.",
    button: { label: "Start a Project →", href: "/contact" },
  },
};

export const about = {
  hero: {
    eyebrow: "ABOUT INTALLO",
    headingLines: [
      "We build digital",
      "experiences that move",
      "businesses forward.",
    ],
    body:
      "Intallo is a technology-driven team focused on creating modern digital solutions for businesses. We combine design, technology, and business thinking to build experiences that are simple, useful, and impactful.",
    image: "/images/about/building.jpg",
    imageAlt: "Modern glass office building surrounded by trees",
  },

  whoWeAre: {
    eyebrow: "WHO WE ARE",
    headingLine1: "More than a team.", // navy
    headingLine2: "We are builders.", // BLUE
    body:
      "We are a team of passionate developers and designers working together to turn ideas into meaningful digital products.",
    image: "/images/about/team-office.jpg",
    imageAlt: "Team collaborating around a table in a modern office",
  },

  team: {
    eyebrow: "OUR TEAM",
    heading: "Meet the people behind Intallo",
    intro:
      "A small team with a big vision. We bring different strengths together to build exceptional digital solutions.",
    // Four identical placeholder cards. Do NOT invent names.
    members: Array.from({ length: 4 }, () => ({
      name: "Member 1",
      role: "Co-Founder & Developer",
      description:
        "Building the technology and digital experiences behind Intallo.",
      descriptionLines: [
        "Building the technology",
        "and digital experiences",
        "behind Intallo.",
      ],
      photo: "/images/team/member-photo.jpg",
      photoAlt: "Team member portrait",
      links: {
        linkedin: null,
        github: null,
        email: "mailto:hello@intallo.com",
      },
    })),
  },

  mission: {
    eyebrow: "OUR MISSION",
    headingLines: [
      "To make technology simple,",
      "accessible, and valuable for",
      "businesses of every size.",
    ],
    pillars: [
      {
        title: "Design",
        icon: "pen-tool",
        lines: ["Beautiful and", "user-focused", "experiences"],
      },
      {
        title: "Technology",
        icon: "cpu",
        lines: ["Modern and", "reliable", "solutions"],
      },
      {
        title: "Business",
        icon: "handshake",
        lines: ["Real impact", "and long-term", "growth"],
      },
    ],
  },

  why: {
    eyebrow: "WHY INTALLO?",
    heading: "What Makes Us Different",
    items: [
      {
        number: "01",
        title: "Creative Thinking",
        lines: ["We bring fresh ideas to", "solve real problems."],
      },
      {
        number: "02",
        title: "Modern Technology",
        lines: ["We use modern tools", "and best practices."],
      },
      {
        number: "03",
        title: "User-Focused Design",
        lines: ["We create simple and", "engaging experiences."],
      },
      {
        number: "04",
        title: "Long-Term Partnership",
        lines: ["We grow with our clients", "beyond a single project."],
      },
    ],
  },

  cta: {
    eyebrow: "LET'S WORK TOGETHER",
    headingLines: ["Have an idea?", "Let's build it", "together."],
    button: { label: "Start a Conversation →", href: "/contact" },
  },
};

export const services = {
  hero: {
    eyebrow: "OUR SERVICES",
    headingLines: [
      "Digital systems built",
      "to solve real business",
      "problems.",
    ],
    body:
      "From websites to automation and business systems, we create practical digital solutions that make your business easier to run and easier to grow.",
    image: "/images/about/team-office.jpg", // same photo as About > Who We Are
    imageAlt: "Team collaborating in a modern office",
  },

  expertise: {
    eyebrow: "OUR EXPERTISE",
    heading: "Solutions designed around your business.",
    // Rows alternate: 01 text-left/image-right, 02 image-left/text-right, 03 text-left/image-right
    items: [
      {
        number: "01",
        title: "Web & Digital",
        description:
          "Websites that turn your digital presence into a business asset.",
        extra: null,
        cta: { label: "Explore Service →", href: null },
        image: "/images/services/service-web.jpg",
        imageAlt: "Hotel booking website on a laptop and phone in a bright office",
        imageSide: "right",
      },
      {
        number: "02",
        title: "Automation",
        description: "Less repetitive work. More time for your business.",
        extra: "Description", // placeholder shown in the design; delete before launch if no real text
        cta: { label: "Explore Service →", href: null },
        image: "/images/services/service-automation.jpg",
        imageAlt: "Automation workflow dashboard on a laptop",
        imageSide: "left",
      },
      {
        number: "03",
        title: "Business Systems",
        description: "Connected systems that keep your business moving.",
        extra: "Description", // placeholder shown in the design
        cta: { label: "Explore Service →", href: null },
        image: "/images/services/service-business.jpg",
        imageAlt: "Business dashboard on a laptop",
        imageSide: "right",
      },
    ],
  },
};

export const contact = {
  hero: {
    eyebrow: "GET IN TOUCH",
    heading: "Let's talk about your next idea.",
    body:
      "Have a project in mind or need help with your digital solution? Tell us what you're looking for and our team will get back to you.",
  },

  info: {
    cardLabel: "Get in touch",
    subheading: "Let's connect",
    items: [
      { label: "Email", value: "hello@intallo.com", href: "mailto:hello@intallo.com" },
      { label: "Phone", value: "+91 XXXXX XXXXX", href: null }, // placeholder
      { label: "Location", value: "Bengaluru, India", href: null },
    ],
    follow: {
      label: "Follow us",
      // Rendered as: LinkedIn · Instagram · GitHub
      links: [
        { label: "LinkedIn", href: null },
        { label: "Instagram", href: null },
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
      // The design shows NO visible label for the textarea. Use as visually-hidden label only.
      hiddenLabel: "Project details",
      placeholder: "Tell us a little about your project...",
    },
    submit: "Send Message",
    submitting: "Sending...",
  },
};

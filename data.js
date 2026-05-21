// ============================================================
// CUSTOMIZE EVERYTHING HERE
// ------------------------------------------------------------
// All your portfolio content lives in this file.
// Change names, projects, skills, etc. without touching code.
// ============================================================

const PORTFOLIO_DATA = {
  // ----- PERSONAL -----
  personal: {
    name: 'Abiral Senchuri',
    shortName: 'Abiral',
    email: 'senchuriabiral758@gmail.com',
    phone: '+44 7771831697',
    location: 'London, United Kingdom',
    github: 'https://github.com/sench-abiral',
    linkedin: 'https://www.linkedin.com/in/abiral-senchuri-7037132a2',
    twitter: 'https://twitter.com/urmarch13',
    instagram: 'https://www.instagram.com/abiral_senchuri',
    facebook: 'https://www.facebook.com/share/1BSgQT5X8w/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@abiral_senchuri61',
    messenger: 'https://m.me/abiral.senchuri.2025',
    youtube: 'https://youtube.com/',
    whatsapp: 'https://wa.me/447771831697',
  },

  // ----- TYPING ANIMATION -----
  typingPhrases: [
    'Frontend Developer.',
    'Computing Science Student.',
    'UI/UX Enthusiast.',
    'Game Design Learner.',
    'Open to Internships.',
  ],

  // ----- SKILLS -----
  skills: [
    {
      name: 'Frontend',
      icon: 'code-2',
      items: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3 / Tailwind', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React (Learning)', level: 60 },
      ],
    },
    {
      name: 'Programming',
      icon: 'terminal',
      items: [
        { name: 'Python', level: 75 },
        { name: 'JavaScript', level: 80 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Git & GitHub', level: 70 },
      ],
    },
    {
      name: 'Design & UI/UX',
      icon: 'palette',
      items: [
        { name: 'Figma', level: 80 },
        { name: 'Canva', level: 90 },
        { name: 'UI/UX Principles', level: 70 },
        { name: 'Wireframing', level: 75 },
      ],
    },
    {
      name: 'AI Tools',
      icon: 'sparkles',
      items: [
        { name: 'Claude AI', level: 90 },
        { name: 'ChatGPT', level: 90 },
        { name: 'Prompt Engineering', level: 80 },
        { name: 'AI-Assisted Dev', level: 85 },
      ],
    },
  ],

  // ----- PROJECTS -----
  projects: [
    {
      title: 'Newham Well-being Hub',
      description:
        'Responsive wellbeing platform designed using HCI principles. Built with HTML, CSS & JavaScript with a strong focus on accessibility and usability.',
      tech: ['HTML', 'CSS', 'JavaScript', 'HCI', 'UI/UX'],
      gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
      image: 'Newham_Wellbeing_Hub.png',
      github: 'https://github.com/sench-abiral',
      demo: '#',
      featured: true,
    },
    {
      title: 'Phish Hunt — Spot the Scam',
      description:
        'Interactive phishing-awareness game built with a team to educate users about online scams and cybersecurity threats. Led the game design, storyboard, and UI concepts.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Figma', 'Canva'],
      gradient: 'linear-gradient(135deg, #7C3AED, #EC4899)',
      image: 'Phish_Hunt_Spot_the_Scam.png',
      github: 'https://github.com/sench-abiral',
      demo: '#',
      featured: true,
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'Premium dark-mode portfolio built with vanilla HTML, CSS, and JavaScript. Features an AI chatbot, smooth animations, and glassmorphism UI.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'linear-gradient(135deg, #06B6D4, #7C3AED)',
      github: 'https://github.com/sench-abiral',
      demo: '#',
      featured: true,
    },
    {
      title: 'Responsive Landing Page',
      description:
        'A pixel-perfect, mobile-first landing page concept exploring modern hero layouts, glass cards, and gradient typography.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'linear-gradient(135deg, #EC4899, #F59E0B)',
      github: 'https://github.com/sench-abiral',
      demo: '#',
    },
    {
      title: 'Python Mini-Tools',
      description:
        'A growing collection of small Python utilities — file organizers, scrapers, and CLI helpers — written while learning core programming concepts.',
      tech: ['Python'],
      gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
      github: 'https://github.com/sench-abiral',
      demo: '#',
    },
    {
      title: 'UI Concept — Fintech Dashboard',
      description:
        'A Figma design exploration for a modern fintech dashboard. Focused on typography, spacing, and a calm dark-mode color system.',
      tech: ['Figma', 'UI/UX'],
      gradient: 'linear-gradient(135deg, #7C3AED, #06B6D4, #EC4899)',
      github: '#',
      demo: '#',
    },
    {
      title: 'Game Storyboard Concept',
      description:
        'Storyboard and concept canvas for an educational web game. Documented user flow, screens, and core mechanics with Canva and Figma.',
      tech: ['Canva', 'Figma', 'Game Design'],
      gradient: 'linear-gradient(135deg, #F59E0B, #EC4899)',
      github: '#',
      demo: '#',
    },
  ],

  // ----- TIMELINE -----
  timeline: [
    {
      year: '2025 — Present',
      title: 'BSc (Hons) Computing Science',
      place: 'CU London — Dagenham Campus',
      icon: 'graduation-cap',
      description:
        'Currently pursuing my degree. Building strong fundamentals in programming, web development, and software design.',
    },
    {
      year: '2026',
      title: 'Newham Well-being Hub',
      place: 'UX/UI & Frontend Development Project',
      icon: 'heart',
      description:
        'Designed and built a responsive wellbeing platform applying HCI principles. Focused on accessibility, usability, and clean frontend implementation with HTML, CSS & JavaScript.',
    },
    {
      year: '2026',
      title: 'First Group Project — Phish Hunt',
      place: 'University Team Project',
      icon: 'code',
      description:
        'Led the design of an interactive cybersecurity awareness game. Strengthened skills in UI/UX, teamwork, and frontend development.',
    },
    {
      year: '2024',
      title: 'Self-Taught Frontend Development',
      place: 'Independent Learning',
      icon: 'book-open',
      description:
        'Dove deep into HTML, CSS, JavaScript, and Python. Built portfolio mini-projects and started exploring modern tooling.',
    },
    {
      year: '2020 — 2022',
      title: 'School Leaving Certificate (Science)',
      place: 'Madi Secondary School — Chitwan, Nepal',
      icon: 'graduation-cap',
      description:
        'Completed high school in the Science stream with a focus on mathematics, physics, and computer science fundamentals.',
    },
  ],

  // ----- CERTIFICATIONS -----
  certifications: [
    { title: 'Frontend Web Development Foundations', issuer: 'Self-Paced Learning', year: '2025' },
    { title: 'Game Design & UI/UX Principles', issuer: 'CU London Project Work', year: '2025' },
    { title: 'Python Programming Basics', issuer: 'Online Learning', year: '2024' },
  ],

  // ----- SERVICES -----
  services: [
    { icon: 'code', title: 'Frontend Development', description: 'Clean, responsive websites built with HTML, CSS, JavaScript, and modern frameworks.' },
    { icon: 'smartphone', title: 'Responsive Websites', description: 'Mobile-first websites that look and feel premium on every device.' },
    { icon: 'palette', title: 'UI/UX Design', description: 'Figma designs, wireframes, and interactive concepts focused on usability.' },
    { icon: 'atom', title: 'React Development', description: 'Component-based React applications with smooth animations and modern tooling.' },
    { icon: 'layout', title: 'Portfolio Websites', description: 'Recruiter-friendly portfolio sites that help you stand out and get hired.' },
    { icon: 'rocket', title: 'Landing Pages', description: 'High-converting landing pages for startups, products, and personal brands.' },
  ],

  // ----- TESTIMONIALS -----
  testimonials: [
    {
      name: 'Project Team Lead',
      role: 'University Group Project',
      quote: 'Abiral led our game design with creativity and structure. His Figma concepts and attention to UI detail elevated the whole project.',
    },
    {
      name: 'Course Peer',
      role: 'Computing Science, CU London',
      quote: "One of the most enthusiastic learners I've worked with. Abiral picks up new tools quickly and is always sharing what he learns.",
    },
    {
      name: 'Freelance Client',
      role: 'Small Business Owner',
      quote: 'Friendly, communicative, and delivered a clean landing page on time. Would definitely work with him again.',
    },
  ],

  // ----- CHATBOT -----
  chatbot: {
    greeting: "Hey there! I'm Abiral's AI assistant. Ask me anything about his skills, projects, or how to hire him.",
    responses: {
      skills: "Abiral works with <strong>HTML, CSS, JavaScript, Python</strong>, and is currently learning <strong>React</strong>. He also uses <strong>Figma</strong> and <strong>Canva</strong> for UI/UX design, and is comfortable with AI tools like <strong>Claude</strong> and <strong>ChatGPT</strong>.",
      projects: "Abiral has built <strong>Phish Hunt</strong> (cybersecurity game), his portfolio website, responsive landing pages, Python mini-tools, and Figma UI concepts. Check the Projects section above!",
      about: "Abiral is a Computing Science student at <strong>CU London (Dagenham Campus)</strong>, originally from Nepal, now based in London. He's passionate about frontend development and game design.",
      education: "He's studying <strong>BSc (Hons) Computing Science at CU London</strong> (2025–2027). Before that, he completed his SLC in the Science stream from Madi Secondary School, Nepal.",
      experience: "Abiral is at the start of his professional journey, actively seeking his <strong>first internship</strong> in software engineering, web development, or game development.",
      internship: "Yes! Abiral is <strong>actively available for internships</strong>, freelance work, and junior developer roles. He's open to remote and London-based opportunities.",
      freelance: "Yes — Abiral is <strong>available for freelance projects</strong>. He specializes in frontend development, responsive landing pages, portfolio websites, and Figma UI/UX.",
      contact: "You can reach Abiral at <strong>senchuriabiral758@gmail.com</strong> or <strong>+44 7771831697</strong>. He's also on GitHub (sench-abiral). Use the Hire Me button to email him directly.",
      services: "Abiral offers: <strong>Frontend Development</strong>, <strong>Responsive Websites</strong>, <strong>UI/UX Design</strong>, <strong>React Development</strong>, <strong>Portfolio Sites</strong>, and <strong>Landing Pages</strong>.",
      location: "Abiral is based in <strong>London, United Kingdom</strong>, and is open to remote work worldwide.",
      languages: "He speaks <strong>English, Nepali, and Hindi</strong> fluently.",
      default: "Great question! Abiral is a Computing Science student and frontend developer based in London. You can ask me about his <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong>, <strong>availability</strong>, or <strong>how to contact him</strong>.",
    },
  },
};

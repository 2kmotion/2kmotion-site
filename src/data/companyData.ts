import { ServiceItem, ProjectItem, ProcessStep, ValuePillar } from '../types';

export const COMPANY_INFO = {
  name: '2K Motion',
  tagline: 'Turning Ideas Into Powerful Digital Solutions',
  subheadline:
    'At 2K Motion, we build web applications, mobile apps, custom software, and creative digital experiences that help businesses grow and succeed in a connected world.',
  supportingText: 'Technology • Creativity • Innovation',
  website: 'www.2kmotion.in',
  websiteUrl: 'https://www.2kmotion.in',
  email: 'twokmotion@gmail.com',
  phone: '+91 8148544881',
  phoneClean: '+918148544881',
  address: 'E41, Kattupillaiyar Kovil Street, Rameswaram – 623526, Tamil Nadu, India',
  city: 'Rameswaram',
  state: 'Tamil Nadu',
  pincode: '623526',
  country: 'India',
  instagram: 'https://www.instagram.com/twokmotion/',
  startDate: 'October 21, 2026',
  companySize: '2–10 employees',
  companyType: 'Startup IT and Digital Services Company',
  foundedYear: '2026',
};

export const ABOUT_CONTENT = {
  paragraph1:
    '2K Motion is an emerging IT and digital services startup based in Rameswaram, Tamil Nadu. Built on a foundation of freelance experience, we are growing into a dedicated team focused on helping businesses transform their ideas into practical digital solutions.',
  paragraph2:
    'From web and mobile application development to custom billing software, graphic design, video editing, and digital marketing, we bring technology and creativity together to meet the unique needs of every client.',
  paragraph3:
    'Our goal is to build meaningful digital experiences, simplify business operations, and create solutions that support long-term growth.',
  vision:
    'To empower emerging enterprises, retail businesses, and ambitious startups across Tamil Nadu and beyond with modern, accessible, and high-performance digital tools.',
  mission:
    'To combine solid software engineering with creative visual craftsmanship, delivering tailor-made solutions that automate workflows, drive sales, and elevate brand identities.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web Application Development',
    badge: 'Custom Architecture',
    shortDesc:
      'Develop modern, responsive, secure, and user-friendly web applications tailored to business requirements.',
    fullDesc:
      'We engineer full-stack web applications designed for reliability, speed, and business growth. From responsive customer portals to robust internal management systems, every solution is built with clean architecture and responsive user experiences.',
    deliverables: [
      'Responsive multi-device layouts (Mobile, Tablet, Desktop)',
      'Secure authentication & role-based access control',
      'High-speed server-side APIs & database optimization',
      'Clean admin dashboards for day-to-day business management',
      'SEO & performance optimization for fast loading times',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL / MongoDB'],
    icon: 'Globe',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Application Development',
    badge: 'iOS & Android',
    shortDesc:
      'Build mobile applications that help businesses manage their operations, reach customers, and improve their services.',
    fullDesc:
      'Turn your service into a pocket-sized experience. We build intuitive cross-platform and native mobile apps that empower businesses to engage customers, process mobile orders, send instant alerts, and streamline frontline staff operations.',
    deliverables: [
      'Cross-platform applications for Android and iOS',
      'Real-time catalog browsing and instant cart checkout',
      'Push notification alerts for orders and promos',
      'Store locator, location tracking, and order status updates',
      'Offline caching and resilient data synchronization',
    ],
    techStack: ['Flutter', 'React Native', 'Firebase', 'RESTful APIs', 'Kotlin', 'Swift'],
    icon: 'Smartphone',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    badge: 'Tailored Workflows',
    shortDesc:
      'Develop customized software solutions designed to meet specific business needs and simplify daily operations.',
    fullDesc:
      'No two businesses run the exact same way. We replace manual paperwork and inflexible off-the-shelf software with tailored software systems that solve your exact operational bottlenecks and automate repetitive workflows.',
    deliverables: [
      'Automated invoice generation & transaction ledgers',
      'Inventory control and low-stock notification triggers',
      'Role-based permissions for staff, accountants, and owners',
      'Customized reporting and exportable PDF/Excel statements',
      'Cloud database backup with encrypted record keeping',
    ],
    techStack: ['Node.js', 'Express', 'Electron', 'PostgreSQL', 'SQLite', 'Docker'],
    icon: 'TerminalSquare',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    badge: 'Visual Branding',
    shortDesc:
      'Create professional logos, branding materials, social media creatives, advertisements, banners, and other visual content.',
    fullDesc:
      'First impressions define your brand. Our creative design team crafts distinctive visual identities, cohesive typography palettes, digital marketing assets, and physical print collateral that make your business instantly recognizable.',
    deliverables: [
      'Vector logo design & complete brand style guides',
      'Social media post templates & high-converting ad banners',
      'Brochures, flyers, business cards, and print hoardings',
      'Packaging design and product label artwork',
      'High-resolution vector assets prepared for all print & web media',
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Vector Art', 'Brand Identity Systems'],
    icon: 'Palette',
  },
  {
    id: 'video-editing',
    title: 'Video and Photo Editing',
    badge: 'Content Production',
    shortDesc:
      'Provide high-quality video editing, photo editing, promotional video creation, and visual content production services.',
    fullDesc:
      'Dynamic video content is the most compelling medium to captivate modern audiences. We produce crisp promotional videos, polished product reels, social media shorts, and commercial photo retouching that highlight your offerings.',
    deliverables: [
      'Promotional reels & vertical video formatting (Reels/Shorts)',
      'Professional color grading & cinematic transitions',
      'Dynamic typography, lower thirds, and motion graphics',
      'Studio-grade product photo retouching & background isolation',
      'Sound design, background score mixing, and voiceover synchronization',
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Adobe Lightroom', 'Audio Engineering'],
    icon: 'Video',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    badge: 'Growth & Outreach',
    shortDesc:
      'Help businesses improve their online presence through digital marketing strategies, social media management, promotional campaigns, and online brand development.',
    fullDesc:
      'Building great software is half the battle; getting found by qualified customers is the other. We devise targeted online marketing campaigns, optimize search engine visibility, and manage social engagement to drive real inbound inquiries.',
    deliverables: [
      'Targeted local business search optimization (Google Business & Maps)',
      'Strategic social media content calendar & organic growth',
      'Paid advertising campaigns across Meta (Instagram/Facebook) and Google',
      'Audience segmentation, retargeting, and conversion tracking',
      'Monthly performance analytics and customer acquisition insights',
    ],
    techStack: ['Meta Ads Manager', 'Google Ads', 'Local SEO', 'Instagram Marketing', 'Content Strategy', 'Analytics'],
    icon: 'TrendingUp',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'grace-fresh-market',
    title: 'Grace Fresh Market',
    category: 'E-commerce Mobile Application and Admin Panel',
    typeBadge: 'Mobile E-Commerce',
    clientContext:
      'A retail store selling fresh vegetables, fruits, and essential household products to local community households.',
    description:
      'Grace Fresh Market is a mobile application designed for a retail store that sells fresh vegetables, fruits, and essential household products. The solution empowers retail businesses to transition from walk-in phone orders to a seamless digital storefront with a dedicated administrative command center.',
    keyFeatures: [
      'Browse and purchase fresh vegetables, fruits, and household essentials',
      'Display products with relevant details, stock status, and real-time pricing',
      'Provide customers with a convenient mobile shopping experience and order tracking',
      'Manage products, orders, delivery zones, and store operations through a dedicated admin panel',
      'Allow the business owner or authorized administrators to control and manage store catalog and inventory',
    ],
    techUsed: ['Flutter', 'Firebase Realtime DB', 'Node.js', 'Admin Dashboard', 'Payment Gateway Integration'],
    mockupType: 'mobile-app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gracefresh.market.grace_fresh_market',
    demoDetails: {
      stats: [
        { label: 'Catalog Modules', value: 'Fresh Produce & Essentials' },
        { label: 'Platform', value: 'Android App + Web Admin' },
        { label: 'Order Flow', value: 'Direct Store Processing' },
      ],
      highlightTag: 'Fresh Groceries Made Mobile',
    },
  },
  {
    id: 'ka-studio',
    title: 'KA Studio – Billing Web Application',
    category: 'Billing Software and Admin Panel',
    typeBadge: 'Billing Software & Invoicing',
    clientContext:
      'A commercial studio and business needing prompt, error-free GST and non-GST invoice generation for counter billing and daily accounts.',
    description:
      'KA Studio is a web-based billing application designed to help businesses generate GST and non-GST invoices for their daily transactions. Engineered for speed and precision, it replaces complicated accounting software with an intuitive, one-click invoicing experience.',
    keyFeatures: [
      'Generate compliant GST invoices with automated CGST, SGST, and IGST breakdowns',
      'Create non-GST bills for quick cash counter transactions',
      'Manage customer profiles, billing history, and payment statuses through an uncluttered web interface',
      'Provide a comprehensive admin panel for monitoring revenue totals, daily summaries, and tax registers',
      'Simplify the billing process for shop owners and businesses with one-click thermal & PDF printing',
    ],
    techUsed: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PDF Invoice Engine', 'Secure Local Storage'],
    mockupType: 'billing-dashboard',
    demoDetails: {
      stats: [
        { label: 'Invoice Modes', value: 'GST & Non-GST Dual Engine' },
        { label: 'Tax Calculations', value: 'Automated CGST / SGST' },
        { label: 'Output', value: 'Instant PDF & Thermal Print' },
      ],
      highlightTag: 'Fast & Compliant Business Invoicing',
    },
  },
  {
    id: 'mugavai-ads',
    title: 'Mugavai Ads – Billing Web Application',
    category: 'Business Billing Software',
    typeBadge: 'Specialized Media Billing',
    clientContext:
      'An advertising and media business handling diverse advertising formats, hoarding rentals, flex printing jobs, and multi-client ledgers.',
    description:
      'Mugavai Ads is a web-based billing application developed for an advertising business to generate and manage bills related to its advertising services. It factors in media dimensions, square footage, design charges, and campaign durations to ensure accurate billing for client campaigns.',
    keyFeatures: [
      'Generate customized bills for flex printing, hoardings, digital boards, and advertising services',
      'Calculate charges automatically based on custom dimensions (height × width) and media rates',
      'Organize and manage billing records, past campaigns, and client credit balances',
      'Simplify daily billing operations for front-desk operators with intuitive receipt generation',
      'Provide a convenient web interface tailored directly around the workflow of an advertising agency',
    ],
    techUsed: ['React', 'Express', 'Tailwind CSS', 'Dimension Cost Calculator', 'Client Ledger Engine'],
    mockupType: 'ad-billing',
    demoDetails: {
      stats: [
        { label: 'Domain', value: 'Advertising & Print Media' },
        { label: 'Rate Engine', value: 'Dimension & Sq.Ft Based' },
        { label: 'Record Keeping', value: 'Client Account Ledgers' },
      ],
      highlightTag: 'Tailored Advertising Billing Engine',
    },
  },
];

export const WHY_CHOOSE_US: ValuePillar[] = [
  {
    title: 'Personalized Solutions',
    description:
      'We do not believe in one-size-fits-all templates. Every web app, mobile app, and billing tool is tailored from scratch to your specific business logic.',
    icon: 'Sparkles',
    highlight: 'Built for your workflow',
  },
  {
    title: 'Creative Thinking',
    description:
      'We fuse aesthetic design with engineering discipline. From eye-catching branding to clean user interfaces, our work leaves a memorable impression.',
    icon: 'Lightbulb',
    highlight: 'Design meets engineering',
  },
  {
    title: 'Practical Business-Focused Software',
    description:
      'We build tools that solve genuine day-to-day headaches: reducing checkout friction, speeding up GST invoices, and keeping customer records safe.',
    icon: 'Briefcase',
    highlight: 'Real-world operational ROI',
  },
  {
    title: 'Modern Technology',
    description:
      'We leverage contemporary frameworks like React, TypeScript, Flutter, and cloud-native databases that guarantee long-term stability and speed.',
    icon: 'Cpu',
    highlight: 'Fast, secure, and modern',
  },
  {
    title: 'Client-Oriented Approach',
    description:
      'As a growing startup born from freelance roots, every client relationship matters deeply. We provide transparent communication and dependable post-launch support.',
    icon: 'HeartHandshake',
    highlight: 'Dedicated partnership',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Requirement Analysis',
    description:
      'We sit down with you to thoroughly understand your business model, customer pain points, target goals, and technical requirements.',
    deliverables: 'Scope documentation, feature checklist & timeline roadmap',
    duration: 'Phase 1',
  },
  {
    step: 2,
    title: 'Planning',
    description:
      'We architect the project blueprint: system data models, database schema, user journeys, technology choices, and milestone schedules.',
    deliverables: 'Architecture plan, tech stack selection & sprint milestones',
    duration: 'Phase 2',
  },
  {
    step: 3,
    title: 'Design',
    description:
      'Our creative team crafts interactive UI/UX wireframes, branding elements, typography palettes, and responsive screen prototypes.',
    deliverables: 'Figma prototypes, UI component kit & visual design approvals',
    duration: 'Phase 3',
  },
  {
    step: 4,
    title: 'Development',
    description:
      'We write clean, modular, and maintainable code for the frontend, backend, APIs, and administrative control panels.',
    deliverables: 'Full-stack source code, API integrations & admin modules',
    duration: 'Phase 4',
  },
  {
    step: 5,
    title: 'Testing',
    description:
      'Rigorous cross-device testing, calculation verification (especially for GST/billing), security audits, and real-world responsiveness checks.',
    deliverables: 'Quality assurance checklist, speed audit & user acceptance test',
    duration: 'Phase 5',
  },
  {
    step: 6,
    title: 'Delivery and Support',
    description:
      'We deploy your application to reliable production servers, train your team on managing the admin panel, and provide ongoing technical assistance.',
    deliverables: 'Live production deployment, user walkthrough & post-launch support',
    duration: 'Phase 6',
  },
];

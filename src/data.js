export const PROFILE = {
  name: 'Ricardo Medina',
  fullName: 'Ricardo Medina Hernández',
  location: 'Querétaro, Qro. · México',
  email: '2023171035@uteq.edu.mx',
  phone: '+52 442 819 6428',
  github: 'https://github.com/mexicans-code',
  summary:
    'Ingeniero en Desarrollo y Gestión de Software Multiplataforma con +1 año de experiencia full-stack. Construyo productos end-to-end: plataformas web, apps móviles, APIs y, sobre todo, experiencias que se sienten pensadas.',
  pitch:
    'Diseño y desarrollo plataformas completas — web y móvil — con una obsesión por los detalles que el usuario sí nota.',
  pillars: [
    {
      icon: 'code',
      title: 'Full-Stack de extremo a extremo',
      text: 'Diseño, API, base de datos e interfaz. Un solo flujo coherente de punta a punta.',
    },
    {
      icon: 'layers',
      title: 'Liderazgo técnico',
      text: 'He liderado equipos y coordinado entregas en plazos reales, de la idea al deploy.',
    },
    {
      icon: 'spark',
      title: 'Detalle sobre todo',
      text: 'Micro-interacciones, consistencia visual y rendimiento: la calidad está en los detalles.',
    },
  ],
  stats: [
    { value: '+1', label: 'Año exp.' },
    { value: '18+', label: 'Proyectos' },
    { value: '10+', label: 'Tecnologías' },
  ],
};

export const PROJECTS = [
  {
    name: 'SGST',
    fullName: 'Sociedad de Querétaro Turismo Sustentable',
    role: 'Plataforma de turismo sustentable',
    accent: 'olive',
    description:
      'Plataforma integral de turismo sustentable para Querétaro: descubre hoteles, experiencias y lugares únicos, reserva en línea y gestiona todo desde un panel de administración.',
    features: [
      'Catálogo de hoteles, experiencias y lugares con búsqueda y filtros',
      'Sistema de reservas con gestión desde dashboard de administración',
      'Autenticación de usuarios y panel completo para propietarios',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap', 'JWT'],
    image: 'https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/news/image/2022/10/001_results_0.jpg?VersionId=z9Xc0lNUDm.1zJuU1p6T3zbekndC5gn.&itok=XMBn4z2C',
    href: 'https://mexicans-code.github.io/SGST/app',
    label: 'Explorar SGST',
  },
  {
    name: 'Dematiq',
    fullName: 'Plataforma e-commerce de automatización',
    role: 'E-commerce B2B de controladores industriales',
    accent: 'blue',
    description:
      'Tienda en línea para productos de automatización y controladores con cobros reales. Lideré el proyecto de principio a fin.',
    features: [
      'Catálogo de productos de automatización con búsqueda',
      'Carrito de compras con checkout y envío',
      'Pagos en línea integrados con pasarela Mercado Pago',
    ],
    tech: ['React', 'Node.js', 'Supabase', 'Mercado Pago'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=100&w=1300&auto=format&fit=crop',
    href: 'https://tienda.dematiq.com.mx/',
    label: 'Visitar tienda',
  },
];

export const EXPERIENCE = [
  {
    period: 'May 2026 — Ago 2026',
    company: 'Dematiq',
    title: 'Desarrollador E-commerce · Líder de proyecto',
    bullets: [
      'Lideré el desarrollo de una plataforma de e-commerce para productos de automatización y controladores con React, Node.js y Supabase.',
      'Coordiné la integración de la pasarela de pagos de Mercado Pago para el procesamiento de transacciones en línea.',
    ],
  },
  {
    period: 'Ene 2026 — Abr 2026',
    company: 'UTEQ',
    title: 'Desarrollador de App de Rutas Interactivas',
    bullets: [
      'Desarrollé una app de geolocalización para guiar a estudiantes por los edificios y áreas de la universidad.',
      'Implementé rutas dinámicas hacia maestros, direcciones y áreas administrativas con Google Maps API.',
      'Integré visualización de caminos y puntos de interés con JavaScript y React Native.',
    ],
  },
  {
    period: 'Ago 2025 — Dic 2025',
    company: 'Proyecto Académico',
    title: 'Líder de Proyecto · Plataforma de Reservas de Alojamiento',
    bullets: [
      'Lideré el desarrollo de una plataforma de reservas estilo Airbnb con React, Node.js y MongoDB.',
      'Coordiné la búsqueda de alojamientos, reservas, mapas, pagos simulados, reseñas y chat entre el equipo.',
    ],
  },
  {
    period: 'Sep 2024 — Dic 2024',
    company: 'Proyecto IoT · UTEQ Admisiones',
    title: 'Desarrollador Full-Stack',
    bullets: [
      'Diseñé e implementé un servidor local en Raspberry Pi para el sistema de admisiones universitarias.',
      'Desarrollé una interfaz web con acceso por código QR para registrar datos de admisión (HTML, MySQL, JS, React).',
      'Contribuí a la digitalización del proceso, reduciendo el uso de formularios en papel.',
    ],
  },
];

export const SKILLS = [
  {
    title: 'Lenguajes',
    items: ['JavaScript', 'PHP', 'SQL', 'Java'],
  },
  {
    title: 'Frameworks y herramientas',
    items: [
      'React',
      'React Native',
      'Angular',
      'Spring Boot',
      'Node.js',
      'Express.js',
      'MySQL',
      'Firebase',
      'MongoDB',
      'Supabase',
    ],
  },
];

export const LANGUAGES = [
  { lang: 'Español', level: 'Nativo', pct: 100 },
  { lang: 'Inglés', level: 'B2 — Conversacional', pct: 72 },
];

export const INTERESTS = ['UI / Motion', 'Arquitectura web', 'Producto', 'IoT'];

export const EDUCATION = [
  {
    place: 'Universidad Tecnológica de Querétaro (UTEQ)',
    period: 'Mayo 2026',
    degree: 'Ingeniería en Desarrollo y Gestión de Software Multiplataforma',
    extra: 'Título previo: TSU en Desarrollo y Gestión de Software Multiplataforma',
  },
  {
    place: 'Colegio de Bachilleres del Estado de Querétaro',
    period: 'Agosto 2022',
    degree: 'Técnico en Tecnología de la Información y la Comunicación',
  },
];

export const ROLES = [
  'Desarrollador Full-Stack',
  'Líder de Proyecto',
  'Especialista en React & Node.js',
  'Creador de soluciones end-to-end',
];

export const NAV_LINKS = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
];
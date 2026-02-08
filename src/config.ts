export const siteConfig = {
  name: "Ernesto Moral",
  title: "Jefe de Proyectos de Mejora | Operational Excellence",
  description:
    "Portfolio de Ernesto Moral - Especialista en Lean Six Sigma, SAP S/4 HANA y Gestión de Operaciones. +$5.98M en ahorros generados.",
  accentColor: "#0F2A4A",

  // Premium: 6-color palette — Navy industrial + amber accent
  colors: {
    primaryDark: "#0F2A4A", // Deep navy — headings, footer bg, nav
    primary: "#1e40af", // Blue — borders, badges, timeline dots
    primaryLight: "#3b82f6", // Bright blue — shimmer highlight
    accent: "#f59e0b", // Amber — CTAs, stat numbers ($$ value/savings)
    surface: "#f0f4f8", // Light blue-gray — section bgs
    surfaceLight: "#f8fafc", // Near white — hero bg
  },

  // Premium: Hero tagline
  tagline:
    "Transformo operaciones industriales en motores de eficiencia y ahorro.",

  // Premium: Trust bar stats
  stats: [
    { value: "+$5.98M", label: "Ahorros Anuales" },
    { value: "10+", label: "Años de Experiencia" },
    { value: "Wharton", label: "Executive Program" },
  ],

  // Premium: Pull quote for About section
  quote: {
    text: "Los datos impulsan la mejora. La mejora genera valor.",
    author: "Ernesto Moral",
  },

  // Premium: CTA for LinkedIn Coaching & Mentoring service
  cta: {
    title: "¿Buscas coaching en Operational Excellence?",
    description:
      "Con más de 10 años liderando transformaciones Lean Six Sigma, te ayudo a diseñar e implementar mejoras operacionales que generan resultados medibles. Agenda una sesión de diagnóstico.",
    buttonText: "Conversemos",
    emailSubject: "Consulta - Coaching en Mejora Continua",
  },

  social: {
    email: "ernesto.moral@outlook.com.pe",
    linkedin: "https://linkedin.com/in/ernestomoral",
  },

  aboutMe:
    "Ingeniero Industrial con Maestría en Dirección de Operaciones (ULima) y <strong>MBA en Gestión de Empresas Industriales (IQS Barcelona)</strong>. <strong>Black Belt Six Sigma</strong> certificado por <strong>ESAN</strong>. Más de <strong>10 años</strong> liderando iniciativas de excelencia operacional en industria minera y manufactura. He generado ahorros superiores a <strong>$5.98M anuales</strong> a través de metodologías Lean, gestión de proyectos CAPEX/OPEX y transformación digital con SAP S/4 HANA. Multilingüe: español, inglés, portugués, francés.",
  skills: [
    "Lean Manufacturing",
    "Six Sigma Black Belt",
    "SAP S/4 HANA",
    "Power BI",
    "Power Automate",
    "Kaizen",
    "SMED",
    "Gestión de Proyectos",
    "ISO 9001",
    "Auditoría de Procesos",
  ],
  projects: [
    {
      name: "PEM Planta Huachipa",
      description:
        "Gerente de Proyecto para expansión de planta. <strong>CAPEX $2.5M</strong>, OPEX $1M. Incremento de capacidad de planta en <strong>+50%</strong> con <strong>0 accidentes</strong> registrados.",
      skills: ["Project Management", "CAPEX", "Lean"],
    },
    {
      name: "Migración SAP S/4 HANA",
      description:
        "Lideré la estabilización del <strong>100% de procesos empresariales</strong> en 3 meses post GO LIVE. Consolidación de RQ que generó <strong>$80K en ahorros</strong>.",
      skills: ["SAP S/4 HANA", "BPM", "Change Management"],
    },
    {
      name: "Programa de Inventario de Riesgo",
      description:
        "Diseño e implementación del programa de identificación y reducción de <strong>inventario de riesgo</strong>. Ahorros anuales superiores a <strong>$4M</strong>.",
      skills: ["Inventory Management", "Risk Assessment", "Cost Reduction"],
    },
    {
      name: "Círculo de Calidad - PNC",
      description:
        "Creación del primer <strong>círculo de calidad</strong> (Productos No Conformes) en <strong>RESEMIN</strong>. Generó <strong>+$114K en ahorros</strong> el primer año.",
      skills: ["Quality Management", "Six Sigma", "Continuous Improvement"],
    },
  ],
  experience: [
    {
      company: "RESEMIN S.A.",
      title: "Jefe de Proyectos de Mejora",
      dateRange: "Feb 2018 - Presente",
      bullets: [
        "Portafolio de <strong>excelencia operacional</strong>: <strong>+$5.98M</strong> ahorros anuales",
        "Programa de reducción de inventario de riesgo: <strong>+$4M/año</strong>",
        "Gerente de Proyecto PEM Planta Huachipa: <strong>CAPEX $2.5M</strong>, <strong>+50% capacidad</strong>, 0 accidentes",
        "Migración <strong>SAP S/4 HANA</strong>: <strong>100% procesos</strong> estabilizados en 3 meses",
        "Consolidación CAPEX: <strong>+$750K/año</strong> en ahorros",
      ],
    },
    {
      company: "RESEMIN S.A.",
      title: "Responsable de Proyectos",
      dateRange: "Sep 2015 - Feb 2018",
      bullets: [
        "Primer <strong>círculo de calidad</strong>: <strong>+$114K</strong> ahorros año 1",
        "<strong>Lean y SMED</strong>: <strong>-25%</strong> tiempo de ciclo de mantenimiento ($74K/año)",
        "Diseño de células de soldadura: <strong>-75% handling</strong> de componentes",
        "Auditorías operacionales: <strong>+5% eficiencia</strong> en output",
      ],
    },
    {
      company: "ARTECOLA",
      title: "Encargado de Seguridad Industrial",
      dateRange: "Abr 2015 - Ago 2015",
      bullets: [
        "Manuales operativos: <strong>+10% output</strong>, <strong>-7% incidentes</strong>, $29.4K ahorros",
        "Estandarización de EPPs: <strong>$35K ahorros</strong> trimestrales",
      ],
    },
    {
      company: "AC FARMA",
      title: "Supervisor SHEQ",
      dateRange: "Ene 2014 - Feb 2015",
      bullets: [
        "Fortalecimiento de cultura de seguridad: <strong>-10% accidentes</strong> año 1",
        "Implementación de <strong>sistemas integrados de gestión</strong>",
      ],
    },
  ],
  education: [
    {
      school: "IQS School of Management - Universidad Ramón Llull",
      degree: "Máster en Gestión de Empresas Industriales",
      dateRange: "2024",
      achievements: [
        "<strong>Barcelona, España</strong>",
        "Especialización en <strong>gestión industrial internacional</strong>",
      ],
    },
    {
      school: "Universidad de Lima",
      degree: "Maestría en Dirección de Operaciones y Proyectos",
      dateRange: "2023",
      achievements: [
        "Aprobado con <strong>nota sobresaliente</strong>",
      ],
    },
    {
      school: "Wharton School - Universidad de Pensilvania",
      degree: "Programa de Liderazgo y Gestión",
      dateRange: "2020",
      achievements: [
        "<strong>Certificación ejecutiva</strong> en liderazgo",
      ],
    },
    {
      school: "Universidad ESAN",
      degree: "Black Belt Six Sigma",
      dateRange: "2018",
      achievements: [
        "<strong>2do lugar</strong> orden de mérito",
      ],
    },
    {
      school: "Universidad de Lima",
      degree: "Ingeniería Industrial",
      dateRange: "2019",
      achievements: [
        "Titulado con <strong>nota sobresaliente</strong>",
        "Diploma en Sistemas Integrados de Gestión - <strong>3er lugar</strong>",
        "<strong>Auditor Líder ISO 9001:2015</strong> (Bureau Veritas)",
      ],
    },
  ],
};

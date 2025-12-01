import projectWeb1 from "@/assets/project-web-1.jpg";
import projectMobile1 from "@/assets/project-mobile-1.jpg";
import projectBranding1 from "@/assets/project-branding-1.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  type: "professional" | "personal";
  fullDescription: string;
  role: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "web-design-platform",
    title: "Plateforme Web Design",
    category: "Design Web",
    description:
      "Une plateforme web moderne avec une interface utilisateur élégante et une expérience fluide.",
    image: projectWeb1,
    year: "2024",
    type: "professional",
    fullDescription:
      "Création d'une plateforme web complète pour une entreprise de design, incluant un système de gestion de contenu personnalisé, une interface utilisateur moderne et responsive, et une architecture optimisée pour les performances. Le projet a nécessité une collaboration étroite avec l'équipe de développement et les designers pour créer une expérience utilisateur exceptionnelle.",
    role: "Lead Designer & Développeur Frontend",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    id: "mobile-app-ui",
    title: "Application Mobile UI",
    category: "Design Mobile",
    description:
      "Interface utilisateur innovante pour une application mobile avec des animations fluides.",
    image: projectMobile1,
    year: "2024",
    type: "professional",
    fullDescription:
      "Conception et développement de l'interface utilisateur d'une application mobile innovante, mettant l'accent sur l'expérience utilisateur et les interactions tactiles. Le projet comprenait la création de prototypes interactifs, des tests utilisateurs et l'implémentation finale avec des animations soignées.",
    role: "UI/UX Designer",
    technologies: ["Figma", "React Native", "TypeScript", "Animations"],
  },
  {
    id: "brand-identity",
    title: "Identité de Marque",
    category: "Branding",
    description:
      "Création d'une identité visuelle complète pour une startup technologique.",
    image: projectBranding1,
    year: "2023",
    type: "professional",
    fullDescription:
      "Développement complet d'une identité de marque pour une startup technologique, incluant la création du logo, la charte graphique, les supports de communication et les guidelines de marque. Le projet a nécessité une recherche approfondie sur l'industrie et les concurrents pour créer une identité unique et mémorable.",
    role: "Brand Designer",
    technologies: [
      "Illustrator",
      "Photoshop",
      "Figma",
      "Brand Guidelines",
    ],
  },
  {
    id: "portfolio-redesign",
    title: "Refonte Portfolio",
    category: "Design Web",
    description:
      "Refonte complète d'un portfolio créatif avec focus sur les animations.",
    image: projectWeb1,
    year: "2023",
    type: "personal",
    fullDescription:
      "Projet personnel de refonte d'un portfolio créatif, explorant de nouvelles techniques d'animation et de mise en page. L'objectif était de créer une expérience immersive tout en maintenant une navigation intuitive et des performances optimales.",
    role: "Designer & Développeur",
    technologies: [
      "React",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "WebGL",
    ],
  },
];

export const getProfessionalProjects = () =>
  projects.filter((p) => p.type === "professional");

export const getPersonalProjects = () =>
  projects.filter((p) => p.type === "personal");

export const getProjectById = (id: string) =>
  projects.find((p) => p.id === id);

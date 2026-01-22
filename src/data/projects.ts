import pawsOfThievery from "@/assets/paws-of-thievery_gameplay.png";
import legendOfGevievre from "@/assets/legend-of-gevievre.jpg";
import spaceRebellion from "@/assets/space-rebellion.jpg";

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
  links?: { name: string; url: string; }[];
}

export const projects: Project[] = [
  {
    id: "paws-of-thievery",
    title: "Paws of Thievery",
    category: "Unity",
    description:
      "Un jeu de puzzle et d'escape où le joueur doit voler des oeuvres d'arts dans un musée.",
    image: pawsOfThievery,
    year: "2024",
    type: "professional",
    fullDescription:
      "Création d'un premier jeu pour découvrir Unity en 1ère année à l'école Gaming Campus. Nous avons du réaliser un jeu lors de deux semaines de projet sur Unity et avec mon groupe (Hugo Magnier, Tristan Van Laecke, Timéo Delmon), nous avons pensé à ce jeu où l'on incarne un petit chat et où le but est de traverser 3 niveaux dans un musée infestés de robots qui te pourchasseront si ils te voient. A chaque niveau, une nouvelle spécificité apparaît pour complexifier le niveau.",
    role: "Design des niveaux et création du niveau 3",
    technologies: [
      "Unity",
      "Blender",
      "Visual Studio 2022",
    ],
    links: [
      { name: "Github", url :"https://github.com/MagnierHugo/UnityProject" },
      { name: "Itch.io", url: "https://skyrenn.itch.io/paws-of-thievery"},
    ],
  },
  {
    id: "legend-of-gevievre",
    title: "Legend of Gevièvre",
    category: "Unity",
    description:
      "Jeu réalisé durant une Game Jam dont le thème était It's not a bug, it's a feature.",
    image: legendOfGevievre,
    year: "2025",
    type: "professional",
    fullDescription:
      "Réalisation d'un jeu lors de ma première Game Jam, nous étions un groupe de 8 avec seulement 1 artiste qui a réalisé tous les assets du jeu. Mon rôle dans ce projet a été dans un premier temps de réaliser le système de level up. J'ai géré la création des différentes boules d'xp avec un UI incluant la barre d'xp et le choix des cartes des différentes capacités. Une fois cela fini, je me suis occupé de réaliser la scène de Game du jeu et d'assembler les différents travaux de chacun dans cette scène. Et pour finir j'ai réalisé les différents menus du jeu (Principal, Settings et de Fin de jeu avec le temps de la run affiché.",
    role: "Système de Level Up et UI",
    technologies: ["Unity", "Visual Studio 2022"],
    links: [
      { name: "Github", url :"https://github.com/MagnierHugo/LegendOfGevievre" },
      { name: "Itch.io", url: "https://skyrenn.itch.io/legend-of-gevievre"},
    ],
  },
  {
    id: "space_rebellion",
    title: "Space Rebellion",
    category: "C++",
    description:
      "Shoot'em Up réalisé en C++ avec la bibliothèque SFML.",
    image: spaceRebellion,
    year: "2024",
    type: "professional",
    fullDescription:
      "Space Rebellion est un shoot'em up réalisé en C++ avec la bibliothèque SFML lors d'un projet étudiant de 2 semaines regroupant une équipe Tech (6 personnes) et une équipe Art (4 personnes), nous étions en collaboration avec le musée de l'automobile Henri Malartre. Mon rôle dans ce projet a été de réaliser dans un premier temps l'implémentation du son, puis une fois cela fait, je me suis occupé de réaliser tous les menus du jeu.",
    role: "Implémentation du Son et UI",
    technologies: ["SFML", "Visual Studio 2022"],
    links: [
      { name: "Github", url :"https://github.com/Tyxsen/Space_Rebellion" },
    ],
  },
];

export const getProfessionalProjects = () =>
  projects.filter((p) => p.type === "professional");

export const getPersonalProjects = () =>
  projects.filter((p) => p.type === "personal");

export const getProjectById = (id: string) =>
  projects.find((p) => p.id === id);

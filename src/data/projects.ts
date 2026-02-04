import pokeUnreal from "@/assets/poke-unreal.png";
import pawsOfThievery from "@/assets/paws-of-thievery_gameplay.png";
import legendOfGevievre from "@/assets/legend-of-gevievre.jpg";
import spaceRebellion from "@/assets/space-rebellion.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  description_en: string;
  image: string;
  year: string;
  type: "professional" | "personal";
  fullDescription: string;
  fullDescription_en: string;
  role: string;
  role_en: string;
  technologies: string[];
  links?: { name: string; url: string; }[];
}

export const projects: Project[] = [
  {
    id: "poke-unreal",
    title: "PokeUnreal",
    category: "Unreal Engine",
    description:
      "Un jeu pokémon like où le joueur peut capturer des pokémons dans la nature et remplir son pokédex en les prenant en photo.",
    description_en:
      "A Pokémon-like game where players capture creatures and fill their Pokédex by taking photos.",
    image: pokeUnreal,
    year: "2025",
    type: "professional",
    fullDescription:
      "Création d'un premier jeu sur Unreal Engine avec mon école. Nous avions pour le thème du jeu, le mot 'Vignette'. Avec mon binôme de groupe, Tristan Van Laecke, nous avons donc opté pour réaliser un jeu ressemblant fort à pokémon mais dans un autre style. Le but de notre jeu est de prendre en photo des pokémons pour les capturer et ainsi remplir son pokédex. Lors de ce projet, j'ai pu apprendre à réaliser plusieurs mécaniques sur Unreal Engine tel que la capture de pokémon par l'appareil photo, la gestion du pokédex mais également la gestion de sauvegarde du jeu.",
    fullDescription_en:
      "Creation of my first game on Unreal Engine with my school. The theme of the game was the word “Vignette.” My partner, Tristan Van Laecke, and I decided to create a game very similar to Pokémon but with a different style. The goal of our game is to take photos of Pokémon to capture them and fill your Pokédex. During this project, I learned how to implement several mechanics on Unreal Engine, such as capturing Pokémon with the camera, managing the Pokédex, and managing game saves.",
    role: "Création du pokédex, de la capture et gestion de la sauvegarde du jeu et design des menus du jeu.",
    role_en: "Creation of the pokédex, capture and management of game saves, and design of game menus.",
    technologies: [
      "Unral Engine",
    ],
    links: [
      { name: "Github", url :"https://github.com/Tyxsen/PokeUnreal/releases/tag/V1" },
      { name: "Itch.io", url: "https://skyrenn.itch.io/pokeunreal"},
    ],
  },
  {
    id: "paws-of-thievery",
    title: "Paws of Thievery",
    category: "Unity",
    description:
      "Un jeu de puzzle et d'escape où le joueur doit voler des oeuvres d'arts dans un musée.",
    description_en:
      "A puzzle and escape game where the player must steal works of arts from a museum.",
    image: pawsOfThievery,
    year: "2024",
    type: "professional",
    fullDescription:
      "Création d'un premier jeu pour découvrir Unity en 1ère année à l'école Gaming Campus. Nous avons du réaliser un jeu lors de deux semaines de projet sur Unity et avec mon groupe (Hugo Magnier et Tristan Van Laecke), nous avons pensé à ce jeu où l'on incarne un petit chat et où le but est de traverser 3 niveaux dans un musée infestés de robots qui te pourchasseront si ils te voient. A chaque niveau, une nouvelle spécificité apparaît pour complexifier le niveau.",
    fullDescription_en:
      "Creation of a first game to discover Unity in the first year at Gaming Campus school. We had to create a game during a two-week project on Unity, and with my group (Hugo Magnier and Tristan Van Laecke), we thought about a game where you play as a little cat and the goal is to get through three levels in a museum infested with robots that will chase you if they see you. Each level has a new feature that makes it more complex.",
    role: "Design des niveaux et création du niveau 3",
    role_en: "Level Design and creation of level 3",
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
    description_en:
      "Game created during a Game Jam whose theme was “It's not a bug, it's a feature.”",
    image: legendOfGevievre,
    year: "2025",
    type: "professional",
    fullDescription:
      "Réalisation d'un jeu lors de ma première Game Jam, nous étions un groupe de 8 avec seulement 1 artiste qui a réalisé tous les assets du jeu. Mon rôle dans ce projet a été dans un premier temps de réaliser le système de level up. J'ai géré la création des différentes boules d'xp avec un UI incluant la barre d'xp et le choix des cartes des différentes capacités. Une fois cela fini, je me suis occupé de réaliser la scène de Game du jeu et d'assembler les différents travaux de chacun dans cette scène. Et pour finir j'ai réalisé les différents menus du jeu (Principal, Settings et de Fin de jeu avec le temps de la run affiché.",
    fullDescription_en:
      "Creation of a game during my first Game Jam. We were a group of eight with only one artist who created all the game assets. My role in this project was initially to create the level-up system. I managed the creation of the various XP balls with a UI including the XP bar and the choice of cards for the different abilities. Once that was finished, I took care of creating the game scene and assembling everyone's work into that scene. Finally, I created the various game menus (Main, Settings, and End of Game with the run time displayed).",
    role: "Système de Level Up et UI",
    role_en: "Level Up System and UI",
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
    description_en:
      "Shoot'em Up game developed in C++ using the SFML library.",
    image: spaceRebellion,
    year: "2024",
    type: "professional",
    fullDescription:
      "Space Rebellion est un shoot'em up réalisé en C++ avec la bibliothèque SFML lors d'un projet étudiant de 2 semaines regroupant une équipe Tech (6 personnes) et une équipe Art (4 personnes), nous étions en collaboration avec le musée de l'automobile Henri Malartre. Mon rôle dans ce projet a été de réaliser dans un premier temps l'implémentation du son, puis une fois cela fait, je me suis occupé de réaliser tous les menus du jeu.",
    fullDescription_en:
      "Space Rebellion is a shoot 'em up game developed in C++ using the SFML library during a two-week student project involving a tech team (six people) and an art team (four people). We collaborated with the Henri Malartre Automobile Museum. My role in this project was to first implement the sound, and then, once that was done, I was responsible for creating all the game menus.",
    role: "Implémentation du Son et UI",
    role_en: "Sound and UI implementation",
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

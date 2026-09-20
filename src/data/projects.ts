import pokeUnreal from "@/assets/poke-unreal.png";
import pawsOfThievery from "@/assets/paws-of-thievery_gameplay.png";
import legendOfGevievre from "@/assets/legend-of-gevievre.jpg";
import spaceRebellion from "@/assets/space-rebellion.jpg";
import XRStudio1 from "@/assets/XR_Studio1.png";
import XRStudio2 from "@/assets/XR_Studio2.png";
import VR_AR1 from "@/assets/VR_AR_Image1.png";
import VR_AR2 from "@/assets/VR_AR_Image2.png";
import blenderClip from "@/assets/FinalExamRender-web.mp4";
import blenderImage1 from "@/assets/Blender_Image1.png";
import blenderImage2 from "@/assets/Blender_Image2.png";
import blenderImage3 from "@/assets/Blender_Image3.png";
import blenderImage4 from "@/assets/Blender_Image4.png";

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  description_en: string;
  media: ProjectMedia[];
  year: string;
  fullDescription: string;
  fullDescription_en: string;
  role: string;
  role_en: string;
  technologies: string[];
  links?: { name: string; url: string; }[];
}

export const projects: Project[] = [
  {
    id: "xr-studio",
    title: "Escape the House",
    category: "Unreal Engine",
    description: "Un jeu VR imaginé de A à Z où le but est de s'enfuir dans une maison gigantesque en ramassant de la nourriture sur la table pour s'enfuir.",
    description_en: "A VR game imagined from scratch where the goal is to escape from a gigantic house by gathering food from the table.",
    media: [
      { type: "image", src: XRStudio1 },
      { type: "image", src: XRStudio2 }
    ],
    year: "2026",
    fullDescription: "Dans ce jeu en réalité virtuelle, le joueur est plongé dans la maison d'un gigantesque monstre et a pour but de s'échapper en remplissant son sac à dos de nourriture. Ce jeu a été réalisé durant mon échange universitaire en Corée du Sud. J'étais dans un groupe de 5 personnes (4 artistes et 1 développeur) et mon but a donc été de réaliser toutes les mécaniques du jeu, allant de la création du perso à la scène de fin de jeu. Lors de ce projet, étant le seul développeur, j'ai pu apprendre à bien utiliser mon temps, à m'oganiser dans un projet et à créer un jeu complet en VR en utilisant les assets réalisés par mes collègues pour l'environnement.",
    fullDescription_en: "In this virtual reality game, the player is dropped into the house of a gigantic monster and must escape by filling their backpack with food. This game was made during my university exchange in South Korea. I was part of a team of 5 (4 artists and 1 developer), and my role was to implement all the game's mechanics, from character creation to the end-game scene. Being the only developer on this project, I learned to manage my time well, organize myself within a project, and build a complete VR game using the assets created by my teammates for the environment.",
    role: "Réalisation d'un jeu complet en VR comportant un PNJ réalisé avec un behavior tree, un système d'inventaire et un game feel complet pour l'expérience utilisateur.",
    role_en: "Development of a complete VR game featuring an NPC built with a behavior tree, an inventory system, and full game feel polish for the user experience.",
    technologies: ["Unreal Engine"],
    links: [
      { name: "Github", url :"https://github.com/Tyxsen/XRStudio_FinalProject" },
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
    media: [{ type: "image", src: legendOfGevievre }],
    year: "2025",
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
    id: "vr-ar-moon-project",
    title: "On the moon",
    category: "Unreal Engine",
    description: "Jeu réalisé durant un échange universitaire en Corée du Sud avec pour but de réaliser un univers à explorer sur un thème choisi.",
    description_en: "A game made during a university exchange in South Korea, with the goal of creating an explorable world around a chosen theme.",
    media: [
      { type: "image", src: VR_AR1 },
      { type: "image", src: VR_AR2 }
    ],
    year: "2026",
    fullDescription: "Ce jeu VR d'exploration de la lune a été réalisé dans le cadre d'un échange universitaire en Corée du Sud, j'étais avec un coéquipier et à deux nous avons donc réalisé un jeu dans lequel le joueur peut s'immerser dans une base lunaire et explorer comme bon lui semble la lune et ses cratères. Lors de ce projet, j'ai réalisé toute la partie gameplay et j'ai également ajouté du foliage sur la carte (des rochers) pour la rendre plus immersive.",
    fullDescription_en: "This VR moon exploration game was made as part of a university exchange in South Korea. I worked with one teammate, and together we built a game where the player can immerse themselves in a lunar base and freely explore the moon and its craters. On this project, I handled the entire gameplay side and also added foliage to the map (rocks) to make it more immersive.",
    role: "Réalisation du gameplay, des mécaniques de gravité et ajout de foliage sur la carte.",
    role_en: "Development of the gameplay, gravity mechanics, and addition of foliage to the map.",
    technologies: ["Unreal Engine"],
    links: [
      { name: "Github", url :"https://github.com/NetroxTTV/Projet-AR_VR-Namseoul" },
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
    media: [{ type: "image", src: pawsOfThievery }],
    year: "2024",
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
    id: "blender-coree",
    title: "Le moyen-âge dans Blender",
    category: "Blender",
    description: "Projet blender réalisé au cours de mes 4 mois en Corée du Sud à Namseoul University.",
    description_en: "A Blender project made during my 4 months in South Korea at Namseoul University.",
    media: [
      { type: "video", src: blenderClip },
      { type: "image", src: blenderImage1 },
      { type: "image", src: blenderImage2 },
      { type: "image", src: blenderImage3 },
      { type: "image", src: blenderImage4 }
    ],
    year: "2026",
    fullDescription: "Ce projet a été réalisé dans le cadre de mes cours sur l'outil blender lors de mon échange universitaire en Corée du Sud. Ce projet a été réalisé en deux parties, la première pour l'examen de mi semestre, où j'avais pour objectif de réaliser un petit environnement avec des objets que j'avais créé. Concernant mon examen de fin de semestre, j'avais pour objectif de réaliser un univers sur un thème que je pouvais choisir, dans mon cas j'ai choisi le moyen-âge. Il consistait à réaliser un univers complet dans l'outil blender et en faire une vidéo de présentation.",
    fullDescription_en: "This project was made as part of my Blender coursework during my university exchange in South Korea. It was split into two parts: the first for the mid-semester exam, where the goal was to build a small environment using objects I had created myself. For the end-of-semester exam, the goal was to create a whole world around a theme of my choice — in my case, the Middle Ages. It involved building a complete world in Blender and producing a presentation video of it.",
    role: "Prise en main de l'outil blender pour réaliser des objets et construire un environnement.",
    role_en: "Learning the Blender tool to create objects and build an environment.",
    technologies: ["Blender"],
  },
  {
    id: "space_rebellion",
    title: "Space Rebellion",
    category: "C++",
    description:
      "Shoot'em Up réalisé en C++ avec la bibliothèque SFML.",
    description_en:
      "Shoot'em Up game developed in C++ using the SFML library.",
    media: [{ type: "image", src: spaceRebellion }],
    year: "2024",
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
  {
    id: "poke-unreal",
    title: "PokeUnreal",
    category: "Unreal Engine",
    description:
      "Un jeu pokémon like où le joueur peut capturer des pokémons dans la nature et remplir son pokédex en les prenant en photo.",
    description_en:
      "A Pokémon-like game where players capture creatures and fill their Pokédex by taking photos.",
    media: [{ type: "image", src: pokeUnreal }],
    year: "2025",
    fullDescription:
      "Création d'un premier jeu sur Unreal Engine avec mon école. Nous avions pour le thème du jeu, le mot 'Vignette'. Avec mon binôme de groupe, Tristan Van Laecke, nous avons donc opté pour réaliser un jeu ressemblant fort à pokémon mais dans un autre style. Le but de notre jeu est de prendre en photo des pokémons pour les capturer et ainsi remplir son pokédex. Lors de ce projet, j'ai pu apprendre à réaliser plusieurs mécaniques sur Unreal Engine tel que la capture de pokémon par l'appareil photo, la gestion du pokédex mais également la gestion de sauvegarde du jeu.",
    fullDescription_en:
      "Creation of my first game on Unreal Engine with my school. The theme of the game was the word “Vignette.” My partner, Tristan Van Laecke, and I decided to create a game very similar to Pokémon but with a different style. The goal of our game is to take photos of Pokémon to capture them and fill your Pokédex. During this project, I learned how to implement several mechanics on Unreal Engine, such as capturing Pokémon with the camera, managing the Pokédex, and managing game saves.",
    role: "Création du pokédex, de la capture et gestion de la sauvegarde du jeu et design des menus du jeu.",
    role_en: "Creation of the pokédex, capture and management of game saves, and design of game menus.",
    technologies: [
      "Unreal Engine",
    ],
    links: [
      { name: "Github", url :"https://github.com/Tyxsen/PokeUnreal/releases/tag/V1" },
      { name: "Itch.io", url: "https://skyrenn.itch.io/pokeunreal"},
    ],
  },
];

export const getProjectById = (id: string) =>
  projects.find((p) => p.id === id);

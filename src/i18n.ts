import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: {
          "common": { "view_all": "Tout voir", "back": "Retour aux projets", "not_found": "Projet non trouvé", "rights": "Tout droits réservés." },
          "nav": {
            "home": "Accueil",
            "projects": "Projets",
            "about": "À propos",
          },
          "index": {
            "hero_title": "Timéo DELMON",
            "hero_desc": "Bonjour et bienvenue sur mon Portfolio, je m'appelle Timéo Delmon et je suis développeur spécialisé dans le jeu vidéo. Je suis actuellement dans ma période d'études au Gaming Campus en 3ème année.<0/><1/>Vous pourrez retrouver mes différents projets dans la rubrique '<2>Projets</2>'",
            "hero_cta": "Voir mes projets",
            "pro_title": "Projets Professionnels",
            "pro_subtitle": "Projets que j'ai dû réaliser dans le cadre de mes études.",
            "perso_title": "Projets Personnels",
            "perso_subtitle": "Projets que j'ai réalisé en dehors de mon parcours scolaire"
          },
          "projects": {
            "title": "Tous mes",
            "title_accent": "Projets",
            "desc": "Voici quelques-uns de mes projets professionnels realisés au Gaming Campus.",
            "filter_all": "Tous les projets",
            "filter_pro": "Professionnels",
            "filter_perso": "Personnels"
          },
          "projectDetail": {
            "role_label": "Rôle",
            "tech_label": "Technologies",
            "year_label": "Année",
            "about_label": "À propos du projet"
          },
          "projectCard": {
            "viewProject": "Voir le projet",
          },
          "about": {
            "title": "À propos de <0>moi</0>",
            "bio_p1": "Passionné par les jeux vidéos et le développement, j'ai choisi de faire mes études à l'école Gaming Campus pour me spécialiser dans le développement de jeux vidéos.",
            "bio_p2": "J'ai obtenu mon baccalauréat en 2023 et depuis j'ai réalisé plusieurs projets avec mon école car nous travaillons par semaines de projets.",
            "bio_p3": "J'ai de mon côté pris le temps de faire du blueprint sur Unreal Engine 5 pour apprendre en parallèle de mes études et également de m'améliorer sur Unity que j'ai déjà parcouru en cours.",
            "skills_title": "Compétences",
            "skills_tools": "Outils",
            "exp_title": "Expériences",
            "cv_button": "Télécharger mon CV",
            "exp_engie_role": "Stagiaire Data Analyste",
            "exp_engie_date": "Mai 2024 - Juillet 2024",
            "exp_engie_desc": "Découverte du monde de la data analyse. Développement de bilans d'électricité en Python pour des particuliers.",
            "exp_rtl_role": "Stage d'observation",
            "exp_rtl_date": "Février 2019",
            "exp_rtl_desc": "Participation à la régie de programme radio dans le cadre de mon stage de 3ème.",
            "exp_gstudio_role": "Projet GStudio",
            "exp_gstudio_date": "Mai 2025 - Août 2025",
            "exp_gstudio_desc": "Réalisation d'un projet de jeu vidéo en groupe de 5 développeurs et 2 artistes."
          }
        }
      },
      en: {
        translation: {
          "common": { "view_all": "View all", "back": "Back to projects", "not_found": "Project not found", "rights": "All rights reserved." },
          "nav": {
            "home": "Home",
            "projects": "Projects",
            "about": "About",
          },
          "index": {
            "hero_title": "Timéo DELMON",
            "hero_desc": "Hello and welcome to my portfolio. My name is Timéo Delmon and I am a developer specializing in video games. I am currently in my third year of studies at Gaming Campus.<0/><1/>You can find my various projects in the '<2>Projects</2>' section.",
            "hero_cta": "View my projects",
            "pro_title": "Professional Projects",
            "pro_subtitle": "Projects developed during my studies",
            "perso_title": "Personal Projects",
            "perso_subtitle": "Projects I have completed outside of my academic studies",
          },
          "projects": {
            "title": "All my",
            "title_accent": "Projects",
            "desc": "Here are some of my professional projects completed at Gaming Campus.",
            "filter_all": "All projects",
            "filter_pro": "Professional",
            "filter_perso": "Personal"
          },
          "projectDetail": {
            "role_label": "Role",
            "tech_label": "Technologies",
            "year_label": "Year",
            "about_label": "About the project"
          },
          "projectCard": {
            "viewProject": "View project",
          }, 
          "about": {
            "title": "About <0>me</0>",
            "bio_p1": "Passionate about video games and software development, I chose to study at Gaming Campus to specialize in game development.",
            "bio_p2": "I graduated high school in 2023, and since then, I have completed several projects through my school's intensive project-based curriculum.",
            "bio_p3": "In my spare time, I've dedicated myself to learning Blueprints in Unreal Engine 5 alongside my studies, while further honing my skills in Unity.",
            "skills_title": "Skills",
            "skills_tools": "Tools",
            "exp_title": "Experiences",
            "cv_button": "Download my CV",
            "exp_engie_role": "Data Analyst Intern",
            "exp_engie_date": "May 2024 - July 2024",
            "exp_engie_desc": "Exploration of the data analysis world. Developed electricity reports using Python for residential customers.",
            "exp_rtl_role": "Observation Internship",
            "exp_rtl_date": "February 2019",
            "exp_rtl_desc": "Assisted in the radio program control room during my middle school internship.",
            "exp_gstudio_role": "GStudio Project",
            "exp_gstudio_date": "May 2025 - August 2025",
            "exp_gstudio_desc": "Development of a video game project in a team of 5 developers and 2 artists."
          }
        }
      }
    },
    fallbackLng: "fr",
    interpolation: { escapeValue: false }
  });

export default i18n;
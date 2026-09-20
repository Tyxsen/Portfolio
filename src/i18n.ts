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
            "hero_desc": "Bonjour et bienvenue sur mon Portfolio, je m'appelle Timéo Delmon et je suis développeur spécialisé dans le jeu vidéo. Je suis actuellement en Master 1 au Gaming Campus et alternant chez Cloud Temple jusqu'à la date d'Octobre 2028.<0/><1/>Vous pourrez retrouver les différents projets que j'ai réalisé dans la rubrique '<2>Projets</2>'",
            "hero_cta": "Voir mes projets",
            "projects_title": "Mes Projets",
            "projects_subtitle": "Un aperçu de mes projets, réalisés dans le cadre de mes études ou à titre personnel."
          },
          "projects": {
            "title": "Tous mes",
            "title_accent": "Projets",
            "desc": "Voici l'ensemble de mes projets, réalisés dans le cadre de mes études ou à titre personnel."
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
            "bio_p3": "J'ai pu lors de ma 3ème année, réaliser un échange universitaire en Corée du Sud, cette expérience m'a permis d'apprendre à vivre dans un pays inconnu et de réaliser des projets dans ces conditions.",
            "bio_p4": "A mon retour, j'ai obtenu mon diplôme du bachelor spécialité option jeu vidéo. Puis, pour mon année de master 1, je suis en alternance chez Cloud Temple au poste de AI Ops. En parallèle, au Gaming Campus, je réalise un projet de création d'un jeu type sandbox sur tout le long de l'année.",
            "skills_title": "Compétences",
            "skills_tools": "Outils",
            "exp_title": "Expériences",
            "cv_button": "Télécharger mon CV",
            "exp_namseoul_role": "Etudiant en échange universitaire à Namseoul University en Corée du Sud",
            "exp_namseoul_date": "Février 2026 - Juillet 2026",
            "exp_namseoul_desc": "Découverte du monde de la VR et de la Corée dans une université coréenne pendant 4 mois",
            "exp_cloudtemple_role": "Alternant AI Ops",
            "exp_cloudtemple_date": "Septembre 2026 - Octobre 2028",
            "exp_cloudtemple_desc": "Alternance AI Ops dans une équipe de maintien d'infrastuctures as code pour des clients",
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
            "hero_desc": "Hello and welcome to my portfolio. My name is Timéo Delmon and I am a developer specializing in video games. I am currently pursuing a Master's degree (M1) at Gaming Campus, while working as an apprentice at Cloud Temple until October 2028.<0/><1/>You can find the various projects I have completed in the '<2>Projects</2>' section.",
            "hero_cta": "View my projects",
            "projects_title": "My Projects",
            "projects_subtitle": "A selection of my projects, completed during my studies or on my own time.",
          },
          "projects": {
            "title": "All my",
            "title_accent": "Projects",
            "desc": "Here is the full list of my projects, completed during my studies or on my own time."
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
            "bio_p3": "During my third year, I had the opportunity to complete a university exchange in South Korea. This experience taught me how to live in an unfamiliar country and carry out projects under those conditions.",
            "bio_p4": "Upon my return, I earned my Bachelor's degree with a specialization in video games. Then, for my first year of Master's, I started an apprenticeship at Cloud Temple as an AI Ops. Alongside this, at Gaming Campus, I am working on a year-long project to create a sandbox-style game.",
            "skills_title": "Skills",
            "skills_tools": "Tools",
            "exp_title": "Experiences",
            "cv_button": "Download my CV",
            "exp_namseoul_role": "Exchange student at Namseoul University in South Korea",
            "exp_namseoul_date": "February 2026 - July 2026",
            "exp_namseoul_desc": "Discovered the world of VR and Korean culture during a 4-month exchange at a Korean university.",
            "exp_cloudtemple_role": "AI Ops Apprentice",
            "exp_cloudtemple_date": "September 2026 - October 2028",
            "exp_cloudtemple_desc": "Apprenticeship in AI Ops within a team maintaining infrastructure as code for clients.",
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
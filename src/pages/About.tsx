import { Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import aboutWorkspace from "@/assets/personal-picture.jpeg";

const About = () => {
  const skills = [
    { category: "Unreal Engine", items: ["Blueprint", "C++"] },
    { category: "Unity", items: ["C#", "3D/2D", "UI/UX"] },
    { category: "C++", items: ["SFML", "SDL", "MongoDB"] },
    { category: "Python", items: ["Pygame", "Databricks"] },
    { category: "Outils", items: ["Git", "Figma", "Miro"] },
  ];

  const experiences = [
    {
      role: "Stagiaire Data Analyste",
      company: "ENGIE - Courbevoie",
      period: "Mai 2024 - Juillet 2024",
      description: "Découverte du monde de la data analyse. Dévéloppement de bilans d'éléctricité en Python pour des particuliers.",
    },
    {
      role: "Stage d'observation (3ème)",
      company: "RTL - Neuilly-sur-Seine",
      period: "Février 2019",
      description: "Participation à la régie de programme radio dans le cadre de mon stage de 3ème.",
    },
    {
      role: "Projet GStudio",
      company: "Gaming Campus",
      period: "Mai 2025 - Août 2025",
      description: "Réalisation d'un projet de jeu vidéo en groupe de 5 développeurs et 2 artistes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                À propos de{" "}
                <span className="text-primary glow-text">moi</span>
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Passionné par les jeux vidéos et le développement, j'ai choisi de
                  faire mes études à l'école Gaming Campus pour me spécialiser
                  dans le développement de jeux vidéos.
                </p>
                <p>
                  J'ai obtenu mon baccalauréat en 2023 et depuis j'ai réalisé plusieurs
                  projets avec mon école car nous travaillons par semaines de projets.
                </p>
                <p>
                  J'ai de mon côté pris le temps de faire du blueprint sur Unreal Engine 5
                  pour apprendre en parallèle de mes études et également de m'améliorer sur Unity que
                  j'ai déjà parcouru en cours.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg">
                  <a 
                      href="src\assets\Timeo_DELMON_CV.pdf"
                      download="Timeo_DELMON_CV.pdf" 
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 text-primary-foreground"
                  >
                  <Download className="mr-2 h-5 w-5"/>
                  Télécharger mon CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src={aboutWorkspace}
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-20">
            <h2 className="font-display text-4xl font-bold mb-12">
              Compétences
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-4 text-primary">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-muted-foreground flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-display text-4xl font-bold mb-12">
              Expérience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 hover:border-primary transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2 md:mt-0">
                      {exp.period}
                    </p>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

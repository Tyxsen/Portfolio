import { Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import aboutWorkspace from "@/assets/about-workspace.jpg";

const About = () => {
  const skills = [
    { category: "Design", items: ["UI/UX Design", "Branding", "Prototypage", "Design Systems"] },
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Outils", items: ["Figma", "Adobe Creative Suite", "Git", "Vite"] },
  ];

  const experiences = [
    {
      role: "Lead Designer",
      company: "Studio Créatif",
      period: "2022 - Présent",
      description: "Direction de projets design et développement d'interfaces utilisateur modernes.",
    },
    {
      role: "UI/UX Designer",
      company: "Agence Digital",
      period: "2020 - 2022",
      description: "Conception d'expériences utilisateur pour des applications web et mobiles.",
    },
    {
      role: "Développeur Frontend",
      company: "Tech Startup",
      period: "2018 - 2020",
      description: "Développement de sites web responsive et applications React.",
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
                  Passionné par le design et le développement web, je crée des
                  expériences digitales qui allient esthétique et fonctionnalité.
                </p>
                <p>
                  Avec plus de 5 ans d'expérience dans l'industrie, j'ai eu la
                  chance de travailler sur des projets variés, des startups
                  innovantes aux grandes entreprises établies.
                </p>
                <p>
                  Mon approche combine une vision créative avec une attention
                  méticuleuse aux détails techniques, toujours dans le but de
                  créer des solutions qui font la différence.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger mon CV
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
            <div className="grid md:grid-cols-3 gap-8">
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

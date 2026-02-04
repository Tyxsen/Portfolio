import { Download } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import aboutWorkspace from "@/assets/personal-picture.jpeg";

const About = () => {
  const { t, i18n } = useTranslation();

  const skills = [
    { category: "Unreal Engine", items: ["Blueprint"] },
    { category: "Unity", items: ["C#", "3D/2D", "UI/UX"] },
    { category: "C++", items: ["SFML", "SDL", "MongoDB"] },
    { category: "Python", items: ["Pygame", "Databricks"] },
    { category: t('about.skills_tools'), items: ["Git", "Figma", "Miro"] },
  ];

  const experiences = [
    {
      role: t('about.exp_engie_role'),
      company: "ENGIE - Courbevoie",
      period: t('about.exp_engie_date'),
      description: t('about.exp_engie_desc'),
    },
    {
      role: t('about.exp_rtl_role'),
      company: "RTL - Neuilly-sur-Seine",
      period: t('about.exp_rtl_date'),
      description: t('about.exp_rtl_desc'),
    },
    {
      role: t('about.exp_gstudio_role'),
      company: "Gaming Campus",
      period: t('about.exp_gstudio_date'),
      description: t('about.exp_gstudio_desc'),
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
                <Trans i18nKey="about.title">
                {}
                <span className="text-primary glow-text">moi</span>
                </Trans>
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  {t('about.bio_p1')}
                </p>
                <p>
                  {t('about.bio_p2')}
                </p>
                <p>
                  {t('about.bio_p3')}
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a 
                    href={i18n.language.startsWith('en') ? "/English_Timeo_DELMON_CV.pdf" : "/Timeo_DELMON_CV.pdf"}
                    download={i18n.language.startsWith('en') ? "CV_Timeo_DELMON_EN.pdf" : "CV_Timeo_DELMON.pdf"} 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 text-primary-foreground"
                  >
                    <Download className="mr-2 h-5 w-5"/>
                    {t('about.cv_button')}
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
              {t('about.skills_title')}
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
              {t('about.exp_title')}
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

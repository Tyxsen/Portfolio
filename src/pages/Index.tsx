import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import {
  getProfessionalProjects,
  getPersonalProjects,
} from "@/data/projects";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const professionalProjects = getProfessionalProjects();
  const personalProjects = getPersonalProjects();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Timéo DELMON
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              <Trans i18nKey="index.hero_desc">
              {}
              <br /> 
              {}
              <br /> 
              {}
              <span className="text-primary font-medium">Projets</span>
              </Trans>
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button size="lg" asChild>
                <Link to="/projects">
                  {t('index.hero_cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* School Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-4xl font-bold mb-2">
                {t('index.pro_title')}
              </h2>
              <p className="text-muted-foreground">
                {t('index.pro_subtitle')}
              </p>
            </div>
            <Button variant="ghost" asChild className="group">
              <Link to="/projects">
                {t('common.view_all')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-4xl font-bold mb-2">
                {t('index.perso_title')}
              </h2>
              <p className="text-muted-foreground">
                {t('index.perso_subtitle')}
              </p>
            </div>
            <Button variant="ghost" asChild className="group">
              <Link to="/projects">
                {t('common.view_all')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />  
    </div>
  );
};

export default Index;

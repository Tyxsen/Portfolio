import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Bonjour, je suis{" "}
              <span className="text-primary glow-text">Designer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Créateur d'expériences digitales modernes et élégantes.
              Spécialisé en design UI/UX et développement frontend.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button size="lg" asChild>
                <Link to="/projects">
                  Voir mes projets
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Me contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-4xl font-bold mb-2">
                Projets Professionnels
              </h2>
              <p className="text-muted-foreground">
                Mes réalisations pour des clients et entreprises
              </p>
            </div>
            <Button variant="ghost" asChild className="group">
              <Link to="/projects">
                Tout voir
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
                Projets Personnels
              </h2>
              <p className="text-muted-foreground">
                Explorations créatives et side projects
              </p>
            </div>
            <Button variant="ghost" asChild className="group">
              <Link to="/projects">
                Tout voir
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

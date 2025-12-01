import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "professional" | "personal">(
    "all"
  );

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Tous mes{" "}
              <span className="text-primary glow-text">Projets</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Une sélection de mes travaux professionnels et personnels,
              reflétant ma passion pour le design et le développement.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              Tous les projets
            </Button>
            <Button
              variant={filter === "professional" ? "default" : "outline"}
              onClick={() => setFilter("professional")}
            >
              Professionnels
            </Button>
            <Button
              variant={filter === "personal" ? "default" : "outline"}
              onClick={() => setFilter("personal")}
            >
              Personnels
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

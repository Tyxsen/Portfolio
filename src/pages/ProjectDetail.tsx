import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { getProjectById } from "@/data/projects";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');

  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : null;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 pt-32">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold mb-4">
              {t('common.not_found')}
            </h1>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('common.back')}
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.back')}
            </Link>
          </Button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary" className="text-sm">
                {project.category}
              </Badge>
              <span className="text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {isEn ? project.description_en : project.description}
            </p>
          </div>

          {/* Project Media */}
          <div className="mb-12">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {project.media.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                      {item.type === "video" ? (
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={`${project.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.media.length > 1 && (
                <>
                  <CarouselPrevious className="left-4 -translate-y-1/2" />
                  <CarouselNext className="right-4 -translate-y-1/2" />
                </>
              )}
            </Carousel>
            {project.media.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {project.media.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`${index + 1}`}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === current ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="font-display text-lg font-semibold mb-4 text-primary">
                {t('projectDetail.role_label')}
              </h3>
              <p className="text-muted-foreground">{isEn ? project.role_en : project.role}</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-4 text-primary">
                {t('projectDetail.tech_label')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-4 text-primary">
                {t('projectDetail.year_label')}
              </h3>
              <p className="text-muted-foreground">{project.year}</p>
            </div>
          </div>

          {/* Project Description */}
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl font-bold mb-6">
              {t('projectDetail.about_label')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {isEn ? project.fullDescription_en : project.fullDescription}
            </p>
          </div>

          {/* CTA */}
          {project.links && project.links.length > 0 && (
            <div className="flex gap-4">
            {/* Nous parcourons chaque lien dans le tableau 'project.links' */}
            {project.links.map((linkItem, index) => (
              <Button size="lg" asChild key={index}>
                <a
                  href={linkItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkItem.name} {/* Utilise le nom du lien */}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

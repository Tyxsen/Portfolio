import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  description_en: string;
  image: string;
  year: string;
}

const ProjectCard = ({
  id,
  title,
  category,
  description,
  description_en,
  image,
  year,
}: ProjectCardProps) => {
  const { t, i18n } = useTranslation();

  const isEn = i18n.language.startsWith('en');

  return (
    <Link to={`/project/${id}`}>
      <Card className="group overflow-hidden border-0 bg-card project-card-hover">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex items-center gap-2 text-primary">
              <span className="text-sm font-medium">{t('projectCard.viewProject')}</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider text-primary font-medium">
              {category}
            </span>
            <span className="text-xs text-muted-foreground">{year}</span>
          </div>
          <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {isEn ? description_en : description}
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;

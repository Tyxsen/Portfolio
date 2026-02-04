import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Languages, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold text-primary">
            Portfolio
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`nav-link text-sm font-medium ${isActive("/") ? "text-primary" : "text-foreground"}`}>{t('nav.home')}</Link>
            <Link to="/projects" className={`nav-link text-sm font-medium ${isActive("/projects") ? "text-primary" : "text-foreground"}`}>{t('nav.projects')}</Link>
            <Link to="/about" className={`nav-link text-sm font-medium ${isActive("/about") ? "text-primary" : "text-foreground"}`}>{t('nav.about')}</Link>
          </div>

          <div className="flex items-center gap-3">

            {/* Bouton de changement de langue */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:text-primary font-medium"
            >
              <Languages className="h-5 w-5" />
              <span className="text-xs uppercase">{i18n.language.split('-')[0]}</span>
            </Button>

            <Button
              size="icon"
              variant="ghost"
              asChild
              className="hover:text-primary"
            >
              <a
                href="https://github.com/Tyxsen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="hover:text-primary"
            >
              <a
                href="https://www.linkedin.com/in/tim%C3%A9o-delmon-74b9892b3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

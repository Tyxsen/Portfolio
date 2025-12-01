import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold text-primary">
            Portfolio
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`nav-link text-sm font-medium ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/projects"
              className={`nav-link text-sm font-medium ${
                isActive("/projects") ? "text-primary" : "text-foreground"
              }`}
            >
              Projets
            </Link>
            <Link
              to="/about"
              className={`nav-link text-sm font-medium ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className={`nav-link text-sm font-medium ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="hover:text-primary"
            >
              <a
                href="https://github.com"
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
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="hover:text-primary"
            >
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

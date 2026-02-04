import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. {t('common.rights')}
          </p>
          <p className="text-muted-foreground text-sm">
            Timéo DELMON
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

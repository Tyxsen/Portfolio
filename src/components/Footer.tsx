const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. Tous droits réservés.
          </p>
          <p className="text-muted-foreground text-sm">
            Conçu avec passion et créativité.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

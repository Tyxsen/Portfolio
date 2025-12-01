import { Mail, MapPin, Phone, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! Je vous répondrai dès que possible.");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@portfolio.com",
      href: "mailto:contact@portfolio.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+33 6 12 34 56 78",
      href: "tel:+33612345678",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Paris, France",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Restons en{" "}
              <span className="text-primary glow-text">contact</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Un projet en tête ? Une question ? N'hésitez pas à me contacter.
              Je serais ravi d'échanger avec vous.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info) => (
              <Card key={info.label} className="p-6 hover:border-primary transition-colors">
                <info.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2">
                  {info.label}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold mb-8">
              Envoyez-moi un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom
                  </label>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Sujet
                </label>
                <Input
                  id="subject"
                  placeholder="Sujet de votre message"
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  rows={6}
                  required
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full md:w-auto">
                <Send className="mr-2 h-5 w-5" />
                Envoyer le message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Code, Smartphone, Palette, Settings, Check } from "lucide-react";

interface Service {
  id: number;
  title: string;
  icon: string;
  longDescription: string;
  features: string[];
}

const iconMap: Record<string, any> = {
  Globe,
  ShoppingCart,
  Code,
  Smartphone,
  Palette,
  Settings,
};

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/data/content.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/90"
          >
            Comprehensive digital solutions to help your business thrive in the modern world
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="flex-1 bg-card rounded-2xl p-8 shadow-lg">
                    <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{service.longDescription}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-32 h-32 text-primary/40" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

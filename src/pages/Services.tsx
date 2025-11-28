import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Code, Smartphone, Palette, Settings, Check, Sparkles } from "lucide-react";

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
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-bold">خدماتنا المتميزة</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            حلول رقمية شاملة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed"
          >
            نقدم خدمات تقنية متكاملة لمساعدة عملك على النمو والازدهار في العصر الرقمي
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-card rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-border/50 hover:border-primary/50 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-primary to-secondary w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-glow"
                      >
                        <Icon className="w-10 h-10 text-primary-foreground" />
                      </motion.div>
                      
                      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      
                      <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        {service.longDescription}
                      </p>
                      
                      <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-4 group/item"
                          >
                            <div className="bg-gradient-to-br from-accent to-secondary p-1.5 rounded-lg flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                              <Check className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <span className="text-foreground text-lg">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex items-center justify-center"
                  >
                    <div className="relative w-full aspect-square max-w-md">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-2xl animate-pulse" />
                      <div className="relative w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl flex items-center justify-center border-4 border-primary/20 shadow-2xl">
                        <Icon className="w-48 h-48 text-primary/30" />
                      </div>
                    </div>
                  </motion.div>
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

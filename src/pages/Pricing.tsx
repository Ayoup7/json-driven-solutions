import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PricingPackage {
  id: number;
  name: string;
  price: number;
  currency: string;
  isFeatured: boolean;
  description: string;
  features: string[];
  ctaText: string;
}

const packageIcons: Record<number, any> = {
  1: Zap,
  2: Crown,
  3: Rocket,
};

const Pricing = () => {
  const [packages, setPackages] = useState<PricingPackage[]>([]);

  useEffect(() => {
    fetch("/data/content.json")
      .then((res) => res.json())
      .then((data) => setPackages(data.pricingPackages));
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
          >
            <Star className="w-5 h-5 fill-current" />
            <span className="font-bold">باقات مرنة</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            أسعار واضحة وشفافة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed"
          >
            اختر الباقة المثالية التي تناسب احتياجات عملك وميزانيتك
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => {
              const PackageIcon = packageIcons[pkg.id] || Star;
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className={`relative ${
                    pkg.isFeatured ? "md:-mt-8 md:mb-8" : ""
                  }`}
                >
                  {pkg.isFeatured && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="absolute -top-6 left-1/2 -translate-x-1/2 z-20"
                    >
                      <div className="bg-gradient-to-r from-accent to-secondary text-accent-foreground px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-glow">
                        <Star className="w-5 h-5 fill-current animate-pulse" />
                        الأكثر شعبية
                      </div>
                    </motion.div>
                  )}

                  <div
                    className={`relative bg-card rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col ${
                      pkg.isFeatured
                        ? "border-4 border-accent shadow-glow"
                        : "border-2 border-border/50 hover:border-primary/50"
                    }`}
                  >
                    {pkg.isFeatured && (
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl" />
                    )}

                    <div className="relative">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                          pkg.isFeatured
                            ? "bg-gradient-to-br from-accent to-secondary shadow-glow"
                            : "bg-gradient-to-br from-primary to-secondary"
                        }`}
                      >
                        <PackageIcon className="w-8 h-8 text-primary-foreground" />
                      </motion.div>

                      <h3 className="text-3xl font-extrabold text-foreground mb-3">
                        {pkg.name}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {pkg.description}
                      </p>

                      <div className="flex items-baseline justify-center gap-3 mb-8">
                        <span className="text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {pkg.price.toLocaleString()}
                        </span>
                        <span className="text-2xl text-muted-foreground font-bold">
                          {pkg.currency}
                        </span>
                      </div>

                      <ul className="space-y-4 mb-10 flex-grow">
                        {pkg.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <div
                              className={`p-1.5 rounded-lg flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform ${
                                pkg.isFeatured
                                  ? "bg-gradient-to-br from-accent to-secondary"
                                  : "bg-gradient-to-br from-primary to-secondary"
                              }`}
                            >
                              <Check className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <span className="text-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        className={`w-full text-lg py-6 rounded-2xl font-bold transition-all duration-300 ${
                          pkg.isFeatured
                            ? "bg-gradient-to-r from-accent to-secondary hover:scale-105 hover:shadow-glow"
                            : "bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-medium"
                        }`}
                      >
                        <Link to="/contact">{pkg.ctaText}</Link>
                      </Button>
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

export default Pricing;

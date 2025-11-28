import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("/data/content.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data.testimonials));
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-muted/50 via-background to-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-accent/10 to-secondary/10 px-6 py-2 rounded-full mb-6"
          >
            <span className="text-accent font-bold">آراء العملاء</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            ماذا يقول{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              عملاؤنا
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            اكتشف قصص نجاح الشركات التي ساعدناها في التحول الرقمي
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="p-8 h-full relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-border/50 hover:border-accent/50 bg-card/80 backdrop-blur-sm group">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="absolute top-0 right-0"
                  >
                    <Quote className="w-16 h-16 text-accent/20 group-hover:text-accent/40 transition-colors" />
                  </motion.div>
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                      >
                        <Star className="w-6 h-6 fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-8 italic leading-relaxed text-lg relative">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border/50 pt-6">
                    <div className="font-bold text-foreground text-lg mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-primary font-semibold">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  clientIndustry: string;
}

const Portfolio = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [filter, setFilter] = useState("الكل");

  useEffect(() => {
    fetch("/data/content.json")
      .then((res) => res.json())
      .then((data) => setItems(data.portfolioItems));
  }, []);

  const categories = ["الكل", "مواقع", "تجارة إلكترونية", "أنظمة"];
  const filteredItems = filter === "الكل" ? items : items.filter((item) => item.category === filter);

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
              "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)",
            backgroundSize: "80px 80px",
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="font-bold">معرض أعمالنا</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            مشاريع ملهمة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed"
          >
            استكشف أحدث مشاريعنا واكتشف كيف ساعدنا الشركات على تحقيق النجاح الرقمي
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <div className="flex items-center gap-2 text-muted-foreground mb-4 w-full justify-center">
              <Filter className="w-5 h-5" />
              <span className="font-semibold">تصفية حسب:</span>
            </div>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow scale-110"
                    : "bg-card text-foreground hover:bg-muted border-2 border-border/50 hover:border-primary/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-border/50 group-hover:border-primary/50 h-full flex flex-col">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10"
                      >
                        <ExternalLink className="w-20 h-20 text-primary/40 group-hover:text-primary/60 transition-colors" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Animated overlay */}
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </div>
                    
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="inline-block bg-gradient-to-r from-accent/10 to-primary/10 text-accent font-bold px-4 py-2 rounded-full mb-4 text-sm self-start">
                        {item.category}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                        {item.shortDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="text-xs bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full font-semibold"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      <div className="text-sm text-muted-foreground border-t border-border/50 pt-4 mt-auto">
                        <span className="font-semibold text-foreground">القطاع:</span> {item.clientIndustry}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

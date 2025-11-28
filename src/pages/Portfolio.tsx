import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/data/content.json")
      .then((res) => res.json())
      .then((data) => setItems(data.portfolioItems));
  }, []);

  const categories = ["All", "Websites", "E-Commerce", "Systems"];
  const filteredItems = filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/90"
          >
            Explore our latest projects and see how we've helped businesses succeed
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <ExternalLink className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">{item.category}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Industry: {item.clientIndustry}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

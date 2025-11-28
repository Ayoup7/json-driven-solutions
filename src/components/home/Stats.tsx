import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Briefcase } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  icon: string;
}

const iconMap: Record<string, any> = {
  CheckCircle,
  Users,
  Award,
  Briefcase,
};

const Stats = () => {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    fetch("/data/content.json")
      .then((res) => res.json())
      .then((data) => setStats(data.companyStats));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center space-y-3 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mb-4"
                >
                  <div className="bg-primary-foreground/20 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-primary-foreground/30 transition-all shadow-lg">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className="text-5xl md:text-6xl font-extrabold group-hover:scale-110 transition-transform"
                >
                  {stat.value}
                </motion.div>
                <div className="text-base md:text-lg text-primary-foreground/90 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

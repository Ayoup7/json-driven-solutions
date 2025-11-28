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
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="flex justify-center mb-3">
                  <div className="bg-accent p-3 rounded-full">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-sm md:text-base text-primary-foreground/80">
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

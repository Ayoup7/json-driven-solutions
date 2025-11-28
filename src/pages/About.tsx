import { motion } from "framer-motion";
import { Target, Eye, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Code Pioneers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/90"
          >
            Building digital excellence since 2017
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Founded in 2017, Code Pioneers emerged from a simple belief: businesses deserve
                digital solutions that are as unique as they are. What started as a small team of
                passionate developers has grown into a full-service digital agency serving clients
                across the Middle East and beyond.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've delivered over 150 projects, ranging from elegant websites to complex
                enterprise systems. Our approach combines technical excellence with a deep
                understanding of business needs, ensuring every solution we create drives real
                results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with innovative digital solutions that drive growth and
                  success in the modern marketplace.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading digital partner for businesses seeking to transform their
                  operations through technology.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Excellence, innovation, and client success drive everything we do. We build
                  lasting partnerships based on trust and results.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "8+ years of industry experience",
                  "150+ successful projects delivered",
                  "80+ satisfied clients worldwide",
                  "Expert team of 25+ professionals",
                  "Cutting-edge technology stack",
                  "24/7 support and maintenance",
                  "Transparent pricing, no hidden fees",
                  "Proven track record of success",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-accent w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

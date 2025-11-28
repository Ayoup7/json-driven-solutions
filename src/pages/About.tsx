import { motion } from "framer-motion";
import { Target, Eye, Zap, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
          >
            <Users className="w-5 h-5" />
            <span className="font-bold">من نحن</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            رواد البرمجة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed"
          >
            نبني التميز الرقمي منذ عام 2017
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 text-center">
                قصة{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  نجاحنا
                </span>
              </h2>
              <div className="bg-card rounded-3xl p-10 shadow-xl border-2 border-border/50">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  تأسست رواد البرمجة في عام 2017 انطلاقاً من إيمان بسيط: تستحق الشركات حلولاً رقمية
                  فريدة بقدر تميزها. بدأنا كفريق صغير من المطورين المتحمسين ونمونا لنصبح وكالة رقمية
                  متكاملة الخدمات تخدم العملاء في جميع أنحاء الشرق الأوسط وخارجه.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  قدمنا أكثر من 150 مشروعاً، تتراوح من المواقع الأنيقة إلى أنظمة المؤسسات المعقدة.
                  نهجنا يجمع بين التميز التقني والفهم العميق لاحتياجات الأعمال، مما يضمن أن كل حل نصنعه
                  يحقق نتائج حقيقية.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: Target,
                  title: "رسالتنا",
                  desc: "تمكين الشركات بحلول رقمية مبتكرة تدفع النمو والنجاح في السوق الحديث",
                  gradient: "from-primary to-secondary",
                },
                {
                  icon: Eye,
                  title: "رؤيتنا",
                  desc: "أن نكون الشريك الرقمي الرائد للشركات التي تسعى للتحول من خلال التكنولوجيا",
                  gradient: "from-secondary to-accent",
                },
                {
                  icon: Zap,
                  title: "قيمنا",
                  desc: "التميز والابتكار ونجاح العملاء يقود كل ما نقوم به. نبني شراكات دائمة على الثقة والنتائج",
                  gradient: "from-accent to-primary",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border-2 border-border/50 group-hover:border-primary/50 h-full">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-br ${item.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow`}
                    >
                      <item.icon className="w-10 h-10 text-primary-foreground" />
                    </motion.div>
                    <h3 className="text-2xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 rounded-3xl p-10 md:p-16 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-accent to-transparent rounded-full blur-3xl" />
              </div>
              
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 text-center">
                  لماذا{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    تختارنا؟
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Award, text: "أكثر من 8 سنوات خبرة في المجال" },
                    { icon: TrendingUp, text: "150+ مشروع ناجح تم تسليمه" },
                    { icon: Users, text: "80+ عميل راضٍ حول العالم" },
                    { icon: Users, text: "فريق خبراء من 25+ محترف" },
                    { icon: Zap, text: "تقنيات حديثة ومتطورة" },
                    { icon: Target, text: "دعم وصيانة على مدار الساعة" },
                    { icon: Award, text: "أسعار شفافة بدون رسوم خفية" },
                    { icon: TrendingUp, text: "سجل حافل بالنجاح المثبت" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="bg-gradient-to-br from-accent to-secondary w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-md">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-semibold text-lg">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

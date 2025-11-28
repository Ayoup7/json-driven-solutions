import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال الرسالة بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const whatsappNumber = "+966501234567";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

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
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-bold">تواصل معنا</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            ابدأ مشروعك معنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed"
          >
            جاهز لبدء مشروعك؟ دعنا نناقش كيف يمكننا مساعدة عملك على النمو
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-extrabold text-foreground mb-6">
                  معلومات{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    الاتصال
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  نحن هنا للإجابة على أي أسئلة قد تكون لديك حول خدماتنا
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "البريد الإلكتروني",
                    content: "info@codepioneers.dev",
                    link: "mailto:info@codepioneers.dev",
                  },
                  {
                    icon: Phone,
                    title: "الهاتف",
                    content: "+966 50 123 4567",
                    link: "tel:+966501234567",
                  },
                  {
                    icon: MapPin,
                    title: "الموقع",
                    content: "الرياض، المملكة العربية السعودية",
                    link: null,
                  },
                  {
                    icon: MessageCircle,
                    title: "واتساب",
                    content: "تواصل معنا عبر الواتساب",
                    link: whatsappLink,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex items-start gap-5 bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-primary/50">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl group-hover:shadow-glow"
                      >
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-bold text-foreground mb-2 text-lg">
                          {item.title}
                        </div>
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith("http") ? "_blank" : undefined}
                            rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              
              <div className="relative bg-card rounded-3xl p-10 shadow-2xl border-2 border-border/50">
                <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">
                  أرسل لنا{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    رسالة
                  </span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-3">
                      الاسم الكامل
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="محمد أحمد"
                      className="rounded-xl border-2 border-border/50 focus:border-primary h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-3">
                      البريد الإلكتروني
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="example@email.com"
                      className="rounded-xl border-2 border-border/50 focus:border-primary h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-3">
                      رقم الهاتف
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 50 123 4567"
                      className="rounded-xl border-2 border-border/50 focus:border-primary h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-foreground mb-3"
                    >
                      رسالتك
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      placeholder="أخبرنا عن مشروعك..."
                      className="rounded-xl border-2 border-border/50 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:scale-105 hover:shadow-glow text-lg py-6 rounded-2xl font-bold transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      إرسال الرسالة
                      <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

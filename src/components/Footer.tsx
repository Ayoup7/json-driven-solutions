import { Link } from "react-router-dom";
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { useEffect, useState } from "react";

interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  social: {
    linkedin: string;
    twitter: string;
    github: string;
  };
}

const Footer = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

  useEffect(() => {
    fetch("/data/content.json")
      .then((res) => res.json())
      .then((data) => setCompanyInfo(data.companyInfo));
  }, []);

  if (!companyInfo) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-2 rounded-lg">
                <Code className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-lg font-bold">{companyInfo.name}</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              نبني حلولاً رقمية مبتكرة للشركات حول العالم
            </p>
            <div className="flex gap-4">
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  الباقات
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  الأعمال
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-lg">خدماتنا</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>تطوير المواقع</li>
              <li>التجارة الإلكترونية</li>
              <li>البرمجيات المخصصة</li>
              <li>تطبيقات الجوال</li>
              <li>تصميم واجهات المستخدم</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-lg">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-accent transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © {currentYear} {companyInfo.name}. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

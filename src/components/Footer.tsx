import Link from "next/link";
import { Landmark, Mail, Phone, MapPin, Share2, Users, MessageCircle, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, isUrdu } = useLanguage();

  return (
    <footer className={`bg-primary-dark text-cream pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden relative ${isUrdu ? "font-urdu" : "font-sans"}`}>
      {/* Background Pattern Placeholder */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--primary)_100%)] opacity-30 pointer-events-none"></div>

      <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 ${isUrdu ? "text-right" : "text-left"}`}>
        {/* Column 1: About */}
        <div className="space-y-6">
          <Link href="/" className={`flex items-center gap-3 ${isUrdu ? "justify-end lg:justify-start lg:flex-row-reverse" : "justify-start"}`}>
            <div className="bg-cream/10 p-2 rounded-xl">
              <Landmark className="w-8 h-8 text-cream" />
            </div>
            <span className={`text-2xl font-serif font-bold text-cream ${isUrdu ? "font-urdu text-3xl" : ""}`}>
              {t("nav.madrasa_name")}
            </span>
          </Link>
          <p className={`text-cream/70 text-sm leading-7 ${isUrdu ? "text-lg leading-relaxed" : ""}`}>
            {t("footer.about")}
          </p>
          <div className={`flex gap-4 ${isUrdu ? "justify-end lg:justify-start" : "justify-start"}`}>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent hover:text-primary transition-all group/icon"><Share2 className="w-5 h-5 transition-transform group-hover/icon:scale-110" /></a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent hover:text-primary transition-all group/icon"><Users className="w-5 h-5 transition-transform group-hover/icon:scale-110" /></a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent hover:text-primary transition-all group/icon"><MessageCircle className="w-5 h-5 transition-transform group-hover/icon:scale-110" /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className={`text-lg font-serif font-bold mb-6 text-accent ${isUrdu ? "text-2xl" : ""}`}>{t("footer.links_title")}</h3>
          <ul className="space-y-4">
            {[
              { name: t("nav.home"), href: "/" },
              { name: t("nav.about"), href: "/about" },
              { name: t("nav.courses"), href: "/courses" },
              { name: t("nav.admission"), href: "/admission" },
              { name: t("nav.teachers"), href: "/teachers" }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-cream/70 text-sm hover:text-accent transition-colors ${isUrdu ? "text-lg" : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Courses */}
        <div>
          <h3 className={`text-lg font-serif font-bold mb-6 text-accent ${isUrdu ? "text-2xl" : ""}`}>{t("footer.courses_title")}</h3>
          <ul className="space-y-4">
            {[
              { name: t("course.c1_title"), href: "/courses" },
              { name: t("course.c2_title"), href: "/courses" },
              { name: t("course.c3_title"), href: "/courses" },
              { name: t("course.c4_title"), href: "/courses" },
              { name: t("footer.online_classes"), href: "/courses" }
            ].map((course) => (
              <li key={course.name}>
                <Link
                  href={course.href}
                  className={`text-cream/70 text-sm hover:text-accent transition-colors ${isUrdu ? "text-lg" : ""}`}
                >
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className={`text-lg font-serif font-bold mb-6 text-accent ${isUrdu ? "text-2xl" : ""}`}>{t("footer.contact_title")}</h3>
          <ul className="space-y-5">
            <li className={`flex items-start gap-3 ${isUrdu ? "flex-row-reverse" : "flex-row"}`}>
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <span className={`text-cream/70 text-sm ${isUrdu ? "text-lg" : ""}`}>
                {t("footer.address")}
              </span>
            </li>
            <li className={`flex items-center gap-3 ${isUrdu ? "flex-row-reverse" : "flex-row"}`}>
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <span className={`text-cream/70 text-sm ${isUrdu ? "text-lg" : ""}`}>{t("footer.phone_val")}</span>
            </li>
            <li className={`flex items-center gap-3 ${isUrdu ? "flex-row-reverse" : "flex-row"}`}>
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <span className={`text-cream/70 text-sm ${isUrdu ? "text-lg" : ""}`}>{t("footer.email_val")}</span>
            </li>
          </ul>
          <Link
            href="/donation"
            className={`mt-8 flex items-center justify-center gap-2 bg-accent text-primary-dark font-bold py-3 px-6 rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg ${isUrdu ? "font-urdu text-xl" : "text-sm"}`}
          >
            <Heart className="w-5 h-5 fill-current" />
            {t("btn.donate")}
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`max-w-7xl mx-auto border-t border-cream/10 mt-16 pt-8 text-center md:flex md:justify-between ${isUrdu ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <p className={`text-cream/40 text-xs ${isUrdu ? "text-sm text-right lg:text-left" : ""}`}>
          &copy; {currentYear} {t("nav.madrasa_name")}. {t("footer.rights")} 
          <br className="md:hidden" /> {t("footer.designed")}
        </p>
        <div className="flex gap-6 mt-4 md:mt-0 justify-center text-xs text-cream/40 px-2">
          <Link href="/privacy" className={`hover:text-accent ${isUrdu ? "text-sm" : ""}`}>{t("footer.privacy")}</Link>
          <Link href="/terms" className={`hover:text-accent ${isUrdu ? "text-sm" : ""}`}>{t("footer.terms")}</Link>
        </div>
      </div>
    </footer>
  );
}

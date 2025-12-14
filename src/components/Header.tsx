import { Link, useLocation } from "react-router-dom";
import { Heart, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const handleLanguageChange = (event: any) => {
    const lang = event.target.value;
    if (!lang) return;

    const pageUrl = window.location.href;
    const translateUrl = `https://translate.google.com/translate?sl=en&tl=${lang}&u=${encodeURIComponent(pageUrl)}`;

    window.open(translateUrl, "_blank");
    event.target.value = "";
  };
  const navLinks = [
    { to: "/", label: "About" },
    { to: "/types-of-cancer", label: "Types of Cancer" },
    { to: "/treatments", label: "Treatments" },
    { to: "/screening", label: "Cancer Screening" },
    { to: "/contact", label: "Collaborators & Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary transition-all group-hover:scale-105">
              <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">Translate</span>
              <span className="text-sm font-semibold text-primary leading-tight">Oncology Initiative</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 relative z-50">
              <Globe className="h-4 w-4 text-primary" />
              <select
                defaultValue=""
                onChange={handleLanguageChange}
                className="text-xs font-medium border border-border rounded-md px-2 py-1 bg-background shadow-sm cursor-pointer"
              >
                <option value="" disabled>
                  Translate
                </option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="zh-CN">中文 (简体)</option>
                <option value="ar">العربية</option>
                <option value="hi">हिन्दी</option>
                <option value="pt">Português</option>
                <option value="ru">Русский</option>
              </select>
            </div>
            
            <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.to
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-accent/50 hover:text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          </div>

          <nav className="flex md:hidden">
            <select
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
              className="text-sm font-medium border border-border rounded-md px-3 py-2 bg-background"
            >
              {navLinks.map((link) => (
                <option key={link.to} value={link.to}>
                  {link.label}
                </option>
              ))}
            </select>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "ホーム", path: "/" },
  { label: "ホテルサトウ", path: "/hotel-sato" },
  { label: "アネックスイン", path: "/annex-inn" },
  { label: "コインランドリー", path: "/coin-laundry" },
  { label: "採用情報", path: "/recruit" },
  { label: "お問い合わせ", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="font-display text-xl md:text-2xl tracking-wider text-foreground">
              佐藤観光商事
            </span>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Sato Kanko Shoji
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-foreground ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:0146-42-0425"
              className="hidden md:flex items-center gap-2 text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              0146-42-0425
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="メニュー"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="flex flex-col py-6 px-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`py-3 text-sm tracking-[0.1em] border-b border-border/50 transition-colors ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:0146-42-0425"
              className="flex items-center gap-2 py-3 text-sm tracking-wider text-muted-foreground"
            >
              <Phone className="w-4 h-4" />
              0146-42-0425
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

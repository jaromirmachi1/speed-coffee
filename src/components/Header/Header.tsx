import { useState, type ReactNode } from "react";
import Container from "../Container";
import { useLanguage } from "../../contexts/LanguageContext";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLink = ({
  href,
  children,
  onClick,
  isMobile = false,
}: NavLinkProps) => {
  const baseClasses = isMobile
    ? "text-dark font-manuka font-normal uppercase hover:text-accent transition-colors block text-xl md:text-2xl"
    : "text-dark font-manuka font-normal uppercase hover:text-accent transition-colors text-3xl md:text-4xl lg:text-5xl";

  return (
    <a href={href} onClick={onClick} className={baseClasses}>
      {children}
    </a>
  );
};

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <svg
        className="w-8 h-8 text-dark"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isOpen ? (
          <path d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang: "en" | "cz") => {
    setLanguage(lang);
  };

  return (
    <header className="bg-beige pt-4 relative z-50">
      <Container>
        <nav className="py-0">
          <div className="flex items-center justify-between">
            {/* Mobile: Logo on left, Hamburger on right */}
            <div className="flex items-center justify-between w-full sm:hidden">
              <a
                href="#top"
                className="text-dark uppercase font-manuka font-medium leading-none"
                style={{ fontSize: "clamp(20px, 5vw, 24px)" }}
              >
                <span>SPEED</span> <span>COFFEE</span>
              </a>
              <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>

            {/* Desktop/Tablet: Original layout */}
            <div className="hidden sm:flex items-center justify-between w-full">
              <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
              <div className="flex-1" />
              <div className="flex items-center gap-4 md:gap-6">
                <NavLink href="#events">{t("nav.events")}</NavLink>
                <NavLink href="#reserve">{t("nav.reserve")}</NavLink>
                <NavLink href="#shop">{t("nav.shop")}</NavLink>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-64 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="py-4 space-y-4">
              <NavLink href="#events" onClick={closeMenu} isMobile>
                {t("nav.events")}
              </NavLink>
              <NavLink href="#reserve" onClick={closeMenu} isMobile>
                {t("nav.reserve")}
              </NavLink>
              <NavLink href="#shop" onClick={closeMenu} isMobile>
                {t("nav.shop")}
              </NavLink>

              {/* Language Switcher */}
              <div className="pt-4 border-t border-dark/20">
                <div className="flex items-center gap-4">
                  <span className="text-dark font-manuka font-normal uppercase text-xl">
                    Language:
                  </span>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`px-4 py-2 rounded font-manuka font-normal uppercase transition-colors ${
                      language === "en"
                        ? "bg-dark text-beige"
                        : "bg-beige text-dark border-2 border-dark hover:bg-dark hover:text-beige"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange("cz")}
                    className={`px-4 py-2 rounded font-manuka font-normal uppercase transition-colors ${
                      language === "cz"
                        ? "bg-dark text-beige"
                        : "bg-beige text-dark border-2 border-dark hover:bg-dark hover:text-beige"
                    }`}
                  >
                    CZ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

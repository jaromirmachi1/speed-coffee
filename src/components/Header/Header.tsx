"use client";

import { useState, type ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  typography,
  fontWeights,
  lineHeights,
} from "@/lib/constants/typography";
import logoSc from "@/assets/images/logoSc.webp";

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
    ? `text-dark font-manuka ${fontWeights.manuka.normal} uppercase hover:text-accent transition-colors block ${typography.manuka.navMobile}`
    : `text-dark font-manuka ${fontWeights.manuka.normal} uppercase hover:text-accent transition-colors ${typography.manuka.navDesktop}`;

  return (
    <a href={href} onClick={onClick} className={baseClasses}>
      {children}
    </a>
  );
};

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuToggle = ({ isOpen, onClick }: MenuToggleProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 font-manuka ${fontWeights.manuka.normal} uppercase tracking-wide text-dark hover:text-accent transition-colors focus:outline-none focus:ring-0 ${typography.manuka.navDesktop}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? "close" : "Menu"}
    </button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang: "en" | "cz") => {
    setLanguage(lang);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-beige pt-4 relative z-50">
      <Container>
        <nav className="py-0">
          <div className="flex items-center justify-between">
            {/* Mobile: Logo on left, Menu text on right */}
            <div className="flex items-center justify-between w-full sm:hidden">
              <a href="#top" className="flex items-center">
                <img
                  src={typeof logoSc === "string" ? logoSc : logoSc.src}
                  alt="Speed Coffee"
                  className="h-auto w-auto max-h-[80px] sm:hidden"
                />
              </a>
              <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>

            {/* Desktop/Tablet: Menu text left, links right */}
            <div className="hidden sm:flex items-center justify-between w-full">
              <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
              <div className="flex-1" />
              <div className="flex items-center gap-4 md:gap-6">
                <NavLink href="#events">{t("nav.events")}</NavLink>
                <NavLink href="#reserve">{t("nav.reserve")}</NavLink>
                <NavLink href="#shop">{t("nav.shop")}</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </Container>

      {/* Full-screen overlay menu: background fades in, then logo + links reveal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            aria-hidden={false}
          >
            {/* Background only – smooth fade in */}
            <motion.div
              className="absolute inset-0 bg-beige"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            {/* Content: close button, then logo + links with staggered reveal */}
            <div className="relative flex flex-col min-h-full pt-6 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-start">
                <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
              </div>
              <motion.div
                className="flex-1 flex flex-col items-center justify-center gap-2 sm:gap-5"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.15,
                    },
                  },
                  hidden: {},
                }}
              >
                {/* Text logo above nav links (same style as footer) */}
                <motion.a
                  href="#top"
                  onClick={closeMenu}
                  className={`text-center mb-[12] -mt-24 sm:-mt-32 text-3xl sm:text-4xl md:text-5xl font-agright ${fontWeights.agright.normal} text-dark tracking-tight ${lineHeights.tight}`}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div>SPEED</div>
                  <div>COFFEE</div>
                </motion.a>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <NavLink href="#events" onClick={closeMenu} isMobile={false}>
                    {t("nav.events")}
                  </NavLink>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <NavLink href="#reserve" onClick={closeMenu} isMobile={false}>
                    {t("nav.reserve")}
                  </NavLink>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <NavLink href="#shop" onClick={closeMenu} isMobile={false}>
                    {t("nav.shop")}
                  </NavLink>
                </motion.div>
              </motion.div>

              {/* Language switcher – bottom right */}
              <div className="absolute bottom-6 right-4 sm:right-6 lg:right-8 flex flex-col items-end gap-0">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("en")}
                    className={`px-4 py-2 rounded font-raleway font-normal uppercase transition-colors ${
                      language === "en"
                        ? "bg-dark text-beige"
                        : "bg-beige text-dark border-2 border-dark hover:bg-dark hover:text-beige"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

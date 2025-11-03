import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#EAE1CF] pt-4 relative z-50">
      <nav className="max-w-7xl mx-auto py-0">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-[#8B5A3C] rounded"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-8 h-8 text-[#222222]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="flex-1"></div>

          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="#events"
              className="text-[#222222] font-manuka font-normal text-2xl md:text-3xl lg:text-4xl hover:text-[#8B5A3C] transition-colors uppercase"
              style={{ fontFamily: "Manuka, sans-serif" }}
            >
              EVENTS
            </a>
            <a
              href="#reserve"
              className="text-[#222222] font-manuka font-normal text-2xl md:text-3xl lg:text-4xl hover:text-[#8B5A3C] transition-colors uppercase"
              style={{ fontFamily: "Manuka, sans-serif" }}
            >
              RESERVE
            </a>
            <a
              href="#shop"
              className="text-[#222222] font-manuka font-normal text-2xl md:text-3xl lg:text-4xl hover:text-[#8B5A3C] transition-colors uppercase"
              style={{ fontFamily: "Manuka, sans-serif" }}
            >
              SHOP
            </a>
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
            <a
              href="#events"
              onClick={closeMenu}
              className="block text-[#222222] font-manuka font-medium text-2xl md:text-3xl hover:text-[#8B5A3C] transition-colors uppercase"
              style={{ fontFamily: "Manuka, sans-serif" }}
            >
              EVENTS
            </a>
            <a
              href="#reserve"
              onClick={closeMenu}
              className="block text-[#222222] font-manuka font-medium text-2xl md:text-3xl hover:text-[#8B5A3C] transition-colors uppercase"
              style={{ fontFamily: "Manuka, sans-serif" }}
            >
              RESERVE
            </a>
            <a
              href="#shop"
              onClick={closeMenu}
              className="block text-[#222222] font-manuka font-medium text-2xl md:text-3xl hover:text-[#8B5A3C] transition-colors uppercase"
              style={{ fontFamily: "Manuka, sans-serif" }}
            >
              SHOP
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { useState } from "react";
import Container from "../Container";
import MenuButton from "./MenuButton";
import NavLink from "./NavLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-beige pt-4 relative z-50">
      <Container>
        <nav className="py-0">
          <div className="flex items-center justify-between">
            <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />

            <div className="flex-1" />

            <div className="flex items-center gap-4 md:gap-6">
              <NavLink href="#events">EVENTS</NavLink>
              <NavLink href="#reserve">RESERVE</NavLink>
              <NavLink href="#shop">SHOP</NavLink>
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
                EVENTS
              </NavLink>
              <NavLink href="#reserve" onClick={closeMenu} isMobile>
                RESERVE
              </NavLink>
              <NavLink href="#shop" onClick={closeMenu} isMobile>
                SHOP
              </NavLink>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;


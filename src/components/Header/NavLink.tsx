import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLink = ({ href, children, onClick, isMobile = false }: NavLinkProps) => {
  // Proper font sizes for navigation
  // Desktop: 18px base, scales to 20px on larger screens
  // Mobile menu: 16px base, scales to 18px on tablet
  const baseClasses = isMobile
    ? "text-dark font-manuka font-normal uppercase hover:text-accent transition-colors block text-base md:text-lg"
    : "text-dark font-manuka font-normal uppercase hover:text-accent transition-colors text-lg md:text-xl";

  return (
    <a href={href} onClick={onClick} className={baseClasses}>
      {children}
    </a>
  );
};

export default NavLink;


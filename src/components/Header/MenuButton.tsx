interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 focus:outline-none focus:ring-2 focus:ring-[#8B5A3C] rounded"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
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
        {isOpen ? (
          <path d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
};

export default MenuButton;


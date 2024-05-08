export const IconWrapper = ({ children, setMenuOpen, className }) => {
  return (
    <button
      onClick={() => {
        setMenuOpen();
      }}
      type="button"
      className={className}
    >
      {children}
    </button>
  );
};

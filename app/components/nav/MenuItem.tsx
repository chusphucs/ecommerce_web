interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export default function MenuItem({ children, onClick }: MenuItemProps) {
  return (
    <div onClick={onClick} className="p-3 hover:bg-neutral-100 transition">
      {children}
    </div>
  );
}

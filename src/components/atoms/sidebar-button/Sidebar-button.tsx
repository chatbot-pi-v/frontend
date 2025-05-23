import { Link } from "react-router";

interface SideBarButtonProps {
  icon: string;
  label: string;
  route?: string;
  onClick?: () => void;
  isLogout?: boolean;
}

export const SideBarButton = ({ icon, label, route, onClick, isLogout = false }: SideBarButtonProps) => {
  // Se for botão de logout, renderiza um button em vez de Link
  if (isLogout && onClick) {
    return (
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-dashImput w-full text-left"
      >
        <img src={icon} alt={label} className="w-5 h-5" />
        <span>{label}</span>
      </button>
    );
  }

  // Para botões normais, usa Link
  return (
    <Link 
      to={route || '#'}
      className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-dashImput w-full"
    >
      <img src={icon} alt={label} className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
};
import { Link } from "react-router";

interface SideBarButtonProps {
  icon: string;
  label: string;
  route: string;
}

export const SideBarButton = ({ icon, label, route }: SideBarButtonProps) => {
  return (
    <>
    <Link to={route}
        className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-dashImput w-full">
            <img src={icon} alt={label} className="w-5 h-5" />
            <span>{label}</span>
    </Link>
    </>
  );
};
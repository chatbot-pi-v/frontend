import { useNavigate } from "react-router";

type DashboardButtonProps = {
    label: string;
    logo: string;
    route: string;
};

export const DashboardButton = ({ label, logo, route }: DashboardButtonProps) => {
    const navigate = useNavigate();

    return (
        <>          
            <button onClick={() => navigate(route)}className="bg-sidebar p-6 rounded-lg w-full flex flex-col justify-center items-center">
                <img src={logo} className="w-24"/>  
                {label}
            </button>
        </>
    )
}
import { Link } from "react-router";

type DashboardButtonProps = {
    label: string;
    logo: string;
    route: string;
};

export const DashboardButton = ({ label, logo, route }: DashboardButtonProps) => {
    console.log('route - ', route)
    return (
        <> 
            <Link to={route}>
                <button className="bg-sidebar p-6 rounded-lg w-full flex flex-col justify-center items-center cursor-pointer hover:bg-hoverbutton transition duration-300 ease-in-out">
                    <img src={logo} className="w-24"/>  
                    {label}
                </button>
            </Link>         
        </>
    )
}
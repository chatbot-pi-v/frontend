type DashboardButtonProps = {
    label: string;
    logo: string;
};

export const DashboardButton = ({ label, logo }: DashboardButtonProps) => {
    return (
        <>          
            <button className="bg-sidebar p-6 rounded-lg w-full flex flex-col justify-center items-center">
                <img src={logo} className="w-24"/>  
                {label}
            </button>
        </>
    )
}
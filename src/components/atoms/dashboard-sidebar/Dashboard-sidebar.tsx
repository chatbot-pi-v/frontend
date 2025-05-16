import { SideBarButton } from "../sidebar-button/Sidebar-button";

export const DashboardSideBar = () => {
    return (
        <aside className="w-[15rem] bg-sidebar p-4">
            <div className="flex flex-col items-center mb-4">
                <img src="../../public/assets/images/dashboard/woman.svg" alt="Logo" className="w-32 h-32 object-contain" />
                <h1 className="text-5xl text-center font-league font-bold tracking-wide">Nanã Chatbot</h1>
                <p className="text-base text-gray-700 text-center">Dashboard Admin</p>
                <SideBarButton />
                <SideBarButton />
                <SideBarButton />
                <SideBarButton />
            </div>
        </aside>
    );
}
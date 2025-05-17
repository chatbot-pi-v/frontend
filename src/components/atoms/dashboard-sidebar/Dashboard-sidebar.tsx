import { SideBarButton } from "../sidebar-button/Sidebar-button";


export const DashboardSideBar = () => {
    return (
        <aside className="w-[15rem] h-screen bg-sidebar p-4 flex flex-col justify-between">
            <div className="flex flex-col items-center mb-4">
                <img src="../../public/assets/images/dashboard/woman.svg" alt="Logo" className="w-28 h-28 object-contain" />
                <h1 className="text-6xl text-center font-gothic font-bold tracking-wide">Nanã</h1>
                <h1 className="text-4xl text-center font-gothic font-bold tracking-wide">Chatbot</h1>
                <p className="text-base text-gray-700 text-center p-5 mb-9">Dashboard Admin</p>
                <SideBarButton icon="../../public/assets/images/dashboard/home.svg" label="Início" route="/dashboard" />
                <SideBarButton icon="../../public/assets/images/dashboard/upload-file.svg" label="Upload PDF" route="/pdfupload"/>
                <SideBarButton icon="../../public/assets/images/dashboard/upload-image.svg" label="Upload Imagem" route="/imageupload" />
                <SideBarButton icon="../../public/assets/images/dashboard/upload-audio.svg" label="Upload Áudio" route="/audioupload"/>
                <SideBarButton icon="../../public/assets/images/dashboard/users.svg" label="Gerenciar Usuários" route="/userscontrol" />
            </div>
            <div>
                <SideBarButton icon="../../public/assets/images/dashboard/logout.svg" label="Sair" route="/pdfupload"/>
            </div>
        </aside>
    );
}
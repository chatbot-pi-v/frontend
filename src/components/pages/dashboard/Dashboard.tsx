import { DashboardButton } from "@src/components/atoms/dashboard-button/Dashboard-button"
import { DashboardSideBar } from "@src/components/atoms/dashboard-sidebar/Dashboard-sidebar"

export const Dashboard = () => {
    return (
        <>
            <div className="flex flex-row min-h-screen bg-dashboard">
                <DashboardSideBar />

                <div className="p-8 w-full">
                    <h3>Olá, Maria</h3>
                    <div className="grid grid-cols-3">
                        <div className="p-6">
                            <DashboardButton label="Enviar PDFs" logo="../../../public/assets/images/dashboard/google-docs.png"/>
                        </div>
                        <div className="p-6">
                            <DashboardButton label="Enviar audios" logo="../../../public/assets/images/dashboard/headphone.png"/>
                        </div>
                        <div className="p-6">
                            <DashboardButton label="Enviar imagens" logo="../../../public/assets/images/dashboard/photo.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
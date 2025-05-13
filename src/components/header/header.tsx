import BgInitial from "@src/components/icons/bg-initial"
import { useNavigate } from "react-router"

export const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col md:flex-row-reverse sm:items-center w-full mb-32">
            <BgInitial />

            <div className="flex flex-col items-center md:items-start p-4 md:ml-16 justify-center">
                <h1 className="text-midnight text-center md:text-left font-gothic text-7xl md:mt-6">NANÃ CHATBOT</h1>
                <h3 className="text-ash font-poppins font-display text-center md:text-left font-medium md:mt-10 mt-8">Esse chatbot IA te auxilia
                    sobre religiões afro-brasileiras em Campinas</h3>

                <button className="rounded-md text-center place-items-center bg-sunrise mt-12 p-4 pl-8 pr-8 md:mt-14 font-medium font-poppins text-white" onClick={() => navigate('/chat')}>
                    Comece agora!
                </button>
            </div>
        </div>
    )
}
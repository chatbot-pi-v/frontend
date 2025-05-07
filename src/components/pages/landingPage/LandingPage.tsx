import { useNavigate } from "react-router"
import BgMiddle from "@src/components/icons/bg-middle"
import BgInitial from "@src/components/icons/bg-initial"
import logoPuc from "@public/logo-puc.png"
import logoContraRacismo from "@public/logo-contra-racismo.png"
import logoCentroDeEstudos from "@public/logo-centro-de-estudos.png"

export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col w-full h-full">
            <BgInitial />
            <div className="flex sm:flex-col relative">
            <BgMiddle />

                <h1 className='text-midnight font-[League Gothic] pt-16 sm:text-3xl 
                text-center sm:p-16 sm:mt-32'>NANÃ CHATBOT</h1>
                <h3 className="text-ash font-display p-8 text-2xl flex-wrap text-center">Esse chatbot IA te auxilia
                    sobre religiões afro-brasileiras em Campinas</h3>
                <div className="grid place-items-center pb-44">
                    <button className="bg-sunrise rounded-sm text-center text-white w-2/3 p-4 m-8" onClick={() => navigate('/chat')}>
                        Comece agora!
                    </button>
                </div>

                <div className="bg-retangle opacity-95 rounded-xl p-10 m-14">
                    <h2 className="mb-5 text-center align-middle">Como usar</h2>
                    <p className="text-justify">Holding social tokens allows the individual to gain access to benefits including unreleased content, private communities, direct access to celebrity, early-access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers.</p>
                </div>
                <div className="bg-retangle opacity-95 rounded-xl p-10 m-14">
                    <h2 className="mb-5 text-center align-middle">Sobre nós</h2>
                    <p className="text-justify">Holding social tokens allows the individual to gain access to benefits including unreleased content, private communities, direct access to celebrity, early-access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers.</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-16 items-center gap-20">
                <img src={logoCentroDeEstudos} className="w-fit" alt="" />
                <img src={logoContraRacismo} className="w-fit" alt="" />
                <img src={logoPuc} className="w-fit" alt="" />
            </div>
        </div>

    )
}
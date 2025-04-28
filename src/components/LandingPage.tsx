import mobile_img from "../public/mobile.svg"
import desktop_img from "../public/desktop.svg"
import mobile_img2 from "../public/mobile_img_2.svg"
import chat from "./Chat"
export default function LandingPage(){
    return(
        <div className="flex-row">
            <img src={mobile_img} alt="" className="w-full sm:hidden"/>
            <img src={desktop_img} alt="" className="hidden sm:block"/>
            <h1 className='text-midnight font-[League Gothic] pt-16 sm:text-3xl text-center sm:p-16 sm:mt-32'>CHATBOT</h1>
            <h3 className="text-ash font-display p-8 text-2xl flex-wrap text-center">Esse chatbot IA te auxilia
            sobre religiões afro-brasileiras em Campinas</h3>
            <div className="grid place-items-center pb-44">
                <button className="bg-sunrise rounded-sm text-center text-white w-2/3 p-4 m-8" onClick={chat}>
                    Comece agora!
                </button>
            </div>
            <img src={mobile_img2} alt=""  className="w-full"/>
        </div>

    )
}
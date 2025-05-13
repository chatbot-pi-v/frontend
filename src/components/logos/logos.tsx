export const Logos = () => {
    return (
        <div className="flex flex-col md:flex-row w-full sm:p-14 mt-42 md:mt-0">
            <div className="w-full mb-42 ml-2 mr-2 md:mb-12 h-[65px] md:h-[100px] bg-no-repeat bg-contain bg-center bg-[url('./src/components/logos/desktop_centro_de_estudos.png')]"></div>
            <div className="w-full mb-42 md:mb-12 h-[100px] md:h-[100px] bg-no-repeat bg-contain bg-center bg-[url('./src/components/logos/desktop_denuncia.png')]"></div>
            <div className="w-full mb-42 md:mb-12 h-[100px] md:h-[100px] bg-no-repeat bg-contain bg-center bg-[url('./src/components/logos/desktop_puc.png')]"></div>
        </div>
    )
}
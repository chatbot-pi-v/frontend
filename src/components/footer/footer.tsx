import { Card } from "../card/card"
import { Logos } from "../logos/logos"

export const Footer = () => {
    const obj = [
        {
            title: "Como usar",
            description: "Nanã Chatbot é um aplicativo educativo que oferece informações acessíveis sobre religiões afro-brasileiras, como Candomblé, Umbanda e outras tradições de matriz africana. \n\nTire dúvidas, explore mitos, rituais, princípios espirituais e a riqueza cultural dessas tradições com respeito, acolhimento e confiabilidade.\n\nIdeal para quem quer aprender, refletir e se conectar com saberes ancestrais. O Nanã Chatbot foi pensado para ser um espaço seguro de aprendizado e escuta. Use com curiosidade, respeito e mente aberta."
        },
        {
            title: "Sobre nós",
            description: "Desde sua inauguração em 23 de agosto de 2023, o Centro de Estudos Africanos e Afro-Brasileiros Dra. Nicéa Quintino Amauro  (CEAAB-PUC-Campinas) desenvolve ações e apoia iniciativas voltadas à transformação social e à valorização da diversidade cultural. Entre essas parcerias, destaca-se o apoio institucional ao projeto de extensão Nanã Chatbot, desenvolvido por estudantes do curso de Sistemas de Informação sob orientação do Prof. Tarcisio Torres Silva. A proposta busca oferecer suporte educativo sobre religiões de matriz africana e afro-brasileira, promovendo o respeito às tradições."
        }
    ]
    return (
        <footer className="w-full h-[3000px] md:h-[1300px] bg-no-repeat bg-cover bg-center bg-[url('./src/components/footer/mobile_footer.png')] md:bg-[url('./src/components/footer/desktop_footer.png')]">
            <div className="flex flex-col md:flex-row">
                {obj.map((items) => (
                    <Card key={items.title} title={items.title} description={items.description} />
                ))}
            </div>

            <Logos />

        </footer>


    )
}
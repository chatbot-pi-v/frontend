import { Card } from "../card/card"
import { Logos } from "../logos/logos"

export const Footer = () => {
    const obj = [
        {
            title: "Como usar",
            description: "Holding social tokens allows the individual to gain access to benefits including unreleased content, private communities, direct access to celebrity, early-access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers."
        },
        {
            title: "Sobre nós",
            description: "Holding social tokens allows the individual to gain access to benefits including unreleased content, private communities, direct access to celebrity, early-access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers."
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
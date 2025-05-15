interface CardProps {
    title: string;
    description: string
}
export const Card = ({ title, description }: CardProps) => {
    return (
        <div className="bg-retangle opacity-92 rounded-xl p-10 ml-10 mr-10 mb-32">
            <h2 className="mb-5 text-center align-middle font-medium font-poppins">{title}</h2>
            <p className="text-justify font-poppins font-medium">{description}</p>
        </div>
    )
}
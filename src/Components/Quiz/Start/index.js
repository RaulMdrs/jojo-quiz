import { Button, Logo } from "../";

const Start = () => {
    return (
        <section className="p-12">
            <div className="flex flex-col gap-8 items-center justify-center">
                <Logo />
                <p className="text-white font-medium">Inicie o Quiz para descobrir qual personagem de Jojo Bizarre Adventures você é!</p>
                <Button text="Start" />
            </div>
        </section>
    )
}

export default Start;
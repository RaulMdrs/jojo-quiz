import { Button, Logo } from "../";

const Start = ({ startAction }) => {
    return (
        <section className="flex flex-col gap-8 items-center justify-center p-32">
            <Logo />
            <p className="text-white font-medium">Inicie o Quiz para descobrir qual personagem de Jojo Bizarre Adventures você é!</p>
            <Button onClick={startAction}>Iniciar Quiz</Button>
        </section>
    )
}

export default Start;
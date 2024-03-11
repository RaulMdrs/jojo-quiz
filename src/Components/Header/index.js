import { QuestionCounter } from "./../Quiz";

const Header = ({ data }) => {
    return (
        <header className="
        flex
        justify-between
        px-6
        w-full
        p-4
        bg-[#b754a2]
        shadow-xl
        ">
            <h1 className="text-white uppercase text-2xl">
                Jojo <span className="font-bold">Quiz</span>
            </h1>
            {data.start && <QuestionCounter current={data.quizData.current} quantity={data.quizData.quantity} />}
        </header>
    )
}

export default Header;
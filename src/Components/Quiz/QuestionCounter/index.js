const QuestionCounter = ({ current, quantity }) => {
    return <span className="text-white text-xl uppercase">Questão <span className="font-bold text-[#5fd99b]">{current}</span> de {quantity}</span>;
}

export default QuestionCounter;
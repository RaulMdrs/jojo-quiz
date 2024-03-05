import { useEffect, useState } from 'react'
import { getQuestions } from './../../../utils';
import Button from '../Button';

const Questions = ({ data, step }) => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [currentQuestionIdentifier, setCurrentQuestionIdentifier] = useState(1);
    const [questionsLength, setQuestionsLength] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        getQuestions().then(res => {
            setCurrentQuestion(res[currentQuestionIdentifier]);
            setQuestionsLength(Object.keys(res).length - 1);
        }).catch(err => {
            console.error(err);
            throw new Error("Erro ao obter dados das questões.")
        });

        if (answers.length === questionsLength) {
            data({
                current: currentQuestionIdentifier,
                quantity: questionsLength,
                answers: answers
            });

            step(3);
        } else {
            data({
                current: currentQuestionIdentifier,
                quantity: questionsLength
            });
        }
    }, [currentQuestionIdentifier, questionsLength, answers, currentQuestion, selectedAnswer]);

    const nextQuestionHandler = () => {
        try {
            if (selectedAnswer != null) {
                setAnswers(answers => [...answers, selectedAnswer.key]);
                setSelectedAnswer(null);
            }
            
            if (currentQuestionIdentifier < questionsLength) setCurrentQuestionIdentifier(currentQuestionIdentifier => currentQuestionIdentifier + 1);
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <section className='flex flex-col gap-6 p-32'>
            <h1 className='text-2xl text-center text-gray-200 uppercase font-medium'>Questão {currentQuestionIdentifier}: {currentQuestion.Question}</h1>
            <div className='flex flex-col gap-4'>
                {currentQuestion.Options && currentQuestion.Options.map((option, index) => {
                    const key = Object.keys(option)[0];
                    const value = option[key];
                    return (
                        <div onClick={() => setSelectedAnswer({ key, index })} key={index} className={`flex items-center gap-4 ${selectedAnswer && selectedAnswer.index === index ? `bg-purple-500 text-white` : 'bg-gray-300 text-purple-800'} rounded-xl p-4 cursor-pointer`}>
                            <span className='font-bold text-3xl'>{key}</span>
                            <span className='font-semibold text-sm mt-1'>{value}</span>
                        </div>
                    );
                })}
            </div>

            <Button disabled={selectedAnswer === null} onClick={nextQuestionHandler}>{questionsLength !== currentQuestionIdentifier ? "Próxima questão" : "Finalizar Quiz"}</Button>
        </section>
    )
}

export default Questions;
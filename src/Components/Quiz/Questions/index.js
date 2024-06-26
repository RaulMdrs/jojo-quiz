import { useEffect, useState } from 'react'

// ? Utils
import { getQuestions, playSound } from './../../../utils';

// ? Components
import { Button } from '../';

// ? Spring Animation Lib
import { useSpring, animated } from 'react-spring';

// ? Importing click sound
import clickSound from "./../../../Assets/Sounds/click.mp3";

export const Questions = ({ data, step }) => {
    const anim = useSpring({ opacity: 1, from: { opacity: 0 } });

    const [questionsList, setQuestionsList] = useState([]);
    const [currentQuestionIdentifier, setCurrentQuestionIdentifier] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answers, setAnswers] = useState([]);

    // ? Questions quantity
    const questionsLength = questionsList.length - 1;

    const nextQuestionHandler = () => {
        try {
            if (selectedAnswer != null) {
                setAnswers(prevAnswers => [...prevAnswers, selectedAnswer.key]);
                setSelectedAnswer(null);
            }

            if (currentQuestionIdentifier < questionsLength) setCurrentQuestionIdentifier(currentQuestionIdentifier => currentQuestionIdentifier + 1);
        } catch (error) {
            console.error(error)
        }
    };

    const selectOptionHandler = (key, index) => {
        setSelectedAnswer({ key, index });
        playSound(clickSound, 0.5);
    }

    useEffect(() => {
        getQuestions().then(res => {
            const gettedQuestionsList = [[], ...res];
            setQuestionsList(gettedQuestionsList);
        }).catch(err => {
            console.error(err);
            throw new Error("Erro ao obter dados das questões.")
        });
    }, []);

    useEffect(() => {
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
    }, [answers, currentQuestionIdentifier, data, questionsLength, step]);

    return (
        <animated.div style={anim}>
            <section className="
            flex 
            flex-col 
            gap-6 
            px-8 
            pt-32 
            md:p-32
            ">
                <h1 className="
                text-lg 
                md:text-2xl 
                text-center 
                text-gray-200 
                uppercase 
                font-medium
                ">
                    Questão {currentQuestionIdentifier}: {questionsList.length > 0 ? questionsList[currentQuestionIdentifier].Question : "Carregando questão..."}
                </h1>
                <div className="flex flex-col gap-4">
                    {questionsList.length > 0 && questionsList[currentQuestionIdentifier].Options.map((option, index) => {
                        const key = Object.keys(option)[0];
                        const value = option[key];
                        return (
                            <div
                                onClick={() => selectOptionHandler(key, index)}
                                key={index}
                                className={`
                            flex 
                            transition-all 
                            items-center 
                            gap-4 
                            ${selectedAnswer && selectedAnswer.index === index ? `bg-purple-500 text-white` : 'bg-gray-300 text-purple-800'} 
                            rounded-xl 
                            p-4 
                            cursor-pointer
                            `}>
                                <span className="font-bold text-3xl">
                                    {key}
                                </span>
                                
                                <span className='font-semibold text-sm mt-1'>
                                    {value}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <Button
                    disabled={selectedAnswer === null}
                    onClick={nextQuestionHandler}
                >
                    {questionsLength !== currentQuestionIdentifier ? (
                        <>
                            <span>
                                Próxima questão
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </>
                    ) : (
                        <span>
                            Finalizar Quiz
                        </span>
                    )}
                </Button>
            </section>
        </animated.div>
    )
}
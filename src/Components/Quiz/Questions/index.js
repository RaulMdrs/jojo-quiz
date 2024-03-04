import { useEffect, useState } from 'react'
import { getQuestions } from './../../../utils';

const Questions = ({ data }) => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [currentQuestionIdentifier, setCurrentQuestionIdentifier] = useState(0);
    const [questionsLenght, setQuestionsLenght] = useState(0);

    useEffect(() => {
        getQuestions().then(res => {
            setCurrentQuestion(res[currentQuestionIdentifier])
            setCurrentQuestionIdentifier(currentQuestionIdentifier => currentQuestionIdentifier++)
            setQuestionsLenght(Object.keys(res).length);
            data({
                current: currentQuestionIdentifier,
                quantity: questionsLenght
            })
        }).catch(err => {
            console.error(err);
            throw new Error("Erro ao obter dados das questões.")
        });
    }, [currentQuestionIdentifier, questionsLenght]);


    return (
        <section className='p-12'>
            <h1>{currentQuestion.Question}</h1>

            <div className='flex flex-col'>
                {currentQuestion.Options && currentQuestion.Options.map((option, index) => {
                    const key = Object.keys(option)[0]; // Extracting the key
                    const value = option[key]; // Extracting the value
                    return (
                        <div key={index}>
                            {key}: {value}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Questions;
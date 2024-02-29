import { useEffect, useState } from 'react'
import { getQuestions } from './../../../utils';

const Questions = () => {
    const [question, setQuestion] = useState(null);
    const [activeQuestion, setActiveQuestion] = useState(0);

    const submitQuestion = function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        console.log(formData.get("opcao1"))
    }

    useEffect(() => {
        getQuestions().then(res => {
            setQuestion(res[activeQuestion])
            setActiveQuestion(activeQuestion => activeQuestion++)
        }).catch(err => {
            console.error(err);
            throw new Error("Erro ao obter dados das questões.")
        })
    }, [activeQuestion]);

    if (question !== null) {

        console.log(question, activeQuestion)

        return (
            <form onSubmit={submitQuestion}>
                {question.Options.map(option => {
                    console.log(option)
                })}
                <button type='submit'></button>
            </form>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Questions;
import { useEffect, useState } from "react";
import { getCharacters, replysMostFrequent } from "../../../utils";


const Result = ({ data }) => {
    const [characters, setCharacters] = useState({});
    const [finalResult, setFinalResult] = useState("Generic");

    useEffect(() => {
        getCharacters().then(res => {
            setCharacters(res)
            console.log(res)
            const answersFrequency = replysMostFrequent(data.answers);
            if (answersFrequency !== null) setFinalResult(answersFrequency);
        }).catch(err => {
            console.error(err);
            throw new Error("Erro ao obter dados dos personagens.")
        });
    }, [])

    const characterInfo = characters && characters[finalResult] ? characters[finalResult] : null;

    return (
        <section className="p-32">
            {characterInfo ? (
                <>
                    <img src={characterInfo.image} alt={characterInfo.name} />
                    <h1>{characterInfo.name}</h1>
                </>
            ) : (
                <p>Carregando resultado...</p>
            )}
        </section>
    )
}

export default Result;
import { useEffect, useState } from "react";
import { getCharacters, replysMostFrequent } from "../../../utils";
import Button from "../Button";


const Result = ({ data, step }) => {
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
    
    function shareButtonHandler() {
        console.log("share");
    }

    const characterInfo = characters && characters[finalResult] ? characters[finalResult] : null;

    return (
        <section className="flex flex-col gap-2 items-center justify-center px-32 py-6"> 
        {characterInfo ? (
                <>   
                    <div className="w-fit bg-white bg-opacity-20 rounded-3xl shadow-2xl overflow-hidden">
                        <img src={characterInfo.image} alt={characterInfo.name} />
                    </div>
                    <h1 className="text-3xl font-bold text-white">{characterInfo.name}</h1>
                    <p className="text-center text-gray-200 ">{characterInfo.description}</p>
                </>
            ) : (
                <p>Carregando resultado...</p>
            )}

            <div className="flex justify-between gap-4 pt-6 mt-6 mx-10">
                <Button restart onClick={() => step(1)}> <span>Restart</span></Button>
                <Button share={true} onClick={shareButtonHandler}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                    </svg>
                    <span>Share</span>
                </Button>
            </div>    
        </section>
    )
}

export default Result;
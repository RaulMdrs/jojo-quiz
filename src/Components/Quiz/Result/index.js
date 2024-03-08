import { useEffect, useState } from "react";
import { getCharacters, playSound, replysMostFrequent } from "../../../utils";
import { Button, Share } from "../" 
import { useSpring, animated } from 'react-spring';

const Result = ({ data, step }) => {
    const anim = useSpring({ opacity: 1, from: { opacity: 0 } });

    const [characters, setCharacters] = useState({});
    const [finalResult, setFinalResult] = useState("Generic");

    useEffect(() => {
        getCharacters().then(res => {
            setCharacters(res)
            const answersFrequency = replysMostFrequent(data.answers);
            if (answersFrequency !== null) setFinalResult(answersFrequency);
        }).catch(err => {
            console.error(err);
            throw new Error("Erro ao obter dados dos personagens.")
        });
    }, [data.answers])

    function shareButtonHandler() {
        console.log("share");
    }

    const characterInfo = characters && characters[finalResult] ? characters[finalResult] : null;

    useEffect(() => {
        if (characterInfo && characterInfo.sound) {
            import(`./../../../Assets/Sounds/${characterInfo.sound}`).then((module) => {
                playSound(module.default, 0.7);
            }).catch(err => {
                console.error("Não foi possível carregar o som do personagem", err);
            });
        }
    }, [characterInfo])

    return (
        <animated.div style={anim}>
            <>
            <Share/>
                <section className="flex flex-col gap-6 items-center justify-center px-32 py-10">
                    <h1 className="text-4xl text-white font-bold pb-6">Resultado do seu Quiz</h1>
                    {characterInfo ? (
                        <> 
                            <div className="w-fit bg-white bg-opacity-20 rounded-3xl shadow-2xl overflow-hidden">
                                <img className="max-w-[500px]" src={characterInfo.image} alt={characterInfo.name} />
                            </div>
                            <h1 className="text-4xl font-bold text-white">{characterInfo.name}</h1>
                            <p className="text-center text-gray-200 ">{characterInfo.description}</p>
                        </>
                    ) : (
                        <p>Carregando resultado...</p>
                    )}

                    <div className="flex justify-between gap-4 pt-6 mt-6 mx-10">
                        <Button restart onClick={() => step(1)}> <span>Reiniciar</span></Button>
                        <Button share onClick={shareButtonHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                            <span>Compartilhar</span>
                        </Button>
                    </div>
                </section>
            </>
        </animated.div>
    )
}

export default Result;
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button } from "../";

const Share = ({ toggle, text }) => {
    const [toggleValue, toggleFunc] = toggle;

    const [copied, setCopied] = useState(false);

    const anim = useSpring({ opacity: toggleValue ? 1 : 0 });

    const copyHandler = () => {
        navigator.clipboard.writeText(text)
            .then(() => setCopied(true))
            .catch(err => console.error('Erro ao copiar texto:', err));
    };

    useEffect(() => {
        setCopied(false);
    }, [toggle]);

    const closeDropdownHandler = (event) => {
        if (event.target.classList.contains('modal-dropdown')) {
            toggleFunc(false)
        }
    }

    return (
        <animated.div style={anim}>
            {toggleValue && (
                <div onClick={closeDropdownHandler} className="modal-dropdown fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50" >
                    <div className="relative flex flex-col justify-center items-center md:w-1/3 bg-gray-200 px-8 py-12 rounded-2xl">
                        <h2 className="text-2xl font-bold uppercase text-[#b754a2] mb-4">Compartilhe seu stand!</h2>

                        <textarea className="resize-none p-3 outline-none w-full h-32 rounded-xl mb-4" defaultValue={text && text} />

                        <Button onClick={copyHandler} small copy>
                            {copied ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                        <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="mt-0.5">Copiado!</span>
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                    </svg>
                                    <span className="mt-0.5">Copiar</span>
                                </>
                            )}
                        </Button>

                        <div className="absolute top-0 right-0 p-2 md:p-4">
                            <button onClick={() => { toggleFunc(false) }} className="flex items-center justify-center h-10 w-10 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div >
            )}
        </animated.div>
    )
}

export default Share;
import Button from "../Button";

const Share = () => {
    return(
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative flex flex-col justify-center items-center w-1/2 h-1/3 bg-white p-8 rounded-2xl">
                <h2 className="text-xl font-bold mb-4">Compartilhe seu stand!</h2>
                <p className="mb-4">O conteudo a se compartilhar</p>
                <Button small copy> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                    </svg>
                    <span className="mt-0.5">Copiar</span>
                </Button>
                <div className="absolute top-0 right-0 p-4">
                    <button className="flex items-center justify-center h-10 w-10 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
         </div>
    </div>
    )
}

export default Share;
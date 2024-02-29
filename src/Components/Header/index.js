const Header = () => {
    return(
        <header className="flex justify-between px-6 w-full p-4 bg-[#b754a2] shadow-xl">
            <h1 className="text-white uppercase text-2xl">Jojo <span className="font-bold">Quiz</span></h1>
            <div className="">
                <span className="text-white text-xl uppercase">Questão <span className="font-bold text-[#5fd99b]">1</span> de 10</span>
            </div>
        </header>
    )
}

export default Header;
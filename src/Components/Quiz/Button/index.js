const Button = ({text, click}) => {
    return(
        <button onClick={click} className="px-24 py-6 rounded-full text-white bg-[#ed686e] font-semibold uppercase text-2xl tracking-widest transition-all hover:scale-105 hover:bg-[#cf595e]">{text}</button>
    )
}

export default Button;
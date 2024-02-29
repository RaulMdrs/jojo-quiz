const Button = (props) => {
    return(
        <button className="px-24 py-6 rounded-full text-white bg-[#ed686e] font-semibold uppercase text-2xl tracking-widest transition-all hover:scale-105 hover:bg-[#cf595e]">{props.text}</button>
    )
}

export default Button;
const Button = (props) => {
    return(
        <button {...props} className="px-24 py-6 rounded-full text-white bg-[#ed686e] font-semibold uppercase text-2xl tracking-widest transition-all hover:bg-[#cf595e] disabled:bg-gray-400/70 disabled:text-gray-300" />
    )
}

export default Button;
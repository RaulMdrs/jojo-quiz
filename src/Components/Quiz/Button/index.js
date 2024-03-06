const Button = ({ restart = false, share = false, ...props }) => {
    // Capturando data-share
    const { 'data-share': dataShare, 'data-restart' : dataRestart, ...rest } = props;

    return (
        <button
            data-restart={restart}
            data-share={share}
            {...rest}
            className={`inline-flex gap-3 items-center justify-center px-24 py-6 rounded-full text-white bg-[#ed686e] font-semibold uppercase text-2xl tracking-widest transition-all hover:bg-[#cf595e] disabled:bg-gray-400/70 disabled:text-gray-300 data-[share=true]:bg-pink-500 data-[restart=true]:bg-blue-700`}
        />
    );
}

export default Button;

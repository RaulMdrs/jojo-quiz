const Button = ({ restart = false, share = false, small = false, copy = false, ...props }) => {
    
    const { 'data-share': dataShare, 'data-restart' : dataRestart, 'data-small': dataSmall, 'data-copy': dataCopy, ...rest } = props;

    return (
        <button data-restart={restart} data-share={share} data-small={small} data-copy={copy} {...rest} className={`inline-flex gap-3 items-center justify-center px-24 py-6 rounded-full text-white bg-[#ed686e] font-semibold uppercase text-2xl tracking-widest transition-all hover:bg-[#cf595e] disabled:bg-gray-400/70 disabled:text-gray-300 data-[share=true]:bg-pink-500 data-[share=true]:hover:bg-pink-600 data-[restart=true]:bg-blue-700 data-[restart=true]:hover:bg-blue-800 data-[small=true]:text-lg data-[small=true]:w-full data-[small=true]:py-3.5 data-[small=true]:gap-2 data-[copy=true]:bg-green-500 data-[copy=true]:hover:bg-green-600`} />
    );
}

export default Button;

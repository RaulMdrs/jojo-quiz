import { Button, Logo } from "../";
import { useSpring, animated } from 'react-spring';

const Start = ({ startAction }) => {
  const anim = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={anim}>
      <section className="flex flex-col gap-8 items-center justify-center p-32">
        <Logo />
        <p className="text-white font-medium">
          Inicie o Quiz para descobrir qual stand de <span className="font-bold">Jojo Bizarre Adventures</span> você é!
        </p>
        <Button onClick={startAction}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
          <span>Iniciar Quiz</span>
        </Button>
      </section>
    </animated.div>
  );
};

export default Start;

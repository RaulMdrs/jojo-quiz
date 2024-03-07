import { useState } from 'react';

// ? Importing Sound
import startSound from "./Assets/Sounds/start.mp3"

// ? Importing components
import Header from "./Components/Header";
import { Questions, Start, Result } from "./Components/Quiz";

// ? Importing Utils
import { playSound } from './utils';

// ! Tailwind CSS Prod
import "./Styles/output.css"; 

function App() {
  const [quizData, setQuizData] = useState({});
  const [quizStep, setQuizStep] = useState(1);
  
  const setQuizCurrentData = function (data) {
    setQuizData(() => data);
  };

  const startQuizHandler = () => {
    setQuizStep(2);
    playSound(startSound, 0.5);
  };

  /* 
  Steps:
  1 -> Iniciar quiz
  2 -> Questões do quiz
  3 -> Resultado do quiz
  */

  return (
    <main className='h-screen bg-gradient-to-br from-[#3a2146] to-[#b96ae0] overflow-auto'>
      <Header data={quizData ? {quizData, start: quizStep === 2 } : {}} />
      {quizStep === 1 ? <Start startAction={startQuizHandler} /> : ""}
      {quizStep === 2 ? <Questions data={setQuizCurrentData} step={setQuizStep} /> : ""}
      {quizStep === 3 ? <Result data={quizData} step={setQuizStep} /> : ""}
    </main>
  );
}

export default App;
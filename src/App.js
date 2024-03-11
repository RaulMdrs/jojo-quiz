import { useState } from 'react';

// ? Lodash object comparing
import { isEqual } from 'lodash';

// ? Importing Sound
import startSound from "./Assets/Sounds/start.mp3"

// ? Importing components
import Header from "./Components/Header";
import { Questions, Start, Result } from "./Components/Quiz";

// ? Importing Utils
import { playSound } from './utils';

// ! Tailwind CSS Prod Output File
import "./Styles/output.css";

const App = () => {
  const [quizData, setQuizData] = useState({});
  const [quizStep, setQuizStep] = useState(1);

  const setQuizCurrentData = (data) => {
    if (!isEqual(data, quizData)) {
      setQuizData(data);
    }
  };

  const startQuizHandler = () => {
    setQuizStep(2);
    playSound(startSound, 0.5);
  };

  /* 
  ! Steps:
  ? 1 -> Iniciar quiz
  ? 2 -> Questões do quiz
  ? 3 -> Resultado do quiz
  */

  return (
    <main className="
    h-screen 
    bg-gradient-to-br 
    from-[#3a2146] 
    to-[#b96ae0] 
    overflow-auto
    ">
      <Header data={quizData ? { quizData, start: quizStep === 2 } : {}} />
      {(() => {
        switch (quizStep) {
          case 1:
            return <Start startAction={startQuizHandler} />;
          case 2:
            return <Questions data={setQuizCurrentData} step={setQuizStep} />;
          case 3:
            return <Result data={quizData} step={setQuizStep} />;
          default:
            return null;
        }
      })()}
    </main>
  );
}

export default App;
import { useState } from 'react';

// ? Importing components
import Header from "./Components/Header";
import { Questions, Start } from "./Components/Quiz";
import Result from './Components/Quiz/Result';

function App() {
  const [quizData, setQuizData] = useState({});
  const [quizStep, setQuizStep] = useState(1);
  
  const setQuizCurrentData = function (data) {
    setQuizData(() => data);
  };

  /* 
  Steps:
  1 -> Iniciar quiz
  2 -> Questões do quiz
  3 -> Resultado do quiz
  */

  return (
    <main className="h-screen bg-gradient-to-br from-[#3a2146] to-[#b96ae0]">
      <Header data={quizData ? {quizData, start: quizStep === 2 } : {}} />
      {quizStep === 1 ? <Start startAction={() => setQuizStep(2)} /> : ""}
      {quizStep === 2 ? <Questions data={setQuizCurrentData} step={setQuizStep} /> : ""}
      {quizStep === 3 ? <Result data={quizData} /> : ""}
    </main>
  );
}

export default App;
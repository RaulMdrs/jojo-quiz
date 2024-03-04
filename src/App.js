import { useState } from 'react';

// ? Importing components
import Header from "./Components/Header";
import { Questions, Start } from "./Components/Quiz";


function App() {
  const [quizData, setQuizData] = useState({});
  const [startQuiz, setStartQuiz] = useState(false);

  const startQuizHandler = function () {
    setStartQuiz(startQuiz => !startQuiz);
  };

  const setQuizCurrentData = function (data) {
    setQuizData(() => data);
  };

  return (
    <main className="h-screen bg-gradient-to-br from-[#3a2146] to-[#b96ae0]">
      <Header data={quizData ? {quizData, start: startQuiz } : {}} />
      {startQuiz ? <Questions data={setQuizCurrentData} /> : <Start startQuiz={startQuizHandler} />}
    </main>
  );
}

export default App;
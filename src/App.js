// ? Importing components

import Header from "./Components/Header";
import { Questions, Start } from "./Components/Quiz";

function App() {
  return (
    <main className="h-screen bg-gradient-to-br from-[#3a2146] to-[#b96ae0]">
      <Header />
      <Start />
      <Questions/>
    </main>
  );
}

export default App;
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Result from "./components/Result/Result.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputId, newVal) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputId]: +newVal
      }
    })
  }

  return (<>
    <Header />
    <UserInput handleChange={handleChange} userInput={userInput} />
    {inputIsValid
      ? <Result input={userInput} initialInvestment={userInput.initialInvestment} />
      : <p className="center">Please enter valid input data</p>
    }
  </>
  );
}

export default App;
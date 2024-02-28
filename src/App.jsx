import { useState } from 'react';
import './App.css';
import { FaHandPaper, FaHandRock, FaHandScissors, FaRedo } from "react-icons/fa";

function App() {
  const choices = ['rock', 'paper', 'scissor'];
  const [userSelection, setUserSelection] = useState(null);
  const [sysSelection, setSysSelection] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(0);

  const startGame = (userValue) => {
      const systemChoice = Math.floor(Math.random()*choices.length);
      const sysValue = choices[systemChoice];
      setSysSelection(sysValue);
      // setTimeout(() => {
        if (userValue === "rock") {
          if (sysValue === "paper") return false;
          if (sysValue === "scissor") return true;
        }
        if (userValue === "paper") {
          if (sysValue === "scissor") return false;
          if (sysValue === "rock") return true;
        }
        if (userValue === "scissor") {
          if (sysValue === "rock") return false;
          if (sysValue === "paper") return true;
        }
        if (userValue === sysValue) return false;
      // }, 2500);
  } 
  
  const buttonHandler = (value) => {
    setIsLoading(true);
    setUserSelection(value);
    setSysSelection(null);
    
    let sysValue = "";
    setTimeout(() => {
      const systemChoice = Math.floor(Math.random()*choices.length);
      sysValue = choices[systemChoice];
      setSysSelection(sysValue);
      if (value === "rock" && sysValue === "scissor") setResult(result + 1);
      if (value === "paper" && sysValue === "rock") setResult(result + 1);
      if (value === "scissor" && sysValue === "paper") setResult(result + 1);
      setIsLoading(false);
    }, 1500);
  }

  return (
    <div className="App">
      <h2>Rock Paper Scissor Game</h2>
      <div className="container">
        <div className="button-group">
          <button className="btn" onClick={() => buttonHandler('rock')}>Rock <span><FaHandRock /></span></button>
          <button className="btn" onClick={() => buttonHandler('paper')}>Paper <span><FaHandPaper /></span></button>
          <button className="btn" onClick={() => buttonHandler('scissor')}>Scissor <span><FaHandScissors /></span></button>
        </div>
        <div className="selection">
          <div className="user">You have selected: <span>{userSelection}</span></div>
          {isLoading && <div className="loader"><FaRedo /></div>}
          {sysSelection && <div className="sys">System Selction: <span>
          {sysSelection}</span></div> }
        </div>
        <div className="result">
          Winning Count: {result}
        </div>
      </div>
    </div>
  )
}

export default App

import "./App.css";
import React from "react";

function App() {
  const [step, setStep] = React.useState(1);
  const [count, setCount] = React.useState(0);

  function handleStepMinus() {
    if (step > 0) setStep(step - 1);
  }

  function handleStepPlus() {
    setStep(step + 1);
  }

  function handleCountMinus() {
    if (count > 0) setCount(count - 1);
  }

  function handleCountPlus() {
    setCount(count + 1);
  }

  function getDate() {
    let date = new Date();

    // Set Step and Count
    if (count > 0 && step > 0) {
      let today = date.getDate();
      let days = count * step;
      date.setDate(today + days);
      return `${days} days from today is ${date.toDateString()}`;
    }

    return `Today is ${date.toDateString()}`;
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <div className="step-counter">
        <button className="minus" onClick={handleStepMinus}>
          -
        </button>
        <strong className="count"> Step: {step} </strong>
        <button className="plus" onClick={handleStepPlus}>
          +
        </button>
      </div>
      <div className="count-counter">
        <button className="minus" onClick={handleCountMinus}>
          -
        </button>
        <strong className="count"> Count: {count} </strong>
        <button className="plus" onClick={handleCountPlus}>
          +
        </button>
      </div>
      <div className="result">
        <strong>{getDate()}</strong>
      </div>
    </div>
  );
}

export default App;

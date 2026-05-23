import { useState } from "react";
import "./App.css";

function App() {

  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearDisplay = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">

        <input type="text" value={input} className="display" readOnly />

        <div className="buttons">

          <button onClick={clearDisplay}>C</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={() => setInput(input.slice(0, -1))}>⌫</button>
          <button className="orange" onClick={() => handleClick("/")}>÷</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="orange" onClick={() => handleClick("*")}>×</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button className="orange" onClick={() => handleClick("-")}>−</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="orange" onClick={() => handleClick("+")}>+</button>

          <button className="zero" onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="orange" onClick={calculate}>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;
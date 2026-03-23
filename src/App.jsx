import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="container">
      <h1>Calculator 🧮</h1>
      <input type="text" value={input} readOnly />

      <div className="buttons">
        {"789/456*123-0.=+".split("").map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "="
                ? calculate()
                : btn === "C"
                ? clear()
                : handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default App;
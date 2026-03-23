import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (val) => setInput(input + val);
  const clear = () => setInput("");

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input value={input} readOnly />

      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((b) => (
          <button key={b} onClick={() => b==="="?calculate():handleClick(b)}>
            {b}
          </button>
        ))}
        <button className="clear" onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default App;
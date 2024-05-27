import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(0);
  const date = new Date("may 27 2024");
  date.setDate(date.getDate() + count);

  return (
    <div className="task">
      <button
        className="btn"
        onClick={() => {
          setStep(step - 1);
        }}>
        -
      </button>
      <span>Step:{step}</span>
      <button
        className="btn"
        onClick={() => {
          setStep(step + 1);
        }}>
        +
      </button>
      <button
        className="btn"
        onClick={() => {
          setCount(count - step);
        }}>
        -
      </button>
      <span>Count:{count}</span>
      <button
        className="btn"
        onClick={() => {
          setCount(count + step);
        }}>
        +
      </button>

      <span>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {date.toDateString()}
      </span>
    </div>
  );
}


import useState from "react";
export default function App() {
  return (
    <>
      <Task />
      <Task />
      <div>
       from today is
      </div>
    </>
  );
}
function Task() {
  const[count , setCount] = useState(0);
  return (
    <div className="task">
      <button className="btn" onClick={() => {setCount(count-1)}}>-</button>
      <p>Step:{count}</p>
      <button className="btn" onClick={() => {setCount(count+1)}}>+</button>
    </div>
  );
}

import ReactDOM from "react-dom";
import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });
  const votar = (key) => {
    setSelected((value) => {
      return {
        ...value,
        [key]: key + 1
      }
    });
  };

  const Random = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <button onClick={() => setSelected(selected[Random])}>Next anecdote</button>
      <p>
        {() => {
          votar(selected);
        }}{" "}
        posicion
      </p>
      <button
        onClick={() => {
          votar(selected);
        }}
      >
        votar
      </button>
    </div>
  );
};

root.render(<App />);
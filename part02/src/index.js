import ReactDOM from "react-dom";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Important = ({ anecdote }) => {
  const anecdotes = [...anecdote];
  const valores = anecdotes.map((anecdote) => anecdote.votar);
  const max = Math.max(...valores);
  if (max === 0) {
    return <h1>No se ha realizado ningun voto</h1>;
  } else {
    const elemento = anecdotes.find((anecdote) => anecdote.votar === max);
    return (
      <div>
        <h2>Anécdota con mas votos:</h2>
        <p>{elemento.text}</p>
      </div>
    );
  }
};

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      text: "If it hurts, do it more often.",
      votar: 0,
    },
    {
      text: "Adding manpower to a late software project makes it later!",
      votar: 0,
    },
    {
      text: "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votar: 0,
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votar: 0,
    },
    {
      text: "Premature optimization is the root of all evil.",
      votar: 0,
    },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votar: 0,
    },
    {
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votar: 0,
    },
    {
      text: "The only way to go fast, is to go well",
      votar: 0,
    },
  ]);

  const [selected, setSelected] = useState(0);

  const votar = (key) => {
    const updatedAnecdotes = [...anecdotes];
    updatedAnecdotes[key].votar += 1;
    setAnecdotes(updatedAnecdotes);
  };

  const Random = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      <h3>{anecdotes[selected].text}</h3>
      <h2>Los votos totales son {anecdotes[selected].votar}</h2>
      <button onClick={() => votar(selected)}>votar</button>
      <button onClick={Random}>Next anecdote</button>

      <Important anecdote={anecdotes} />
    </div>
  );
};

root.render(<App />);

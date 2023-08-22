import { useEffect, useState } from "react";
import { Note } from "./Courses";
import { getAllNotes } from "./services/notes/getAllNotes";
import { createNotes } from "./services/notes/createNote";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNotes, setNewNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const handleChange = (event) => {
    setNewNotes(event.target.value);
  };
  useEffect(() => {
    setLoading(true);
    getAllNotes().then((respuesta) => {
      setNotes(respuesta);
      setLoading(false);
    });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Crear Nota");
    const noteToAddToState = {
      title: newNotes,
      body: newNotes,
      userId: notes.length + 1,
    };
    createNotes(noteToAddToState).then((notas) => {
      setNotes((prevNotes) => prevNotes.concat(notas));
      setNewNotes("")
    });
  };
  return (
    <div>
      <h1>Notes</h1>
      {loading ? <h3>Loading....</h3> : " "}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNotes} />
        <button>Crear Nota</button>
      </form>
      <ol>
        {notes.map((item) => {
          return <Note key={item.id} {...item} />;
        })}
      </ol>
    </div>
  );
};
export default App;

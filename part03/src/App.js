import { useState } from "react";
import "./App.css";

const Filtro = (props) => {
  return (
    <div>
      <form>
        filter shown with <input onChange={props.onChange} />
      </form>

      {props.listFilter.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};
const Form = ({
  addNewContact,
  newName,
  editingName,
  newNumber,
  editingPhone,
}) => {
  return (
    <form onSubmit={addNewContact}>
      <div>
        name: <input value={newName} onChange={editingName} required />
        <br />
        Phone: <input value={newNumber} onChange={editingPhone} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
const Contacts = ({ persons }) => {
  return persons.map((item) => (
    <div key={item.id}>
      <p>
        <b>
          {item.name} {item.number}
        </b>
      </p>
    </div>
  ));
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredList, setFilteredList] = useState(persons);
  const addNewContact = (event) => {
    event.preventDefault();
    alert(`${newName} is already added to phonebook`);
    const newContact = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(newContact));
    setFilteredList(filteredList.concat(newContact));
    setNewName("");
    setNewNumber("");
  };
  const editingName = (event) => {
    setNewName(event.target.value);
  };
  const editingPhone = (event) => {
    setNewNumber(event.target.value);
  };
  const filtered = (event) => {
    setFilteredList(
      persons.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filtro listFilter={filteredList} onChange={filtered} />
      <h2>Add New Contact</h2>
      <Form
        addNewContact={addNewContact}
        newName={newName}
        editingName={editingName}
        newNumber={newNumber}
        editingPhone={editingPhone}
      />
      <h2>Numbers</h2>
      <Contacts persons={persons} />
    </div>
  );
};

export default App;

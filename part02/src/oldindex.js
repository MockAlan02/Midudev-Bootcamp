import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

//const root = ReactDOM.createRoot(document.getElementById("root"));

const App = (prop) => {
  // let [contador, updatecontador] = useState(0);
  let [Right, setRight] = useState(0);
  let [Left, setLeft] = useState(0);
  // const IncreaseorDecrease = (boolear) => {
  //  boolear? updatecontador(contador + 1) : updatecontador(contador - 1);
  //  };
  // const Reset = () => {
  //   updatecontador(0);
  // };
  // const isEvent = () => {
  //   return contador % 2 === 0 ? "Es par" : "Es impar";
  // };
  return (
    <>
      {Left}
      <button onClick={() => setLeft(Left + 1)}>Left</button>
      <button onClick={() => setRight(Right + 1)}>Right</button>
      {Right}
      {/* <h1>el contador es: {contador + " " + isEvent()}</h1>
      <button onClick={()=>IncreaseorDecrease(true)}>Incrementar</button>
      <button onClick={()=>IncreaseorDecrease(false)}>Decrease</button>
      <button onClick={Reset}>Reset</button> */}
    </>
  );
};

//root.render(<App />);

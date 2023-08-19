import ReactDOM from "react-dom/client";
import { useState } from "react";


const WarningEmpty = ({ clicks }) => {
  return clicks.length === 0 ? (
    <h1>El array esta vacio</h1>
  ) : (
    <>
      <p>Cantidad de click es: {clicks.length}</p>
      <p>{clicks.join(", ")}</p>
    </>
  );
};

const App = () => {
  const [clicks, setClicks] = useState([]);

  const IncreaseLeft = () => {
    setClicks((previosvalue) => {
      return [...previosvalue, "L"];
    });
  };

  const IncreaseRight = () => {
    setClicks((previosvalue) => {
      return [...previosvalue, "R"];
    });
  };
  const ResetAll = ()=>{
    setClicks([])
  }
  const Left = clicks.filter(element =>{
    return element === "L"
  })
  const Right = clicks.filter(element =>{
    return element === "R"
  })

  return (
    <>
      {Left.length}
      <button onClick={IncreaseLeft}>Left</button>
      <button onClick={ResetAll}>Reset</button>
      <button onClick={IncreaseRight}>Right</button>
      {Right.length}
      <WarningEmpty clicks={clicks} />
    </>
  );
};




import { useState } from "react";

const WarningEmpty = ({ estadistica }) => {
  let verdad = Object.values(estadistica).find((value) => value !== 0);
  return verdad ? (
    <>
      <table>
        <tr>
          <td>good</td>
          <td>{estadistica.good}</td>
        </tr>
        <tr>
          <td>Neutral:</td>
          <td>{estadistica.neutral}</td>
        </tr>
        <tr>
          <td>Bad:</td>
          <td>{estadistica.bad}</td>
        </tr>
        <tr>
          <td>All :</td>
          <td>{estadistica.all}</td>
        </tr>
        <tr>
          <td>Average:</td>
          <td>{estadistica.Average}%</td>
        </tr>
        <tr>
          <td>Positive:</td>
          <td>{estadistica.positive}%</td>
        </tr>
      </table>
    </>
  ) : (
    <p>Empty Document</p>
  );
};
const App = () => {
  const [Statistics, SetStatitics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    Average: 0,
    positive: 0,
    all: 0,
  });
  const IncrementKey = (key) => {
    SetStatitics((value) => {
      const newvalue = {
        ...value,
        [key]: value[key] + 1,
      };
      const total = newvalue.good + newvalue.bad + newvalue.neutral;
      newvalue.Average = (newvalue.good - newvalue.bad) / total;
      newvalue.positive = (newvalue.good / total) * 100;
      newvalue.all = total;

      return newvalue;
    });
  };

  return (
    <>
      <h1>Give FeedBack</h1>
      <button
        onClick={() => {
          IncrementKey("good");
        }}
      >
        Good
      </button>

      <button
        onClick={() => {
          IncrementKey("neutral");
        }}
      >
        Neutral
      </button>

      <button
        onClick={() => {
          IncrementKey("bad");
        }}
      >
        Bad{" "}
      </button>

      <h3>Statitics</h3>
      <WarningEmpty estadistica={Statistics} />
    </>
  );
};


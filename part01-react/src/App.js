const App = () => {

  const Header = ({ course }) => {
    return <h1>{course}</h1>;
  };
  const Content = (prop) => {
    return prop.parts.map((element, index) => (
      <p key={index}>
        {element.name}: {element.excercises}
      </p>
    ));
  };
  const Total = (prop) => {
    let sum = 0;
    for (let i = 0; i < prop.parts.length; i++) {
      sum += prop.parts[i].excercises;
    }
    return <p>{prop.message +" "}{sum}</p>;
  };
  const Course = "Half Stack application development";
  const Contenido = [
    {
      name: "Fundamentals of React",
      excercises: 10,
    },
    {
      name: "Using props to pass data",
      excercises: 7,
    },
    {
      name: "State of a component",
      excercises: 14,
    },
  ];

  return (
    <div>
      <Header course={Course} />
      <Content parts={Contenido} />
      <Total message="Te amo" parts={Contenido} />
    </div>
  );
};

export default App;

// Refactoring with object literals:

const App = () => {
  const course = "Half stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Content = (props) => {
    return (
      <div>
        {props.parts.map((part, index) => (
          <div key={index}>
            <p>{part.name + " " + part.exercises}</p>
          </div>
        ))}
      </div>
    );
  };

  const Total = (props) => {
    const sum = props.parts.reduce((a, b) => a + b.exercises, 0);
    return <p>Total exercises: {sum}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;

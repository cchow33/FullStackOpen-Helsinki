const App = () => {
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];
  const course = "Half stack application development";
  const exercises = [10, 7, 14];

  const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    );
  };

  const Content = (props) => {
    return (
      <div>
        <p>
          {props.parts[0]}
          {props.exercises[0]}
        </p>
        <p>
          {props.parts[1]}
          {props.exercises[1]}
        </p>
        <p>
          {props.parts[2]}
          {props.exercises[2]}
        </p>
      </div>
    );
  };

  const Total = (props) => {
    return <>{props.exercises[0] + props.exercises[1] + props.exercises[2]}</>;
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <p>
        Number of exercises <Total exercises={exercises} />
      </p>
    </div>
  );
};

export default App;

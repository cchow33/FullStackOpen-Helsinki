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

  const Part = (props) => {
    return (
      <div>
        <p>{props.parts + " " + props.exercises}</p>
      </div>
    );
  };

  const Content = () => {
    return (
      <div>
        <Part parts={parts[0]} exercises={exercises[0]} />
        <Part parts={parts[1]} exercises={exercises[1]} />
        <Part parts={parts[2]} exercises={exercises[2]} />
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

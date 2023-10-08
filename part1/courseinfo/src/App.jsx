const App = () => {
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];
  const course = "Half stack application development";
  const exercises = [10, 7, 14];

  const Header = () => {
    return (
      <>
        <h1>{course}</h1>
      </>
    );
  };

  const Content = () => {
    return (
      <div>
        <p>
          {parts[0]}
          {exercises[0]}
        </p>
        <p>
          {parts[1]}
          {exercises[1]}
        </p>
        <p>
          {parts[2]}
          {exercises[2]}
        </p>
      </div>
    );
  };

  const Total = () => {
    return <>{exercises[0] + exercises[1] + exercises[2]}</>;
  };

  console.log(course);

  return (
    <div>
      <Header course={course} />
      <Content />
      <p>
        Number of exercises <Total />
      </p>
    </div>
  );
};

export default App;

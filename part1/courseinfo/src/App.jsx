// Refactor the course and its parts into a single object:

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <h1>{course.name}</h1>
      <div>
        {course.parts.map((part, index) => (
          <div key={index}>
            <p>{part.name + ":" + " " + part.exercises}</p>
          </div>
        ))}
      </div>
      <p>
        Total exercises: {course.parts.reduce((a, b) => a + b.exercises, 0)}
      </p>
    </div>
  );
};

export default App;

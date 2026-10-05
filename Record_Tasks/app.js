import React, { Component } from "react";

function FunctionalComponent() {
  return (
    <div>
      <h2>Functional Component</h2>
      <p>Hello from Functional Component!</p>
    </div>
  );
}

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Hello from Class Component!</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>React Components</h1>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
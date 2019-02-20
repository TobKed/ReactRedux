import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome my friend :)</p>
        <Ninjas name="Justin" age="16" belt="pink"/>
        <Ninjas name="Chuck" age="99" belt="black"/>
      </div>
    );
  }
}

export default App;

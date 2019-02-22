import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name: "Justin", age:16, belt: "pink", id: 1},
      {name: "Chuck", age:99, belt: "Black", id: 2},
      {name: "Borixon", age:45, belt: "silver", id: 3}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome my friend :)</p>
        <Ninjas ninjas={ this.state.ninjas }/>
        <AddNinja />
      </div>
    );
  }
}

export default App;

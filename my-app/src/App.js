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
  addNinja = (ninja) => {
    ninja.id = Math.random();  // should be unique, temporary fix
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {return ninja.id !== id})
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount() {
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome my friend :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;

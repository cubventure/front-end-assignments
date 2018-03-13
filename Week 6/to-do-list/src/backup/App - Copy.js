import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {description: "", todos: []};
  }

  addTodo = (event) => {
    event.preventDefault();
    this.setState({
        todos: [...this.state.todos, this.state.description]
      });
  }

  inputChanged = (event) => {
    this.setState({description: event.target.value});
  }

  render() {
    const listItems = this.state.todos.map(todo => <li>{todo}</li>);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo list</h1>
        </header>

        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.inputChanged} value={this.state.description} placeholder="Description"/>
          <input type="submit" value="Add"/>

        </form>
        <ul>{listItems}</ul>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

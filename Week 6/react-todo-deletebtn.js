import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {task: "", date:"", todos: []};
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    this.setState({
        todos: [...this.state.todos, {task: this.state.task, date: this.state.date}]
      });
  }

  deleteRow = (event) => {
    this.setState({
      todos: this.state.todos.filter((todo, i) => i != event.target.id)
    });
  }

  render() {
    // const listItems = this.state.todos.map((item, index) => <li key={index}>{item}</li>);

    const listItems =
      this.state.todos.map((item, index) =>
        <tr key={index}>
          <td>{item.date}</td>
          <td>{item.task}</td>
          <td>
            <button id={index} onClick={this.deleteRow}>Delete</button>
          </td>
        </tr>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo list</h1>
        </header>

        <form onSubmit={this.addTodo}>
          <label>Task: </label>
          <input name="task" type="text" onChange={this.inputChanged} value={this.state.description} placeholder="Description"/>
          <label>Due date: </label>
          <input name="date" type="text" onChange={this.inputChanged} value={this.state.date}/>
          <input type="submit" value="Add"/>
        </form>

        <br />

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Task</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listItems}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;

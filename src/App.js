import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import Header from './Header';

class App extends Component {
  state = {
    todos:{
      1: {
        id:1,
        title: 'buy food',
        completed: true
      },
      2: {
        id:2,
        title: 'make food',
        completed: false
      },
      3: {
        id:3,
        title: 'eat food',
        completed: false
      }
    },
  }

  handleTodoCheck = (id) => {
    // create the new todos data
    const selectedTodo = this.state.todos[id];
    console.log(id, selectedTodo)
    const updatedTodos = Object.assign({}, this.state.todos)
    updatedTodos[id].completed = !selectedTodo.completed

    console.log(updatedTodos)


    // update the state
    this.setState({
      todos: updatedTodos
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Todos onClick={this.handleTodoCheck} todos={this.state.todos}/>
        {this.state.event}
      </div>
    );
  }
}

export default App;

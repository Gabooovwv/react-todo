import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var stack = [];

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      textField: ''
    };
  }

  saveTodo = (e) => {
    if (e.key === 'Enter') {
      stack.push(e.target.value);
      console.log('do validate', stack);
      e.target.value = '';
    }
  }

  render()
  {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App</h2>
        </div>
        <p className="App-intro">
          <input type="text" onKeyPress={this.saveTodo} />
        </p>
        <div>

        </div>


      </div>
    );
  }
}

export default App;

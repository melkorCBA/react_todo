import React from 'react';
import logo from './logo.svg';
import './App.css';

const Todo  = props=>(
  <li>
    <input type="checkbox"></input>
    <button>delete</button>
    <span>{props.text}</span>  
  </li>
)

class App extends React.Component{
  constructor(){
    super();
    this.state={
      todos:[],
    }
  }

  render(){
    return (
      <div>
        <ul>
          {this.state.todos.map(todo=> <Todo todo={todo}/>)}
        </ul>
      </div>
    )
  }
}


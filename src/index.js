import React from "react";
import ReactDOM from "react-dom";

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

  //add todo items
  addTodo(){
    const text= prompt("TODO text please")
    this.setState({
      todos:[...this.state.todos, //clone array this.state.todos react doesn't mutate clone the array to different refference with the changes
      {text:text}]
    })
  }

  render(){
    return (
      <div>
        <button onClick={()=>this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo=> <Todo todo={todo}/>)}
        </ul>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

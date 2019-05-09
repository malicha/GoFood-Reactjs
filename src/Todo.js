import React, { Component } from 'react'
import List from './List' 
import './Todo.css'


export default class Todo extends Component {
    constructor(){
        super();

        this.state = {
          todos: []
        }

        this.todoInput= ""

    }

    addTodo(){
      let todoValue = this.todoInput.value

      let newTodos = this.state.todos
      newTodos.push(todoValue)

      this.setState({
        todos: newTodos
      })
      this.todoInput.value=""

      this.todoInput.focus()
    }

    removeTodo(id){
      let todos = this.state.todos.filter((todo, index)=>{
        return id !== index
      })
      this.setState({
        todos: todos
      })
    }


  render() {
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:700,backgroundColor:"maroon"}} >
        <div style={{display:"flex",justifyContent:"space-around",flexDirection:"column",alignItems:"center", color:"white"}} >
        <div>
        <h2>What are you doing today ?</h2>
        <input ref={(input) => this.todoInput = input}/>
        <button onClick={this.addTodo.bind(this)}>Add</button>
        </div>
        <ul style={{marginTop:10}} >
            {this.state.todos.map((todo, index) =>{
              return (<List id={index} key={index} todo={todo} onRemove={()=> this.removeTodo(index)} />)
            })}
        </ul>
        </div>
      </div>
    )
  }
}
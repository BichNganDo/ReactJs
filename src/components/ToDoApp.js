import React, { Component }  from "react";
import Header from "../components/layout/Header";
import ToDos from "./ToDos";
import AddToDo from "./AddToDo";
import {v4 as uuid} from "uuid"; 
import axios from "axios";


class ToDoApp extends React.Component{
    handleCheckboxChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    deleteToDo = id => {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => this.setState({
          todos: [
              ...this.state.todos.filter(todo => {
                  return todo.id !== id;
              })
          ]
      }))
    };

    addToDo = title => {
        const todoData = {
            title: title,
            completed: false
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
        .then(response => {
            console.log(response.data);
            this.setState({
                todos: [...this.state.todos, response.data]
            })
        });
    };

    componentDidMount() {
        const config = {
            params: {
                _limit: 8
            }
        }
        //tạo GET request để lấy danh sách todos
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
        .then(response => this.setState({todos: response.data}));
    }

    render(){
        return (
            <div className="container">
                <Header />
                <AddToDo addToDo={this.addToDo} />
                <ToDos todos={this.state.todos} 
                        handleChange={this.handleCheckboxChange} 
                        deleteToDo={this.deleteToDo}/>
            </div>
        );
    }
    state = {
        todos: []
    }
}

export default ToDoApp;
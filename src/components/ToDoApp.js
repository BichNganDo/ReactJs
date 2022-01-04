import React from "react";
import Header from "../components/layout/Header";
import ToDos from "./ToDos";

class ToDoApp extends React.Component{
    handleCheckboxChange = id => {
        console.log("clicked on checkbox with id = " + id);
    }
    render(){
        return (
            <div className="container">
                <Header/>
                <ToDos todos={this.state.todos} handleChange={this.handleCheckboxChange}/>
            </div>
        );
    }
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    }
}

export default ToDoApp;
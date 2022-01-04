import React from "react";
import Header from "../components/layout/Header";
import ToDos from "./ToDos";

class ToDoApp extends React.Component{
    render(){
        return (
            <div className="container">
                <Header/>
                <ToDos todos={this.state.todos}/>
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
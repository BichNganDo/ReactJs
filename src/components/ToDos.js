import React from "react";
import ToDoItem from "./ToDoItem";

class ToDos extends React.Component {
    render () {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <ToDoItem key={todo.id} todo={todo} handleChange={this.props.handleChange} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default ToDos;
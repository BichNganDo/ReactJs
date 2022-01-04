import React from "react";

class ToDoItem extends React.Component {
    render() {
        return(
            <li className="todo-item">
                <input type="checkbox" 
                checked="this.props.todo.completed}" 
                onChange={() => console.log("clicked")}
                />{this.props.todo.title}
            </li>
        );
    }
}
export default ToDoItem;
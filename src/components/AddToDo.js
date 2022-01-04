import React from "react";

class AddToDo extends React.Component {
    onInputChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    addToDo = e => {
        e.preventDefault();
        this.props.addToDo(this.state.title)
        this.setState({
            title: ""
        });
    };
    render () {
        return (
            <form className="form-container" onSubmit={this.addToDo}>
                <input type="text" placeholder="Add ToDo..." className="input-text" value={this.state.title} onChange={this.onInputChange}/>
                <input type="submit" value="Submit" className="input-submit"/>
            </form>
        )
    }

    state = {
        title: ""
    };

}
export default AddToDo;
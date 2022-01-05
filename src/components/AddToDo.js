import React, { useState } from "react";
        //CACH 1: CLASS COMPONENT
// class AddToDo extends React.Component {
//     onInputChange = e => {
//         this.setState({
//             title: e.target.value
//         })
//     }

//     addToDo = e => {
//         e.preventDefault();
//         this.props.addToDo(this.state.title)
//         this.setState({
//             title: ""
//         });
//     };
//     render () {
//         return (
//             <form className="form-container" onSubmit={this.addToDo}>
//                 <input type="text" placeholder="Add ToDo..." className="input-text" value={this.state.title} onChange={this.onInputChange}/>
//                 <input type="submit" value="Submit" className="input-submit"/>
//             </form>
//         )
//     }

//     state = {
//         title: ""
//     };

// }
// export default AddToDo;

//CACH 2: FUNCTION COMPONENT

function AddToDo(props) {
    const [title, setTitle] = useState("");

    const onInputChange = e => {
        setTitle(e.target.value)
    };

    const addToDo = e => {
        e.preventDefault();
        props.addToDo(title);
        setTitle("");
    }

    return (
        <form className="form-container" onSubmit={addToDo}>
            <input type="text"
                    placeholder="Add ToDo..."
                    className="input-text"
                    value={title}
                    onChange={onInputChange}/>
            <input type="submit"
                    value="Submit"
                    className="input-submit"/>

        </form>

    );
    
}
export default AddToDo;
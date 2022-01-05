import React, { useState, useEffect }  from "react";
import Header from "../components/layout/Header";
import ToDos from "./ToDos";
import AddToDo from "./AddToDo";
//Khai báo thư viện Axios
import axios from "axios";


// class ToDoApp extends React.Component{
//     handleCheckboxChange = id => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if(todo.id === id) {
//                     todo.completed = !todo.completed;
//                 }
//                 return todo;
//             })
//         })
//     }

//     deleteToDo = id => {
//       axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
//       .then(response => this.setState({
//           todos: [
//               ...this.state.todos.filter(todo => {
//                   return todo.id !== id;
//               })
//           ]
//       }))
//     };

//     addToDo = title => {
//         const todoData = {
//             title: title,
//             completed: false
//         }
//         axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
//         .then(response => {
//             console.log(response.data);
//             this.setState({
//                 todos: [...this.state.todos, response.data]
//             })
//         });
//     };

//     componentDidMount() {
//         const config = {
//             params: {
//                 _limit: 8
//             }
//         }
//         //tạo GET request để lấy danh sách todos
//         axios.get("https://jsonplaceholder.typicode.com/todos", config)
//         .then(response => this.setState({todos: response.data}));
//     }

//     render(){
//         return (
//             <div className="container">
//                 <Header />
//                 <AddToDo addToDo={this.addToDo} />
//                 <ToDos todos={this.state.todos} 
//                         handleChange={this.handleCheckboxChange} 
//                         deleteToDo={this.deleteToDo}/>
//             </div>
//         );
//     }
//     state = {
//         todos: []
//     }
// }

// export default ToDoApp;

function ToDoApp() {
    const [state, setState] = useState({
        todos: []
    }); 

    const handleCheckboxChange = id => {
        setState({
            todos: state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };
        
    const deleteToDo = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => setState({
            todos: [
                ...state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        }))
    };

    const addToDo = title => {
        const todoData = {
            title: title,
            completed: false
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
        .then(response => {
            console.log(response.data);
            setState({
                todos: [...state.todos, response.data]
            })
        });
    };

    useEffect(() => {
        const config = {
            params: {
                _limit: 8
            }
        }
        //Tạo Get request để lấy danh dách todos
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
        .then(response => setState({ todos: response.data}));
    }, []);

    return(
        <div className="container">
            <Header />
            <AddToDo addToDo={addToDo} />
            <ToDos todos={state.todos}
            handleChange={handleCheckboxChange}
            deleteToDo={deleteToDo} />
        </div>
    );
}
export default ToDoApp;
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Apps from "./Apps.css";

import ToDoApp from "./components/ToDoApp";


import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <ToDoApp/>
    </Provider>, document.getElementById('root')
);

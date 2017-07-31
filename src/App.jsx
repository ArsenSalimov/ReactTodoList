import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from "./store/configureStore";
import {Provider} from "react-redux";

import ToDoList from "./ToDoList/ToDoList";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ToDoList/>
        </div>
    </Provider>,
    document.getElementById('react-root')
);

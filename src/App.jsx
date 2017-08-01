import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from "./store/configureStore";
import {Provider} from "react-redux";

import ToDoList from "./ToDoList/ToDoList";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import "./app.styl"

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <ToDoList/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('react-root')
);

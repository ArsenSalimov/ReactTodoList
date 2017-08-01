import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from "./store/configureStore";
import ToDoListPage from "./containers/ToDoListPage";

import "./app.styl"

injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <ToDoListPage/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('react-root')
);

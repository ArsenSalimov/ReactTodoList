import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ToDoInput extends React.Component {
    input;

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.initInput = this.initInput.bind(this);
    }

    render() {
        return (
            <form className="toDoList__input" onSubmit={this.onSubmit}>
                <TextField hintText="Description" ref={this.initInput}/>
                <RaisedButton className="submitButton" type="submit" label="Add" primary={true}/>
            </form>
        )
    }

    initInput(input) {
        this.input = input;
    }

    onSubmit(event) {
        event.preventDefault();

        const value = this.input.getValue().trim();
        this.input.input.value = '';

        this.props.onAddItemClick(value);
    }
}
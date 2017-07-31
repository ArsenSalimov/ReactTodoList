import React from 'react';
import {connect} from 'react-redux';
import ToDoItem from './ToDoItem/ToDoItem';
import {ADD_ITEM} from "../store/contants/ToDoList";

class ToDoList extends React.Component {
    constructor() {
        super();

        this.onAddItemClick = this.onAddItemClick.bind(this)
    }

    render() {
        const toDoItems = this.props.toDoItems;

        return (
            <div>
                <h1>TODO List</h1>
                <ul>
                    {toDoItems.map(todoItem => <ToDoItem/>)}
                </ul>
                <button type='button' onClick={this.onAddItemClick}>Add</button>
            </div>
        )
    }

    onAddItemClick() {
        this.props.dispatch({
            type: ADD_ITEM,
            payload: {}
        })
    }
}

function mapStateToProps(state) {
    return {
        toDoItems: state.toDoItems
    }
}

export default connect(mapStateToProps)(ToDoList)
import React from 'react';
import {connect} from 'react-redux';

import ToDoItem from './ToDoItem';
import ToDoInput from './ToDoInput';
import {addItem, editItem, removeItem} from "../store/actions/ToDoListActions";

import "./toDoList.styl"

class ToDoList extends React.Component {
    constructor() {
        super();
    }

    renderToDoItem(toDoItem) {
        return (
            <ToDoItem key={toDoItem.get('itemId')}
                      itemId={toDoItem.get('itemId')}
                      description={toDoItem.get('description')}
                      onRemoveClick={this.props.removeItem}
                      onEdit={this.props.editItem}/>
        )
    }

    render() {
        const toDoItems = this.props.toDoItems;

        return (
            <div className="toDoList">
                <h2 className="toDoList__header">TODO List</h2>
                <ToDoInput onAddItemClick={this.props.addItem}/>
                <ul className="toDoList__body">
                    {toDoItems.map(todoItem => this.renderToDoItem(todoItem))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        toDoItems: state.toDoItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: (description) => dispatch(addItem(description)),
        removeItem: (itemId) => dispatch(removeItem(itemId)),
        editItem: (itemId, description) => dispatch(editItem(itemId, description))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
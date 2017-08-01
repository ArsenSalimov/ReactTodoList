import React from 'react';

import ToDoItem from './ToDoItem';
import ToDoInput from './ToDoInput';

import "./toDoList.styl"

export default class ToDoList extends React.Component {
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
        return (
            <div className="toDoList">
                <h2 className="toDoList__header">TODO List</h2>
                <ToDoInput onAddItemClick={this.props.addItem}/>
                <ul className="toDoList__body">
                    {this.props.toDoItems.map(todoItem => this.renderToDoItem(todoItem))}
                </ul>
            </div>
        )
    }
}
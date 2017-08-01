import React from 'react';
import {connect} from 'react-redux';
import ToDoList from '../components/todo/ToDoList';
import {addItem, editItem, removeItem} from "../store/actions/ToDoListActions";

class ToDoListPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <ToDoList
            toDoItems={this.props.toDoItems}
            addItem={this.props.addItem}
            removeItem={this.props.removeItem}
            editItem={this.props.editItem}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListPage)
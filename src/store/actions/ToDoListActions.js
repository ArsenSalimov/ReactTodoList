import {ADD_ITEM, EDIT_ITEM, REMOVE_ITEM} from "../contants/ToDoList";

let nextTodoId = 0

export function addItem(description) {
    return {
        type: ADD_ITEM,
        payload: {
            itemId: nextTodoId++,
            description
        }
    }
}

export function removeItem(itemId) {
    return {
        type: REMOVE_ITEM,
        payload: itemId
    }
}


export function editItem(itemId, description) {
    return {
        type: EDIT_ITEM,
        payload: {
            itemId,
            description
        }
    }
}
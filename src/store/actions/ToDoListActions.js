import {ADD_ITEM} from "../contants/ToDoList";

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}
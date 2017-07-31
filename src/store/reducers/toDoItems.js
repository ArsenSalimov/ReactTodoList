import {List} from "immutable";
import {ADD_ITEM} from "../contants/ToDoList";

export default (toDoItems = List(), action) => {
    switch (action.type) {
        case ADD_ITEM:
            return toDoItems.push(action.payload);
        default:
            return toDoItems;
    }
}
import {Map, List} from "immutable";
import {ADD_ITEM, EDIT_ITEM, REMOVE_ITEM} from "../contants/ToDoList";

export default (toDoItems = List(), action) => {
    switch (action.type) {
        case ADD_ITEM:
            return toDoItems.push(Map({
                itemId: action.payload.itemId,
                description: action.payload.description
            }));
        case REMOVE_ITEM:
            return toDoItems.delete(toDoItems.findIndex(toDoItem => toDoItem.itemId === action.payload));
        case EDIT_ITEM:
            const index = toDoItems.findIndex(toDoItem => toDoItem.itemId === action.payload.itemId);
            const item = toDoItems.get(index);

            return toDoItems.set(index, item.set('description', action.payload.description));
        default:
            return toDoItems;
    }
}
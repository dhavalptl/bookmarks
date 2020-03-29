import { Bookmark, Action } from "./types";

const intialState:Bookmark[] = [];

const reducer = (state: Bookmark[] = intialState, action: Action) => {
    switch (action.type) {
        case 'SET_BOOKMARKS':
            return action.payload;
        case 'GET_BOOKMARKS':
            return state;
        case 'ADD_BOOKMARK': {
            const updatedBookmarks = [...state, action.payload];
            localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
            return updatedBookmarks;
        }
        case 'DELETE_BOOKMARK': {
            const updatedBookmarks = state.filter(bookmark => bookmark.id !== action.payload);
            localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
            return updatedBookmarks;
        }
        default:
            return state;
    }
}

export default reducer;
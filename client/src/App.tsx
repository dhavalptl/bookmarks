import React, { useReducer, useEffect } from 'react';
import './App.css';
import reducer from './reducer';
import { Bookmark } from './types';
import { AppContext } from './AppContext';
import BookmarkList from './components/BookmarkList';
import BookmarkInputForm from './components/BookmarkInputForm';

const intialState: Bookmark[] = [];

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  useEffect(() => {
    async function fetchBookmarks() {
      const response = await fetch('http://localhost:3100/api/bookmarks');
      const data = await response.json();
      dispatch({
        type: 'SET_BOOKMARKS',
        payload: data
      });
    }
    fetchBookmarks();
  }, []);
  return (
    <AppContext.Provider value={{dispatch}}>
      <div className="App">
        <BookmarkInputForm />
        <BookmarkList bookmarks={state} />
      </div>
    </AppContext.Provider>
  );
}
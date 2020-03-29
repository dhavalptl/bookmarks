import React, { useContext } from 'react';
import { Bookmark } from '../types';
import { AppContext } from '../AppContext';

const BookmarkNode: React.FC<{ bookmark: Bookmark }> = ({bookmark}) => {
    const {dispatch} = useContext(AppContext);
    async function deleteBookmark() {
        const response = await fetch(`http://localhost:3100/api/bookmarks/${bookmark.id}`, {
            method: 'DELETE'
        });
        const isDeleteed = await response.json();
        if(isDeleteed) {
            dispatch({ type: 'DELETE_BOOKMARK', payload: bookmark.id });
        }
    }
    return (
        <div className="bookmarkitem">
            <div className="bookmark">
                <a
                    className='url'
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="bookmarktitle">{bookmark.title}</div>
                    <div className="bookmarkdetails">{bookmark.url}</div>
                </a>
            </div>
            <div className="bookmarkremove" onClick={() => deleteBookmark()}>&times;</div>
        </div >
    );
};

export default BookmarkNode;
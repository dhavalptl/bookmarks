import React from 'react';
import { Bookmark } from '../types';
import BookmarkNode from './BookmarkNode';

const BookmarkList: React.FC<{ bookmarks: Bookmark[] }> = ({ bookmarks }) => {
    return (
        <div className="list">
            {bookmarks.length === 0 && <h3 className='notfound'>No Bookmarks found !!!</h3>}
            <ul>
                {bookmarks.map(bookmark => (<BookmarkNode key={bookmark.id} bookmark={bookmark} />))}
            </ul>
        </div>
    );
};

export default BookmarkList;
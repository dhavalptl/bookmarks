import React, { useContext, useState, useRef, SyntheticEvent } from 'react';
import { AppContext } from '../AppContext';

const BookmarkInputForm: React.FC = () => {
    const {dispatch} = useContext(AppContext);
    const [title, setTitle] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const titleRef = useRef<HTMLInputElement>(null);

    const onAddBookmark = async (event: SyntheticEvent) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3100/api/bookmarks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                title,
                url
            })
        });
        const data = await response.json();
        dispatch({
            type: 'ADD_BOOKMARK', payload: data
        });
        setTitle('');
        setUrl('');
        if(titleRef && titleRef.current) {
            titleRef.current.focus();
        } 
    }
    
    return (
        <form className="form" onSubmit={onAddBookmark}>
            <h1>Bookmark Details</h1>
            <input ref={titleRef} autoFocus maxLength={70} type="text" value={title} placeholder='Title' required onChange={(e) => { setTitle(e.target.value) }} />
            <input type="url" value={url} maxLength={150} placeholder='URL with http or https' required onChange={(e) => setUrl(e.target.value)} />
            <button type="submit">Add Bookmark</button>
        </form>
    );
};

export default BookmarkInputForm;
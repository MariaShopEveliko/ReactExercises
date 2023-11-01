import { useState } from 'react'; // functions in react that starts with use are called react-hooks

import classes from './PostsList.module.css';
import Post from "../Post/Post";
import NewPost from '../NewPost/NewPost';

function PostsList() {
    /* const stateData = useState(''); - use state returns an array and always have 2 elements
    stateData[0] - current value
    stateData[1] - state updating function which we can execute to assign a new value to our state */

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) { // event comes by default
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) { 
        setEnteredAuthor(event.target.value);
    }
    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
            <ul className={classes.posts}>
                <Post author={enteredAuthor.trim().length > 0 ? enteredAuthor : "John"} body={enteredBody.trim().length > 0 ? enteredBody : "Check my code"} />
                <Post author="Lara" body="Here's some message" />
            </ul>
        </>
    );
}

export default PostsList;
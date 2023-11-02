import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({ onCancel, onAddPost }) {
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

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label> {/* "for" is not allowed so we have htmlFor */}
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <div className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type>Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
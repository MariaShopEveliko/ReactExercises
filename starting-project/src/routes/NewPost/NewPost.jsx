// import { useState } from 'react';
import { Link, Form, redirect } from 'react-router-dom';

import Modal from '../../components/Modal/Modal';
import classes from './NewPost.module.css';

function NewPost() {
  /* const stateData = useState(''); - use state returns an array and always have 2 elements
  stateData[0] - current value
  stateData[1] - state updating function which we can execute to assign a new value to our state */

  /*const [enteredBody, setEnteredBody] = useState('');
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
  }*/

  return (
    <Modal>
      <Form method='post' className={classes.form}
      // onSubmit={submitHandler}
      >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name='body' required rows={3}
          // onChange={bodyChangeHandler} 
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name='author' required
          // onChange={authorChangeHandler} 
          />
        </p>
        <div className={classes.actions}>
          <Link type='button' to="/">Cancel</Link>
          <button type='submit'>Submit</button>
        </div>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) { //action(data) comes by default (we can get later data.request) or with object destruction - action({request})
  const formData = await request.formData(); // by executing this, we have an acess to all the data in the form
  const postData = Object.fromEntries(formData);// formData.get('authors') - we can get needed values like this instead

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return redirect('/');
}
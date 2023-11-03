import { useState, useEffect } from 'react';

import classes from './PostsList.module.css';
import Post from "../Post/Post";
import NewPost from '../NewPost/NewPost';
import Modal from '../Modal/Modal';

function PostsList({ isModalVisible, onHideModal }) {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    let modalContent;
    let postsContent;

    // the first arg of useEffect is a function which shouldn't return anything
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            if (!response.ok) {
                alert("We have an error")
            }
            setPosts(resData.posts);
            setIsFetching(false);
        }
        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]); //add new post before the existing posts
    }

    if (isModalVisible) {
        modalContent = (
            <Modal onClose={onHideModal}>
                <NewPost onCancel={onHideModal} onAddPost={addPostHandler} />
            </Modal>
        )
    }
    if (isFetching) {
        postsContent = (<div style={{ textAlign: 'center' }}>Loading...</div>);
    } else {
        if (posts.length > 0) {
            postsContent = (<ul className={classes.posts}>
                {posts.map((post, index) => <Post author={post.author} body={post.body} key={(post.body + '-' + index)} />)}
            </ul>);
        } else {
            postsContent = (<div style={{ textAlign: 'center' }}>No posts found</div>);
        }
    }

    return (
        <>
            {/* 
            the first way to show something conditionally:
            {
                isModalVisible
                    ? <Modal onClose={hideModalHandler}>
                        <NewPost onCancel={onHideModal} />
                    </Modal>
                    : null
            }

            the second way (show if modaiIsVisible  is truthy):
            { isModalVisible && (
                <Modal onClose={hideModalHandler}>
                    <NewPost onCancel={onHideModal} />
                </Modal>
            )}

            the third way: */}
            {modalContent}

            {/* {isFetching && <div style={{ textAlign: 'center' }}>Loading...</div>}
            {!isFetching && posts.length > 0 &&
                <ul className={classes.posts}>
                    {posts.map((post, index) => <Post author={post.author} body={post.body} key={(post.body + '-' + index)} />)}
                </ul>
            }
            {!isFetching && posts.length === 0 && <div style={{ textAlign: 'center' }}>No posts found</div>} */}
            {postsContent}
        </>
    );
}

export default PostsList;
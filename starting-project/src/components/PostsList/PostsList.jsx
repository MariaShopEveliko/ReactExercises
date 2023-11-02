import { useState } from 'react';

import classes from './PostsList.module.css';
import Post from "../Post/Post";
import NewPost from '../NewPost/NewPost';
import Modal from '../Modal/Modal';

function PostsList({ isModalVisible, onHideModal }) {
    const [posts, setPosts] = useState([]);
    let modalContent;

    if (isModalVisible) {
        modalContent = (
            <Modal onClose={onHideModal}>
                <NewPost onCancel={onHideModal} onAddPost={addPostHandler} />
            </Modal>
        )
    }

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]); //add new post before the existing posts
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
            {posts.length > 0
                ? <ul className={classes.posts}>
                    {posts.map((post, index) => <Post author={post.author} body={post.body} key={(post.body + '-' + index)} />)}
                </ul>
                : <div style={{ textAlign: 'center' }}>No posts found</div>
            }
        </>
    );
}

export default PostsList;
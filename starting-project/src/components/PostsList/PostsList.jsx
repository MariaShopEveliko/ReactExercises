// import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import classes from './PostsList.module.css';
import Post from "../Post/Post";

function PostsList() {
    const posts = useLoaderData();

    let postsContent;

    /* const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    the first arg of useEffect is a function which shouldn't return anything
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

    if (isFetching) {
        postsContent = (<div style={{ textAlign: 'center' }}>Loading...</div>);
    } else { */
    if (posts.length > 0) {
        postsContent = (<ul className={classes.posts}>
            {posts.map((post, index) => <Post author={post.author} body={post.body} id={post.id} key={post.id} />)}
        </ul>);
    } else {
        postsContent = (<div style={{ textAlign: 'center' }}>No posts found</div>);
    }
    // }

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
            {postsContent}
        </>
    );
}

export default PostsList;
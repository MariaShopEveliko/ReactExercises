import classes from './PostsList.module.css';
import Post from "./Post";

function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author="John" body="Check my code" />
            <Post author="Lara" body="Here's some message" />
        </ul>
    );
}

export default PostsList;
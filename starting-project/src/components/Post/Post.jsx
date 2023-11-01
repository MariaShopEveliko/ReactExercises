import classes from './Post.module.css'; // classes/styles/any other name we prefer

const symbols = ['!', '...'];

function Post(props) {
    const chosenSymbol = Math.random() >= 0.5 ? symbols[0] : symbols[1];
 
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author} Doe</p>
            <p className={classes.text}>{props.body}{chosenSymbol}</p>
        </li>
    );
}

export default Post;

import classes from './Post.module.css'; // classes/styles/any other name we prefer
import { Link } from 'react-router-dom';

const symbols = ['!', '...'];

function Post(props) {
    const chosenSymbol = Math.random() >= 0.5 ? symbols[0] : symbols[1];

    return (
        <li className={classes.post}>
            <Link to={props.id}>
                <p className={classes.author}>{props.author} Doe</p>
                <p className={classes.text}>{props.body}{chosenSymbol}</p>
            </Link>
        </li>
    );
}

export default Post;

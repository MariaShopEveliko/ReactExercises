import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({ children }) { // 1) instead of props you can place {children} which refers to what should be wrapped with this component
    const navigate = useNavigate();

    function closeHandler() {
        navigate('/'); //we can use .. instead of / to go up to the parent route
    }

    return <>
        <div className={classes.backdrop} onClick={closeHandler} />
        <dialog open={true} className={classes.modal}>{children}</dialog> {/* 2) and here you'll use directly {children}*/}
    </>
}
export default Modal;
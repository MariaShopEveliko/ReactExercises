import classes from './Modal.module.css';

function Modal({children, onClose}) { // 1) instead of props you can place {children} which refers to what should be wrapped with this component
    return <>
        <div className={classes.backdrop} onClick={onClose}/>
        <dialog open={true} className={classes.modal}>{children}</dialog> {/* 2) and here you'll use directly {children}*/}
    </>
}
export default Modal;
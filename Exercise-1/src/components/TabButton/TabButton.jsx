export default function TabButton({ children, onBtnClick, isSelected }) { //props.children comes by defaul
    return <li><button onClick={onBtnClick} className={isSelected ? 'active' : undefined}>{children}</button></li>
}
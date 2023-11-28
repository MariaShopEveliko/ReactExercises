export default function TabButton({ children, isSelected, ...remainingProps }) { //We removed the onBtnClick and using the ...remainingProps
    return <li>
        <button
            // onClick={onBtnClick} 
            className={isSelected ? 'active' : undefined}
            {...remainingProps}>
            {children}
        </button>
    </li>
}
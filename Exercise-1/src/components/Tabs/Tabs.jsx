export default function Tabs({ children, buttons, ButtonsWrp = "div" }) { //opt 1: buttonsWrp instead of ButtonsWrp
    //const ButtonsWrp = buttonsWrp; -  opt 1: otherwise it will search for built-in component buttonsWrp which doesn't exist
    return (<>
        <ButtonsWrp>
            {buttons}
        </ButtonsWrp>
        {children}
    </>)
}
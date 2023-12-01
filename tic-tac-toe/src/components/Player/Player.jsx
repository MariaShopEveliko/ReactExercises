import { useState } from "react";
import "./Player.css";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        //setIsEditing(!isEditing) - don't use it if the new state rely on an old state as react is scheduling them so it will not be changed at the moment
        setIsEditing((editing) => !editing)

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    return (<li className={isActive && "active"}>
        <span className="player">
            {isEditing
                ? <input type="text" required value={playerName} onChange={handleChange} />
                : <span className="player-name">{playerName}</span>
            }
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>)
}
import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [eneteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      {eneteredPlayerName && <h2>Welcome {eneteredPlayerName} entity</h2>}
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

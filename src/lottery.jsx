import { useState } from "react";
import { GenNum } from "./helper";
import Ticket from "./ticket";
import './lottery.css'

export default function Lottery({ n = 3, wincond }) {
  let [ticket, setticket] = useState(GenNum(n));

  let winner =wincond(ticket);

  let gennewticket = () => {
    setticket(GenNum(n));
  };

  return (
    <>
      {/* <h1 className="winnertext">{winner && "winner"}dd</h1> */}
      <h1 className={winner ? "winnertext" : ""}>{winner && "Winner"}</h1>
      
     
      <h2>lottery-game</h2>
      <Ticket ticket={ticket} />
      <br />
      <br />
      <button onClick={gennewticket}>generate</button>
    </>
  );
}

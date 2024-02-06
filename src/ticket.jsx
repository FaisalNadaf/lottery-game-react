import TicketNum from "./ticketNum"
import './ticket.css'

export default function Ticket({ticket}){

    return (
        <div className="container ">
            {ticket.map((num,idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
     
    );
}
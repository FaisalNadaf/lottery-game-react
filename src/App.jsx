import './App.css'
import { add } from './helper';
import Lottery from './lottery';

function App() {

  let wincond=(ticket)=>{
    // return add(ticket)===15;
    return ticket.every((num)=> num===ticket[0])
    // return ticket[0]===0;
  }

  return (
    <div className="cointainer">
      
    <Lottery n={3}  wincond={wincond}/>
     
    </div>
  );
}

export default App

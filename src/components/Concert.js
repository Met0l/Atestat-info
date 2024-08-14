import React, {useState} from 'react';
// import ReactDom from 'react-dom';
import './Concert.css';

function Concert(props){

  const [tickets, setTickets] = useState(1000);
  const [greetMessage, setGreetMessage] = useState("");

  const buyTicket = () => {
    setTickets(prev => prev - 1);
    if(tickets === 0) alert("SOLD OUT");
    else alert(`Au mai ramas ${tickets} bilete!`);  
  };

  const meetGreetClick = () => {
    if(tickets <= 500) setGreetMessage("Ii vezi destul in poze.");
    else setGreetMessage("Meet & Greet: 1000 lei.");
    alert(`${greetMessage}`);
  };

  return (
    <>
        <div className='concert-container'>
            <div className='concert-details'>
                <h2>{props.date}</h2>
                <h3>{props.venue}</h3>
            </div>
            <div className='concert-location'>  
                <img src={props.flag} alt={props.country}/>
                <h3>{props.location}</h3>
            </div>
            <div className='concert-buttons'>
                <button onClick={buyTicket} className='buy-button'>Bilete</button>
                <button onClick={meetGreetClick} className='meetgreet-button'>Meet & Greet</button>
            </div>
        </div>
    </>  
  )
}

export default Concert;
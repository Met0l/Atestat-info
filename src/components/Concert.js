// import react from 'react';
// import ReactDom from 'react-dom';
import './Concert.css';

function Concert(props){
    
  let handleClick = () => {
    let number = Math.floor(Math.random());
    if(number%2 === 0) alert("SOLD OUT");
    else alert("5 bilete rămase");
  };

  let meetGreetClick = () => {
    let text1 = "Meet & Greet: 1000 lei";
    let text2 = "Ii vezi destul in poze";
    let randNumber = Math.random();
    let selectedText = randNumber < 0.5 ? text1 : text2;
    alert(selectedText);
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
                <button onClick={handleClick} className='buy-button'>Bilete</button>
                <button onClick={meetGreetClick} className='meetgreet-button'>Meet & Greet</button>
            </div>
        </div>
    </>  
  )
}

export default Concert;
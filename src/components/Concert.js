import './Concert.css';

function Concert(props){
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
                <button className='buy-button'>Bilete</button>
                <button className='meetgreet-button'>Meet & Greet</button>
            </div>
        </div>
    </>  
  )
}

export default Concert;
import './Membru.css';

function Membru(props){
    return(
        <>
          <div className='member-container'>
            <img src={props.imageSrc} alt={props.title} className='member-image'/>
            <div className='member-info'>
              <p className='member-header'> {props.title} </p>
              <hr className='member-divider'/>
              <ul className='member-list'>
                  <li className='member-list-item'> Data naștere: {props.DN} </li>
                  <li className='member-list-item'> Oraș Natal: {props.oras} </li>
                  <li className='member-list-item'> Instrument: {props.instrument} </li>
                  <li className='member-list-item'> Trupe din care a făcut parte: {props.bands} </li>
                  <li className='member-list-item'> Albume preferate: {props.albums} </li>
              </ul>
            </div>
          </div>
        </>
    )
}

export default Membru;
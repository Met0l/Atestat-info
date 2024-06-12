import react from 'react';
import ReactDom from 'react-dom';
import './Membru.css';

function Membru(props){
    return(
        <>
          <div className='member-container'>
            <img src={props.imageSrc} alt={props.title}/>
            <p className='member-header'> {props.title} </p>
            <ul className='member-list'>
                <li className='member-list-item'> Data nastere: </li>
                <li className='member-list-item'> Oras Natal: </li>
                <li className='member-list-item'> Instrument: </li>
                <li className='member-list-item'> Trupe din care a facut parte: </li>
            </ul>
          </div>
        </>
    )
}

export default Membru;
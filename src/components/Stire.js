import './Stire.css';

function Stire(props) {
    return(
        <>
            <div className='news-container'>
                <img className='news-picture' src={props.imageSrc} alt={props.title}/>
                <div className='news-details'>
                    <h2 className='news-title'>{props.title}</h2>
                    <p className='news-date'>{props.date}</p>
                    <p className='news-content'>{props.details}</p>
                </div>
            </div>
        </>
    )
}

export default Stire;
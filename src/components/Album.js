import './Album.css';

function Album(props){
    return (
        <>
          <div className='album-container'>
            <img className='album-cover' src={props.imageSrc} alt={props.title}/>
            <p className='abum-title'>{props.title}</p>
            <p className='album-tracklist'> Lista melodii:</p>
            <ol className="album-tracklist"> 
                {props.tracklist.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ol>
          </div>
        </>
    )
}

export default Album;
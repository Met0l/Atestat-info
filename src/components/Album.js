import './Album.css';

function Album(props){
    return (
        <>
          <div className='album-container'>
            <div className='album-cover-container'>
              <img className='album-cover' src={props.imageSrc} alt={props.title}/>
              <img className='album-title-picture' src={props.albumPic} alt={props.title} />
              {/* <p className='album-tracklist'> Lista melodii:</p> */}
            </div>
            <div className='album-details'>
              <p> Lista melodii: </p>
              <ol className='album-tracklist'> 
                  {props.tracklist.map((track, index) => (
                      <li key={index}>{track}</li>
                  ))}
              </ol>
            </div>
          </div>
        </>
    )
}

export default Album;
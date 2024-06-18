import './GalerieFoto.css';

function GalerieFoto(){
    const photos = [
      { id: 1, src: 'Concert1.jpg', alt: 'Poza concert 1' },
      { id: 2, src: 'Concert2.jpg', alt: 'Poza concert 2' },
      { id: 3, src: 'Concert3.jpg', alt: 'Poza concert 3' },
      { id: 4, src: 'Concert4.jpg', alt: 'Poza concert 4' },
      { id: 5, src: 'Concert5.jpg', alt: 'Poza concert 5' },
      { id: 6, src: 'Concert6.jpg', alt: 'Poza concert 6' },
      { id: 7, src: 'Concert7.jpg', alt: 'Poza concert 7' },
      { id: 8, src: 'Concert8.jpg', alt: 'Poza concert 8' },
      { id: 9, src: 'Concert9.jpg', alt: 'Poza concert 9' },
      { id: 10, src: 'Concert10.jpg', alt: 'Poza concert 10' },
      { id: 11, src: 'Concert11.jpg', alt: 'Poza concert 11' },
      { id: 12, src: 'Concert12.jpg', alt: 'Poza concert 12' },
    ];
    return (
      <>
        <div className='gallery-details'>
          <h1 className='gallery-type'>Galerie Foto</h1>
          <hr className='divider'/>
        </div>
        <div className='gallery-container'>
          {photos.map(photo => (
            <div key={photo.id} className='gallery-item'>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
         </div>
      </>
    )
  }
  
  export default GalerieFoto;
// import react from 'react';
// import ReactDom from 'react-dom';
import GalerieFoto from '../components/GalerieFoto';
import '../components/Title.css';

function Media(){
  return(
    <>
      <div className='title'>
        <img src='Media-title.png' alt='Media'/>
      </div>
      <GalerieFoto />
    </>
  )
}

export default Media;
import react from 'react';
import ReactDom from 'react-dom';
import Album from '../components/Album';

function Discografie(){
  const tracklist = [
    'The Threat Is Real',
    'Dystopia',
    'Fatal Illusion',
    'Death From Within',
    'Bullet To The Brain',
    'Post American World',
    'Poisonous Shadows',
    'Conquer or Die!',
    'Lying In State',
    'The Emperor',
    'Foreign Policy'
  ];
  return(
    <>
      <div> discuri </div>
      <Album imageSrc='Dystopia.png' title='Dystopia' tracklist={tracklist}/>
    </>
  )
}

export default Discografie;
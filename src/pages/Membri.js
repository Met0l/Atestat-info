import Membru from '../components/Membru'
import '../components/Title.css';

function Membri(){
  return (
    <>
      <div className='title'>
        <img src='Membri-title.png' alt='MEMBRI'/>
      </div>
      <Membru
        imageSrc='Dave-close-up.jpg' 
        title='Dave Mustaine' 
        DN='13 septembrie 1961' 
        oras='La Mesa, California' 
        instrument='Chitara, Voce' 
        bands='Panic, Metallica, MD.45'
        albums='AC/DC - Let There Be Rock; Led Zeppelin - Presence'
      />
      <Membru
        imageSrc='Teemu-close-up.jpg' 
        title='Teemu Mäntysaari' 
        DN='7 ianuarie 1987' 
        oras='Tampere, Finlanda' 
        instrument='Chitara' 
        bands='Impernanon, Wintersun, Smackbound'
        albums='Dio - Holy Diver'
      />
      <Membru
        imageSrc='James-close-up.jpg' 
        title='James Lomenzo' 
        DN='13 ianuarie 1959' 
        oras='Brooklyn, New York' 
        instrument='Bass' 
        bands='Sir Donicus, Black Label Society, White Lion'
        albums='Jeff Beck Group/ Rough & Ready; The Beatles - Revolver'
      />
      <Membru
        imageSrc='Dirk-close-up.jpg' 
        title='Dirk Verbeuren' 
        DN='8 ianuarie 1975' 
        oras='Antwerp, Belgia' 
        instrument='Tobe' 
        bands='Soilwork'
        albums='Napalm Death - Scum; Fredrik Thordendal - Special Defects; Mr Bungle - Disco Volante; Miles Davis - Milestones'
      />
    </>
  )
}

export default Membri;
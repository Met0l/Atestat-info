// import react from 'react';
// import ReactDom from 'react-dom';
import '../components/Title.css';
import Stire from '../components/Stire';

function Concerte(){
    return (
        <>
          <div className='title'>
            <img src='News-title.png' alt='NEWS' />
          </div>
          <Stire
           imageSrc='Mustaine-SeymourDuncan.jpg'
           title='Gear Dave Mustaine SeymourDuncan' 
           date='28 Mai 2024'
           details='Noua colecție de aparate muzicale semnate Dave Mustaine de la Seymour Duncan este aici! Colecția
           include doze active pentru chitaă electrică, doze pasive single-coil și humbucker. '
          />
          <Stire 
           imageSrc='Band-profile.jpg'
           title='Interviu Dave Mustaine - ROCKING.GR'
           date='22 Mai 2024'
           details='Într-un nou interviu la Rocking.gr, Dave Mustaine povesteste conexiunea sa specială cu Grecia, de ce formația este mai
           puternică ca niciodată împreună cu noul chitarist Teemu Maynsaari și multe altele.'
          />
          <Stire 
           imageSrc='Europe tour program.jpg'
           title='Crush The World Tour - Europa'
           date='7 Mai 2024'
           details='EUROPA! Turul Crush The World se apropie cu pași repezi. Biletele se vând foarte repede, iar unele
           dintre show-uri sunt aproape sold-out! Nu mai aștepta, ia-ți biletul chiar acum pe megadeth.com/tour.'
          />
          <Stire 
           imageSrc='Megadeth-stream.jpg'
           title='Megadeth livestream - Crush The World Tour'
           date='28 Martie 2024'
           details='Suntem entuziasmați să anunțăm că pe datele de 13 și 14 aprilie poți viziona concertele sold-out live din Buenos
           Aires, Argentina pe platforma Veeps. Alătură-te acestui concert inedit, intoarcerea Megadeth în America Latină și
           vezi un set list diferit în fiecare seară. Ia-ți acum biletele sau abonează-te la Veeps astăzi veeps.events/megadeth.'
          />
        </>
    )
}

export default Concerte;
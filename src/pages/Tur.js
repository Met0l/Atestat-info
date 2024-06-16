import '../components/Title.css';
import Concert from '../components/Concert';

function Curiozitati(){
  return(
    <>
      <div className='title'>
        <img src='Concerte-title.png' alt='CONCERTE'/>
      </div>
      <Concert 
        date='5 Iunie, 2024'
        venue='Sweden Rock'
        flag='Suedia.png'
        country='Suedia'
        location='Sölvesborg, Suedia'
      />
      <Concert 
        date='7 Iunie, 2024'
        venue='Mystic Festival'
        flag='Polonia.png'
        country='Polonia'
        location='Gdansk, Polonia'
      />
      <Concert 
        date='9 Iunie, 2024'
        venue='Barba Negra Red Stage'
        flag='Ungaria.png'
        country='Ungaria'
        location='Budapesta, Ungaria'
      />
      <Concert 
        date='10 Iunie, 2024'
        venue='Romexpo'
        flag='Romania.png'
        country='Romania'
        location='București, România'
      />
      <Concert 
        date='12 Iunie, 2024'
        venue='Kucukciftlik Park'
        flag='Turcia.png'
        country='Turcia'
        location='Istanbul, Turcia'
      />
      <Concert 
        date='14 Iunie, 2024'
        venue='Plateia Nerou (Water Plaza) Release Athens 2024'
        flag='Grecia.png'
        country='Grecia'
        location='Atena, Grecia'
      />
      <Concert 
        date='15 Iunie, 2024'
        venue='Arena Sofia'
        flag='Bulgaria.png'
        country='Bulgaria'
        location='Sofia, Bulgaria'
      />
      <Concert 
        date='17 Iunie, 2024'
        venue='Alcatraz'
        flag='Italia.png'
        country='Italia'
        location='Milan, Italia'
      />
      <Concert 
        date='19 Iunie, 2024'
        venue='Zenith La Vendette'
        flag='Franta.png'
        country='Franta'
        location='Paris, Franta'
      />
    </>
  )
}

export default Curiozitati;
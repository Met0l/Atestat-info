import Album from '../components/Album';
import '../components/Title.css';

function Discografie(){
  const tracklistSDD = [
    'The sick, the Dying... and the Dead!',
    'Life in Hell',
    'Night Stalkers',
    'Dogs of Cernobyl',
    'Sacrifice',
    'Junkie',
    'Psychopathy',
    'Killing Time',
    'Soldier On!',
    'Célebutante',
    'Mission to Mars',
    "We'll be back"
  ];

  const tracklistDystopia = [
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

  const tracklistSC = [
    'Kingmaker',
    'Super Collider',
    'Burn!',
    'Built for War',
    'Off the Edge',
    'Dance in the Rain',
    'Beginning of Sorrow',
    'The Blackest Crow',
    'Forget to Remember',
    "Don't Turn Your Back...",
    'Cold Sweat'
  ];

  const tracklistThirteen = [
    'Sudden Death',
    'Public Enemy No. 1',
    'Whose Life (Is It Anyways?)',
    'We the People',
    'Guns, Drugs, & Money',
    'Never Dead',
    'New World Order',
    'Fast Lane',
    'Black Swan',
    'Wrecker',
    'Millennium of the Blind',
    'Deadly Nightshade',
    '13'
  ];

  const tracklistEndgame = [
    'Dialectic Chaos',
    'This Day We Fight!',
    '44 Minutes',
    '1,320',
    'Bite the Hand',
    'Bodies',
    'Endgame',
    'The Hardest Part of Letting Go... Sealed with a Kiss',
    'Head Crusher',
    'How the Story Ends',
    'The Right to Go Insane'
  ];

  const tracklistUnitedAbominations = [
    'Sleepwalker',
    'Washington Is Next!',
    'Never Walk Alone... A Call to Arms',
    'United Abominations',
    'Gears of War',
    'Blessed Are the Dead',
    'Play for Blood',
    'À Tout le Monde (Set Me Free)',
    'Amerikhastan',
    "You're Dead",
    'Burnt Ice'
  ];

const tracklistTSHF = [
  'Blackmail the Universe',
  'Die Dead Enough',
  'Kick the Chair',
  'The Scorpion',
  'Tears in a Vial',
  'I Know Jack',
  'Back in the Day',
  "Something That I'm Not",
  'Truth Be Told',
  'Of Mice and Men',
  'Shadow of Deth (Psalm 23)',
  'My Kingdom'
];

  return(
    <>
      <div className='title'>
        <img src='Discografie-title.png' alt='DISCOGRAFIE'/>
      </div>
      <Album imageSrc='The SDD.jpg' title='The Sick, the Dying... and the Dead!' albumPic='SDD-album-title.png' tracklist={tracklistSDD} />
      <Album imageSrc='Dystopia.png' title='Dystopia' albumPic='Dystopia-album-title.png' tracklist={tracklistDystopia}/>
      <Album imageSrc='SuperCollider.jpg' title='Super Collider' albumPic='SuperCollider-album-title.png' tracklist={tracklistSC} />
      <Album imageSrc='Thirteen.jpg' title='Thirteen' albumPic='Thirteen-album-title.png' tracklist={tracklistThirteen}/>
      <Album imageSrc='Endgame.jpg' title='Endgame' albumPic='Endgame-album-title.png' tracklist={tracklistEndgame}/>
      <Album imageSrc='UnitedAbominations.jpg' title='United Abominations' albumPic='UnitedAbominations-album-title.png' tracklist={tracklistUnitedAbominations}/>
      <Album imageSrc='TheSystemHasFailed.jpg' title='The System Has Failed' albumPic='TheSystemHasFailed-album-title.png' tracklist={tracklistTSHF}/>
      
    </>
  )
}

export default Discografie;
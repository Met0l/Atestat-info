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

const tracklistRisk = [
  'Insomnia',
  'Prince of Darkness',
  'Enter the Arena',
  "Crush 'Em",
  'Breadline',
  'The Doctor Is Calling',
  "I'll Be There",
  'Wanderlust',
  'Ecstasy',
  'Seven',
  'Time: The Beginning',
  'Time: The End'
];

const tracklistCrypticWritings = [
  'Trust',
  'Almost Honest',
  'Use the Man',
  'Mastermind',
  'The Disintegrators',
  "I'll Get Even",
  'Sin',
  'A Secret Place',
  'Have Cool, Will Travel',
  'She-Wolf',
  'Vortex',
  'FFF'
];

const tracklistYouthanasia = [
  'Reckoning Day',
  'Train of Consequences',
  'Addicted to Chaos',
  'A Tout Le Monde',
  'Elysian Fields',
  'The Killing Road',
  'Blood of Heroes',
  'Family Tree',
  'Youthanasia',
  'I Thought I Knew It All',
  'Black Curtains',
  'Victory'
];

const tracklistCountdown = [
  "Skin o' My Teeth",
  'Symphony of Destruction',
  'Architecture',
  'Foreclosure of a Dream',
  'Sweating Bullets',
  'This Was My Life',
  'Countdown to Extinction',
  'High Speed Dirt',
  'Psychotron',
  'Captive Honour',
  'Ashes in Your Mouth'
];

const tracklistRust = [
  'Holy Wars... The Punishment Due',
  'Hangar 18',
  'Take No Prisoners',
  'Five Magics',
  'Poison Was the Cure',
  'Lucretia',
  'Tornado of Souls',
  'Dawn Patrol',
  'Rust in Peace... Polaris'
];

const tracklistPeaceSells = [
  'Wake Up Dead',
  'The Conjuring',
  'Peace Sells',
  'Devils Island',
  'Good Mourning/Black Friday',
  'Bad Omen',
  'I Ain\'t Superstitious',
  'My Last Words'
];

  return(
    <>
      <div className='title'>
        <img src='Discografie-title.png' alt='DISCOGRAFIE'/>
      </div>
      <Album 
       imageSrc='The SDD.jpg'
       title='The Sick, the Dying... and the Dead!' 
       albumPic='SDD-album-title.png' 
       tracklist={tracklistSDD} 
      />
      <Album 
       imageSrc='Dystopia.png' 
       title='Dystopia' 
       albumPic='Dystopia-album-title.png' 
       tracklist={tracklistDystopia}
      />
      <Album 
       imageSrc='SuperCollider.jpg' 
       title='Super Collider' 
       albumPic='SuperCollider-album-title.png' 
       tracklist={tracklistSC} 
      />
      <Album 
       imageSrc='Thirteen.jpg' 
       title='Thirteen' 
       albumPic='Thirteen-album-title.png' 
       tracklist={tracklistThirteen}
      />
      <Album 
       imageSrc='Endgame.jpg' 
       title='Endgame' 
       albumPic='Endgame-album-title.png' 
       tracklist={tracklistEndgame}
      />
      <Album 
       imageSrc='UnitedAbominations.jpg' 
       title='United Abominations' 
       albumPic='UnitedAbominations-album-title.png' 
       tracklist={tracklistUnitedAbominations}
      />
      <Album 
       imageSrc='TheSystemHasFailed.jpg' 
       title='The System Has Failed' 
       albumPic='TheSystemHasFailed-album-title.png' 
       tracklist={tracklistTSHF}
      />
      {/* The world needs a hero */}
      <Album 
       imageSrc='Risk.jpg' 
       title='Risk' 
       albumPic='Risk-album-title.png' 
       tracklist={tracklistRisk} 
      />
      <Album 
       imageSrc='CrypticWritings.jpg' 
       title='Cryptic Writings' 
       albumPic='CrypticWritings-album-title.png' 
       tracklist={tracklistCrypticWritings} 
      />
      <Album 
       imageSrc='Youthanasia.jpg' 
       title='Youthanasia' 
       albumPic='Youthanasia-album-title.png' 
       tracklist={tracklistYouthanasia}
      />
      <Album 
       imageSrc='Countdown.jpg' 
       title='Countdown to Extinction' 
       albumPic='Countdown-album-title.png' 
       tracklist={tracklistCountdown} 
      />
      <Album 
       imageSrc='Rust.jpg' 
       title='Rust in Peace' 
       albumPic='Rust-album-title.png' 
       tracklist={tracklistRust} 
      />
      {/* So far so good... So what! */}
      <Album 
       imageSrc='PeaceSells.jpg' 
       title="Peace Sells... But Who's Buying?" 
       albumPic='PeaceSells-album-title.png' 
       tracklist={tracklistPeaceSells} 
      />
      {/* Killing is my business... and business is good! */}
    </>
  )
}

export default Discografie;
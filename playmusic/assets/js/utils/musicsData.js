const musicsData = [
  {
    musicFile: "Lilith Immaculate.mp3",
    albumFile:"Darkly,_Darkly,_Venus_Aversa_cover.jpg",
    name:"Darkly, Darkly, Venus Aversa",
    performer:"Lilith Immaculate",

  },

  {
    musicFile: "Summer Dying Fast.mp3",
    albumFile:"BitterSuitesToSuccubi-cover.jpg",
    name:"Bitter Suites To Succubi",
    performer:"Summer Dying Fast",

  },

  {
    musicFile: "Cradle Of Filth - Tonight in flames.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Tonight in flames",

  },
    
 
  {
    musicFile: "Cradle Of Filth - Cemetery And Sundown.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Cemetery And Sundown",

  },
 
  {
    musicFile: "Cradle Of Filth -  the foetus of a new day kicking.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"The foetus of a new day kicking",

  },

    {
    musicFile: "Cradle Of Filth - Temptation (Heaven 17 Cover)  (Featuring Dirty Harry).mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Temptation",
  },

  {
    musicFile: "babymetal - karate.mp3",
    albumFile : "Metal Resistance.jpg",
    name: "Metal Resistance",
    performer:"Karate",
  },

  {
    musicFile: "sorrow - deathgaze.mp3",
    albumFile : "sorrow_album_deathgaze.jpg",
    name: "Sorrow",
    performer:"Sorrow",
  },

  {
    musicFile: "fuck love - all that remains.mp3",
    albumFile : "album_all_that_remains_victim_of_the_new_disease.jpg",
    name: "Victim of the new disease",
    performer:"Fuck love",
  },

  {
    musicFile: "Attila - Party With The Devil.mp3",
    albumFile : "Attila - Album (About that life).jpg",
    name: "About That Life",
    performer:"Party With The Devil",
  },

  {
    musicFile: "NX Zero - Razões E Emoções.mp3",
    albumFile:"NX Zero - Razões E Emoções.jpg",
    name: "Razões E Emoções",
    performer: "Razões e Emoções",
  },

  {
    musicFile: "NX Zero - Cedo Ou Tarde.mp3",
    albumFile:"NX Zero - Razões E Emoções.jpg",
    name: "Razões E Emoções",
    performer: "Cedo ou Tarde",
  },

  {
    musicFile:"Within Temptation – Don’t Pray For Me.mp3",
    albumFile:"Dont_pray_to_me.jpg",
    name: "Dont pray for me",
    performer:"Dont pray for me"
  },

  {
    musicFile:"Within Temptation - Supernova (Official Music Video).mp3",
    albumFile:"Resist.jpg",
    name: "Resist",
    performer:"Supernova"
  },

  {
    musicFile:"Winthin Temptation - A Demons Fate.mp3",
    albumFile:"The_unforgiving.jpg",
    name: "The Unforgiving",
    performer:"A Demon Fate"
  },

  //ELEINE - Enemies (OFFICIAL VIDEO)
   {
    musicFile:"ELEINE - Enemies (OFFICIAL VIDEO).mp3",
    albumFile:"Enemies.jpg",
    name: "Enemies",
    performer:"Enemies"
  },
  
   {
    musicFile:"NOCTURNA - Daughters of the Night (Official Video).mp3",
    albumFile:"Daughters_of_the_night.jpg",
    name: "Daughters of The Night",
    performer:"Daughters of The Night"
  },

   {
    musicFile:"Deathstars - Play god.mp3",
    albumFile:"termination_bliss.jpg",
    name: "Termination Bliss",
    performer:"Play God"
  },

   {
    musicFile:"Deathstars - Semi Automatic.mp3",
    albumFile:"sinthetic_generation.jpg",
    name: "Sinthetic Generation",
    performer:"Semi-Automatic"
  },

   {
    musicFile:"Deathstars   Babylon(with lyrics).mp3",
    albumFile:"night_electric_night.jpg",
    name: "Night Eletric Night",
    performer:"Babylon"
  },

    {
    musicFile:"Sybreed - Doomsday Party.mp3",
    albumFile:"the_pulse_of_awakening.jpg",
    name: "The Pulse of Awakening",
    performer:"Doomsday Party"
  },

{
    musicFile:"Nachtmahr - Mörder.mp3",
    albumFile:"alle_lust_will_ewigkeit.jpg",
    name: "All Lust Will Ewigkeit",
    performer:"Mörder"
  },

  //Nachtmahr - Mörder
  //alle_lust_will_ewigkeit.jpg

  {
    musicFile: "U.M.M. - EBM.mp3",
    albumFile:"UMM-EBM.jpg",
    name: "U.M.M",
    performer: "EBM",
  },
  
  {
    musicFile: "U.M.M. - UMM.mp3",
    albumFile:"UMM-EBM.jpg",
    name: "U.M.M",
    performer: "U.M.M",
  },
  
  {
    musicFile: "U.M.M. - Terrorista (feat. AMK).mp3",
    albumFile:"UMM-EBM.jpg",
    name: "U.M.M",
    performer: "Terrorista (feat. AMK)",
  },
  
  {
    musicFile: "U.M.M. - O Mineiro (Der Bergmann).mp3",
    albumFile:"UMM-EBM.jpg",
    name: "U.M.M",
    performer: "O Mineiro (Der Bergmann)",
  },
  
  {
    musicFile: "U.M.M. - Maquinas de Guerra.mp3",
    albumFile:"UMM-EBM.jpg",
    name: "U.M.M",
    performer: "Maquinas de Guerra",
  },
  
  {
    musicFile: "U.M.M. - M.P.M.P.S.S.M.mp3",
    albumFile:"UMM-EBM.jpg",
    name: "U.M.M",
    performer: "M.P.M.P.S.S.M",
  },

];

function createMusicWrapper(music, curr) {
  const queueMusic = document.createElement('div');
  const innerContent = `
    <div class="queue__music-album">
      <img src="./assets/images/${music.albumFile}" alt="">
    </div>
    <div class="queue__music-details">
      <h2 class="music-details__name">${music.name}</h2>
      <p class="music-details__performer">${music.performer}</p>
    </div>
    <div class="queue__music-like">
      <i class='bx bxs-heart' id="like-icon"></i>
    </div>
    <div class="queue__music-play">
      <i class='bx bx-play' data-music="${curr}"></i>
    </div>
  `;

  queueMusic.setAttribute('class', 'queue__music');
  queueMusic.innerHTML = innerContent;

  return queueMusic
}

export { musicsData, createMusicWrapper };

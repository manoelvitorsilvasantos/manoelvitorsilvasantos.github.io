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
    musicFile: "1 - Under Pregnant Skies She Comes Alive Like Miss Leviathan.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Under Pregnant Skies She Comes Alive Like Miss Leviathan",

  },

  {
    musicFile: "2 - Dirge Inferno.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Dirge Inferno",

  },

  {
    musicFile: "3 - Tonight in flames.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Tonight in flames",

  },
    {
    musicFile: "4  - Libertina Grimm.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Libertina Grimm",

  },
    {
    musicFile: "5 - The Byronic Man.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"The Byronic Man",

  },
    {
    musicFile: "6 - I am the thorn.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"I am the thorn",

  },
    {
    musicFile: "7 - Cemetery And Sundown.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Cemetery And Sundown",

  },
    {
    musicFile: "8 - lovesick for mina.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Lovesick for mina",

  },
    {
    musicFile: "9 - the foetus of a new day kicking.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"The foetus of a new day kicking",

  },
    {
    musicFile: "10 - rise of the pentagram (instrumental).mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Rise of the pentagram",

  },
    {
    musicFile: "11 - under huntress moon.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Under huntress moon",

  },
    {
    musicFile: "12 - Temptation (Heaven 17 Cover)  (Featuring Dirty Harry).mp3",
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

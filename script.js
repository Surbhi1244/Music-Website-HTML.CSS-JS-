const arrows = document.querySelectorAll(".arrow");
const songlists = document.querySelectorAll(".song-list");

arrows.forEach((arrow,i)=>{
  const itemNumber = songlists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click",()=>{
    clickCounter++;
    if (itemNumber - (4 + clickCounter) >= 0){
      songlists[i].style.transform = `translateX(${
        songlists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
        songlists[i].style.transform = "translateX(0)"
        clickCounter = 0
    }
  });

  console.log(songlists[i].querySelectorAll('img').length);
  
});

console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3/song1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myprogressBar = document.getElementById('myprogressBar');

let songs = [
  {filepath:'1.mp3/song1.mp3', coverPath:'size_3.jpg'},
]
// Master Play button
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
  }
})

// Update progress bar as song plays
audioElement.addEventListener('timeupdate', () => {
  if (audioElement.duration) {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressBar.value = progress;
  }
});

// Allow user to seek song
myprogressBar.addEventListener('change', () => {
  audioElement.currentTime = (myprogressBar.value * audioElement.duration) / 100;
});





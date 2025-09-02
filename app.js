const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = [ "video/Crimson Moon Arrives, New Crisis Looms  MLBB × NARUTO  Mobile Legends Bang Bang - Mobile Legends Bang Bang (1080p, h264).mp4","video/hero-2.mp4","video/hero-3.mp4","video/hero-4.mp4"];
let index = 0;
nextButton.addEventListener("click", function(){
     index = (index + 1) % movieList.length;
    video.src = movieList[index];
    
})

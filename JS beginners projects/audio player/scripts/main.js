var songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
var poster = ['p1.jpg', 'p2.jpg', 'p3.jpg'];

var songTitle = document.querySelector('#songTitle');
var fillBar = document.querySelector('#fill');

var song = new Audio();
var currentSong = 0;

window.onload = playSong;

function playSong(){
    song.src = songs[currentSong];
    songTitle.textContent = songs[currentSong];

    song.play();
}

function playOrPauseSong(){

    if(song.paused){
        song.play();
    } else {
        song.pause();
    }

    playSong();
}

var play = document.querySelector('#play');
play.addEventListener('click', function(){
    playOrPauseSong();
    console.log('play');
})
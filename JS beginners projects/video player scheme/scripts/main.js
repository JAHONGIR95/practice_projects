var player = document.querySelector('.player');
var video = document.querySelector('.viewer');
var progress = document.querySelector('.progress');
var progressBar = document.querySelector('.progress__filled');
var toggle = document.querySelector('.toggle');
var skipButtons = document.querySelectorAll('[data-skip]');
var ranges = document.querySelectorAll('.player__slider');


window.addEventListener('load', function(){
    video.src = './images/video.mp4';
})

function togglePlay(){
    var method = video.paused ? 'play' : 'pause';
    video[method]();
}

video.addEventListener('click', togglePlay);

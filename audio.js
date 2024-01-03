let audioElement0 = document.createElement('audio');
audioElement0.setAttribute('src', 'beauteous-upbeat-electronic-162757.mp3');
audioElement0.setAttribute('autoplay', 'autoplay');
audioElement0.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
function myFunction() {
    var x = document.getElementById("myAudio").duration;
    document.getElementById("demo").innerHTML = x;
}
var myMusic = document.getElementById("music");
function play() {
    myMusic.play();
}

function pause() {
    myMusic.pause();
}
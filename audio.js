let audioElement0 = document.createElement('audio');

audioElement0.setAttribute('src', 'beauteous-upbeat-electronic-162757.mp3');

audioElement0.setAttribute('autoplay', 'autoplay');

audioElement0.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);


let botonmusica = document.getElementById("musica")
document.addEventListener("click", function(){
    console.log("HOLA")
    audioElement0.play()
    botonmusica.style.display="none"
})


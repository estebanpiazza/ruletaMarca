var audioElement0 = document.createElement('audio');
audioElement0.setAttribute('src', 'beauteous-upbeat-electronic-162757.mp3');
audioElement0.setAttribute('autoplay', 'autoplay');
audioElement.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
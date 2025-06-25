// Obtiene el elemento de audio
var audio = document.getElementById('background-music');

// Muestra el título de la música actual
var musicInfo = document.querySelector('.music-info');

// Configura el título inicial de la música
function setCurrentMusicTitle(title) {
    musicInfo.textContent = title;
}

// Función para guardar el estado del reproductor en localStorage
function savePlayerState() {
    localStorage.setItem('audioSrc', audio.src);
    localStorage.setItem('audioVolume', audio.volume);
    localStorage.setItem('audioMuted', audio.muted);
    localStorage.setItem('audioPaused', audio.paused);
    localStorage.setItem('audioCurrentTime', audio.currentTime);
}

// Función para cargar el estado del reproductor desde localStorage
function loadPlayerState() {
    var savedSrc = localStorage.getItem('audioSrc');
    var savedVolume = localStorage.getItem('audioVolume');
    var savedMuted = localStorage.getItem('audioMuted') === 'true';
    var savedPaused = localStorage.getItem('audioPaused') === 'true';
    var savedCurrentTime = parseFloat(localStorage.getItem('audioCurrentTime')) || 0;

    if (savedSrc) {
        audio.src = savedSrc;
        audio.load();
    }
    if (savedVolume !== null) {
        audio.volume = parseFloat(savedVolume);
        volumeSlider.value = audio.volume * 100;
    }
    audio.muted = savedMuted;
    volumeButton.innerHTML = savedMuted ? '<i class="fa fa-volume-off" aria-hidden="true"></i>' : '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    
    if (savedPaused) {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    } else {
        audio.play();
        playPauseButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    }
    audio.currentTime = savedCurrentTime;
}

// Cargar el estado del reproductor cuando la página se carga
window.addEventListener('load', loadPlayerState);

// Guardar el estado del reproductor cuando la página se descarga
window.addEventListener('beforeunload', savePlayerState);

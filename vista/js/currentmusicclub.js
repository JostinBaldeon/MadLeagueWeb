// Lista de archivos de audio disponibles
var musicList = [
    '../musica/Twenty One Pilots - Next Semester.mp3',
    '../musica/Twenty One Pilots - Overcompensate.mp3', // Añade más archivos de audio aquí
    '../musica/Twenty One Pilots - Backslide.mp3',
    '../musica/Twenty One Pilots - Ride.mp3',
    '../musica/Bruno Mars - Locked out of heaven.mp3'
];

// Variable para mantener el índice de la canción actual
var currentMusicIndex = 0;

// Arreglo para mantener el registro de las canciones reproducidas
var playedMusicIndexes = [];

// Función para cargar y reproducir la canción actual
function playCurrentMusic() {
    var audio = document.getElementById('background-music');
    audio.src = musicList[currentMusicIndex];
    audio.load();
    audio.play();

    // Actualizar el nombre de la canción en la interfaz
    var musicTitle = document.querySelector('.music-info');
    var musicFileName = musicList[currentMusicIndex].split('/').pop().slice(0, -4);
    musicTitle.textContent = musicFileName;

    // Agregar el índice de la canción actual al arreglo de canciones reproducidas
    playedMusicIndexes.push(currentMusicIndex);
}

// Agregar un evento para detectar cuándo la canción ha terminado
audio.addEventListener('ended', function() {
    playRandomMusic(true); // Reproducir la siguiente canción una vez que la actual haya terminado
});

// Función para reproducir la siguiente o anterior canción evitando repeticiones
function playRandomMusic(isNext) {
    if (playedMusicIndexes.length === musicList.length) {
        playedMusicIndexes = [];
    }

    var newIndex;
    do {
        newIndex = Math.floor(Math.random() * musicList.length);
    } while (playedMusicIndexes.includes(newIndex) || newIndex === currentMusicIndex);

    currentMusicIndex = newIndex;
    playCurrentMusic();
}

// Reproducir una canción aleatoria al cargar la página
playCurrentMusic();

// Botón de siguiente
var nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', function() {
    playRandomMusic(true);
});

// Botón de anterior
var prevButton = document.getElementById('prev-button');
prevButton.addEventListener('click', function() {
    playRandomMusic(false);
});

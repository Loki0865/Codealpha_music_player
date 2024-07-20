const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const currentSong = document.getElementById('currentSong');

const songs = [
    'music/music1.mp3',
    'music/music2.mp3',
    'music/music3.mp3'
];

let songIndex = 0;

function loadSong(song) {
    audio.src = song;
    currentSong.textContent = `Current Song: ${song.split('/').pop()}`;
}

function playPauseSong() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function stopSong() {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Play';
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();
    playPauseBtn.textContent = 'Pause';
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();
    playPauseBtn.textContent = 'Pause';
}

playPauseBtn.addEventListener('click', playPauseSong);
stopBtn.addEventListener('click', stopSong);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

loadSong(songs[songIndex]);

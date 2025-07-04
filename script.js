const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const titleEl = document.getElementById("title");
const artistEl = document.getElementById("artist");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");
const playlistEl = document.getElementById("playlist");

let songs = [
  {
    title: "Sample Song 1",
    artist: "Artist One",
    src: "songs/song1.mp3"
  },
  {
    title: "Sample Song 2",
    artist: "Artist Two",
    src: "songs/song2.mp3"
  },
  {
    title: "Sample Song 3",
    artist: "Artist Three",
    src: "songs/song3.mp3"
  }
];

let songIndex = 0;
let isPlaying = false;

function loadSong(song) {
  titleEl.textContent = song.title;
  artistEl.textContent = song.artist;
  audio.src = song.src;
  updatePlaylistUI();
}

function playSong() {
  isPlaying = true;
  audio.play();
  playBtn.textContent = "⏸️";
}

function pauseSong() {
  isPlaying = false;
  audio.pause();
  playBtn.textContent = "▶️";
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

function formatTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

audio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = audio;
  progress.value = (currentTime / duration) * 100 || 0;
  currentTimeEl.textContent = formatTime(currentTime);
  durationEl.textContent = isNaN(duration) ? "0:00" : formatTime(duration);
});

progress.addEventListener("input", () => {
  const seekTime = (progress.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

audio.addEventListener("ended", () => {
  nextSong(); // autoplay
});

function updatePlaylistUI() {
  playlistEl.innerHTML = "";
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} - ${song.artist}`;
    li.classList.toggle("active", index === songIndex);
    li.addEventListener("click", () => {
      songIndex = index;
      loadSong(song);
      playSong();
    });
    playlistEl.appendChild(li);
  });
}

loadSong(songs[songIndex]);

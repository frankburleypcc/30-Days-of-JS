// get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('player__slider');

// Build functions
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
};
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚ ';
    toggle.textContent = icon;
    console.log('update button')
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate() {
    console.log(this.value);
}

//hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(button => button.addEventListener('click', handleRangeUpdate));
import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";
const currentTime = localStorage.getItem(STORAGE_KEY);

if (currentTime) {
    player.setCurrentTime(currentTime);
}

const onPlay = function (data) {
    
    localStorage.setItem(STORAGE_KEY, data.seconds);
};
    
    player.on('timeupdate', throttle(onPlay, 1000))
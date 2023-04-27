import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import lodash from 'lodash.throttle'; 

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
const LOCALSTORAGE_KEY = "videoplayer-current-time";
   

function onCurrentTime (e) {
     //data is an object containing properties specific to that event
    const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
    if (currentTime) {
        player.setCurrentTime(currentTime)
    }
}

player.on('timeupdate', throttle(onCurrentTime, 1000));

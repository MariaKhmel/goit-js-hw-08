import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

 const iframe = document.querySelector('iframe');
const player = new Player(iframe);
 

player.on('timeupdate', throttle(onPlay, 1000));
    


function onPlay(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

  
let data = 0;
  
if (data !== 0) {
  data = localStorage.getItem('videoplayer-current-time');
}

  player.setCurrentTime(data);
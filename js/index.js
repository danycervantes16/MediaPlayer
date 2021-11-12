import MediaPlayer from './mediaPlayer.js';
import AutoPlayer  from './plugins/autoPlay.js'

const video = document.querySelector('video')
const button = document.querySelector('.playPause')
const sound = document.querySelector('.sound')

const player = new MediaPlayer( 
    { 
        el: video, 
        plugins: [new AutoPlayer()], 
    }
);

button.onclick = () => player.togglePlay()
sound.onclick =() => player.toggleSound(sound)


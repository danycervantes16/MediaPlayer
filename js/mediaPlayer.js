function MediaPlayer (object) {
    this.media = object.el;
    this.plugin = object.plugins || [];

    this._initPlugins();
}
MediaPlayer.prototype._initPlugins = function () {
    this.plugin.forEach(plugin => plugin.run(this))
}
MediaPlayer.prototype.play = function () {
    this.media.play();
}
MediaPlayer.prototype.pause = function () {
    this.media.pause();
}
MediaPlayer.prototype.togglePlay = function () {
    (this.media.paused)
    ? this.play()
    : this.pause()
}
MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}
MediaPlayer.prototype.toggleSound = function (section) {
    if(this.media.muted) {
        this.unmute();
        section.style.transform = 'rotateY(180deg)'
    } else {
        this.mute()
        section.style.transform = 'rotateY(360deg)'
    }    
}
export default MediaPlayer;
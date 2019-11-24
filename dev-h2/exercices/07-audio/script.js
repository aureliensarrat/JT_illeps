class Player{
  constructor(_element){

    this.element = _element
    this.videoElement = this.element.querySelector('.js-video')

    this.setPlayPause()
    this.setVolume()
    this.setSeekBar()
  }
  setPlayPause(){
    /*PLAY*/
    const playElement = this.element.querySelector('.js-play')

    playElement.addEventListener('click', () =>{
      this.videoElement.play()
    })

    /*PAUSE*/
    const pauseElement = this.element.querySelector('.js-pause')

    pauseElement.addEventListener('click', () =>{
      this.videoElement.pause()
    })
  }
  setVolume(){
    const volumeUpElement = this.element.querySelector('.js-volume-up')
    const volumeDownElement = this.element.querySelector('.js-volume-down')
    /*UP*/
    volumeUpElement.addEventListener('click', () =>{
      this.videoElement.volume = Math.min(this.videoElement.volume + 0.1, 1)
    })
    /*DOWN*/
    volumeDownElement.addEventListener('click', () =>
    {
      this.videoElement.volume = Math.max(this.videoElement.volume + 0.1, 0 )
    })
  }
  setSeekBar(){
    const seekBarElement = this.element.querySelector('.js-seek-bar')
    const fillElement = seekBarElement.querySelector('.js-seek-bar-fill')

    this.videoElement.addEventListener('timeupdate', () =>
    {
      const ratio = this.videoElement.currentTime / this.videoElement.duration
      fillElement.style.transform = `scaleX(${ratio})`
    })

    seekBarElement.addEventListener('click', (_event) =>
    {
      const bounding = seekBarElement.getBoundingClientRect()
      const ratio = (_event.clientX - bounding.left) / bounding.width
      const time = ratio * this.videoElement.duration

      this.videoElement.currentTime = time
    })
  }
}

const player = new Player(document.querySelector('.js-player'))

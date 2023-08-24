import { attach } from './connector';

class Mirax {
  constructor(videoElement, options) {
    this.video = videoElement;
    this.playPauseBtn = attach(options.playPauseBtn);
    this.volumeSlider = attach(options.volumeSlider);
    this.progressBar = attach(options.progressBar);

   // Pass the initial time values to the select function
   this.currentTimeStamp = attach(options.currentTimeStamp, '00:00:00');
   this.durationTimeStamp = attach(options.durationTimeStamp, '00:00:00');


  
    this.fullscreenBtn = attach(options.fullscreenBtn);
    // Check if the video is in fullscreen and set the button text/icon
    if (document.fullscreenElement === this.video) {
      this.fullscreenBtn.textContent = 'Exit Fullscreen';
    } else {
      this.fullscreenBtn.textContent = 'Fullscreen';
    }



    this.updateCurrentTimeAndDuration();



    this.setupEventListeners();
    this.updateDuration(); // Update duration initially

    this.playPauseBtn = attach(options.playPauseBtn);
    // Check if the video is paused or playing and set the button text
    if (this.video.paused) {
      this.playPauseBtn.textContent = 'Play';
    } else {
      this.playPauseBtn.textContent = 'Pause';
    }
  }

  setupEventListeners() {
    this.playPauseBtn.addEventListener('click', () => {
      if (this.video.paused) {
        this.video.play();
      } else {
        this.video.pause();
      }
      this.updatePlayButton(); // Update play button text
    });

    this.volumeSlider.addEventListener('input', () => {
      this.video.volume = this.volumeSlider.value;
    });

    this.video.addEventListener('timeupdate', () => {
      const progress = (this.video.currentTime / this.video.duration) * 100;
      this.progressBar.value = progress;
      this.updateTimeStamps();
    });

    let isDragging = false;

    this.progressBar.addEventListener('mousedown', (e) => {
      isDragging = true;
      this.updateProgressBar(e);
    });

    this.progressBar.addEventListener('mouseup', () => {
      isDragging = false;
    });

    this.progressBar.addEventListener('mousemove', (e) => {
      if (isDragging) {
        this.updateProgressBar(e);
      }
    });


    this.fullscreenBtn.addEventListener('click', () => {
      if (document.fullscreenElement !== this.video) {
        if (this.video.requestFullscreen) {
          this.video.requestFullscreen();
        } else if (this.video.mozRequestFullScreen) {
          this.video.mozRequestFullScreen();
        } else if (this.video.webkitRequestFullscreen) {
          this.video.webkitRequestFullscreen();
        } else if (this.video.msRequestFullscreen) {
          this.video.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      this.updateFullscreenButton(); // Update fullscreen button text/icon
    });



  }

  updateProgressBar(e) {
    const progressWidth = this.progressBar.offsetWidth;
    const clickedOffsetX = e.offsetX;
    const seekTime = (clickedOffsetX / progressWidth) * this.video.duration;
    this.video.currentTime = seekTime;
    this.updateTimeStamps();
  }

  updateTimeStamps() {
    this.currentTimeStamp.innerHTML = this.formatTime(this.video.currentTime);
    this.durationTimeStamp.innerHTML = this.formatTime(this.video.duration);
  }


  updatePlayButton() {
    // Update play button text based on video state
    if (this.video.paused) {
      this.playPauseBtn.textContent = 'Play';
    } else {
      this.playPauseBtn.textContent = 'Pause';
    }
  }


  updateFullscreenButton() {
    // Update fullscreen button text/icon based on video fullscreen state
    if (document.fullscreenElement === this.video) {
      this.fullscreenBtn.textContent = 'Exit Fullscreen';
    } else {
      this.fullscreenBtn.textContent = 'Fullscreen';
    }
  }

  updateDuration() {
    // Listen for the "loadedmetadata" event to ensure duration is available
    this.video.addEventListener("loadedmetadata", () => {
      this.durationTimeStamp.innerHTML = this.formatTime(this.video.duration);
    });
  }


  updateCurrentTimeAndDuration() {
    // Update current time
    this.currentTimeStamp.innerHTML = this.formatTime(this.video.currentTime);

    // Update duration only when loadedmetadata event has fired
    if (this.video.duration && !isNaN(this.video.duration)) {
      this.durationTimeStamp.innerHTML = this.formatTime(this.video.duration);
    }
  }

  formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    const formattedTime = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
    return formattedTime;
  }



  pad(value) {
    return String(value).padStart(2, '0');
  }
  


  attach(className) {
    return attach(className);
  }


}

export default Mirax;

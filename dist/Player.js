function miraxplayer (video, isPlaying, setIsPlaying) {
    // Check if the control elements have already been created
    const existingControls = document.querySelector('.mirax-theme');
    if (existingControls) {
      return;
    }
    // Create control elements
    const controlDiv = document.createElement('div');
    controlDiv.className = 'mirax-theme';
    // Append the control div to the video element's parent node
    video.parentNode.appendChild(controlDiv);
    const pipButton = document.createElement('mirax');
    pipButton.className = 'pip-button';
    controlDiv.appendChild(pipButton);
    pipButton.addEventListener('click', () => {
      if (document.pictureInPictureElement) {
        // Exit PiP
        document.exitPictureInPicture();
      } else if (video !== document.pictureInPictureElement) {
        // Request PiP
        video.requestPictureInPicture();
      }
    });
    
    video.addEventListener('enterpictureinpicture', handleEnterPiP);
    video.addEventListener('leavepictureinpicture', handleLeavePiP);
    
    function handleEnterPiP(event) {
      // Update UI or perform actions when entering PiP
      console.log('Entered PiP mode');
    }
    
    function handleLeavePiP(event) {
      // Update UI or perform actions when leaving PiP
      console.log('Exited PiP mode');
    }
  
    // Define event listener and function for the play button
    const playButton = document.createElement('mirax');
    playButton.className = 'play-button';
    playButton.addEventListener('click', playerButton);
    controlDiv.appendChild(playButton);
  
    function playerButton() {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
        playButton.classList.add("pause"); // Add the pause class name
      } else {
        video.pause();
        setIsPlaying(false);
        playButton.classList.remove("pause"); // Remove the pause class name
      }
    }
  
    // Add event listener to the video element itself to toggle play state
    video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
        playButton.classList.add("pause");
      } else {
        video.pause();
        setIsPlaying(false);
        playButton.classList.remove("pause");
      }
    });
  
    // Update the styles or UI of the play button based on video state
    function updatePlayButton() {
      if (video.paused) {
        playButton.classList.remove("pause");
      } else {
        playButton.classList.add("pause");
      }
    }
  
    // Listen to video play and pause events
    video.addEventListener('play', updatePlayButton);
    video.addEventListener('pause', updatePlayButton);
  
    const volumeInput = document.createElement('input');
    volumeInput.type = 'range';
    volumeInput.className = 'volume-slider';
    volumeInput.min = '0';
    volumeInput.max = '1';
    volumeInput.step = '0.01';
    volumeInput.defaultValue = '1';
  
    // Add event listener to update volume
    volumeInput.addEventListener('input', function() {
      video.volume = parseFloat(this.value);
    });
  
    controlDiv.appendChild(volumeInput);
  
    const speakerIconContainer = document.createElement('div');
    speakerIconContainer.className = 'speaker-icon';
    
    // Append the speaker icon container to the controlDiv
    controlDiv.appendChild(speakerIconContainer);
  
    const progressBar = document.createElement('progress');
    progressBar.className = 'progress-bar';
    progressBar.min = '0';
    progressBar.max = '100';
    progressBar.value = '0';
    controlDiv.appendChild(progressBar);
  
    video.addEventListener('timeupdate', function() {
      const percentPlayed = (video.currentTime / video.duration) * 100;
      progressBar.value = percentPlayed;
    });
  progressBar.addEventListener('mousedown', function(e) {
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = (offsetX / rect.width) * 100;
  
    video.currentTime = (newProgress / 100) * video.duration;
  
    const onMouseMove = function(e) {
      const offsetX = e.clientX - rect.left;
      const newProgress = (offsetX / rect.width) * 100;
      video.currentTime = (newProgress / 100) * video.duration;
    };
  
    const onMouseUp = function() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  
  // After creating the currentTimeDiv
  const currentTimeDiv = document.createElement('div');
  currentTimeDiv.className = 'current-time';
  controlDiv.appendChild(currentTimeDiv);
  
  // Listen to the timeupdate event to update the current time
  video.addEventListener('timeupdate', updateCurrentTime);
  
  // Function to update the current time in the currentTimeDiv
  function updateCurrentTime() {
    const currentTime = formatTime(video.currentTime);
    currentTimeDiv.textContent = currentTime;
  }
  
  // Function to format time in mm:ss format
  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  // ...
  // Function to format time in HH:MM:SS
  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
  
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  // Function to update current time
  function updateCurrentTime() {
    currentTimeDiv.textContent = formatTime(video.currentTime);
  }
  
      // Set initial content of currentTimeDiv
      currentTimeDiv.textContent = formatTime(0);
  
      // Listen to the timeupdate event to update the current time
      video.addEventListener('timeupdate', updateCurrentTime);
  
    // Function to format time in HH:MM:SS format
  function formatTimex(seconds) {
    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  }
  
  // Function to update time duration
  function updateDuration() {
    if (!isNaN(video.duration)) { // Check if the duration is available (not NaN)
      const formattedDuration = formatTimex(video.duration);
      const timeDurationDiv = document.querySelector('.time-duration');
      if (timeDurationDiv) {
        timeDurationDiv.textContent = formattedDuration;
      }
    }
  }
  const timeDurationDiv = document.createElement('div');
    timeDurationDiv.className = 'time-duration';
    controlDiv.appendChild(timeDurationDiv);
  
    // Listen to the loadedmetadata event to update the duration
    video.addEventListener('loadedmetadata', updateDuration);
  
    const fullscreenButton = document.createElement('mirax');
    fullscreenButton.className = 'fullscreen';
    controlDiv.appendChild(fullscreenButton);
    
    fullscreenButton.addEventListener('click', toggleFullscreen);
    
    function toggleFullscreen() {
      if (video.requestFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          video.requestFullscreen();
        }
      }
    }
  
  }
  
  // Define the content string
  const content_fullscreen = "\\02750"; //  : □
  const content_play = "\\25B6";
  const content_pause =  "\\2590" + "\\A0" + "\\258C";
  const content_speaker = "\\1F508";
  const content_pip = "\\25a1";
  
  
  const miraxStyle = document.createElement('style');
  document.head.appendChild(miraxStyle);
  const styles = `
  
  .mirax-player {
    max-width: 640px;
    width: 100%; /* This ensures the video fills its container while respecting max-width */
    height: auto; /* This maintains the video's aspect ratio */
    min-height:100px;
    max-height:580px;
    background-color: #000000;
    margin: 0 auto;
  }
  
  .mirax-theme {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 20px;
    max-width:640px;
    margin-top:-34px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding-top:5px;
    padding-bottom:5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .play-button {
      position: relative;
      margin-left: 20px;
      transform: translateX(-50%);
      background: none;
      color: #fff;
      border-style: none;
      border-radius: 0;
      cursor: pointer;
      font-size: 13px;
      transition: background-color 0.3s ease, transform 0.3s ease;
  }
    
  .play-button:hover {
      background:none;
  }
    
  .play-button::before {
      content: "${content_play}";
    }
    
  .play-button.pause::before {
      content:  "${content_pause}";
      color:white;
  
  }
    
  
  .volume-slider {
    position: absolute;
      float: left;
      margin-left:49px;
    width:100%;
    max-width:60px;
    height: 10px;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
  
  }
    
  .volume-slider :hover {
     opacity: 0.5;
  }
  
  .speaker-icon {
    position: absolute;
    float: left;
    margin-top:-25px;
    margin-left:32px;
  
  }
  
  .speaker-icon::before {
    position: absolute;
      content: "${content_speaker}";
      font-size: 17px;   
      
     
    
  
  }
    
  .current-time {
    position: absolute;
      float: left;
      margin-left:118px;
      font-family: "Lucida Console", "Arial", monospace;
      margin-top: 2px;
      font-size:12px;
  }
  
  
  .time-duration {
    min-width:40px;
    width: 100%;
    max-width: 70px;
    position: absolute;
    right: 0;
        margin-right:20px;
        font-family: "Lucida Console", "Arial", monospace;
        margin-top: 2px;
        font-size:12px;
  
        
  }
  
  .progress-bar {
    position: absolute;
          width: 100%;
          max-width:325px;
          float: left;
          margin-left: 196px;
          background-color: rgba(205, 228, 235, 0.1);
          border-style: none;
  }
      
  progress::-webkit-progress-value {
       background-color: rgba(240, 255, 254, 0.3);
  } 
  progress::-webkit-progress-bar {
      background-color: rgba(205, 228, 235, 0.1);
  } 
    
  
  progress[value]::-moz-progress-bar {
     background-color: rgba(240, 255, 254, 0.3);
  }
  progress::-ms-fill {
     background-color: rgba(240, 255, 254, 0.3);
  }
  
  
  .pip-button {
    min-width:40px;
    width: 100%;
    max-width: 70px;
    position: absolute;
    right:0;
    height: 20px;
    background: none;
    color: #fff;
    border-style: none;
    border-radius: 0;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
    
  .pip-button::before {
      content: "${content_pip}";
      font-size: 16px;
      float: right;
      margin-right:89px;
    }
    
    .pip-button:hover{
      opacity: 0.5;
      color: #42a3f1;
  }
  
  
  .fullscreen {
    min-width:20px;
    width: 100%;
    max-width: 30px;
    position: absolute;
    right:0;
    height: 20px;
      background:  none;
      color: #fff;
      border-style: none;
      border-radius: 0;
      cursor: pointer;
      transition: color 0.3s ease;
      font-size:15px;
  
  }
    
  .fullscreen:hover {
      color: #bbdeff;
  }
    
  .fullscreen::before {
        content: "${content_fullscreen}";
   
  
  }
    
  `;
  miraxStyle.appendChild(document.createTextNode(styles));
  
  // __________________________________________________________
  
  const  miraxStyleMediaQuery = document.createElement('style');
  document.head.appendChild(miraxStyleMediaQuery);
  
  // Define the media query and its associated CSS rules
  const mediaQuery = `
    @media (max-width: 660px) {
      .progress-bar {
  
        min-width:30px;
        width: 40%;
        background-color: rgba(205, 228, 235, 0.1);
      }
    }
  `;
  
  miraxStyleMediaQuery.appendChild(document.createTextNode(mediaQuery));
  
  // __________________________________________________________
  
  const  miraxStyleMediaQuery2 = document.createElement('style');
  document.head.appendChild(miraxStyleMediaQuery2);
  
  // Define the media query and its associated CSS rules
  const mediaQuery2 = `
    @media (max-width: 540px) {
      .progress-bar {
  
        min-width:30px;
        width: 30%;
        background-color: rgba(205, 228, 235, 0.1);
      }
    }
  `;
  
  miraxStyleMediaQuery2.appendChild(document.createTextNode(mediaQuery2));
  
  // __________________________________________________________
  
  const  miraxStyleMediaQuery3 = document.createElement('style');
  document.head.appendChild(miraxStyleMediaQuery3);
  
  // Define the media query and its associated CSS rules
  const mediaQuery3 = `
    @media (max-width: 540px) {
      .progress-bar {
        margin-left: 160px;
        min-width:30px;
        width: 17%;
        background-color: rgba(205, 228, 235, 0.1);
      }
      
      .volume-slider {
          position: fixed;
          float: left;
          margin-left: 53px;
          margin-top:3px;
        width:90%;
        max-width:40px;
        height: 10px;
      }
  
  
      .current-time {
          margin-left:96px;
      }
  
  
    }
  `;
  
  miraxStyleMediaQuery3.appendChild(document.createTextNode(mediaQuery3));
  /* # Mirax Player core license
  Mirax Player is released under the MIT license:
  
  MIT License
  
  Copyright (c) [2023-present] [Demjhon Silver]
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE. */
  
  
  

  export default miraxplayer;
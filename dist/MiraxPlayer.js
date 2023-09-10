import './miraxplayerUI.js';

function miraxplayer(videoClip, { playerTheme, progressTheme }) {
        // Check if the control elements have already been created
        const existingControls = videoClip.parentNode.querySelector('.mirax-theme');
        if (existingControls) {
          return;
        }
      
      // Create control elements
      const controlDiv = document.createElement("div");
      controlDiv.className = "mirax-theme";
      controlDiv.style.backgroundColor = playerTheme;
    
      
      
        // Append the control div to the videoClip element's parent node
        videoClip.parentNode.appendChild(controlDiv);
      
    
        // Error Handler if video file not exist or not found
        videoClip.addEventListener("error", function (e) {
          // Check the networkState
          if (this.networkState > 2) {
            // Create a text element
            const videoText = document.createElement("p");
            // Set the text content
            videoText.textContent = "Video not found";
            // Set the class name
            videoText.className = "video-text";
            // Append the text element to the video element's parent node
            this.parentNode.appendChild(videoText);
          }
        });
  
  
        //**********************************************//
        //
        //           PIP ( Picture in Picture )
        //
        //*********************************************//
      
        const pipButton = document.createElement('mirax');
        pipButton.className = 'pip-button';
        controlDiv.appendChild(pipButton);
        pipButton.addEventListener('click', () => {
          if (document.pictureInPictureElement) {
            // Exit PiP
            document.exitPictureInPicture();
          } else if (videoClip !== document.pictureInPictureElement) {
            // Request PiP
            videoClip.requestPictureInPicture();
          }
        });
        
        videoClip.addEventListener('enterpictureinpicture', handleEnterPiP);
        videoClip.addEventListener('leavepictureinpicture', handleLeavePiP);
        
        function handleEnterPiP(event) {
          // Update UI or perform actions when entering PiP
          console.log('Entered PiP mode');
        }
        
        function handleLeavePiP(event) {
          // Update UI or perform actions when leaving PiP
          console.log('Exited PiP mode');
        }
      
      
        document.addEventListener('keydown', (event) => {
          // Check if Alt+P is pressed
          if (event.altKey && event.code === 'KeyP') {
            // Toggle PiP mode
            if (document.pictureInPictureElement) {
              document.exitPictureInPicture();
            } else {
              videoClip.requestPictureInPicture();
            }
          }
        });
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      //______________________________________________________________________
      
        //**********************************************//
        //
        //                Play Button 
        //
        //*********************************************//
      
        // Define event listener and function for the play button
        const playButton = document.createElement('mirax');
        playButton.className = 'play-button';
        playButton.addEventListener('click', playerButton);
        controlDiv.appendChild(playButton);
      
        function playerButton() {
          if (videoClip.paused) {
            videoClip.play();
            playButton.classList.add("pause"); // Add the pause class name
          } else {
            videoClip.pause();
            playButton.classList.remove("pause"); // Remove the pause class name
          }
        }
      
        // Add event listener to the video element itself to toggle play state
        videoClip.addEventListener('click', () => {
          if (videoClip.paused) {
            videoClip.play();
            playButton.classList.add("pause");
          } else {
            videoClip.pause();
            playButton.classList.remove("pause");
          }
        });
      
        // Update the styles or UI of the play button based on video state
        function updatePlayButton() {
          if (videoClip.paused) {
            playButton.classList.remove("pause");
          } else {
            playButton.classList.add("pause");
          }
        }
      
        // Listen to video play and pause events
        videoClip.addEventListener('play', updatePlayButton);
        videoClip.addEventListener('pause', updatePlayButton);
      
      
      
          
      //______________________________________________________________________
      
        //**********************************************//
        //
        //          Play video - press space bar
        //
        //*********************************************//
      
      
      // Add keydown event listener to the document
      document.addEventListener('keydown', function(event) {
        // Check if the pressed key is the space bar
        if (event.code === 'Space') {
          // Prevent the default action of scrolling
          event.preventDefault();
          // Call the same function that you use for the play button
          playerButton();
        }
      });
      
      
      //______________________________________________________________________
      
      
        //**********************************************//
        //
        //         Volume  slider
        //
        //*********************************************//
        let prevVolume = 1;
        
        
      // Create the volume input element
      const volumeInput = document.createElement('input');
      volumeInput.type = 'range';
      volumeInput.className = 'volume-slider';
      volumeInput.min = '0';
      volumeInput.max = '1';
      volumeInput.step = '0.01';
      volumeInput.defaultValue = '1';
      
      // Add event listener to update volume
      volumeInput.addEventListener('input', function() {
        videoClip.volume = parseFloat(this.value);
      });
      
      
      
      
        controlDiv.appendChild(volumeInput);
      
      
      //______________________________________________________________________
      
      
  //**********************************************//
  //
  // Speaker UI icon
  //
  //*********************************************//
  
  // Create a div element for the speaker icon container
  const speakerIconContainer = document.createElement('div');
  speakerIconContainer.className = 'speaker-icon';
  speakerIconContainer.style.width = '20px';
  speakerIconContainer.style.height = '50px';
  speakerIconContainer.style.position = 'absolute';
  speakerIconContainer.style.marginRight = '34px'; 
  speakerIconContainer.style.right = '0'; // Set the right property to auto
  speakerIconContainer.style.cursor = 'pointer';
  
  // Get the volume slider element
  const volumeSlider = document.querySelector('.volume-slider');
  volumeSlider.style.opacity = '0'; // Initially hide the volume slider
  
  // Add a mouseenter event listener to show the volume slider when hovering over the speaker icon
  speakerIconContainer.addEventListener('mouseenter', () => {
    volumeSlider.style.opacity = '1';
  });
  
  // Add a mouseleave event listener to hide the volume slider when not hovering over the speaker icon
  speakerIconContainer.addEventListener('mouseleave', () => {
    volumeSlider.style.opacity = '0';
  });
  
  // Add a mouseenter event listener to show the volume slider when hovering over the volume slider
  volumeSlider.addEventListener('mouseenter', () => {
    volumeSlider.style.opacity = '1';
  });
  
  // Add a mouseleave event listener to hide the volume slider when not hovering over the volume slider
  volumeSlider.addEventListener('mouseleave', () => {
    volumeSlider.style.opacity = '0';
  });
  
  
  
  
      
      // Create a div element for the speaker box
      const speakerBox = document.createElement('div');
      speakerBox.className = 'box';
      speakerBox.style.width = '6px';
      speakerBox.style.height = '6px';
      speakerBox.style.backgroundColor = 'white';
      speakerBox.style.borderRadius = '2px';
      speakerBox.style.position = 'absolute';
      speakerBox.style.left = '2px';
      speakerBox.style.top = '22px';
      
      
      // Create a div element for the speaker cone
      const speakerCone = document.createElement('div');
      speakerCone.className = 'cone';
      speakerCone.style.width = '0';
      speakerCone.style.height = '0';
      speakerCone.style.borderTop = '6px solid transparent';
      speakerCone.style.borderBottom = '6px solid transparent';
      speakerCone.style.borderRight = '13px solid white'; // Swap the border-left and border-right properties
      speakerCone.style.borderLeft = '0'; // Swap the border-left and border-right properties
      speakerCone.style.position = 'absolute';
      speakerCone.style.top = '19px';
      
      
      
      // Append the speaker box and cone to the speaker icon container
      speakerIconContainer.appendChild(speakerBox);
      speakerIconContainer.appendChild(speakerCone);
      
      // Append the speaker icon container to the controlDiv
      controlDiv.appendChild(speakerIconContainer);
      
      
      //______________________________________________________________________
      
      
  // Create a span element for the ")" symbol
  const xSymbol = document.createElement('span');
  xSymbol.className = 'x-symbol';
  xSymbol.textContent = ')';
  xSymbol.style.fontSize = '12px';
  xSymbol.style.color = 'white'; // Set the color to white once
  xSymbol.style.position = 'absolute';
  xSymbol.style.left = '17px';
  xSymbol.style.top = '18px';
  xSymbol.style.fontFamily = 'Arial, Corbel';
  
  // Append the ")" symbol to the speaker icon container
  speakerIconContainer.appendChild(xSymbol);
  // Add event listener to update volume and x symbol
  volumeInput.addEventListener('input', function() {
    // Use the video element directly
    videoClip.volume = parseFloat(this.value);
    // Update the x symbol based on the volume value
    if (videoClip.volume === 0) {
      xSymbol.textContent = 'x';
    } else {
      xSymbol.textContent = ')';
    }
  });
  
      
      
      // Add event listener to the speaker icon container
      speakerIconContainer.addEventListener("click", function() {
        // Toggle the mute state of the video element
        videoClip.muted = !videoClip.muted;
        // Change the color of the speaker icon based on the mute state
        if (videoClip.muted) {
          // Set the color to gray
          speakerBox.style.backgroundColor = "red";
          speakerCone.style.borderRightColor = "red";
          xSymbol.textContent = 'x';
          // Store the current volume value before setting it to zero
          prevVolume = volumeInput.value;
          volumeInput.value = '0';
          videoClip.volume = 0;
        } else {
          // Set the color to white
          speakerBox.style.backgroundColor = "white";
          speakerCone.style.borderRightColor = "white";
  
          xSymbol.textContent = ')';
          // Restore the previous volume value after unmuting
          volumeInput.value = prevVolume;
          videoClip.volume = parseFloat(prevVolume);
        }
      });
      
      
      
        //**********************************************//
        //
        //         Progress bar  slider
        //
        //*********************************************//
      
        const progressBar = document.createElement('progress');
        progressBar.className = 'progress-bar';
        progressBar.min = '0';
        progressBar.max = '100';
        progressBar.value = '0';
        controlDiv.appendChild(progressBar);
        videoClip.addEventListener('timeupdate', function() {
          const percentPlayed = (videoClip.currentTime / videoClip.duration) * 100;
          progressBar.value = percentPlayed;
        });
      progressBar.addEventListener('mousedown', function(e) {
        const rect = progressBar.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newProgress = (offsetX / rect.width) * 100;
        videoClip.currentTime = (newProgress / 100) * videoClip.duration;
        const onMouseMove = function(e) {
          const offsetX = e.clientX - rect.left;
          const newProgress = (offsetX / rect.width) * 100;
          videoClip.currentTime = (newProgress / 100) * videoClip.duration;
        };
        const onMouseUp = function() {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });
  
  
        //**********************************************//
        //
        //         Timestamp Math System
        //
        //*********************************************//
  
  // After creating the currentTimeDiv
  const currentTimeDiv = document.createElement('div');
  currentTimeDiv.className = 'current-time';
  controlDiv.appendChild(currentTimeDiv);
  
  // After creating the timeDurationDiv
  const timeDurationDiv = document.createElement('div');
  timeDurationDiv.className = 'time-duration';
  controlDiv.appendChild(timeDurationDiv);
  
  // Set the initial margin-left to 40px for timeDurationDiv
  timeDurationDiv.style.marginLeft = '100px';
  currentTimeDiv.style.marginLeft = '70px';
  currentTimeDiv.style.textAlign = 'right';
  // Listen to the timeupdate event to update the current time and adjust margin
  videoClip.addEventListener('timeupdate', updateCurrentTime);
  
  // Function to update the current time in the currentTimeDiv
  // Function to update the current time in the currentTimeDiv
  // Function to update the current time in the currentTimeDiv
  // Function to update the current time in the currentTimeDiv
  // Function to update the current time in the currentTimeDiv
  function updateCurrentTime() {
    const currentTime = videoClip.currentTime;
    const formattedTime = formatTime(currentTime);
    currentTimeDiv.textContent = formattedTime;
  
    timeDurationDiv.style.opacity = '1';
  
    // Check if the current time is greater than or equal to 1 minute (01:00)
    if (currentTime >= 60) {
      // Reduce marginLeft by 20px
      currentTimeDiv.style.marginLeft = '70px';
  
    }
    // Check if the current time is greater than or equal to 10 minutes (10:00)
    if (currentTime >= 600) {
      // Reduce marginLeft by 20px
      currentTimeDiv.style.marginLeft = '62px';
  
    }
    // Check if the current time is greater than or equal to 1 hour (01:00:00)
    if (currentTime >= 3600) {
      // Reduce marginLeft by 20px
      currentTimeDiv.style.marginLeft = '45px';
  
    }
  
    // Check if the current time is greater than or equal to 1 hour (01:00:00)
    if (currentTime >= 36000) {
      // Reduce marginLeft by 20px
      currentTimeDiv.style.marginLeft = '40px';
  
    }
  
  }
  
  
  
  // Function to update time duration
  function updateDuration(videoClip, timeDurationDiv) {
    if (!isNaN(videoClip.duration)) {
      const formattedDuration = formatTime(videoClip.duration);
      timeDurationDiv.textContent = formattedDuration;
    }
  }
  
  // Function to format time in HH:MM:SS with conditional zero-padding
  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
  
    let formattedTime = '';
  
    if (hours >= 1) {
      formattedTime += `${hours.toString()}:`;
  
    }
  
    formattedTime += `${minutes.toString().padStart(1, '0')}:${secs.toString().padStart(2, '0')}`;
  
    return formattedTime;
  }
  
  // Set initial content of currentTimeDiv
  currentTimeDiv.textContent = formatTime(0);
  
  // Listen to the timeupdate event to update the current time and adjust margin
  videoClip.addEventListener('timeupdate', updateCurrentTime);
  
  // Listen to the loadedmetadata event to update time duration and adjust margin
  videoClip.addEventListener('loadedmetadata', () => updateDuration(videoClip, timeDurationDiv));
  
      
      
        //**********************************************//
        //
        //         Progress bar value color
        //
        //*********************************************//
      
        var color_progress_bar = progressTheme;
        const inputProgressBar = document.createElement('style');
        document.head.appendChild(inputProgressBar);
        const  inputProgressBarStyle = `
        progress::-webkit-progress-bar {
          background-color: rgba(205, 228, 235, 0.1);
        } 
        progress::-webkit-progress-value {
            background-color: ${color_progress_bar};
        } 
        progress[value]::-moz-progress-bar {
          background-color: ${color_progress_bar};
        }
        progress::-ms-fill {
          background-color: ${color_progress_bar};
        }
        `;
        inputProgressBar.appendChild(document.createTextNode(inputProgressBarStyle));
      
      
      
      
      
        //**********************************************//
        //
        //            Double Click Fullscreen
        //
        //*********************************************//
      
      
        
      
        videoClip.addEventListener('dblclick', toggleFullscreen);
      
      
      
      //______________________________________________________________________
      
      
        //**********************************************//
        //
        //             Fullscreen Button
        //
        //*********************************************//
      
      
      
        const fullscreenButton = document.createElement('mirax');
        fullscreenButton.className = 'fullscreen';
        controlDiv.appendChild(fullscreenButton);
        
        fullscreenButton.addEventListener('click', toggleFullscreen);
        
        function toggleFullscreen() {
          if (videoClip.requestFullscreen) {
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              videoClip.requestFullscreen();
            }
          }
        }
      
      }
  
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
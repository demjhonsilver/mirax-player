import './miraxplayerUI.js';

function miraxPlayer(playerDiv) {
      // Check if the control elements have already been created
      const existingControls = playerDiv.parentNode.querySelector('.mirax-theme');
      if (existingControls) {
        return;
      }
    
    // Create control elements
    const controlDiv = document.createElement("div");

    
    
      // Append the control div to the playerDiv element's parent node
      playerDiv.parentNode.appendChild(controlDiv);
    
  
      // Error Handler if video file not exist or not found
      playerDiv.addEventListener("error", function () {
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
      //           Player THEME
      //
      //*********************************************//


    
      const playerTheme = playerDiv.getAttribute("data-player-theme");
      controlDiv.className = "mirax-theme";
      controlDiv.style.backgroundColor = playerTheme;





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
        } else if (playerDiv !== document.pictureInPictureElement) {
          // Request PiP
          playerDiv.requestPictureInPicture();
        }
      });
      
      playerDiv.addEventListener('enterpictureinpicture', handleEnterPiP);
      playerDiv.addEventListener('leavepictureinpicture', handleLeavePiP);
      
      function handleEnterPiP() {
        // Update UI or perform actions when entering PiP
        console.log('Enter PiP mode');
      }
      
      function handleLeavePiP() {
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
            playerDiv.requestPictureInPicture();
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
        if (playerDiv.paused) {
          playerDiv.play();
          playButton.classList.add("pause"); // Add the pause class name
        } else {
          playerDiv.pause();
          playButton.classList.remove("pause"); // Remove the pause class name
        }
      }
    
      // Add event listener to the video element itself to toggle play state
      playerDiv.addEventListener('click', () => {
        if (playerDiv.paused) {
          playerDiv.play();
          playButton.classList.add("pause");
        } else {
          playerDiv.pause();
          playButton.classList.remove("pause");
        }
      });
    
      // Update the styles or UI of the play button based on video state
      function updatePlayButton() {
        if (playerDiv.paused) {
          playButton.classList.remove("pause");
        } else {
          playButton.classList.add("pause");
        }
      }
    
      // Listen to video play and pause events
      playerDiv.addEventListener('play', updatePlayButton);
      playerDiv.addEventListener('pause', updatePlayButton);
    
    



    
      //**********************************************//
      //
      //                Backward Button >>
      //
      //*********************************************//


      const backwardButton = document.createElement('mirax');
      backwardButton.className = 'backward-button';
      backwardButton.addEventListener('click', backwarderButton);
      controlDiv.appendChild(backwardButton);
    


      function backwarderButton() {
        // Backward the video by 10 seconds
          playerDiv.currentTime = Math.max(playerDiv.currentTime - 10, 0);
      }







    

    
      //**********************************************//
      //
      //                Forward Button >>
      //
      //*********************************************//


      const forwardButton = document.createElement('mirax');
      forwardButton.className = 'forward-button';
      forwardButton.addEventListener('click', forwarderButton);
      controlDiv.appendChild(forwardButton);
    


      function forwarderButton() {
          // Forward the video by 10 seconds
          playerDiv.currentTime = Math.min(playerDiv.currentTime + 10, playerDiv.duration);
      }
    



        
    //______________________________________________________________________
    
      //**********************************************//
      //
      //          Play video - press space bar
      //
      //*********************************************//
    
    
    // Add keydown event listener to the document
    document.addEventListener('keydown', function(event) {

      // Check if the pressed key ctrl and space bar

      if (event.code === 'Space') {
        // Prevent the default action of scrolling
        event.preventDefault();
        if (event.ctrlKey) { // CTRL + SPACEBAR
          // Call the same function that you use for the play button
          playerButton();
        }
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
      playerDiv.volume = parseFloat(this.value);
    });
    
    
    
    
      controlDiv.appendChild(volumeInput);
    
    
    //______________________________________________________________________
    

      //**********************************************//
      //
      //         Speed Options
      //
      //*********************************************//


      



//**********************************************//
//
// Speed Options
//
//*********************************************//

// Create a div element for the gear icon container
const gearIconContainer = document.createElement('div');
gearIconContainer.className = 'gear-icon';
gearIconContainer.style.width = '12px';
gearIconContainer.style.height = '12px';
gearIconContainer.style.position = 'absolute';
gearIconContainer.style.right = '39px';
gearIconContainer.style.top = '9px';
gearIconContainer.style.cursor = 'pointer';

// Create a div element for the gear outer circle
const outerCircle = document.createElement('div');
outerCircle.className = 'outer-circle';
outerCircle.style.width = '12px';
outerCircle.style.height = '12px';
outerCircle.style.border = '1px solid white'; // Adjust border properties as needed
outerCircle.style.borderRadius = '50%';
outerCircle.style.position = 'absolute';
outerCircle.style.boxSizing = 'border-box';

const horizontalLine = document.createElement('div');
horizontalLine.className = 'horizontal-line';
horizontalLine.style.width = '6px'; // Adjust the width as needed
horizontalLine.style.height = '2px';
horizontalLine.style.backgroundColor = 'white'; // Change color as needed
horizontalLine.style.position = 'absolute';
horizontalLine.style.top = '55%';
horizontalLine.style.left = '35%';
horizontalLine.style.transform = 'translate(-50%, -50%)';

// Create a div element for the vertical line of the "L" flip shape
const verticalLine = document.createElement('div');
verticalLine.className = 'vertical-line';
verticalLine.style.width = '2px';
verticalLine.style.height = '6px'; // Adjust the height as needed
verticalLine.style.backgroundColor = 'white'; // Change color as needed
verticalLine.style.position = 'absolute';
verticalLine.style.top = '30%';
verticalLine.style.left = '50%';
verticalLine.style.transform = 'translate(-50%, -50%)';

// Append the horizontal and vertical lines to the gear icon container
gearIconContainer.appendChild(horizontalLine);
gearIconContainer.appendChild(verticalLine);

// Append the outer circle to the gear icon container
gearIconContainer.appendChild(outerCircle);

// Add the gear icon container to your player's UI
controlDiv.appendChild(gearIconContainer);

// Create a div element for the tooltip
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.style.width = '80px';
tooltip.style.height = '150px';
tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
tooltip.style.color = 'white';
tooltip.style.position = 'absolute';
tooltip.style.display = 'none';
tooltip.style.zIndex = '100';
tooltip.style.fontFamily = 'Arial, Corbel';
tooltip.style.fontWeight = 'normal';
tooltip.style.fontSize = '11px';
tooltip.style.lineHeight = '19px';

// Adjust the top property to make the tooltip appear above the gear icon
tooltip.style.right = '40px';
tooltip.style.bottom = '30px'; // Change this value to position the tooltip above the gear icon
tooltip.style.padding = '5px';

// Add speed options to the tooltip

// Add speed options to the tooltip
const speedOptions = [
  { value: 0.25, label: '0.25x' },
  { value: 0.5, label: '0.5x' },
  { value: 0.75, label: '0.75x' },
  { value: 1, label: 'Normal' },
  { value: 1.25, label: '1.25x' },
  { value: 1.5, label: '1.5x' },
  { value: 1.75, label: '1.75x' },
  { value: 2, label: '2x' }
];

let selectedOption = null; // Track the selected option

speedOptions.forEach((option) => {
  const optionElement = document.createElement('div');
  optionElement.className = 'speed-option'; // Add this class for event handling
  optionElement.textContent = option.label;
  optionElement.style.cursor = 'pointer';
  tooltip.appendChild(optionElement);

  optionElement.addEventListener('click', () => {
    // Extract the numeric value from the label
    const speedValue = parseFloat(option.value);
    changePlaybackSpeed(speedValue);

    // Update the selected option and indicator
    selectedOption = optionElement;
    updateSelectedIndicator();
  });

  // Add mouseover and mouseout event listeners to change background color
  optionElement.addEventListener('mouseover', () => {
    optionElement.style.backgroundColor = 'rgba(45, 85, 255, 0.8)'; // Blue background on hover
  });

  optionElement.addEventListener('mouseout', () => {
    // Remove background color on mouseout, but skip the selected option
    if (optionElement !== selectedOption) {
      optionElement.style.backgroundColor = '';
    }
  });
});

// Function to update the visual indicator for the selected option
function updateSelectedIndicator() {
  speedOptionElements.forEach((optionElement) => {
    if (optionElement === selectedOption) {
      optionElement.style.backgroundColor =  'rgba(45, 85, 255, 1)'; // Set the selected option's background color
      optionElement.style.color = 'white'; // Set text color for better visibility
      optionElement.style.borderRadius = '2px';
    } else {
      optionElement.style.backgroundColor = ''; // Remove background color from other options
      optionElement.style.color = ''; // Remove text color from other options
    }
  });
}






// Add the tooltip to the player's UI
controlDiv.appendChild(tooltip);

// Remove the initial 'display: none' style from the tooltip
tooltip.style.display = 'none';

// Add event listeners for mouseover and mouseout to show/hide the tooltip
gearIconContainer.addEventListener('mouseover', () => showTooltip());
tooltip.addEventListener('mouseover', () => showTooltip());
tooltip.addEventListener('mouseout', () => hideTooltip());

// Function to show the tooltip
function showTooltip() {
  tooltip.style.display = 'block';
}

// Function to hide the tooltip
function hideTooltip() {
  tooltip.style.display = 'none';
}

// Add event listeners to the speed options in the tooltip
const speedOptionElements = tooltip.querySelectorAll('.speed-option');
speedOptionElements.forEach((optionElement) => {
  optionElement.addEventListener('click', () => {
    const speedValue = parseFloat(optionElement.textContent);
    changePlaybackSpeed(speedValue);
  });
});

// Function to change the playback speed of the video
function changePlaybackSpeed(speed) {
  playerDiv.playbackRate = speed;
  hideTooltip();
}









    
    
//**********************************************//
//
// Speaker UI icon
//
//*********************************************//

let xSymbolInterval;


// Function to toggle the visibility of the xSymbol
function toggleXSymbol() {
  xSymbol.style.visibility = xSymbol.style.visibility === 'visible' ? 'hidden' : 'visible';
}

// Add event listener to update xSymbol visibility when video play/pause
playerDiv.addEventListener('play', () => {
  // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
  xSymbolInterval = setInterval(toggleXSymbol, 700);
  xSymbol.style.color = 'white';
});

playerDiv.addEventListener('pause', () => {
  // Stop toggling and make the symbol visible
  clearInterval(xSymbolInterval);
  xSymbol.style.visibility = 'visible';
  xSymbol.style.color = 'white';
});




// Create a div element for the speaker icon container
const speakerIconContainer = document.createElement('div');
speakerIconContainer.className = 'speaker-icon';
speakerIconContainer.style.width = '20px';
speakerIconContainer.style.height = '50px';
speakerIconContainer.style.position = 'absolute';
speakerIconContainer.style.marginRight = '87px'; 
speakerIconContainer.style.right = '0'; // Set the right property to auto
speakerIconContainer.style.cursor = 'pointer';

// Get the volume slider element
const volumeSlider = document.querySelector('.volume-slider');
volumeSlider.style.opacity = '0'; // Initially hide the volume slider

// Add a mouseenter event listener to show the volume slider when hovering over the speaker icon
speakerIconContainer.addEventListener('mouseenter', () => {
  volumeSlider.style.opacity = '1';
});


// Gear Icon pure javascript:







// Add a wheel event listener to the volume slider
volumeSlider.addEventListener('wheel', function (event) {
  // Prevent the default scrolling behavior
  event.preventDefault();

  // Calculate the new volume value based on the mouse wheel delta
  const delta = event.deltaY > 0 ? -0.1 : 0.1; // Adjust the step as needed
  let newVolume = parseFloat(this.value) + delta;

  // Ensure the volume stays within the range [0, 1]
  newVolume = Math.max(0, Math.min(1, newVolume));

  // Update the volume slider value and video volume
  this.value = newVolume;
  playerDiv.volume = newVolume;

  // Update the x symbol based on the volume value
  if (newVolume === 0) {
    xSymbol.textContent = 'x';
    volumeInput.style.backgroundColor = '#FF004F';
    clearInterval(xSymbolInterval);
    xSymbol.style.visibility = 'visible';
    xSymbol.style.color = 'white';
    speakerBox.style.backgroundColor = '#FF004F';


    playerDiv.addEventListener('play', () => {
      // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
      xSymbolInterval = setInterval(toggleXSymbol, 700);
      xSymbol.style.color = 'white';
    });
    
    playerDiv.addEventListener('pause', () => {
      // Stop toggling and make the symbol visible
      clearInterval(xSymbolInterval);
      xSymbol.style.visibility = 'visible';
      xSymbol.style.color = 'white';
    });
    




  } 
  else if (newVolume <= 0.5 ) {
    
    xSymbol.textContent = '|';
    xSymbol.style.fontSize = '8px';
    xSymbol.style.top = '20px';
    volumeInput.style.backgroundColor = 'orange';

    xSymbol.style.color = 'orange';
    speakerBox.style.backgroundColor = 'orange';


    playerDiv.addEventListener('play', () => {
      // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
      xSymbolInterval = setInterval(toggleXSymbol, 700);
      xSymbol.style.color = 'orange';
    });
    
    playerDiv.addEventListener('pause', () => {
      // Stop toggling and make the symbol visible
      clearInterval(xSymbolInterval);
      xSymbol.style.visibility = 'visible';
      xSymbol.style.color = 'orange';
    });
    







  }
  

  
  else {
    xSymbol.textContent = ')';
    volumeInput.style.backgroundColor = 'white';
    speakerBox.style.backgroundColor = 'white';

    playerDiv.addEventListener('play', () => {
      // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
      xSymbolInterval = setInterval(toggleXSymbol, 700);
      xSymbol.style.color = 'white';
    });
    
    playerDiv.addEventListener('pause', () => {
      // Stop toggling and make the symbol visible
      clearInterval(xSymbolInterval);
      xSymbol.style.visibility = 'visible';
      xSymbol.style.color = 'white';
    });
    


    

  }
});











// Add a mouseleave event listener to hide the volume slider when not hovering over the speaker icon
speakerIconContainer.addEventListener('mouseleave', () => {
  volumeSlider.style.opacity = '0';
});




// Add a wheel event listener to the speaker icon container
speakerIconContainer.addEventListener('wheel', function (event) {
  // Prevent the default scrolling behavior
  event.preventDefault();

  // Calculate the new volume value based on the mouse wheel delta
  const delta = event.deltaY > 0 ? -0.1 : 0.1; // Adjust the step as needed
  let newVolume = parseFloat(volumeSlider.value) + delta;

  // Ensure the volume stays within the range [0, 1]
  newVolume = Math.max(0, Math.min(1, newVolume));

  // Update the volume slider value and video volume
  volumeSlider.value = newVolume;
  playerDiv.volume = newVolume;

  // Update the x symbol based on the volume value
  if (newVolume === 0) {
    volumeInput.style.backgroundColor = '#FF004F';
    xSymbol.textContent = 'x';
    xSymbol.style.fontSize= '11px';
    xSymbol.style.top = '18px';
    xSymbol.style.color = 'white';
    speakerBox.style.backgroundColor = '#FF004F';
  
    playerDiv.addEventListener('play', () => {
      // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
      xSymbolInterval = setInterval(toggleXSymbol, 700);
      xSymbol.style.color = 'white';
    });
    
    playerDiv.addEventListener('pause', () => {
      // Stop toggling and make the symbol visible
      clearInterval(xSymbolInterval);
      xSymbol.style.visibility = 'visible';
      xSymbol.style.color = 'white';
    });
    



  } 
  
  else if (newVolume <= 0.5 ) {
    
    xSymbol.textContent = '|';
    xSymbol.style.fontSize = '8px';
    xSymbol.style.top = '20px';
    volumeInput.style.backgroundColor = 'orange';
    speakerBox.style.backgroundColor = 'orange';

    playerDiv.addEventListener('play', () => {
      // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
      xSymbolInterval = setInterval(toggleXSymbol, 700);
      xSymbol.style.color = 'orange';
    });
    
    playerDiv.addEventListener('pause', () => {
      // Stop toggling and make the symbol visible
      clearInterval(xSymbolInterval);
      xSymbol.style.visibility = 'visible';
      xSymbol.style.color = 'orange';
    });
    



  }
  
  
  
  else {
    xSymbol.textContent = ')';
    xSymbol.style.fontSize = '8px';
    xSymbol.style.top = '20px';
    volumeInput.style.backgroundColor = 'white';
    speakerBox.style.backgroundColor = 'white';


    playerDiv.addEventListener('play', () => {
      // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
      xSymbolInterval = setInterval(toggleXSymbol, 700);
      xSymbol.style.color = 'white';
    });
    
    playerDiv.addEventListener('pause', () => {
      // Stop toggling and make the symbol visible
      clearInterval(xSymbolInterval);
      xSymbol.style.visibility = 'visible';
      xSymbol.style.color = 'white';
    });
    

  
  }
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
    speakerBox.style.position = 'absolute';
    speakerBox.style.left = '3px';
    speakerBox.style.top = '22px';
    
    
    const speakerTrapezoid = document.createElement('div');
    speakerTrapezoid.className = 'speakerTrapezoid';
    speakerTrapezoid.style.borderBottom = '6px solid white';
    speakerTrapezoid.style.borderLeft = '3px solid transparent';
    speakerTrapezoid.style.borderRight = '3px solid transparent';
    speakerTrapezoid.style.height = '10';
    speakerTrapezoid.style.width = '6px';
    speakerTrapezoid.style.transform = 'rotate(-90deg)';
    speakerTrapezoid.style.marginLeft ='2px';
    speakerTrapezoid.style.marginTop ='22px';
    
    document.body.appendChild(speakerTrapezoid);
    
    
    
    
    // Append the speaker box and cone to the speaker icon container
    speakerIconContainer.appendChild(speakerBox);
    speakerIconContainer.appendChild(speakerTrapezoid);
    
    // Append the speaker icon container to the controlDiv
    controlDiv.appendChild(speakerIconContainer);
    



    //______________________________________________________________________
    
    
// Create a span element for the ")" symbol
const xSymbol = document.createElement('span');
xSymbol.className = 'x-symbol';
xSymbol.textContent = ')';
xSymbol.style.fontSize = '8px';
xSymbol.style.color = 'white'; // Set the color to white once
xSymbol.style.position = 'absolute';
xSymbol.style.left = '15px';
xSymbol.style.top = '20px';
xSymbol.style.fontFamily = 'Arial, Corbel';

// Append the ")" symbol to the speaker icon container
speakerIconContainer.appendChild(xSymbol);
// Add event listener to update volume and x symbol


volumeInput.addEventListener('input', function () {
  // Use the video element directly
  playerDiv.volume = parseFloat(this.value);

  // Update the x symbol based on the volume value
  if (playerDiv.volume === 0) {
    xSymbol.textContent = 'x';
    xSymbol.style.fontSize = '11px';
    xSymbol.style.top = '18px';
    // Change the background color of the volume slider to #FF004F
    volumeInput.style.backgroundColor = '#FF004F';

    playerDiv.addEventListener('play', () => {
      // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
      xSymbolInterval = setInterval(toggleXSymbol, 700);
      xSymbol.style.color = 'white';
    });
    
    playerDiv.addEventListener('pause', () => {
      // Stop toggling and make the symbol visible
      clearInterval(xSymbolInterval);
      xSymbol.style.visibility = 'visible';
      xSymbol.style.color = 'white';
    });
    




  } 
  
  else if (playerDiv.volume <= 0.5 ) {
    
    xSymbol.textContent = '|';
    xSymbol.style.fontSize = '8px';
    xSymbol.style.top = '20px';
    volumeInput.style.backgroundColor = 'orange';
    speakerBox.style.backgroundColor = 'orange';


    playerDiv.addEventListener('play', () => {
      // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
      xSymbolInterval = setInterval(toggleXSymbol, 700);
      xSymbol.style.color = 'orange';
    });
    
    playerDiv.addEventListener('pause', () => {
      // Stop toggling and make the symbol visible
      clearInterval(xSymbolInterval);
      xSymbol.style.visibility = 'visible';
      xSymbol.style.color = 'orange';
    });
    





  }
  

  
  else {
    xSymbol.textContent = ')';
    xSymbol.style.fontSize = '8px';
    xSymbol.style.top = '20px';
    volumeInput.style.backgroundColor = 'white';


    playerDiv.addEventListener('play', () => {
      // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
      xSymbolInterval = setInterval(toggleXSymbol, 700);
      xSymbol.style.color = 'white';
    });
    
    playerDiv.addEventListener('pause', () => {
      // Stop toggling and make the symbol visible
      clearInterval(xSymbolInterval);
      xSymbol.style.visibility = 'visible';
      xSymbol.style.color = 'white';
    });
    



  }
});





    
    
    // Add event listener to the speaker icon container
    speakerIconContainer.addEventListener("click", function() {
      // Toggle the mute state of the video element
      playerDiv.muted = !playerDiv.muted;
      // Change the color of the speaker icon based on the mute state
      if (playerDiv.muted) {
        // Set the color to gray
        speakerBox.style.backgroundColor = "#FF004F";
    
        
    // Change the background color of the volume slider to #FF004F
        xSymbol.textContent = 'x';
        xSymbol.style.fontSize = '11px';
        xSymbol.style.top = '18px';
        volumeInput.style.backgroundColor = '#FF004F';
        prevVolume = volumeInput.value;
        volumeInput.value = '0';
        playerDiv.volume = 0;
          speakerBox.style.backgroundColor = '#FF004F';


          playerDiv.addEventListener('play', () => {
            // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
            xSymbolInterval = setInterval(toggleXSymbol, 700);
            xSymbol.style.color = 'white';
          });
          
          playerDiv.addEventListener('pause', () => {
            // Stop toggling and make the symbol visible
            clearInterval(xSymbolInterval);
            xSymbol.style.visibility = 'visible';
            xSymbol.style.color = 'white';
          });
          



        
      } else {
        // Set the color to white
        speakerBox.style.backgroundColor = "white";
        volumeInput.style.backgroundColor = 'white';

        xSymbol.textContent = ')';
        xSymbol.style.fontSize = '8px';
        xSymbol.style.top = '20px';
        // Restore the previous volume value after unmuting
        volumeInput.value = prevVolume;
        playerDiv.volume = parseFloat(prevVolume); 
        speakerBox.style.backgroundColor = 'white';


        playerDiv.addEventListener('play', () => {
          // Start toggling the symbol every 500 milliseconds (adjust timing as needed)
          xSymbolInterval = setInterval(toggleXSymbol, 700);
          xSymbol.style.color = 'white';
        });
        
        playerDiv.addEventListener('pause', () => {
          // Stop toggling and make the symbol visible
          clearInterval(xSymbolInterval);
          xSymbol.style.visibility = 'visible';
          xSymbol.style.color = 'white';
        });
        

      }
    });
    
    //**********************************************//
//
//         Progress bar slider with scroll bar, mouse wheel, and keyboard shortcuts
//
//*********************************************//

const progressBar = document.createElement('progress');
progressBar.className = 'progress-bar';
progressBar.min = '0';
progressBar.max = '100';
progressBar.value = '0';
controlDiv.appendChild(progressBar);



playerDiv.addEventListener('timeupdate', function() {
  const percentPlayed = (playerDiv.currentTime / playerDiv.duration) * 100;
  progressBar.value = percentPlayed;
});

progressBar.addEventListener('mousedown', function(e) {
  handleProgressBarClick(e);
});

// Function to handle mouse wheel events
progressBar.addEventListener('wheel', function(e) {
  e.preventDefault(); // Prevent the default scroll behavior
  const delta = e.deltaY; // Get the scrolling direction (positive or negative)

  

  // Adjust the video's current time based on the scrolling direction
  const step = 1; // You can adjust the step size as needed
  const currentTime = playerDiv.currentTime + (delta > 0 ? step : -step);

  // Ensure the currentTime stays within the video's duration limits
  playerDiv.currentTime = Math.min(Math.max(currentTime, 0), playerDiv.duration);

  // Update the progress bar value
  progressBar.value = (playerDiv.currentTime / playerDiv.duration) * 100;
});

function handleProgressBarClick(e) {
  const rect = progressBar.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const newProgress = (offsetX / rect.width) * 100;
  playerDiv.currentTime = (newProgress / 100) * playerDiv.duration;

  const onMouseMove = function(e) {
    const offsetX = e.clientX - rect.left;
    const newProgress = (offsetX / rect.width) * 100;
    playerDiv.currentTime = (newProgress / 100) * playerDiv.duration;
  };

  const onMouseUp = function() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

// Function to handle keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    // Rewind the video by 10 seconds
    playerDiv.currentTime = Math.max(playerDiv.currentTime - 10, 0);
    e.preventDefault(); // Prevent the default behavior of scrolling the page
  } else if (e.key === 'ArrowRight') {
    // Forward the video by 10 seconds
    playerDiv.currentTime = Math.min(playerDiv.currentTime + 10, playerDiv.duration);
    e.preventDefault(); // Prevent the default behavior of scrolling the page
  }
});




//**********************************************//
//
//           Dynamic Player Width
//
//*********************************************//






const dynamicWidth = playerDiv.getAttribute("data-player-width");
const dynamicFloat = playerDiv.getAttribute("data-player-float");







const inputPlayerClip = document.createElement('style');
document.head.appendChild(inputPlayerClip);
const  inputPlayerClipStyle = `

.mirax-player {
  min-width:350px;
  max-width: ${dynamicWidth + 400}px;
  width: 100%; /* This ensures the video fills its container while respecting max-width */
  height: auto; /* This maintains the video's aspect ratio */
  min-height:100px;
  max-height:450px;
  background-color: #000000;
  margin: 0 auto;

}

:root {
  --progress-width: 100%;
}



/* Hide the control div by default */
.mirax-theme {
  display: none;
  transition: transform 0.3s;

}

/* Show the control div when hovering over the video or itself */
.mirax-player:hover + .mirax-theme,
.mirax-theme:hover {
  display: block;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 20px;
  min-width:350px;
  max-width: 95%;
  margin-top:-44px;
  bottom: 0;
  left: 10;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding-top:5px;
  padding-bottom:5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}




.progress-bar {
  display: block;
  margin: 0 auto;
  position: relative;
  margin-top:-36px;
  width: 100%;
  width: var(--progress-width);
  max-width: var(--progress-max-width);
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-style: none;
}


.player-selector {
  margin: 0 auto;
  width: 100%;
  max-width: ${dynamicWidth}px;
  position: relative;
  float: ${dynamicFloat};
  text-align: center;
}

`;
inputPlayerClip.appendChild(document.createTextNode(inputPlayerClipStyle));










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
timeDurationDiv.style.marginLeft = '40px';
currentTimeDiv.style.marginLeft = '10px';
currentTimeDiv.style.textAlign = 'right';
// Listen to the timeupdate event to update the current time and adjust margin
playerDiv.addEventListener('timeupdate', updateCurrentTime);

// Function to update the current time in the currentTimeDiv

function updateCurrentTime() {
  const currentTime = playerDiv.currentTime;
  const formattedTime = formatTime(currentTime);
  currentTimeDiv.textContent = formattedTime;

  timeDurationDiv.style.opacity = '1';

  // Check if the current time is greater than or equal to 1 minute (01:00)
  if (currentTime >= 60) {
    // #FF004Fuce marginLeft by 40px
    timeDurationDiv.style.marginLeft = '40px';

  }
  // Check if the current time is greater than or equal to 10 minutes (10:00)
  if (currentTime >= 600) {
    // #FF004Fuce marginLeft by 45px
    timeDurationDiv.style.marginLeft = '45px';

  }
  // Check if the current time is greater than or equal to 1 hour (01:00:00)
  if (currentTime >= 3600) {
    // #FF004Fuce marginLeft by 63px
    timeDurationDiv.style.marginLeft = '63px';

  }

  // Check if the current time is greater than or equal to 10 hour (10:00:00)
  if (currentTime >= 36000) {
    // #FF004Fuce marginLeft by 69px
    timeDurationDiv.style.marginLeft = '69px';

  }

}



// Function to update time duration
function updateDuration(playerDiv, timeDurationDiv) {
  if (!isNaN(playerDiv.duration)) {
    const formattedDuration = formatTime(playerDiv.duration);
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
playerDiv.addEventListener('timeupdate', updateCurrentTime);

// Listen to the loadedmetadata event to update time duration and adjust margin
playerDiv.addEventListener('loadedmetadata', () => updateDuration(playerDiv, timeDurationDiv));

    
    
      //**********************************************//
      //
      //         Progress bar value color
      //
      //*********************************************//

          
      const playerBar = playerDiv.getAttribute("data-player-bar");
     
    
      var color_progress_bar = playerBar;
      const inputProgressBar = document.createElement('style');
      document.head.appendChild(inputProgressBar);
      const  inputProgressBarStyle = `
      progress::-webkit-progress-bar {
        background-color: rgba(255, 255, 255, 0.1);
        position:relative;

      } 
      progress::-webkit-progress-value {
          background-color: ${color_progress_bar};
          position:relative;

      } 
      progress[value]::-moz-progress-bar {
        background-color: ${color_progress_bar};
        position:relative;

      }
      progress::-ms-fill {
        background-color: ${color_progress_bar};
        position:relative;




        progress::-webkit-slider-thumb {
          width: 11px;
          height: 11px;
          margin-top:-1px;
          border-radius: 100%;
          background-color: red;
          border-style: none;
          cursor: pointer;
          -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
          -moz-appearance: none; /* Remove default appearance for Firefox */
          appearance: none; /* Remove default appearance for Edge */
        }
        
        progress::-moz-range-thumb {
          width: 11px;
          height: 11px;
          margin-top:-1px;
          border-radius: 100%;
          background-color: red;
          border-style: none;
          cursor: pointer;
          -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
          -moz-appearance: none; /* Remove default appearance for Firefox */
          appearance: none; /* Remove default appearance for Edge */
        }
        





      }
      `;
      inputProgressBar.appendChild(document.createTextNode(inputProgressBarStyle));
    
    
    
    
    
      //**********************************************//
      //
      //            Double Click Fullscreen
      //
      //*********************************************//
    
    
      
    
      playerDiv.addEventListener('dblclick', toggleFullscreen);
    
    
    
    //______________________________________________________________________
    
    
      //**********************************************//
      //
      //             Fullscreen Button
      //
      //*********************************************//
    
    
// Existing code for the fullscreen button
const fullscreenButton = document.createElement('mirax');
fullscreenButton.className = 'fullscreen';
controlDiv.appendChild(fullscreenButton);

fullscreenButton.addEventListener('click', toggleFullscreen);





function toggleFullscreen() {
  const video = document.querySelector('.mirax-player');
  if (document.documentElement.requestFullscreen) {
    if (!document.fullscreenElement) {
      // Store the original video dimensions
      video.dataset.originalWidth = video.style.width;
      video.dataset.originalHeight = video.style.height;

      // Calculate video's aspect ratio
      const videoAspectRatio = video.videoWidth / video.videoHeight;

      if (videoAspectRatio > 1) {
        // Video is landscape (16:9 or wider)
        video.style.width = '100%';
        video.style.height = '100%';
      } else {
        // Video is portrait (9:16 or taller)
        // Calculate the height to maintain 9:16 aspect ratio with increased height
        const screenHeight = window.innerHeight;
        const targetHeight = screenHeight + 127; // Increase the height by 127 pixels (adjust as needed)

        video.style.width = 'auto';
        video.style.height = `${targetHeight}px`;
      }

      document.documentElement.requestFullscreen();
    } else {
      // Restore the original video dimensions
      video.style.width = video.dataset.originalWidth;
      video.style.height = video.dataset.originalHeight;

      document.exitFullscreen();
    }
  }
}





// Function to hide the control div with a fade-out effect
function showControlDiv(miraxTheme) {
  miraxTheme.style.opacity = 1;
  miraxTheme.style.transition = 'opacity 0.3s';
}

// Function to check for inactivity and hide the control div
function checkForInactivity(miraxPlayer, miraxTheme) {
  let hideTimer;

  function onMouseMove() {
    // Mouse is moving, show the control div with a fade-in effect
    miraxTheme.style.opacity = 0;
    miraxTheme.style.transition = 'opacity 0.3s';

    // Reset the hide timer
    clearTimeout(hideTimer);

    // Set a new timer to hide the control div after 7 seconds of inactivity
    hideTimer = setTimeout(() => {
      showControlDiv(miraxTheme);
    }, 7000); // 7000 milliseconds (7 seconds)
  }

  function onMouseOver(event) {
    // Mouse is over the player, check for inactivity
    clearTimeout(hideTimer);

    // Get the height of the viewport
    const viewportHeight = window.innerHeight;

    // Define the new threshold (e.g., 200 pixels) from the bottom to trigger the control div
    const threshold = 200;

    // Calculate the distance from the mouse pointer to the bottom of the viewport
    const distanceToBottom = viewportHeight - event.clientY;
    const distanceToTop = viewportHeight - event.clientX;


    // Check if the mouse pointer is within the threshold from the bottom
    if (distanceToBottom <= threshold) {
      // Mouse is near the wide bottom part, keep showing the control div
      miraxTheme.style.opacity = 0;
      miraxTheme.style.transition = 'opacity 0.3s';
    }


    if (distanceToTop <= threshold) {
      // Mouse is near the wide bottom part, keep showing the control div
      miraxTheme.style.opacity = 0;
      miraxTheme.style.transition = 'opacity 0.3s';
    }




  }

  function onMouseOut() {
    // Mouse is out of the player, check for inactivity and hide the control div
    showControlDiv(miraxTheme);
  }

  miraxPlayer.addEventListener('mousemove', onMouseMove);
  miraxPlayer.addEventListener('mouseover', onMouseOver);
  miraxPlayer.addEventListener('mouseout', onMouseOut);

  // Initially hide the control div
  miraxTheme.style.opacity = 0;
  miraxTheme.style.transition = 'opacity 0.3s';
}






// Add an event listener to handle fullscreen change events
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement === document.documentElement) {
    // Mirax player container is in fullscreen mode, update your UI here
    // You can modify the player's CSS or perform other actions

    document.body.style.overflow = 'hidden'; // Prevent scrolling
    document.documentElement.style.backgroundColor = '#000'; // Set background color
    document.body.style.margin = '0'; // Remove body margin
    document.body.style.padding = '0'; // Remove body padding
    document.documentElement.style.margin = '0'; // Remove html margin
    document.documentElement.style.padding = '0'; // Remove html padding


    const miraxPlayer = document.querySelector('.mirax-player');
    const miraxTheme = document.querySelector('.mirax-theme');

    // Call the function to set up event listeners for inactivity handling
    checkForInactivity(miraxPlayer, miraxTheme);



    
    const inputPlayerClip = document.createElement('style');
    document.head.appendChild(inputPlayerClip);
    const inputPlayerClipStyle = `
      .mirax-player {
        min-width: 350px;
        max-width: 100%;
        width: 100%;
        height: auto;
        min-height: 100px;
        max-height: 100%;
        background-color: #000000;
        margin: 0 auto;
      }
    
      /* Initially hide the control div */
      .mirax-theme {

      }
 
      /* Show the control div when hovering over the video or itself */
      .mirax-player:hover + .mirax-theme,
      .mirax-theme:hover {
        opacity: 1;
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 20px;
        min-width: 350px;
        max-width: 95%;
        margin-top: -44px;
        bottom: 0;
        left: 10;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: opacity 10s;
      }
    

    
      .player-selector {
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        position: relative;
        text-align: center;
      }
    `;
    
    inputPlayerClip.appendChild(document.createTextNode(inputPlayerClipStyle));
    




    


    playerDiv.classList.add('fullscreen-mode');
  } else {
    // Mirax player container exited fullscreen mode, update your UI here
    // Restore the player's original UI


    playerDiv.classList.remove('fullscreen-mode');


    const inputPlayerClip = document.createElement('style');
    document.head.appendChild(inputPlayerClip);
    const  inputPlayerClipStyle = `
    
    .mirax-player {
      min-width:350px;
      max-width: ${dynamicWidth + 400}px;
      width: 100%; /* This ensures the video fills its container while respecting max-width */
      height: auto; /* This maintains the video's aspect ratio */
      min-height:100px;
      max-height:450px;
      background-color: #000000;
      margin: 0 auto;
    
    }
    
    
    /* Hide the control div by default */
    .mirax-theme {
      diplay: block;
      opacity: 1;
    }
    
    /* Show the control div when hovering over the video or itself */
    .mirax-player:hover + .mirax-theme,
    .mirax-theme:hover {
      display: block;
      margin: 0 auto;
      position: relative;
      width: 95%;
      height: 20px;
      min-width:350px;
      max-width: 95%;
      margin-top:-44px;
      bottom: 0;
      left: 10;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      padding-top:5px;
      padding-bottom:5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    
    

    
    
    
    .player-selector {
      margin: 0 auto;
      width: 100%;
      max-width: ${dynamicWidth}px;
      position: relative;
      float: ${dynamicFloat};
      text-align: center;
    }
    
    `;
    inputPlayerClip.appendChild(document.createTextNode(inputPlayerClipStyle));










    
    document.body.style.overflow = ''; // Restore scrolling
    document.documentElement.style.backgroundColor = ''; // Restore background color
    document.body.style.margin = ''; // Restore body margin
    document.body.style.padding = ''; // Restore body padding
    document.documentElement.style.margin = ''; // Restore html margin
    document.documentElement.style.padding = ''; // Restore html padding









  }
});

    

      




















      
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

  export default miraxPlayer;
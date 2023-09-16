




// Define the content string
const content_fullscreen = "\\02752"; 
const content_backward = "\\27A4";
const content_play = "\\25B6";
const content_forward = "\\27A4";
const content_pause =  "|" + " " + "|";
const content_speaker = "\\1F508";
const content_pip = "\\0393";


const miraxStyle = document.createElement('style');
document.head.appendChild(miraxStyle);
const styles = `




.play-button {
  position: absolute;
  left: 50%;
  background: none;
  margin-left:3px;
  color: #fff;
  border-style: none;
  border-radius: 0;
  cursor: pointer;
  font-size: 13px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}



.play-button::before {
  content: "${content_play}";
  font-size:13px;
  appearance: none;
}

.play-button.pause::before {
  content:  "${content_pause}";
  color:white;
  font-size:12px;
  appearance: none;
}






  
.play-button:hover {
  background:none;
}




.backward-button {
  position: absolute;
  left:45%;
  background: none;
  color: #fff;
  border-style: none;
  border-radius: 0;
  cursor: pointer;
  font-size: 13px;
  transform: scaleX(-1);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.backward-button::before {
  content: "${content_backward}";
  font-size: 13px;
  appearance: none;
}




.forward-button {
  position: absolute;
  left: 55%;
  background: none;
  color: #fff;
  border-style: none;
  border-radius: 0;
  cursor: pointer;
  font-size: 13px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.forward-button::before {
  content: "${content_forward}";
  font-size:13px;
  appearance: none;
}




/* Style the volume slider */
.volume-slider {
  transform: rotate(-90deg); /* Rotate the thumb to match the vertical slider */
  position: absolute;
  right: 0;
  margin-right:73px;
  top:0;
  margin-top:-34px;
  width:50px;
  height: 3px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}




.volume-slider::-moz-range-track {
  width:30px;
  height: 10px;
  border: none;
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}
/* For Firefox (Mozilla) */
.volume-slider::-moz-range-thumb {
  width: 11px;
  height: 11px;
  margin-top:-1px;
  border-radius: 100%;
  background-color: rgba(45, 85, 255, 1);
  border-style: none;
  cursor: pointer;
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari, and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
  margin-left: -3px; /* Move the thumb to the left by 3 pixels */
}


.volume-slider::-moz-range-progress {
  width:30px;
  height: 10px;
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}




/* Styling for the track */
.volume-slider::-webkit-slider-runnable-track {
  width:30px;
  height: 10px;
  background-color: rgba(205, 228, 235, 0.1);
  border: none;
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}

/* Styling for the thumb */
.volume-slider::-webkit-slider-thumb {
  width: 11px;
  height: 11px;
  margin-top:-1px;
  border-radius: 100%;
  background-color: rgba(45, 85, 255, 1);
  border-style: none;
  cursor: pointer;
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}

/* Styling for the progress */
.volume-slider::-webkit-progress-value {
  width:30px;
  height: 10px;
  background-color: rgba(45, 85, 255, 0.9);
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}














  
.volume-slider :hover {
   opacity: 0.5;
}

/* .speaker-icon {
  position: absolute;
  float: right;
  margin-top:-25px;
  margin-left:32px;

}

.speaker-icon::before {
  position: absolute;
    content: "${content_speaker}";
    font-size: 17px;   
    
   
  

} */
  
.current-time {
  position: absolute;

    float: left;
    font-family: "Lucida Console", "Arial", monospace;
    margin-top: 2px;
    font-size:12px;
}

.time-duration::before {
  
    content: "/";
    margin: 0 5px; /* Adjust the spacing as needed */
}

.time-duration {
  position: absolute;
    float: left;
    font-family: "Lucida Console", "Arial", monospace;
    margin-top: 2px;
    font-size:12px;
      
}

progress::-webkit-progress-value {
  background-color: rgba(45, 85, 255, 0.9);
 
} 
progress[value]::-moz-progress-bar {
  background-color: rgba(45, 85, 255, 0.9);

}
progress::-ms-fill {
  background-color:  rgba(45, 85, 255, 0.9);

}







.pip-button {
  min-width:20px;
  width: 100%;
  max-width: 30px;
  position: absolute;
  right:0;
  margin-top: 4px;
  margin-right:54px;
  height: 20px;
    background:  none;
    color: #fff;
    border-style: none;
    border-radius: 0;
    cursor: pointer;
    transition: color 0.3s ease;
    font-size:15px;
}

  
.pip-button::before {
    content: "${content_pip}";

  }
  
  .pip-button:hover{
    opacity: 0.5;
}


.fullscreen {
  min-width:20px;
  width: 100%;
  max-width: 30px;
  position: absolute;
  margin-right:5px;
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
  










/* Style the text elements */
.video-text, .input-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background: black;
  padding: 10px;
  margin: 10px;
  width:auto;
  font-family: "Lucida Console", "Arial", monospace;

}

.video-text, .input-text {
  
  background-image: url('https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/logo.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100px 100px;
  min-width:100px;
  width:50%;
  max-width:300px;
  min-height:150px;
  height: auto;
  max-height:190px;

}



`;
miraxStyle.appendChild(document.createTextNode(styles));

// __________________________________________________________

const  miraxStyleMediaQuery = document.createElement('style');
document.head.appendChild(miraxStyleMediaQuery);

// Define the media query and its associated CSS rules
const mediaQuery = `
  @media (max-width: 740px) {

    /* Hide the control div by default */
    .mirax-theme {
      display: none;
    
    }
    
    /* Show the control div when hovering over the video or itself */
    .mirax-player:hover + .mirax-theme,
    .mirax-theme:hover {
      display: block;
      margin: 0 auto;
      position: relative;
      width: 95%;
      height: 20px;
      max-width:96%;
      margin-top:-44px;
      bottom: 0;
      left: 10;
      color: #fff;
      padding-top:5px;
      padding-bottom:5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
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


    .video-text, .input-text {
      background-size: 50px 50px;
      width:100%;
      max-width:240px;
      min-height:110px;
      height: auto;
      max-height:100px;
    }


    

  }
`;

miraxStyleMediaQuery2.appendChild(document.createTextNode(mediaQuery2));

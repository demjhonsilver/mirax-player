




// Define the content string
const content_fullscreen = "\\02752"; 
const content_play = "\\25B6";
const content_pause =  "|" + " " + "|";
const content_speaker = "\\1F508";
const content_pip = "\\0393";


const miraxStyle = document.createElement('style');
document.head.appendChild(miraxStyle);
const styles = `

.mirax-player {
  max-width: 740px;
  width: 100%; /* This ensures the video fills its container while respecting max-width */
  height: auto; /* This maintains the video's aspect ratio */
  min-height:100px;
  max-height:580px;
  background-color: #000000;
  margin: 0 auto;

}


/* Hide the control div by default */
.mirax-theme {
  display: none;

}

/* Show the control div when hovering over the video or itself */
.mirax-player:hover + .mirax-theme,
.mirax-theme:hover {
  display: block;
  margin: 0 auto;
  float: inherit; 
  position: relative;
  width: 100%;
  height: 20px;
  max-width:720px;
  margin-top:-44px;
  bottom: 0;
  left: 10;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding-top:5px;
  padding-bottom:5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius:3px;
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



/* Style the volume slider */
.volume-slider {
  position: absolute;
    float: left;
    margin-left:59px;
  width:100%;
  max-width:50px;
  height: 5px;
  outline: none;
  border-radius: 0;
  cursor: pointer;
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}




.volume-slider::-moz-range-track {
  height: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}
.volume-slider::-moz-range-thumb {
  width: 5px;
  height: 10px;
  border-style:none;
  border-radius:0%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}

.volume-slider::-moz-range-progress {
  height: 10px;
  background-color: rgba(255, 255, 255, 0.1); /* Change the color of the half bar */
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}




/* Styling for the track */
.volume-slider::-webkit-slider-runnable-track {
  height: 10px;
  background-color: rgba(205, 228, 235, 0.1);
  border: none;
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}

/* Styling for the thumb */
.volume-slider::-webkit-slider-thumb {
  width: 5px;
  height: 10px;
  border-style: none;
  border-radius: 0%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}

/* Styling for the progress */
.volume-slider::-webkit-progress-value {
  height: 10px;
  background-color: rgba(205, 228, 235, 0.1);
  -webkit-appearance: none; /* Remove default appearance for Chrome, Safari and Opera */
  -moz-appearance: none; /* Remove default appearance for Firefox */
  appearance: none; /* Remove default appearance for Edge */
}














  
.volume-slider :hover {
   opacity: 0.5;
}

/* .speaker-icon {
  position: absolute;
  float: left;
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
        max-width:410px;
        height:10px;
        float: left;
        margin-left: 196px;
        background-color: rgba(205, 228, 235, 0.1);
        border-style: none;
}


progress::-webkit-progress-value {
  background-color: rgba(255,255, 255, 0.8);
} 
progress[value]::-moz-progress-bar {
  background-color: rgba(255,255, 255, 0.8);
}
progress::-ms-fill {
  background-color:  rgba(255,255, 255, 0.8);
}

.pip-button {
  min-width:20px;
  width: 100%;
  max-width: 30px;
  position: absolute;
  right:0;
  margin-top: 4px;
  margin-right:81px;
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
    .progress-bar {

      min-width:30px;
      width: 40%;
      background-color: rgba(205, 228, 235, 0.1);
    }
    /* Hide the control div by default */
    .mirax-theme {
      display: none;
    
    }
    
    /* Show the control div when hovering over the video or itself */
    .mirax-player:hover + .mirax-theme,
    .mirax-theme:hover {
      display: block;
      margin: 0 auto;
      float: inherit; 
      position: relative;
      width: 100%;
      height: 20px;
      max-width:96%;
      margin-top:-44px;
      bottom: 0;
      left: 10;
    /*   background-color: rgba(0, 0, 0, 0.5); */
      color: #fff;
      padding-top:5px;
      padding-bottom:5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius:3px;
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
    .video-text, .input-text {
      width:100%;
      max-width:240px;
      min-height:110px;
      height: auto;
      max-height:120px;
    }
    

  }
`;

miraxStyleMediaQuery3.appendChild(document.createTextNode(mediaQuery3));
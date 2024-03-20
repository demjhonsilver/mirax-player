




// Define the content string
const content_backward = "\\0279C";
const content_play = "\\27A4";
const content_forward = "\\0279C";
const content_pip = "\\021F1";


const miraxStyle = document.createElement('style');
document.head.appendChild(miraxStyle);
const styles = `

.speakerTrapezoid {
  position: absolute;
  right:-25px;
  background: none;
  margin-top:13px;
}


.speakerTrapezoid::before {
  content: "";
  width: 50px; /* Adjust the width and height as needed */
  height: 50px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='50' height='50'%3E%3Crect x='5' y='16' width='5' height='16' fill='%23FFFFFF' /%3E%3Cpolygon points='10,19 30,9 30,39 10,29' fill='%23FFFFFF' /%3E%3C/svg%3E");
  font-size: 15px;
  appearance: none;
  display: inline-block; /* Make sure it's an inline-block or block element */
}




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
  content: "";
  width: 30px; /* Adjust the width as needed */
  height: 30px; /* Adjust the height as needed */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='30' height='30'%3E%3Crect x='0' y='40' width='10' height='35' fill='%23FFFFFF' /%3E%3Crect x='23' y='40' width='10' height='35' fill='%23FFFFFF' /%3E%3C/svg%3E");
  font-size: 12px;
  appearance: none;
  display: inline-block; /* Make sure it's an inline-block or block element */
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
  margin-right:75px;
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
  position: absolute;
  right:54px;
  background: none;
  font-size:15px;

}

  
.pip-button::before {
    content: "${content_pip}";
    font-size:15px;
  }
  
  .pip-button:hover{
    opacity: 0.5;
}



.fullscreen {
  position: absolute;
  right:5px;
  background: none;
  font-size:15px;
}
  
.fullscreen:hover {
    color: #bbdeff;
}
  

.fullscreen::before {
  color: #ffffff;
  cursor: pointer;
  content: "";
  width: 12px; /* Adjust the width as needed */
  height: 12px; /* Adjust the height as needed */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='12' height='12'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23FFFFFF' /%3E%3Crect x='12' y='12' width='70' height='70' fill='%23818589' /%3E%3C/svg%3E");
  font-size: 12px;
  appearance: none;
  display: inline-block; /* Make sure it's an inline-block or block element */
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
  @media (max-width: 840px) {


    /* Hide the control div by default */
    .mirax-theme {
      opacity: 0; /* Start with 0 opacity */
      transition: opacity 0.3s; /* Use opacity for a smooth transition */
      position: absolute;
      bottom: 20px;
      width: 100%;
      max-width: 95%;
      min-width: 300px;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      left: 50%; /* Center horizontally */
      transform: translateX(-50%); /* Adjust to perfectly center */
    }
    
    /* Show the control div when hovering over the video or itself */
    .mirax-player:hover + .mirax-theme,
    .mirax-theme:hover {
      opacity: 1; /* Change opacity to 1 on hover to make it visible */
    }
    
    .player-selector {
      margin: auto 0 !important;
      margin-top:20px !important;
      width:auto;
      max-width: 95.90% !important;
      margin-left:10px !important;


     }

     .mirax-player {
      margin-right:-10px !important;


     }


  }
`;

miraxStyleMediaQuery.appendChild(document.createTextNode(mediaQuery));

// __________________________________________________________

const  miraxStyleMediaQuery2 = document.createElement('style');
document.head.appendChild(miraxStyleMediaQuery2);

// Define the media query and its associated CSS rules
const mediaQuery2 = `
  @media (max-width: 690px) {


    .video-text, .input-text {
      background-size: 50px 50px;
      width:100%;
      max-width:240px;
      min-height:110px;
      height: auto;
      max-height:100px;
    }

    /* Hide the control div by default */
    .mirax-theme {
      opacity: 0; /* Start with 0 opacity */
      transition: opacity 0.3s; /* Use opacity for a smooth transition */
      position: absolute;
      bottom: 20px;
      width: 100%;
      max-width: 95%;
      min-width: 300px;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      left: 50%; /* Center horizontally */
      transform: translateX(-50%); /* Adjust to perfectly center */
    }
    
    /* Show the control div when hovering over the video or itself */
    .mirax-player:hover + .mirax-theme,
    .mirax-theme:hover {
      opacity: 1; /* Change opacity to 1 on hover to make it visible */
    }
    
    .player-selector {
      margin: auto 0 !important;
      margin-top:15px !important;
      width:auto;
      max-width: 94.90% !important;
      margin-left:10px !important;

     }

     .mirax-player {
      
      margin-right:-10px !important;

     }

     .play-button {

      margin-left:0px;

    }
    
  
    .backward-button {
      left:40%;

    }

    .forward-button {
      left: 59%;

    }


  }
`;

miraxStyleMediaQuery2.appendChild(document.createTextNode(mediaQuery2));



const  miraxStyleMediaQuery3 = document.createElement('style');
document.head.appendChild(miraxStyleMediaQuery3);

// Define the media query and its associated CSS rules
const mediaQuery3 = `
  @media (max-width: 500px) {


    .video-text, .input-text {
      background-size: 50px 50px;
      width:100%;
      max-width:240px;
      min-height:110px;
      height: auto;
      max-height:100px;
    }

    /* Hide the control div by default */
    .mirax-theme {
      opacity: 0; /* Start with 0 opacity */
      transition: opacity 0.3s; /* Use opacity for a smooth transition */
      position: absolute;
      bottom: 20px;
      width: 90%;
      max-width: 90%;
      min-width: 250px;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      left: 50%; /* Center horizontally */
      transform: translateX(-50%); /* Adjust to perfectly center */
    }
    
    /* Show the control div when hovering over the video or itself */
    .mirax-player:hover + .mirax-theme,
    .mirax-theme:hover {
      opacity: 1; /* Change opacity to 1 on hover to make it visible */
    }
    
    .player-selector {
      margin: auto 0 !important;
      margin-top:10px !important;
      width:auto;
      max-width: 94.90% !important;
      margin-left:10px !important;

     }

     .mirax-player {
      
      margin-right: 5px !important;

     }
   

     .play-button {

      margin-left:0px;

    }
    
  
    .backward-button {
      left:40%;

    }

    .forward-button {
      left: 59%;

    }



  }
`;

miraxStyleMediaQuery3.appendChild(document.createTextNode(mediaQuery3));




const  miraxStyleMediaQuery4 = document.createElement('style');
document.head.appendChild(miraxStyleMediaQuery4);

// Define the media query and its associated CSS rules
const mediaQuery4 = `
  @media (max-width: 360px) {

    /* Hide the control div by default */
    .mirax-theme {
      opacity: 0; /* Start with 0 opacity */
      transition: opacity 0.3s; /* Use opacity for a smooth transition */
      position: absolute;
      bottom: 20px;
      width: 90%;
      max-width: 90%;
      min-width: 250px;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      left: 50%; /* Center horizontally */
      transform: translateX(-50%); /* Adjust to perfectly center */
    }
    
    /* Show the control div when hovering over the video or itself */
    .mirax-player:hover + .mirax-theme,
    .mirax-theme:hover {
      opacity: 1; /* Change opacity to 1 on hover to make it visible */
    }




  }
`;

miraxStyleMediaQuery4.appendChild(document.createTextNode(mediaQuery4));


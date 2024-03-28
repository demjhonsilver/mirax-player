

// Define the content string

const content_play = "\\25B2";

const content_pip = "\\021F1";

const fscreen = "■";

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

  background: none;
  margin-left: 18px;
  color: #fff;
  border-style: none;
  border-radius: 0;
  cursor: pointer;
  font-size: 13px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  transform: rotate(90deg); 
}



.play-button::before {
  content: "${content_play}";

  font-size:13px;
  appearance: none;
}


.play-button.pause::before {
  position: absolute;
  margin-left: -5px;
  margin-top: -22px;
  opacity: 0.7;
  content: "";
  width: 30px; /* Adjust the width as needed */
  height: 30px; /* Adjust the height as needed */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='30' height='30'%3E%3Crect x='0' y='40' width='10' height='35' fill='%23FFFFFF' /%3E%3Crect x='23' y='40' width='10' height='35' fill='%23FFFFFF' /%3E%3C/svg%3E");
  font-size: 12px;
  appearance: none;
  display: inline-block; /* Make sure it's an inline-block or block element */
}



  









.backward-button {
  position: absolute;
  right: 16%;
  background: none;
  color: #fff;
  border-style: none;
  border-radius: 0;
  cursor: pointer;
  font-size: 13px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 13px solid rgba(255, 255, 255, 0.7); /* Transparent triangle */
  cursor: pointer;
  transform: rotate(-90deg); 
}



.backward-button:hover {
  border-bottom: 13px solid white; /* Transparent triangle */
}



.forward-button {
  position: absolute;
  right: 13%;

  background: none;
  color: #fff;
  border-style: none;
  border-radius: 0;
  cursor: pointer;
  font-size: 13px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 13px solid rgba(255, 255, 255, 0.7); /* Transparent blue triangle */
  cursor: pointer;
  transform: rotate(90deg); 

}



.forward-button:hover {
  border-bottom: 13px solid white; /* Transparent triangle */
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
  background-color: rgba(220, 20, 60, 1);
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
  background-color: rgba(220, 20, 60, 1);
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
    font-size:13px;
}

.time-duration::before {
  
    content: "/";
    margin: 0 8px; /* Adjust the spacing as needed */
}

.time-duration {
  position: absolute;
    float: left;
    font-family: "Lucida Console", "Arial", monospace;
    margin-top: 2px;
    font-size:13px;
      
}

progress::-webkit-progress-value {
  background-color: rgba(255, 49, 49, 0.9);
 
} 
progress[value]::-moz-progress-bar {
  background-color: rgba(255, 49, 49, 0.9);

}
progress::-ms-fill {
  background-color: rgba(255, 49, 49, 0.9);

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
  right:10px;
  background: none;
  top: 4%;
  font-size:15px;
}
  
.fullscreen:hover {
    color: #bbdeff;
}
  

.fullscreen::before {
  color: #ffffff;
  cursor: pointer;
  content: "${fscreen}";

  width: 12px; /* Adjust the width as needed */
  height: 12px; /* Adjust the height as needed */
  font-size: 18px;
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
  @media (max-width: 980px) {


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


     .backward-button {
        position: absolute;
        right: 19%;
     }

     .forward-button {
        position: absolute;
        right: 16%;
     }


  }
`;

miraxStyleMediaQuery.appendChild(document.createTextNode(mediaQuery));

// __________________________________________________________

const  miraxStyleMediaQuery2 = document.createElement('style');
document.head.appendChild(miraxStyleMediaQuery2);

// Define the media query and its associated CSS rules
const mediaQuery2 = `
  @media (max-width: 800px) {


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


    
  
    .backward-button {
        position: absolute;
        right: 20%;
     }

     .forward-button {
        position: absolute;
        right: 17%;
     }


  }
`;

miraxStyleMediaQuery2.appendChild(document.createTextNode(mediaQuery2));



const  miraxStyleMediaQuery3 = document.createElement('style');
document.head.appendChild(miraxStyleMediaQuery3);

// Define the media query and its associated CSS rules
const mediaQuery3 = `
  @media (max-width: 740px) {


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
   
  
    .backward-button {
        position: absolute;
        right: 25%;
     }

     .forward-button {
        position: absolute;
        right: 21%;
     }



  }
`;

miraxStyleMediaQuery3.appendChild(document.createTextNode(mediaQuery3));




const  miraxStyleMediaQuery4 = document.createElement('style');
document.head.appendChild(miraxStyleMediaQuery4);

// Define the media query and its associated CSS rules
const mediaQuery4 = `
  @media (max-width: 600px) {

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


    .backward-button {
        position: absolute;
        right: 27%;
     }

     .forward-button {
        position: absolute;
        right: 23%;
     }


  }
`;

miraxStyleMediaQuery4.appendChild(document.createTextNode(mediaQuery4));

const  miraxStyleMediaQuery5 = document.createElement('style');
document.head.appendChild(miraxStyleMediaQuery5);

// Define the media query and its associated CSS rules
const mediaQuery5 = `
  @media (max-width: 550px) {



    .backward-button {
        position: absolute;
        right: 33%;
     }

     .forward-button {
        position: absolute;
        right: 28%;
     }


  }
`;

miraxStyleMediaQuery5.appendChild(document.createTextNode(mediaQuery5));





const  miraxStyleMediaQuery6 = document.createElement('style');
document.head.appendChild(miraxStyleMediaQuery6);

// Define the media query and its associated CSS rules
const mediaQuery6 = `
  @media (max-width: 450px) {



    .backward-button {
        position: absolute;
        right: 36%;
     }

     .forward-button {
        position: absolute;
        right: 31%;
     }


  }
`;

miraxStyleMediaQuery6.appendChild(document.createTextNode(mediaQuery6));



const  miraxStyleMediaQuery7 = document.createElement('style');
document.head.appendChild(miraxStyleMediaQuery7);

// Define the media query and its associated CSS rules
const mediaQuery7 = `
  @media (max-width: 400px) {



    .backward-button {
        position: absolute;
        right: 40%;
     }

     .forward-button {
        position: absolute;
        right: 35%;
     }


  }
`;

miraxStyleMediaQuery7.appendChild(document.createTextNode(mediaQuery7));
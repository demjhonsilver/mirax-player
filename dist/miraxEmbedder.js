


const embedTiktok = (playerRef) => {
  const videoUrl = playerRef.getAttribute("data-mirax-embed");
  // Fetch oEmbed data from TikTok's API
  fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.html) {
        data.html = data.html.replace(/<script[^>]*>.*<\/script>/gi,"");
      }
      playerRef.innerHTML =data.html;
      const miraxBinderTikTok = document.createElement("script");
      miraxBinderTikTok.src = "https://www.tiktok.com/embed.js";
      document.body.appendChild(miraxBinderTikTok);
    })
    .catch((error) => {
      console.error(error);
    });
};

// Function to extract YouTube video ID from a URL
const extractYouTubeVideoId = (url) => {
  // Check if it's a YouTube Shorts URL
  const shortsMatch = url.match(/(?:shorts\/|v=)([a-zA-Z0-9_-]{11})/);
  if (shortsMatch && shortsMatch[1]) {
    return shortsMatch[1];
  }


 // Check if it's a regular YouTube video URL
const videoIdMatch = url.match(/(\?v=|\/embed\/|\/watch\?v=|\/v\/|\/e\/|youtu.be\/)([^#&?]*).*/);
  if (videoIdMatch && videoIdMatch[2].length === 11) {
    return videoIdMatch[2];
  }

  throw new Error("Invalid YouTube video URL");
};



// Function to embed a YouTube video
const embedYouTube = (playerRef, params) => {
  const videoUrl = playerRef.getAttribute("data-mirax-embed");
  const emWidth = playerRef.getAttribute("data-mirax-width");
  const emHeight = playerRef.getAttribute("data-mirax-height");


  const inputEmbedClip = document.createElement('style');
  document.head.appendChild(inputEmbedClip);
  const  inputEmbedClipStyle = `

  .mirax-embed-class {
    position: relative;
    width: 100%;
    max-width: ${emWidth}px;
    height:${emHeight}px;
    margin: 0 auto; 
    overflow: hidden;
  }
  .mirax-embed-class iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  `;
  inputEmbedClip.appendChild(document.createTextNode(inputEmbedClipStyle));







  const videoId = extractYouTubeVideoId(videoUrl);

  // Check if the YouTube iframe API is already available
  if (window.YT && window.YT.Player) {
    initializeYouTubeAPI(playerRef, videoId, {
      ...params,
      width: emWidth, // Use the e-width attribute
      height: emHeight, // Use the e-height attribute
    });
  } else {
    // Define the callback function when the YouTube iframe API is ready
    window.onYouTubeIframeAPIReady = () => {
      initializeYouTubeAPI(playerRef, videoId, params);
    };






    // Load the YouTube iframe API script
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);
  }

  // Function to clean up the player
  return () => {
    if (playerRef) {
      playerRef.innerHTML = ""; // Remove the YouTube player iframe
    }
  };
};

// Function to initialize the YouTube API
const initializeYouTubeAPI = (playerRef, videoId, params) => {
  const emWidth = playerRef.getAttribute("data-mirax-width");
  const emHeight = playerRef.getAttribute("data-mirax-height");


  const inputEmbedClip = document.createElement('style');
  document.head.appendChild(inputEmbedClip);
  const  inputEmbedClipStyle = `

  .mirax-embed-class {
    position: relative;
    width: 100%;
    max-width: ${emWidth}px;
    height:${emHeight}px;
    margin: 0 auto; 
    overflow: hidden;
  }
  .mirax-embed-class iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  `;
  inputEmbedClip.appendChild(document.createTextNode(inputEmbedClipStyle));





  if (playerRef) {
    new window.YT.Player(playerRef, {
      videoId: videoId,
      ...params,
      width: emWidth, // Use the e-width attribute
      height: emHeight, // Use the e-height attribute

    });
  }
};
























// Function to extract Vimeo video ID from a URL
const extractVimeoVideoId = (url) => {
  const videoIdMatch = url.match(/\/(\d+)/);
  if (videoIdMatch && videoIdMatch[1]) {
    return videoIdMatch[1];
  } else {
    console.error("Invalid Vimeo video URL");
    return "";
  }
};

// Function to embed a Vimeo video
const embedVimeo = (playerRef, params) => {
  const videoUrl = playerRef.getAttribute("data-mirax-embed");
  const emWidth = playerRef.getAttribute("data-mirax-width");
  const emHeight = playerRef.getAttribute("data-mirax-height");



  const inputEmbedClip = document.createElement('style');
  document.head.appendChild(inputEmbedClip);
  const  inputEmbedClipStyle = `

  .mirax-embed-class {
    position: relative;
    width: 100%;
    max-width: ${emWidth}px;
    height:${emHeight}px;
    margin: 0 auto; 
    overflow: hidden;
  }
  .mirax-embed-class iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  `;
  inputEmbedClip.appendChild(document.createTextNode(inputEmbedClipStyle));








  const videoId = extractVimeoVideoId(videoUrl);

  // Create a script element to load the Vimeo Player API
  const script = document.createElement("script");
  script.src = "https://player.vimeo.com/api/player.js";
  script.async = true;

  // Callback when the Vimeo Player API script is loaded
  script.onload = () => {
    const vimeoPlayer = new window.Vimeo.Player(playerRef, {
      id: videoId,
      ...params,
      width: emWidth, // Use the e-width attribute
      height: emHeight, // Use the e-height attribute
    });



    vimeoPlayer.ready().then(() => {
      // You can use player methods here as needed
    });
  };

  document.body.appendChild(script);

  // Function to clean up the player
  return () => {
    if (playerRef) {
      playerRef.innerHTML = ""; // Remove the Vimeo player iframe
    }
    document.body.removeChild(script);
  };
};



// Function to embed either YouTube or Vimeo or TikTok video based on the URL
const miraxEmbed = (playerRef, params) => {
  const videoUrl = playerRef.getAttribute("data-mirax-embed");

  if (videoUrl.includes("vimeo.com")) {
    embedVimeo(playerRef, params);
  } else if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    embedYouTube(playerRef, params);
  } 
  else if (videoUrl.includes("tiktok.com") || videoUrl.includes("tiktok")) {
    embedTiktok(playerRef, params);
  } else {
    throw new Error("Invalid video URL");
  }
};

export default miraxEmbed;

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

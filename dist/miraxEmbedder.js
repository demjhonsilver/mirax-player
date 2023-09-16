
const embedTwitter = (urlSource) => {

  function extractTwitterTweetId(url) {
    const regex = /\/status\/(\d+)/;
    const match = url.match(regex);
    
    if (match && match[1]) {
      return match[1];
    } else {
      return null; // No match found
    }
  }
  
  const videoUrl = urlSource.getAttribute("data-mirax-embed-url");
  const tweetId = extractTwitterTweetId(videoUrl);
  const emWidth = urlSource.getAttribute("data-mirax-embed-width");
  const emHeight = urlSource.getAttribute("data-mirax-embed-height");

const inputEmbedClip = document.createElement("style");
document.head.appendChild(inputEmbedClip);

const inputEmbedClipStyle = `
  .class-mirax-embed {
    position: relative;
    width: 100%;
    max-width: ${emWidth}px;
    height: ${emHeight}px;
    margin: 0 auto;
    overflow: hidden;
  }
  .class-mirax-embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
inputEmbedClip.appendChild(document.createTextNode(inputEmbedClipStyle));

try {
  // Create a div to hold the embedded tweet
  const tweetContainer = document.createElement("div");
  urlSource.appendChild(tweetContainer);

  // Set the ID for the tweet container
  tweetContainer.id = `tweet-${tweetId}`;

  // Add the Twitter widget script to the page and wait for it to load
  const twitterWidgetScript = document.createElement("script");
  twitterWidgetScript.src = "https://platform.twitter.com/widgets.js";
  twitterWidgetScript.charset = "utf-8";
  twitterWidgetScript.async = true;

  // Attach a load event listener to the script
  twitterWidgetScript.addEventListener("load", () => {
    // The Twitter widget script has loaded, and the tweet is now embedded.
    // You can perform any additional actions here if needed.
    window.twttr.widgets.createTweet(tweetId, tweetContainer);
  });

  document.body.appendChild(twitterWidgetScript);
} catch (error) {
  console.error("Error embedding Twitter content:", error);
}
};











// Function to embed a Dailymotion video using oEmbed
const embedDailymotion = (urlSource) => {
  

  const videoUrl = urlSource.getAttribute("data-mirax-embed-url");
  const emWidth = urlSource.getAttribute("data-mirax-embed-width");
  const emHeight = urlSource.getAttribute("data-mirax-embed-height");

  const inputEmbedClip = document.createElement('style');
  document.head.appendChild(inputEmbedClip);
  const  inputEmbedClipStyle = `

  .class-mirax-embed {
    position: relative;
    width: 100%;
    max-width: ${emWidth}px;
    height:${emHeight}px;
    margin: 0 auto; 
    overflow: hidden;
  }
  .class-mirax-embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  `;
  inputEmbedClip.appendChild(document.createTextNode(inputEmbedClipStyle));






  // Create a script element for the JSONP request
  const script = document.createElement("script");
  script.src = `https://www.dailymotion.com/services/oembed/?url=${encodeURIComponent(
    videoUrl
  )}&format=json&callback=handleDailymotionResponse`;

  // Define a global callback function to handle the response
  window.handleDailymotionResponse = (data) => {
    if (data.html) {
      urlSource.innerHTML = data.html;
    }

    // Clean up the script element and callback function
    document.body.removeChild(script);
    delete window.handleDailymotionResponse;
  };

  // Append the script element to the document to trigger the JSONP request
  document.body.appendChild(script);
};








const embedTiktok = (urlSource) => {
  const videoUrl = urlSource.getAttribute("data-mirax-embed-url");

  // Fetch oEmbed data from TikTok's API
  fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.html) {
        data.html = data.html.replace(/<script[^>]*>.*<\/script>/gi,"");
      }
      urlSource.innerHTML =data.html;
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
const embedYouTube = (urlSource) => {
  const videoUrl = urlSource.getAttribute("data-mirax-embed-url");
  const emWidth = urlSource.getAttribute("data-mirax-embed-width");
  const emHeight = urlSource.getAttribute("data-mirax-embed-height");


  const inputEmbedClip = document.createElement('style');
  document.head.appendChild(inputEmbedClip);
  const inputEmbedClipStyle = `
    .class-mirax-embed {
      display: flex;
      justify-content: center; /* Center horizontally */
      align-items: center; /* Center vertically */
      position: relative;
      width: 100%;
      max-width: ${emWidth}px;
      height: ${emHeight}px;
      overflow: hidden;
      text-align: center;
    }
    .class-mirax-embed iframe {
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
    initializeYouTubeAPI(urlSource, videoId, {
      width: emWidth, // Use the e-width attribute
      height: emHeight, // Use the e-height attribute
    });
  } else {
    // Define the callback function when the YouTube iframe API is ready
    window.onYouTubeIframeAPIReady = () => {
      initializeYouTubeAPI(urlSource, videoId);
    };






    // Load the YouTube iframe API script
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);
  }

  // Function to clean up the player
  return () => {
    if (urlSource) {
      urlSource.innerHTML = ""; // Remove the YouTube player iframe
    }
  };
};

// Function to initialize the YouTube API
const initializeYouTubeAPI = (urlSource, videoId) => {
  const emWidth = urlSource.getAttribute("data-mirax-embed-width");
  const emHeight = urlSource.getAttribute("data-mirax-embed-height");
  const emFS = urlSource.getAttribute("data-mirax-embed-fullscreen");
  const emControls = urlSource.getAttribute("data-mirax-embed-controls");
  const emAutoplay = urlSource.getAttribute("data-mirax-embed-autoplay");
  const emLoop = urlSource.getAttribute("data-mirax-embed-loop");



  const fullscreenValue = emFS === "false" ? 0 : 1;
  const controlsValue = emControls === "false" ? 0 : 1;


  const AutoplayValue = emAutoplay === "false" ? 0 : 1;
  const AutomutedValue = emAutoplay === "false" ? 0 : 1;
  const LoopValue = emLoop === "false" ? 0 : 1;

  const inputEmbedClip = document.createElement('style');
  document.head.appendChild(inputEmbedClip);
  const inputEmbedClipStyle = `
    .class-mirax-embed {
      position: relative;
      width: 100%;
      max-width: ${emWidth}px;
      height:${emHeight}px;
      margin: 0 auto; 
      overflow: hidden;
    }
    .class-mirax-embed iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
  inputEmbedClip.appendChild(document.createTextNode(inputEmbedClipStyle));

  if (urlSource) {
    new window.YT.Player(urlSource, {
      videoId: videoId,
      width: emWidth, // Use the e-width attribute
      height: emHeight, // Use the e-height attribute
      playerVars: {
        fs: fullscreenValue,
        controls: controlsValue,  // 0 or 1
        cc_load_policy: 1,
        autoplay: AutoplayValue,
        mute: AutomutedValue,
        loop: LoopValue
      }
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
const embedVimeo = (urlSource) => {
  const videoUrl = urlSource.getAttribute("data-mirax-embed-url");
  const emWidth = urlSource.getAttribute("data-mirax-embed-width");
  const emHeight = urlSource.getAttribute("data-mirax-embed-height");

  const emControls = urlSource.getAttribute("data-mirax-embed-controls");


  const emAutoplay = urlSource.getAttribute("data-mirax-embed-autoplay");
  const emLoop = urlSource.getAttribute("data-mirax-embed-loop");



  const controlsValue = emControls === "false" ? 0 : 1;


  const AutoplayValue = emAutoplay === "false" ? false : true;
  const LoopValue = emLoop ===  "false" ? false : true;



  const inputEmbedClip = document.createElement('style');
  document.head.appendChild(inputEmbedClip);
  const inputEmbedClipStyle = `
    .class-mirax-embed {
      position: relative;
      width: 100%;
      max-width: ${emWidth}px;
      height:${emHeight}px;
      margin: 0 auto; 
      overflow: hidden;
    }
    .class-mirax-embed iframe {
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
    const vimeoPlayer = new window.Vimeo.Player(urlSource, {
      id: videoId,
      width: emWidth, // Use the e-width attribute
      height: emHeight, // Use the e-height attribute
      controls: controlsValue,
      autolay: AutoplayValue,
      muted: false,
      loop: LoopValue,
      responsive: true
    });


    vimeoPlayer.ready().then(() => {
      // You can use player methods here as needed
    });
  };

  document.body.appendChild(script);

  // Function to clean up the player
  return () => {
    if (urlSource) {
      urlSource.innerHTML = ""; // Remove the Vimeo player iframe
    }
    document.body.removeChild(script);
  };
};



// Function to embed either YouTube or Vimeo or TikTok or Dailymotion video based on the URL

const miraxEmbed = (urlSource) => {
  const videoUrl = urlSource.getAttribute("data-mirax-embed-url");

  if (videoUrl.includes("vimeo.com")) {
    embedVimeo(urlSource);
  } else if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    embedYouTube(urlSource);
  } else if (videoUrl.includes("tiktok.com") || videoUrl.includes("tiktok")) {
    embedTiktok(urlSource);
  } else if (videoUrl.includes("dailymotion.com") || videoUrl.includes("dailymotion")) {
    embedDailymotion(urlSource);  
  } else if (videoUrl.includes("twitter.com")) {
    embedTwitter(urlSource);  
  }
  else {
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

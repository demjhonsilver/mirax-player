
const embedTwitter = (embedDiv) => {

  function extractTwitterTweetId(url) {
    const regex = /\/status\/(\d+)/;
    const match = url.match(regex);
    
    if (match && match[1]) {
      return match[1];
    } else {
      return null; // No match found
    }
  }
  
  const videoUrl = embedDiv.getAttribute("data-e-url");
  const tweetId = extractTwitterTweetId(videoUrl);
  const emWidth = embedDiv.getAttribute("data-e-width");
  const emHeight = embedDiv.getAttribute("data-e-height");

const inputEmbedClip = document.createElement("style");
document.head.appendChild(inputEmbedClip);

const inputEmbedClipStyle = `
  .mirax-embed {
    position: relative;
    width: 100%;
    max-width: ${emWidth}px;
    height: ${emHeight}px;
    margin: 0 auto;
    overflow: hidden;
  }
  .mirax-embed iframe {
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
  embedDiv.appendChild(tweetContainer);

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
const embedDailymotion = (embedDiv) => {
  

  const videoUrl = embedDiv.getAttribute("data-e-url");
  const emWidth = embedDiv.getAttribute("data-e-width");
  const emHeight = embedDiv.getAttribute("data-e-height");

  const inputEmbedClip = document.createElement('style');
  document.head.appendChild(inputEmbedClip);
  const  inputEmbedClipStyle = `

  .mirax-embed {
    position: relative;
    width: 100%;
    max-width: ${emWidth}px;
    height:${emHeight}px;
    margin: 0 auto; 
    overflow: hidden;
  }
  .mirax-embed iframe {
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
      embedDiv.innerHTML = data.html;
    }

    // Clean up the script element and callback function
    document.body.removeChild(script);
    delete window.handleDailymotionResponse;
  };

  // Append the script element to the document to trigger the JSONP request
  document.body.appendChild(script);
};








const embedTiktok = async (embedDiv) => {
  try {
    const videoUrl = embedDiv.getAttribute("data-e-url");

    // Fetch oEmbed data from TikTok's API
    const response = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch TikTok oEmbed data: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.html) {
      data.html = data.html.replace(/<script[^>]*>.*<\/script>/gi, "");
    }

    embedDiv.innerHTML = data.html;

    const miraxBinderTikTok = document.createElement("script");
    miraxBinderTikTok.src = "https://www.tiktok.com/embed.js";
    document.body.appendChild(miraxBinderTikTok);
  } catch (error) {
    console.error(error);
  }
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
const embedYouTube = (embedDiv) => {
  const videoUrl = embedDiv.getAttribute("data-e-url");
  const emWidth = embedDiv.getAttribute("data-e-width");
  const emHeight = embedDiv.getAttribute("data-e-height");


  const inputEmbedClip = document.createElement('style');
  document.head.appendChild(inputEmbedClip);
  const inputEmbedClipStyle = `
    .mirax-embed {
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
    .mirax-embed iframe {
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
    initializeYouTubeAPI(embedDiv, videoId, {
      width: emWidth, // Use the e-width attribute
      height: emHeight, // Use the e-height attribute
    });
  } else {
    // Define the callback function when the YouTube iframe API is ready
    window.onYouTubeIframeAPIReady = () => {
      initializeYouTubeAPI(embedDiv, videoId);
    };






    // Load the YouTube iframe API script
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);
  }

  // Function to clean up the player
  return () => {
    if (embedDiv) {
      embedDiv.innerHTML = ""; // Remove the YouTube player iframe
    }
  };
};

// Function to initialize the YouTube API
const initializeYouTubeAPI = (embedDiv, videoId) => {
  const emWidth = embedDiv.getAttribute("data-e-width");
  const emHeight = embedDiv.getAttribute("data-e-height");
  const emFS = embedDiv.getAttribute("data-e-fullscreen");
  const emControls = embedDiv.getAttribute("data-e-controls");
  const emAutoplay = embedDiv.getAttribute("data-e-autoplay");
  const emLoop = embedDiv.getAttribute("data-e-loop");



  const fullscreenValue = emFS === "false" ? 0 : 1;
  const controlsValue = emControls === "false" ? 0 : 1;


  const AutoplayValue = emAutoplay === "false" ? 0 : 1;
  const AutomutedValue = emAutoplay === "false" ? 0 : 1;
  const LoopValue = emLoop === "false" ? 0 : 1;

  const inputEmbedClip = document.createElement('style');
  document.head.appendChild(inputEmbedClip);
  const inputEmbedClipStyle = `
    .mirax-embed {
      position: relative;
      width: 100%;
      max-width: ${emWidth}px;
      height:${emHeight}px;
      margin: 0 auto; 
      overflow: hidden;
    }
    .mirax-embed iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
  inputEmbedClip.appendChild(document.createTextNode(inputEmbedClipStyle));

  if (embedDiv) {
    new window.YT.Player(embedDiv, {
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
const embedVimeo = (embedDiv) => {
  const videoUrl = embedDiv.getAttribute("data-e-url");
  const emWidth = embedDiv.getAttribute("data-e-width");
  const emHeight = embedDiv.getAttribute("data-e-height");

  const emControls = embedDiv.getAttribute("data-e-controls");


  const emAutoplay = embedDiv.getAttribute("data-e-autoplay");
  const emLoop = embedDiv.getAttribute("data-e-loop");



  const controlsValue = emControls === "false" ? 0 : 1;


  const AutoplayValue = emAutoplay === "false" ? false : true;

  const LoopValue = emLoop ===  "false" ? false : true;



  const inputEmbedClip = document.createElement('style');
  document.head.appendChild(inputEmbedClip);
  const inputEmbedClipStyle = `
    .mirax-embed {
      position: relative;
      width: 100%;
      max-width: ${emWidth}px;
      height:${emHeight}px;
      margin: 0 auto; 
      overflow: hidden;
    }
    .mirax-embed iframe {
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
    const vimeoPlayer = new window.Vimeo.Player(embedDiv, {
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
    if (embedDiv) {
      embedDiv.innerHTML = ""; // Remove the Vimeo player iframe
    }
    document.body.removeChild(script);
  };
};


const embed = (selector) => {
  const embedDiv = document.querySelector('.' + selector); // Prepend a dot symbol
  const videoUrl = embedDiv.getAttribute("data-e-url");

  if (videoUrl.includes("vimeo.com")) {
    embedVimeo(embedDiv);
  } else if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    embedYouTube(embedDiv);
  } else if (videoUrl.includes("tiktok.com") || videoUrl.includes("tiktok")) {
    embedTiktok(embedDiv);
  } else if (videoUrl.includes("dailymotion.com") || videoUrl.includes("dailymotion")) {
    embedDailymotion(embedDiv);
  } else if (videoUrl.includes("twitter.com")) {
    embedTwitter(embedDiv);
  } else {
    throw new Error("Invalid video URL");
  }
};



export default embed;

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

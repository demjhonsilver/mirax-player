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


  import aziwork, { sunder } from 'aziwork';

  // Function to embed a Dailymotion video using oEmbed
  
  
  const embedDailymotion = (video, container, videoClass) => {
    const videoUrl = video.videoUrl;
  
    // Define maxwidth and maxheight based on the video object's properties
    const maxwidth = video.width || 640; // Default width if not provided
    const maxheight = video.height || 360; // Default height if not provided
  
    // Check if autoplay should be enabled (true by default)
    const autoplayEnabled = video.autoplay !== undefined ? video.autoplay : true;
  
    // Create a script element for the JSONP request
    const script = document.createElement("script");
    script.src = `https://www.dailymotion.com/services/oembed/?url=${encodeURIComponent(
      videoUrl
    )}&format=json&maxwidth=${maxwidth}&maxheight=${maxheight}&callback=handleDailymotionResponse`;
  
    // Define a global callback function to handle the response
    window.handleDailymotionResponse = (data) => {
      if (data.html) {
        // Create a div element to hold the Dailymotion video
        const videoContainer = document.createElement("div");
  
        // Apply the videoClass to the videoContainer
        videoContainer.className = `video-${videoCount} ${videoClass} custom-dailymotion`; // Add custom-dailymotion class
  
        // Set the HTML content of the videoContainer to the oEmbed HTML
        videoContainer.innerHTML = data.html;
  
        // Update the video's width to be responsive
        const videoElement = videoContainer.querySelector('iframe');
        if (videoElement) {
          videoElement.style.width = '100%'; // Set width to 100% for responsiveness
  
          // Conditionally add the 'autoplay' attribute
          if (autoplayEnabled) {
            videoElement.setAttribute('autoplay', 'autoplay');
          }
  
          // Update the 'allow' attribute to include 'fullscreen' and 'picture-in-picture'
          videoElement.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; muted');
        }
  
        // Append the videoContainer to the provided container
        container.appendChild(videoContainer);
  
        // Clean up the script element and callback function
        document.body.removeChild(script);
        delete window.handleDailymotionResponse;
      }
    };
  
    // Append the script element to the document to trigger the JSONP request
    document.body.appendChild(script);
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
  
  
  const embedVimeo = (video, container, videoClass) => {
    const emWidth = video.width || 640;
    const emHeight = video.height || 360;
    const controlsValue = video.controls;
    const AutoplayValue = video.autoplay;
    const LoopValue = video.loop;
  
    const videoId = extractVimeoVideoId(video.videoUrl);
  
    const playerDiv = document.createElement("div");
    playerDiv.className = `video-${videoCount} ${videoClass}`;
    playerDiv.dataset.eWidth = emWidth;
    playerDiv.dataset.eHeight = emHeight;
    playerDiv.dataset.efullscreen = video.fullscreen;
    playerDiv.dataset.eVideoId = videoId;
  
    container.appendChild(playerDiv);
  
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
  
    script.onload = () => {
      const vimeoPlayer = new window.Vimeo.Player(playerDiv, {
        id: videoId,
        width: emWidth,
        height: emHeight,
        controls: controlsValue,
        autoplay: AutoplayValue,
        muted: true, // Set muted to true for autoplay
        loop: LoopValue,
      });
  
      vimeoPlayer.ready().then(() => {
        // You can use player methods here as needed
      });
    };
  
    document.body.appendChild(script);
  
    return () => {
      if (playerDiv) {
        playerDiv.innerHTML = "";
      }
      document.body.removeChild(script);
    };
  };
  
  
  
  
  
  const embedTwitter = (video, container, videoClass) => {
  
    const extractTwitterTweetId = (url) => {
      const regex = /\/status\/(\d+)/;
      const match = url.match(regex);
  
      if (match && match[1]) {
        return match[1];
      } else {
        return null; // No match found
      }
    };
  
    try {
      const videoUrl = video.videoUrl;
      const tweetId = extractTwitterTweetId(videoUrl);
  
      // Create a div to hold the embedded tweet
    const tweetContainer = document.createElement("div");
  
    // Apply the videoClass to the tweetContainer
    tweetContainer.className = `video-${videoCount} ${videoClass}`;
  
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
  
      // Append the tweet container to the provided container
      container.appendChild(tweetContainer);
      container.appendChild(twitterWidgetScript);
  
    } catch (error) {
      console.error("Error embedding Twitter content:", error);
    }
  };
  
  
  
  // Map to track embedded TikTok videos
  const embeddedTikTokVideos = new Map();
  
  const embedTiktok = (video, container, videoClass) => {
    const videoUrl = video.videoUrl;
  
    // Check if the TikTok video URL has already been embedded
    if (embeddedTikTokVideos.has(videoUrl)) {
      // Video has already been embedded, no need to embed it again
      return;
    }
  
    // Mark the TikTok video URL as embedded
    embeddedTikTokVideos.set(videoUrl, true);
  
    const width = video.width || '100%'; // Default width if not provided
    const height = video.height || '100%'; // Default height if not provided
  
    aziwork.get(`https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`)
      .then((response) => {
        const data = sunder(response); // Parse JSON data using sunder
  
        if (data.html) {
          data.html = data.html.replace(/<script[^>]*>.*<\/script>/gi, '');
        }
  
        const videoContainer = document.createElement('div');
        const videoCount = Date.now();
  
        // Apply the videoClass to the videoContainer
        videoContainer.className = `video-${videoCount} ${videoClass}`;
  
        // Set the width and height of the videoContainer
        videoContainer.style.width = width;
        videoContainer.style.height = height;
  
        videoContainer.innerHTML = data.html;
  
        // Check if the TikTok embed script is already loaded
        if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
          // Dynamically load the TikTok embed script
          const miraxBinderTikTok = document.createElement('script');
          miraxBinderTikTok.src = 'https://www.tiktok.com/embed.js';
          document.body.appendChild(miraxBinderTikTok);
        }
  
        if (container) {
          // Append the videoContainer to the specified container (if provided)
          container.appendChild(videoContainer);
        } else if (document.body) {
          // Append the videoContainer to the body if no container is specified
          document.body.appendChild(videoContainer);
        }
      })
      .catch((error) => {
        console.error('An error occurred while embedding TikTok video:', error);
      });
  };
  
  
  
  
  
  
  let videoCount = 1; // Initialize videoCount
  
  const embedFacebook = (video, container, videoClass) => {
    const videoUrl = video.videoUrl;
    const autoplay = video.autoplay ? 'autoplay=true' : 'autoplay=false';
    const muted = autoplay ? 'muted=true' : 'muted=false';
    const emWidth = video.width || 640;
    const emHeight = video.height || 360;
  
    // Create an iframe element for the Facebook video
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&width=${emWidth}&height=${emHeight}&show_text=false&${autoplay}&${muted}`);
    iframe.setAttribute('width', emWidth);
    iframe.setAttribute('height', emHeight);
    iframe.setAttribute('frameborder', '0');
  
    if (video.fullscreen) {
      iframe.setAttribute('allowfullscreen', 'true');
    }
  
   
    iframe.className = `video-${videoCount} ${videoClass} custom-facebook`;
  
    videoCount++;
  
    container.appendChild(iframe);
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
  
  
  const embedYouTube = (video, container, videoClass) => {
    if (!container) {
      console.error("Container element not found.");
      return;
    }
  
    const autoplayValue = video.autoplay ? 1 : 0;
    const muteValue = video.autoplay ? 1 : video.muted ? 1 : 0;
    const loopValue = video.autoplay ? 1 : video.loop ? 1 : 0;
  
    const videoId = extractYouTubeVideoId(video.videoUrl);
  
    // Create an iframe element for the YouTube player
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplayValue}&mute=${muteValue}&loop=${loopValue ? 1 : 0}&controls=${video.controls ? 1 : 0}`;
  
    iframe.width = video.width || 640;
    iframe.height = video.height || 360;
    iframe.frameborder = "0";
  
  
    if (video.fullscreen) {
      iframe.setAttribute("allow", "fullscreen");
    }
  
  
  
    // Apply the videoClass to the iframe element
    iframe.className = videoClass;
  
    // Append the iframe to the provided container
    container.appendChild(iframe);
  };
  
  
  
  
  
  
  
  const embed = (videos) => {
    videos.map((video) => {
      const videoClass = video.videoClass || "";
      const container = document.querySelector(`.${videoClass}`);
  
      // Clear the container before embedding a new video
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
  
      if (video.videoUrl.includes("youtube.com") || video.videoUrl.includes("youtu.be")) {
        embedYouTube(video, container, videoClass);
      }
      else if (video.videoUrl.includes("facebook.com") || video.videoUrl.includes("fb.com")) {
        embedFacebook(video, container, videoClass);
      }
      else if (video.videoUrl.includes("tiktok.com") || video.videoUrl.includes("tiktok")) {
        embedTiktok(video, container, videoClass);
      }
      else if (video.videoUrl.includes("twitter.com")) {
        embedTwitter(video, container, videoClass);
      }
      else if (video.videoUrl.includes("vimeo.com")) {
        embedVimeo(video, container, videoClass);
      }
      else if (video.videoUrl.includes("dailymotion.com") || video.videoUrl.includes("dailymotion")) {
      embedDailymotion(video, container, videoClass);
      }
      else {
        throw new Error("Invalid video URL");
      }
    });
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


// Function to extract YouTube video ID from a URL
const extractYouTubeVideoId = (url) => {
  const videoIdMatch = url.match(/(\?v=|\/embed\/|\/watch\?v=|\/v\/|\/e\/|youtu\.be\/)([^#\&\?]*).*/);
  if (videoIdMatch && videoIdMatch[2].length === 11) {
    return videoIdMatch[2];
  } else {
    console.error("Invalid YouTube video URL");
    return "";
  }
};

// Function to embed a YouTube video
const embedYouTube = (playerRef, params) => {
  const videoUrl = playerRef.getAttribute("mirax-embed-video");
  const videoId = extractYouTubeVideoId(videoUrl);

  // Check if the YouTube iframe API is already available
  if (window.YT && window.YT.Player) {
    initializeYouTubeAPI(playerRef, videoId, params);
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
  if (playerRef) {
    new window.YT.Player(playerRef, {
      videoId: videoId,
      ...params,
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
  const videoUrl = playerRef.getAttribute("mirax-embed-video");
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


const miraxEmbed = (playerRef, youtubeParams, vimeoParams) => {
  const videoUrl = playerRef.getAttribute("mirax-embed-video");
  const isVimeo = videoUrl.includes("vimeo.com");

  if (isVimeo) {
    embedVimeo(playerRef, vimeoParams);
  } else {
    embedYouTube(playerRef, youtubeParams);
  }
};

export default miraxEmbed;
```js
import React, { useEffect, useRef } from "react";
import { miraxEmbed } from 'mirax-player';

const ExampleComponent = () => {
  const embedVideoRef = useRef(null);
  const embedPlayerReady = (event) => {
    event.target.playVideo();
  };
  const youtubeParams = {
    width: 1000, height: 660,
    playerVars: { 
      controls: 1,
      autoplay: 0,
      fs: 1,
      iv_load_policy: 3,
      cc_load_policy: 1 
    },
    events: { onReady: embedPlayerReady },
  };
  const vimeoParams = { 
    width: 1300, 
    height: 760, 
    autopause: 0, 
    controls: true,
    responsive: true 
  };
  useEffect(() => {
    miraxEmbed(embedVideoRef.current, youtubeParams, vimeoParams);
  }, []);
  return (
    <div className="embed_clip">
      <div ref={embedVideoRef} mirax-embed-video="https://vimeo.com/217499569">
      </div>
    </div>
  );
};
export default ExampleComponent;
```
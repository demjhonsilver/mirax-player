```js
import React, { useEffect, useRef } from "react";
import { miraxEmbed } from 'mirax-player';

const ExampleComponent = () => {
  const embedVideo = useRef(null);
  const youtubeParams = {
    playerVars: { 
      cc_load_policy: 1 
    }
  };
  const vimeoParams = { 
    responsive: true
  };
  useEffect(() => {
    miraxEmbed(embedVideo.current, youtubeParams, vimeoParams);
  });
  return (
    <div className="mirax-embed-class">
      <div ref={embedVideo}
          data-mirax-width="640"
          data-mirax-height="360"
          data-mirax-fullscreen="true"
          data-mirax-controls="true"
          data-mirax-embed="https://vimeo.com/217499569">
      </div>
    </div>
  );
};
export default ExampleComponent;
```
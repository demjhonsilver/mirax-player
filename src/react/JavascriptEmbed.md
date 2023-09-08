```js
import React, { useEffect, useRef } from "react";
import { miraxEmbed } from 'mirax-player';

const ExampleComponent = () => {
  const embedVideo = useRef(null);
  const youtubeParams = {
    playerVars: { 
      controls: 1,
      autoplay: 0,
      fs: 1,
      iv_load_policy: 3,
      cc_load_policy: 1 
    }
  };
  const vimeoParams = { 
    autopause: 0, 
    controls: true,
    responsive: true
  };
  useEffect(() => {
    miraxEmbed(embedVideo.current, youtubeParams, vimeoParams);
  });
  return (
    <div className="mirax-embed-class">
      <div ref={embedVideo}
          data-mirax-width="1040"
          data-mirax-height="560"
          data-mirax-embed="https://vimeo.com/217499569">
      </div>
    </div>
  );
};
export default ExampleComponent;
```
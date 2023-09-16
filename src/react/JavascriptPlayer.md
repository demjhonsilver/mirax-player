```js
import React, { useEffect, useRef } from "react";
import { miraxPlayer } from 'mirax-player';

const ExampleComponent = () => {
  const videoPlayer = useRef(null);
  useEffect(() => {
    if (videoPlayer.current) {
      miraxPlayer(videoPlayer.current);
    }
  });
  return (
    <div className="class-mirax-player">
      <video ref={videoPlayer} 
        className="mirax-player"
        data-mirax-player-width="800"
        src="clip.mp4">
      </video>
    </div>
  );
};
export default ExampleComponent;
```
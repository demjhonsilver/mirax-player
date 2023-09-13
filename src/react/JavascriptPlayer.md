```js
import React, { useEffect, useRef } from "react";
import { miraxplayer } from 'mirax-player';
const ExampleComponent = () => {
  const videoPlayer = useRef(null);
  useEffect(() => {
    if (videoPlayer.current) {
      miraxplayer(videoPlayer.current);
    }
  });
  return (
    <div className="mirax-player-class">
      <video ref={videoPlayer}
      className="mirax-player"
      data-mirax-player-width="800"
      data-mirax-player-float=" "
      data-mirax-player-theme=" "
      data-mirax-player-bar=" "
      src="clip.mp4"></video>
    </div>
  );
};
export default ExampleComponent;
```
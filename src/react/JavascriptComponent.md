```js
import React, { useEffect, useRef } from "react";
import { miraxplayer } from 'mirax-player';
const ExampleComponent = () => {
  const videoRef = useRef(null);
  const miraxCustomizer = {
    playerTheme: "rgba(250, 149, 35, 0.9)",
    progressTheme:  "blue"
  };
  useEffect(() => {
    if (videoRef.current) {
      miraxplayer(videoRef.current, miraxCustomizer);
    }
  }, []);
  return (
    <div className="whatever">
      <video ref={videoRef} className="mirax-player" src="clip.mp4"></video>
    </div>
  );
};
export default ExampleComponent;
```
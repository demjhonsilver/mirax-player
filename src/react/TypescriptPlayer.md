```ts
import React, { useEffect, useRef } from "react";
import { miraxplayer } from 'mirax-player';

const ExampleComponent: React.FC = () => {
  const videoPlayer = useRef<HTMLVideoElement | null>(null);
  const miraxCustomizer = {
    playerTheme: "",
    progressTheme:  ""
  };

  useEffect(() => {
    if (videoPlayer.current) {
      miraxplayer(videoPlayer.current, miraxCustomizer);
    }
  });

  return (
    <div className="whatever">
      <video ref={videoPlayer} className="mirax-player" src="clip.mp4"></video>
    </div>
  );
};

export default ExampleComponent;
```
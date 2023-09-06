```ts
import React, { useEffect, useRef, useMemo } from "react";
import { miraxEmbed } from 'mirax-player';

interface YouTubePlayerEvent {
  target: {
    playVideo: () => void;
  };
}

const embedPlayerReady = (event: YouTubePlayerEvent): void => {
  event.target.playVideo();
};

const ExampleComponent: React.FC = () => {
  const embedVideoRef = useRef<HTMLDivElement | null>(null);

  const youtubeParams = useMemo(() => {
    return {
      width: 640,
      height: 360,
      playerVars: {
        controls: 1,
        autoplay: 0,
        fs: 1,
        iv_load_policy: 3,
        cc_load_policy: 1,
      },
      events: { onReady: embedPlayerReady },
    };
  }, []);

  const vimeoParams = useMemo(() => {
    return {
      width: 640,
      height: 360,
      autopause: 0,
      controls: true,
    };
  }, []);

  useEffect(() => {
    miraxEmbed(embedVideoRef.current, youtubeParams, vimeoParams);
  }, [youtubeParams, vimeoParams]);

  return (
    <div className="embed_clip">
      <div  ref={embedVideoRef} mirax-embed-video="https://vimeo.com/217499569">
      </div>
    </div>
  );
};
export default ExampleComponent;
```
```ts
import React, { useEffect, useRef } from "react";
import { miraxPlayer } from 'mirax-player';

interface ExampleComponentProps {
  width?: number;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ width }) => {
  const playerDiv = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (playerDiv.current) {
      miraxPlayer(playerDiv.current);
    }
  }, [width]);

  return (
    <div className="player-selector">
      <video
        className="mirax-player"
        ref={playerDiv}
        data-player-width="800"
        src="clip.mp4"
      ></video>
    </div>
  );
};

export default ExampleComponent;
```
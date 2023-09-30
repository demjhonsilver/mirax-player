```ts
import React, { useEffect, useRef } from "react";
import { miraxPlayer } from 'mirax-player';

interface ExampleComponentProps {
  dataPlayerWidth?: number;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ dataPlayerWidth }) => {
  const playerDiv = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (playerDiv.current) {
      miraxPlayer(playerDiv.current);
    }
  }, [dataPlayerWidth]);

  return (
    <div className="player-selector">
      <video
        className="mirax-player"
        ref={playerDiv}
        data-player-width={dataPlayerWidth || 800}
        src="clip.mp4"
      ></video>
    </div>
  );
};
export default ExampleComponent;
```
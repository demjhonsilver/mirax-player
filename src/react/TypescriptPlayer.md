```ts
import { useEffect, useRef } from "react";
import { miraxPlayer } from 'mirax-player';

interface ExampleComponentProps {
  dataPlayerWidth?: number;
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({ dataPlayerWidth }) => {
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
        data-player-width={dataPlayerWidth || 1038}
        src="clip.mp4"
      ></video>
    </div>
  );
};
```
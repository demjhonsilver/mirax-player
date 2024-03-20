```js
import React, { useEffect, useRef } from "react";
import { miraxPlayer } from 'mirax-player';

const ExampleComponent = () => {
  const playerDiv = useRef(null);
  useEffect(() => {
      miraxPlayer(playerDiv.current);
  },[]);
  return (
    <div className="player-selector">
      <video className="mirax-player" ref={playerDiv}
        data-player-width="800"
        src="clip.mp4">
      </video>
    </div>
  );
};
export default ExampleComponent;
```
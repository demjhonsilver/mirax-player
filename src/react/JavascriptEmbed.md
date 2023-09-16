```js
import React, { useEffect, useRef } from "react";
import { miraxEmbed } from 'mirax-player';

const ExampleComponent = () => {
  const embedVideo = useRef(null);
  useEffect(() => {
    miraxEmbed(embedVideo.current);
  });
  return (
    <div className="class-mirax-embed"
        ref={embedVideo}
        data-mirax-embed-width="640"
        data-mirax-embed-height="360"
        data-mirax-embed-url="https://vimeo.com/217499569">
    </div>
  );
};
export default ExampleComponent;
```
```ts
import React, { useEffect } from "react";
import { embed } from 'mirax-player';

const ExampleComponent: React.FC = () => {
  useEffect(() => {
    embed("mirax-embed"); 
  }, []);
  return (
    <div className="mirax-embed"
        data-e-width="640"
        data-e-height="360"
        data-e-autoplay="false" // for autoplay set true or remove this props (data-e-autoplay="false")
        data-e-url="https://vimeo.com/217499569">
    </div>
  );
};

export default ExampleComponent;
```
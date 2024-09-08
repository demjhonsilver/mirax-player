// index.d.ts

declare module 'mirax-player' {
    // TypeScript type definitions for mirax-player module

      // Type for the VideoPlayer function
      type VideoPlayer = (
        videoClip: HTMLVideoElement
      ) => void;
  
  
    // Export the VideoPlayer type
 
    export const miraxPlayer: VideoPlayer;
  }
  
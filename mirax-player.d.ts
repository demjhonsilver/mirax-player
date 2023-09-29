// mirax-player.d.ts

declare module 'mirax-player' {
  // TypeScript type definitions for mirax-player module


    // Type for the Video object built-in typescript
    type Video = {
      width?: number;
      height?: number; 
      autoplay?: boolean;
      fullscreen?: boolean;
      controls?: boolean;
      loop?: boolean;
      videoUrl: string;
      videoClass: string;
    };

    // Type for the VideoEmbed function
    type VideoEmbed = (
      video: any, container?: HTMLElement
    ) => void;



    // Type for the VideoPlayer function
    type VideoPlayer = (
      videoClip: HTMLVideoElement
    ) => void;


  // Export the VideoEmbed & VideoPlayer type
  export const embed: VideoEmbed;
  export const miraxPlayer: VideoPlayer;
}

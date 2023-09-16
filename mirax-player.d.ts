// mirax-player.d.ts

declare module 'mirax-player' {
  // TypeScript type definitions for mirax-player module

  // Type for the VideoEmbed function
  type VideoEmbed = (
    urlSource: HTMLDivElement | null
  ) => void;

  // Type for the VideoPlayer function
  type VideoPlayer = (
    videoClip: HTMLVideoElement
  ) => void;

  // Export the VideoEmbed and VideoPlayer types
  export const miraxEmbed: VideoEmbed;
  export const miraxPlayer: VideoPlayer;
}

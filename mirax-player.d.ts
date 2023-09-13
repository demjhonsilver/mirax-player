// mirax-player.d.ts

declare module 'mirax-player' {
  // TypeScript type definitions for mirax-player module

  // Type for the VideoEmbed function
  type VideoEmbed = (
    playerRef: HTMLDivElement | null,
    youtubeParams: { [key: string]: any },
    vimeoParams: { [key: string]: any }
  ) => void;

  // Type for the VideoPlayerFunction
  type VideoPlayerFunction = (
    videoClip: HTMLVideoElement
  ) => void;

  // Export the VideoEmbed and VideoPlayerFunction types
  export const miraxEmbed: VideoEmbed;
  export const miraxplayer: VideoPlayerFunction;
}

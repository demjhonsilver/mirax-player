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
    videoClip: HTMLVideoElement,
    options: {
      playerTheme: PlayerTheme,
      progressTheme: ProgressTheme
    }
  ) => void;

  // Type for PlayerTheme and ProgressTheme
  type PlayerTheme =
    | string
    | `rgba(${number}, ${number}, ${number}, ${number})`
    | `rgb(${number}, ${number}, ${number})`
    | `#${string}`;
  
  type ProgressTheme = 
    | string
    | `rgba(${number}, ${number}, ${number}, ${number})`
    | `rgb(${number}, ${number}, ${number})`
    | `#${string}`;

  // Export the VideoEmbed and VideoPlayerFunction types
  export const miraxEmbed: VideoEmbed;
  export const miraxplayer: VideoPlayerFunction;
}

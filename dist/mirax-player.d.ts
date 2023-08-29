// mirax-player.d.ts

/* declare module 'mirax-player' {
  type VideoPlayerFunction = (video: any) => void;

  const miraxplayer: VideoPlayerFunction;
  export = miraxplayer;
}
 */

declare module 'mirax-player' {
  type VideoPlayerFunction = (video: any) => void;

  export const miraxplayer: VideoPlayerFunction;
}

// mirax-player.d.ts
declare module 'mirax-player' {
    interface MiraxControlElement extends HTMLElement {
        // Add any specific properties or methods you need for your control elements
    }

    interface MiraxVideoElement extends HTMLVideoElement {
        // Add any specific properties or methods you need for the video element
    }

    interface MiraxFunction {
        (video: MiraxVideoElement, isPlaying: boolean, setIsPlaying: (value: boolean) => void): void;
    }

    const miraxplayer: MiraxFunction;

    // Export the types/interfaces as well
    export interface MiraxControlElement extends HTMLElement {}
    export interface MiraxVideoElement extends HTMLVideoElement {}
    export interface MiraxFunction {
        (video: MiraxVideoElement, isPlaying: boolean, setIsPlaying: (value: boolean) => void): void;
    }
    
    export default miraxplayer;
}

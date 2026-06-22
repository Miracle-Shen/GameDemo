declare global {
  interface Window {
    PIXI: typeof import('pixi.js');
    webkitAudioContext?: typeof AudioContext;
  }
}

export {};

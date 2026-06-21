declare global {
  interface Window {
    PIXI: typeof import('pixi.js');
  }
}

export type Harvest = {
  coin: number;
  ores: Record<string, number>;
  materials: Record<string, number>;
};

export type GridPoint = {
  row: number;
  col: number;
};

export {};

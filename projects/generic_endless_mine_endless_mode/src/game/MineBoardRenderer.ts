import { CellType } from '@/constants/enum';
import { assetUrl } from '@/data/assetKeys';
import { BoardSnapshot, GridPoint } from '@/data/initialBoard';

const TILE_W = 88;
const TILE_H = 88;
const COL_GAP = 1;
const ROW_GAP = 8;

export class MineBoardRenderer {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private width = 1;
  private height = 1;
  private images = new Map<string, HTMLImageElement>();
  private snapshot: BoardSnapshot | null = null;

  async init(canvas: HTMLCanvasElement, width: number, height: number): Promise<void> {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resizeToViewport(width, height);
    await this.loadImages(['tile_empty_tunnel.png', 'tile_wall.png', 'tile_sand.png', 'tile_ore.png', 'tile_blind_box.png', 'tile_cover.png', 'tile_chest.png', 'marker_ore_hint.png', 'marker_tool_hint.png']);
  }

  renderBoard(snapshot: BoardSnapshot): void {
    this.snapshot = snapshot;
    this.draw();
  }

  async playHit(point: GridPoint): Promise<void> {
    const ctx = this.ctx;
    if (!ctx) return;
    this.draw();
    ctx.save();
    ctx.strokeStyle = '#F2AA34';
    ctx.lineWidth = 4;
    const transform = this.getTransform();
    ctx.strokeRect(transform.x + point.x * (TILE_W + COL_GAP) * transform.scale, transform.y + point.y * (TILE_H + ROW_GAP) * transform.scale, TILE_W * transform.scale, TILE_H * transform.scale);
    ctx.restore();
    await new Promise((resolve) => window.setTimeout(resolve, 70));
    this.draw();
  }

  async playBreak(): Promise<void> {
    await new Promise((resolve) => window.setTimeout(resolve, 80));
  }

  resizeToViewport(width: number, height: number): void {
    this.width = Math.max(1, Math.floor(width));
    this.height = Math.max(1, Math.floor(height));
    if (this.canvas) {
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = Math.floor(this.width * dpr);
      this.canvas.height = Math.floor(this.height * dpr);
      this.canvas.style.width = `${this.width}px`;
      this.canvas.style.height = `${this.height}px`;
      this.ctx = this.canvas.getContext('2d');
      this.ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    this.draw();
  }

  destroy(): void {
    this.canvas = null;
    this.ctx = null;
    this.images.clear();
    this.snapshot = null;
  }

  private draw(): void {
    const ctx = this.ctx;
    if (!ctx || !this.snapshot) return;
    ctx.clearRect(0, 0, this.width, this.height);
    const transform = this.getTransform();
    this.snapshot.forEach((row, y) => {
      row.forEach((cell, x) => {
        const key = this.getTileKey(cell);
        const image = this.images.get(key);
        const dx = transform.x + x * (TILE_W + COL_GAP) * transform.scale;
        const dy = transform.y + y * (TILE_H + ROW_GAP) * transform.scale;
        const dw = TILE_W * transform.scale;
        const dh = TILE_H * transform.scale;
        if (image?.complete) ctx.drawImage(image, dx, dy, dw, dh);
        else {
          ctx.fillStyle = cell.terrain === CellType.Empty ? '#111111' : '#7B3F2B';
          ctx.fillRect(dx, dy, dw, dh);
        }
        if (cell.meta.hasOreHint && !cell.meta.coverVisible) this.drawMarker('marker_ore_hint.png', dx, dy, transform.scale);
        if (cell.meta.hasToolHint && !cell.meta.coverVisible) this.drawMarker('marker_tool_hint.png', dx, dy, transform.scale);
      });
    });
  }

  private drawMarker(key: string, tileX: number, tileY: number, scale: number): void {
    const ctx = this.ctx;
    const image = this.images.get(key);
    if (!ctx || !image?.complete) return;
    ctx.drawImage(image, tileX + 26 * scale, tileY + 26 * scale, 36 * scale, 36 * scale);
  }

  private getTransform(): { x: number; y: number; scale: number } {
    const boardW = 7 * TILE_W + 6 * COL_GAP;
    const boardH = 6 * TILE_H + 5 * ROW_GAP;
    const scale = Math.min(this.width / boardW, this.height / boardH);
    return { x: (this.width - boardW * scale) / 2, y: (this.height - boardH * scale) / 2, scale };
  }

  private async loadImages(keys: string[]): Promise<void> {
    await Promise.all(keys.map((key) => new Promise<void>((resolve) => {
      const image = new Image();
      image.onload = () => { this.images.set(key, image); resolve(); };
      image.onerror = () => resolve();
      image.src = assetUrl(key);
    })));
  }

  private getTileKey(cell: BoardSnapshot[number][number]): string {
    if (cell.terrain === CellType.Empty) return 'tile_empty_tunnel.png';
    if (cell.terrain === CellType.Wall) return 'tile_wall.png';
    if (cell.meta.coverVisible) return 'tile_cover.png';
    if (cell.meta.contentType === 'ore') return 'tile_ore.png';
    if (cell.meta.contentType === 'blindBox') return 'tile_blind_box.png';
    if (cell.meta.contentType === 'chest') return 'tile_chest.png';
    return 'tile_sand.png';
  }
}

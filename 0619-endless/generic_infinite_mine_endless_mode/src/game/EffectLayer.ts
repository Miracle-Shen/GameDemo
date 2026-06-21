import type { GridPoint, ResourceType } from './types';

const CELL_W = 72;
const CELL_H = 78;
const CELL_GAP_X = 2;
const CELL_GAP_Y = 1;
const GRID_X = 25;
const GRID_Y = 22;

export class EffectLayer {
  private app: InstanceType<typeof window.PIXI.Application> | null = null;
  private previewContainer: InstanceType<typeof window.PIXI.Container> | null = null;
  private effectContainer: InstanceType<typeof window.PIXI.Container> | null = null;
  private lastPreview: GridPoint[] = [];
  private timers: number[] = [];

  attach(app: InstanceType<typeof window.PIXI.Application>): void {
    this.app = app;
    const PIXI = window.PIXI;
    this.previewContainer = new PIXI.Container();
    this.effectContainer = new PIXI.Container();
    this.previewContainer.zIndex = 20;
    this.effectContainer.zIndex = 30;
    this.app.stage.sortableChildren = true;
    this.app.stage.addChild(this.previewContainer);
    this.app.stage.addChild(this.effectContainer);
  }

  showBombPreview(points: GridPoint[]): GridPoint[] {
    this.lastPreview = points.map((point) => ({ ...point }));
    this.drawPreview();
    return this.lastPreview;
  }

  clearBombPreview(): GridPoint[] {
    this.lastPreview = [];
    this.previewContainer?.removeChildren();
    return this.lastPreview;
  }

  playHit(point: GridPoint): void {
    this.spawnSprite('./assets/imgs/fx_hit_break.png', point, 0.78, 180);
  }

  playCrack(point: GridPoint): void {
    this.spawnSprite('./assets/imgs/fx_hit_break.png', point, 0.92, 240);
  }

  playBreak(point: GridPoint): void {
    this.spawnSprite('./assets/imgs/fx_hit_break.png', point, 1.12, 320);
  }

  playExplosion(points: GridPoint[]): void {
    points.forEach((point, index) => {
      const timer = window.setTimeout(() => this.spawnSprite('./assets/imgs/fx_explosion.png', point, 1.08, 360), index * 24);
      this.timers.push(timer);
    });
  }

  flyResource(_type: ResourceType, from: GridPoint, to: DOMRect): void {
    if (!this.effectContainer || !window.PIXI) return;
    const PIXI = window.PIXI;
    const texture = PIXI.Assets.get('./assets/imgs/fx_resource_fly.png');
    if (!texture) return;
    const sprite = new PIXI.Sprite(texture) as InstanceType<typeof window.PIXI.Sprite> & { baseScale: number };
    const start = this.cellCenter(from);
    const target = this.domRectCenterInCanvas(to);
    sprite.anchor.set(0.5);
    sprite.x = start.x;
    sprite.y = start.y;
    sprite.baseScale = Math.min(36 / texture.width, 36 / texture.height);
    sprite.scale.set(sprite.baseScale);
    sprite.alpha = 0.95;
    this.effectContainer.addChild(sprite);
    const startTime = window.performance.now();
    const duration = 520;
    const tick = () => {
      const elapsed = window.performance.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = 1 - (1 - progress) * (1 - progress);
      sprite.x = start.x + (target.x - start.x) * ease;
      sprite.y = start.y + (target.y - start.y) * ease - Math.sin(progress * Math.PI) * 54;
      sprite.alpha = 1 - Math.max(0, progress - 0.72) / 0.28;
      sprite.scale.set(sprite.baseScale * (1 + 0.25 * Math.sin(progress * Math.PI)));
      if (progress < 1) {
        const timer = window.setTimeout(tick, 16);
        this.timers.push(timer);
      } else {
        sprite.destroy();
      }
    };
    tick();
  }

  destroy(): void {
    this.timers.forEach((timer) => window.clearTimeout(timer));
    this.timers = [];
    this.lastPreview = [];
    this.previewContainer?.removeChildren();
    this.effectContainer?.removeChildren();
    this.previewContainer = null;
    this.effectContainer = null;
    this.app = null;
  }

  private drawPreview(): void {
    if (!this.previewContainer || !window.PIXI) return;
    const PIXI = window.PIXI;
    this.previewContainer.removeChildren();
    this.lastPreview.forEach((point) => {
      const graphics = new PIXI.Graphics();
      graphics.roundRect(GRID_X + point.col * (CELL_W + CELL_GAP_X), GRID_Y + point.row * (CELL_H + CELL_GAP_Y), CELL_W, CELL_H, 8);
      graphics.fill({ color: 0xff5028, alpha: 0.24 });
      graphics.stroke({ color: 0xffd250, alpha: 0.82, width: 2 });
      this.previewContainer?.addChild(graphics);
    });
  }

  private spawnSprite(asset: string, point: GridPoint, scale: number, duration: number): void {
    if (!this.effectContainer || !window.PIXI) return;
    const PIXI = window.PIXI;
    const texture = PIXI.Assets.get(asset);
    if (!texture) return;
    const sprite = new PIXI.Sprite(texture) as InstanceType<typeof window.PIXI.Sprite> & { baseScale: number };
    const center = this.cellCenter(point);
    sprite.anchor.set(0.5);
    sprite.x = center.x;
    sprite.y = center.y;
    sprite.baseScale = Math.min((76 * scale) / texture.width, (80 * scale) / texture.height);
    sprite.scale.set(sprite.baseScale);
    this.effectContainer.addChild(sprite);
    const startTime = window.performance.now();
    const tick = () => {
      const elapsed = window.performance.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      sprite.alpha = 1 - progress;
      sprite.scale.set(sprite.baseScale * (1 + progress * 0.35));
      if (progress < 1) {
        const timer = window.setTimeout(tick, 16);
        this.timers.push(timer);
      } else {
        sprite.destroy();
      }
    };
    tick();
  }

  private domRectCenterInCanvas(rect: DOMRect): { x: number; y: number } {
    const canvas = this.app?.canvas as HTMLCanvasElement | undefined;
    const canvasRect = canvas?.getBoundingClientRect();
    if (!canvasRect || canvasRect.width === 0 || canvasRect.height === 0) {
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    }
    const screen = this.app?.screen;
    const scaleX = (screen?.width ?? canvasRect.width) / canvasRect.width;
    const scaleY = (screen?.height ?? canvasRect.height) / canvasRect.height;
    return {
      x: (rect.left + rect.width / 2 - canvasRect.left) * scaleX,
      y: (rect.top + rect.height / 2 - canvasRect.top) * scaleY,
    };
  }

  private cellCenter(point: GridPoint): { x: number; y: number } {
    return {
      x: GRID_X + point.col * (CELL_W + CELL_GAP_X) + CELL_W / 2,
      y: GRID_Y + point.row * (CELL_H + CELL_GAP_Y) + CELL_H / 2,
    };
  }
}

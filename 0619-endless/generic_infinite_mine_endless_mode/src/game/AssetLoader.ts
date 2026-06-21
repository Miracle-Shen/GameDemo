export const PIXI_TEXTURES = [
  './assets/imgs/tile_dark_wall.png', './assets/imgs/tile_sand.png', './assets/imgs/tile_ore_brick.png', './assets/imgs/tile_ore_brick_cracked.png',
  './assets/imgs/tile_mystery_brick.png', './assets/imgs/tile_unbreakable.png', './assets/imgs/tile_chest.png', './assets/imgs/icon_tool_cell.png', './assets/imgs/tile_empty_tunnel.png',
  './assets/imgs/fx_hit_break.png', './assets/imgs/fx_explosion.png', './assets/imgs/fx_resource_fly.png', './assets/imgs/ore_common_stone.png', './assets/imgs/ore_fluorite.png', './assets/imgs/ore_lapis.png',
  './assets/imgs/ore_amethyst.png', './assets/imgs/ore_blue_crystal.png', './assets/imgs/ore_jade.png', './assets/imgs/ore_fire_obsidian.png', './assets/imgs/ore_meteorite_iron.png', './assets/imgs/ore_starlight_stone.png',
];

export class AssetLoader {
  async loadPixiTextures(): Promise<void> {
    if (!window.PIXI?.Assets) return;
    await window.PIXI.Assets.load(PIXI_TEXTURES);
  }
}

export const IMAGE_ASSETS = {
  titleBg: 'bg_title.png',
  enterMine: 'btn_enter_mine.png',
  surfaceBg: 'mine_surface_bg.png',
  midBg: 'mine_mid_bg.png',
  shallowSeaBg: 'mine_shallow_sea_bg.png',
  deepSeaBg: 'mine_deep_sea_bg.png',
  coreBg: 'mine_core_bg.png',
  depthPanel: 'panel_depth.png',
  supplyPanel: 'panel_supply.png',
  toolBar: 'bar_tool.png',
  toolSlot: 'btn_tool_slot.png',
  pickIcon: 'hud_pickaxe_icon.png',
  rowBombIcon: 'hud_row_bomb_icon.png',
  areaBombIcon: 'hud_area_bomb_icon.png',
  bag: 'btn_bag.png',
  returnCamp: 'btn_return_camp.png',
  resultPanel: 'panel_result.png',
  replay: 'btn_replay.png',
  backTitle: 'btn_back_title.png',
} as const;

export const PIXI_TILE_ASSETS = [
  'tile_empty_tunnel.png',
  'tile_wall.png',
  'tile_sand.png',
  'tile_ore.png',
  'tile_blind_box.png',
  'tile_cover.png',
  'tile_chest.png',
  'marker_ore_hint.png',
  'marker_tool_hint.png',
] as const;

export const assetUrl = (fileName: string) => `./assets/imgs/${fileName}`;

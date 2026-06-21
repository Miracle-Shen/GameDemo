export enum AppPage {
  MineHome = 'mine_home',
  EndlessMine = 'endless_mine',
}

export enum RunState {
  Idle = 'idle',
  EnteringMine = 'entering_mine',
  Progressing = 'progressing',
  ToolSelected = 'tool_selected',
  BombPreview = 'bomb_preview',
  DigResolving = 'dig_resolving',
  StageUpPrompt = 'stage_up_prompt',
  RareUnlockToast = 'rare_unlock_toast',
  ReturnConfirm = 'return_confirm',
  ManualExitRequested = 'manual_exit_requested',
  ToolsDepleted = 'tools_depleted',
  Settling = 'settling',
  ResultPopup = 'result_popup',
  ReturnedToMineHome = 'returned_to_mine_home',
  Interrupted = 'interrupted',
}

export enum ToolType {
  Pickaxe = 'pickaxe',
  RowBomb = 'row_bomb',
  AreaBomb = 'area_bomb',
}

export enum CellType {
  DarkWall = 'dark_wall',
  Sand = 'sand',
  OreBrick = 'ore_brick',
  MysteryBrick = 'mystery_brick',
  Unbreakable = 'unbreakable',
  Chest = 'chest',
  ToolCell = 'tool_cell',
  Empty = 'empty',
}

export enum DepthStageId {
  Surface = 'surface',
  DeepSurface = 'deep_surface',
  ShallowSea = 'shallow_sea',
  DeepSea = 'deep_sea',
  CoreVolcanicMud = 'core_volcanic_mud',
}

export enum ModalType {
  Blocker = 'blocker',
  ConfirmReturn = 'confirm_return',
  Result = 'result',
}

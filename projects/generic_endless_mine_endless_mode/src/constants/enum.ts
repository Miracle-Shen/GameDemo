export enum AppRoute {
  Title = 'title',
  Running = 'endless_run',
  Settlement = 'settlement',
}

export enum RunStatus {
  Running = '推进中',
  Exhausted = '工具耗尽',
  Settling = '结算中',
}

export enum ToolType {
  Pick = 'pick',
  RowBomb = 'rowBomb',
  AreaBomb = 'areaBomb',
}

export enum CellType {
  Empty = 0,
  Wall = 1,
  Floor = 2,
  Special = 6,
}

export type MineContentType = 'sand' | 'ore' | 'blindBox' | 'chest' | 'tool' | 'emptyReveal';
export type SettlementReason = 'manual' | 'exhausted';

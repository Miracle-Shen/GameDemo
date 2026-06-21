import React from 'react';
import { CellType } from '@/constants';
import type { BoardCell, GridPoint } from '@/game/types';
import './index.750.less';

type PixiMineCanvasProps = {
  hostRef: React.RefObject<HTMLDivElement>;
  nextRowPreview: BoardCell[];
  previewCells: GridPoint[];
  onCellClick: (row: number, col: number) => void;
  onCellHover: (row: number, col: number) => void;
  onCellLeave: () => void;
};

const cellClass = (cell: BoardCell): string => {
  if (cell.type === CellType.DarkWall) return 'pixi-mine__next-cell--dark-wall';
  if (cell.type === CellType.OreBrick) return 'pixi-mine__next-cell--ore';
  if (cell.type === CellType.MysteryBrick) return 'pixi-mine__next-cell--mystery';
  if (cell.type === CellType.Unbreakable) return 'pixi-mine__next-cell--unbreakable';
  if (cell.type === CellType.Chest) return 'pixi-mine__next-cell--chest';
  if (cell.type === CellType.ToolCell) return 'pixi-mine__next-cell--tool';
  if (cell.type === CellType.Empty) return 'pixi-mine__next-cell--empty';
  return 'pixi-mine__next-cell--sand';
};

export const PixiMineCanvas: React.FC<PixiMineCanvasProps> = ({ hostRef, nextRowPreview, previewCells, onCellClick, onCellHover, onCellLeave }) => {
  const hitCells = new Array(42).fill(null);
  return (
    <div className="pixi-mine" onPointerLeave={onCellLeave}>
      <img className="pixi-mine__panel" src="./assets/imgs/panel_dig_grid.png" alt="" />
      <div ref={hostRef} className="pixi-mine__canvas" />
      <button className="pixi-mine__depth-badge"><span>当前<br />深度</span></button>
      <div className="pixi-mine__depth-line" />
      <div className="pixi-mine__preview-layer" aria-hidden="true">
        {previewCells.map((point) => <span key={`${point.row}-${point.col}`} style={{ left: 25 + point.col * 74, top: 22 + point.row * 79 }} />)}
      </div>
      <div className="pixi-mine__next-row" aria-label="真实下一行矿井区域">
        {nextRowPreview.map((cell, index) => <span key={`${cell.col}-${index}-${cell.type}`} className={`pixi-mine__next-cell ${cellClass(cell)}`} />)}
      </div>
      <div className="pixi-mine__grid-hit">
        {hitCells.map((_, index) => {
          const row = Math.floor(index / 7);
          const col = index % 7;
          return <button key={index} onPointerEnter={() => onCellHover(row, col)} onFocus={() => onCellHover(row, col)} onClick={() => onCellClick(row, col)} aria-label={`格子${index + 1}`} />;
        })}
      </div>
    </div>
  );
};

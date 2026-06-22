import React from 'react';
import { DESIGN_HEIGHT } from '../utils';
import '../styles/page-common.less';

// ============================================================================
// 固定画布壳组件 —— 所有页面用 PageShell，所有弹窗/浮层用 OverlayStage。
// 禁止页面/弹窗各自再写 .scene-stage / transform:scale 缩放逻辑（见 coding-rules §10.6）。
// 视口缩放变量由 src/main.tsx 的 initViewport() 注入；本文件只消费，不重复实现。
// ============================================================================

// 页面壳：背景铺满真实视口；750 设计坐标的 UI 放进 .scene-stage，随 --scene-scale 等比缩放
export const PageShell: React.FC<{ className?: string; bg: string; children: React.ReactNode }> = ({ className = '', bg, children }) => (
  <div className={`page-root ${className}`}>
    <img className="scene-bg" src={`./assets/imgs/${bg}`} alt="" />
    <div className="scene-stage">{children}</div>
  </div>
);

// 弹窗/浮层壳：复用同一 --scene-scale，translate 居中。子节点用 750 设计坐标定位。
export const OverlayStage: React.FC<{ className?: string; onMaskClick?: () => void; children: React.ReactNode }> = ({ className = '', onMaskClick, children }) => (
  <div className={`overlay-stage ${className}`} onClick={onMaskClick}>
    <div className="overlay-stage__canvas">{children}</div>
  </div>
);

// 绝对定位助手（box = 设计坐标系 [x, y, w, h]）。
// anchor='bottom' 用 bottom 锚 + 安全区，使底部导航 / CTA 在高屏贴真实屏幕底（而非浮在半空）。
// fixed-stage 下整层随舞台缩放，故此处内联 px 安全（无需 rem/pxtorem）。
export const Abs: React.FC<{
  box: [number, number, number, number];
  z?: number;
  anchor?: 'top' | 'bottom';
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}> = ({ box, z = 10, anchor = 'top', className = '', onClick, children }) => {
  const [x, y, w, h] = box;
  const style: React.CSSProperties =
    anchor === 'bottom'
      ? { position: 'absolute', left: x, bottom: `calc(${DESIGN_HEIGHT - y - h}px + env(safe-area-inset-bottom))`, width: w, height: h, zIndex: z }
      : { position: 'absolute', left: x, top: y, width: w, height: h, zIndex: z };
  return (
    <div className={className} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

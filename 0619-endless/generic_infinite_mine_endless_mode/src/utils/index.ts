/**
 * Safe JSON parse with fallback
 */
export const parseJSON = <T>(str: string, fallback: T): T => {
  try {
    return JSON.parse(str) as T;
  } catch {
    return fallback;
  }
};

/**
 * Format number with commas (e.g., 1234567 → "1,234,567")
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Cancellable delay utility for mock APIs / async UI helpers.
 * Pass AbortSignal from effect cleanup when a caller needs to cancel pending work.
 */
export const delay = (ms: number, signal?: AbortSignal): Promise<void> =>
  new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason ?? new DOMException('Delay aborted', 'AbortError'));
      return;
    }

    const timer = window.setTimeout(() => {
      signal?.removeEventListener('abort', handleAbort);
      resolve();
    }, ms);

    function handleAbort() {
      window.clearTimeout(timer);
      signal?.removeEventListener('abort', handleAbort);
      reject(signal?.reason ?? new DOMException('Delay aborted', 'AbortError'));
    }

    signal?.addEventListener('abort', handleAbort, { once: true });
  });

/**
 * Clamp a number between min and max
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

// ─── 移动端固定画布（fixed-stage）适配 ──────────────────────────────────────────
// 设计稿基准尺寸（所有页面坐标都基于该设计稿；若架构 designCanvas 不同，同步改这里 + page-common.less）
export const DESIGN_WIDTH = 750;
export const DESIGN_HEIGHT = 1334;

/**
 * 按宽度等比缩放（不放大），把缩放结果写进 :root 的 CSS 变量供 page-common.less 消费：
 * - --scene-scale：无单位缩放比（scale() 只能吃无单位值，故必须用 JS 算，不能写 scale(calc(...vw...))）
 * - --scene-vh：视口高 / scale，即「设计坐标系下的视口高」。.scene-stage 用它做高度 →
 *   缩放后正好铺满屏幕高度，top 锚贴顶、bottom 锚（bottom + safe-area）贴真实屏幕底。
 */
export const syncViewport = (): void => {
  const vw = window.visualViewport?.width || window.innerWidth || DESIGN_WIDTH;
  const vh = window.visualViewport?.height || window.innerHeight || DESIGN_HEIGHT;
  const scale = Math.min(vw / DESIGN_WIDTH, 1);
  const root = document.documentElement.style;
  root.setProperty('--scene-scale', scale.toFixed(6));
  root.setProperty('--scene-vh', `${(vh / scale).toFixed(2)}px`);
};

/** 注册视口自适应：立即执行一次（首屏前）并监听 resize / 横竖屏 / visualViewport 变化 */
export const initViewport = (): void => {
  syncViewport();
  window.addEventListener('resize', syncViewport);
  window.addEventListener('orientationchange', syncViewport);
  window.visualViewport?.addEventListener('resize', syncViewport);
};

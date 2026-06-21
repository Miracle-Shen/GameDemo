import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// ⚠️ 适配走固定画布（fixed-stage，见 src/styles/page-common.less）：全部用设计稿 px + transform:scale。
//    不启用 postcss-pxtorem —— px→rem 会与舞台缩放叠加成双重缩放。请勿重新引入。

/** 去掉 index.html 中 script 的 type="module" 和 crossorigin，加 defer，使 file:// 可直接打开。
 *  ⚠️ 必须限定 apply: 'build'：dev server 下浏览器把 Vite 注入的 /@vite/client、/src/main.tsx
 *  等当成 classic script 加载，ESM import 会直接报 "Cannot use import statement outside a module"
 *  导致 npm run dev 白屏 + SyntaxError。此插件只在打 bundle 产物时生效（让 file:// 协议双击打开
 *  HTML 也能运行），dev 阶段保持 ESM 语义不变。 */
function fileProtocolCompatible(): Plugin {
  return {
    name: 'file-protocol-compatible',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html) {
      return html
        .replace(/ type="module"/g, '')
        .replace(/ crossorigin/g, '')
        .replace(/<script /g, '<script defer ');
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), fileProtocolCompatible()],
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});

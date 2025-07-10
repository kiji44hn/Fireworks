import { defineConfig } from '@vue/cli-service';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
    },
    entry: './src/main.ts',
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            tailwindcss, // Tailwind CSS v4のPostCSSプラグイン
            autoprefixer,
          ],
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('ts')
      .test(/\.ts$/)
      .use('ts-loader')
      .loader('ts-loader')
      .tap((options) => ({
        ...options,
        appendTsSuffixTo: [/\.vue$/], // .vueファイルのTypeScriptを処理
      }))
      .end();
  },
});
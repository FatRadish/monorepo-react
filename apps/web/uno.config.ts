import { defineConfig, presetAttributify, presetIcons, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3({
      dark: 'class', // 使用 class 模式切换主题，也可以用 'media' 跟随系统
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: {
    // 可以在这里定义快捷类名
    'btn': 'px-4 py-2 border-0 rounded inline-block bg-blue-500 text-white cursor-pointer hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:opacity-50',
    'btn-primary': 'btn bg-blue-500 hover:bg-blue-600',
    'btn-secondary': 'btn bg-gray-500 hover:bg-gray-600',
  },
})

const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@repository': path.resolve(__dirname, '../src/repository'),
      '@interface': path.resolve(__dirname, '../src/interface'),
      '@api': path.resolve(__dirname, '../src/pages/api'),
    }
    return config
  },
}

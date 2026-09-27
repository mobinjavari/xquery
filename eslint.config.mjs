// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      // Vue 3 supports fragments; multiple root nodes are intentional here.
      'vue/no-multiple-template-root': 'off',
    },
  },
)

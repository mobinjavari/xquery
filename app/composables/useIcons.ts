import { defineAsyncComponent } from 'vue'

export default () => {
  const resolveIcon = (name: string) =>
    defineAsyncComponent(() =>
      import(`@/components/icons/${name}.vue`)
    )

  return { resolveIcon }
}

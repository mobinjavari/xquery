import { defineAsyncComponent } from 'vue'

export default () => {
  const cs = (name: string) =>
    defineAsyncComponent(() =>
      import(`@/components/icons/${name}.vue`)
    )

  return { cs }
}

import Button from 'primevue/button'
import PrimeVue from 'primevue/config'
import Tailwind from 'primevue/passthrough/tailwind'

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true, unstyled: true, pt: Tailwind })
  nuxtApp.vueApp.component('Button', Button)
})

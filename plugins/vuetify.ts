// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#2e7d32', // green-darken-2
            secondary: '#E64A19', // orange-darken-2
            accent: '#FFA726', // amber-darken-1
            error: '#D32F2F',
            info: '#1976D2',
            success: '#388E3C',
            warning: '#F57C00',
            background: '#fafafa',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})

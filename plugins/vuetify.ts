import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors.mjs'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
      components,
      directives,
      theme:{
        themes:{
          light:{
            dark:false,
            colors:{

            primary:colors.grey.darken1 ,
            secondary:colors.grey.lighten2,
          }}
        }
      }
    })
    nuxtApp.vueApp.use(vuetify)
})
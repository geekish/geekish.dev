import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import '~/assets/tailwind.css'
import Layout from '~/layouts/Layout.vue'

import 'tippy.js/dist/tippy.css'
import 'prism-themes/themes/prism-dracula.css'

dayjs.extend(advancedFormat)
dayjs.extend(localizedFormat)

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'me',
    href: 'https://github.com/geekish',
  })

  head.link.push({
    rel: 'pgpkey authn',
    href: '/keybase.txt',
  })

  Vue.component('Layout', Layout)
  Vue.prototype.$date = dayjs
}

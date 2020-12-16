import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import updateLocale from 'dayjs/plugin/updateLocale'
import relativeTime from 'dayjs/plugin/relativeTime'

import '~/assets/tailwind.css'
import Layout from '~/layouts/Layout.vue'

import 'tippy.js/dist/tippy.css'
import 'prism-themes/themes/prism-dracula.css'

dayjs.extend(advancedFormat)
dayjs.extend(updateLocale)
dayjs.extend(relativeTime)

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s',
    s: 'just now',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: 'yesterday',
    dd: '%dd',
    M: '1mo',
    MM: '%dmo',
    y: '1y',
    yy: '%dy',
  },
})

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'me',
    href: 'https://github.com/geekish',
  })
  head.link.push({
    rel: 'webmention',
    href: 'https://webmention.io/geekish.dev/webmention',
  })
  head.link.push({
    rel: 'pingback',
    href: 'https://webmention.io/geekish.dev/xmlrpc',
  })
  head.link.push({
    rel: 'pgpkey',
    href: '/key.txt',
    type: 'text/plain',
  })

  Vue.component('Layout', Layout)
  Vue.prototype.$date = dayjs
}

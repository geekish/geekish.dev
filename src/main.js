import '~/assets/tailwind.css'
import Layout from '~/layouts/Layout.vue'

import 'tippy.js/dist/tippy.css'
import 'prism-themes/themes/prism-dracula.css'

export default function (Vue, { head }) {
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
}

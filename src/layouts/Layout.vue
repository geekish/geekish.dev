<template>
  <div class="layout">
    <div class="fixed top-0 right-0 m-6">
      <ToggleTheme />
    </div>
    <slot name="banner" />
    <header class="container max-w-4xl mx-auto">
      <div class="flex items-center justify-center pt-18">
        <g-link to="/" class="inline-flex font-mono text-3xl leading-none tracking-tight text-gray-800 lowercase group dark:text-gray-100 hover:text-gray-900">
          <svg class="w-6 h-6 mt-1 mr-1 text-gray-500 group-hover:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
          Geekish.dev
        </g-link>
        <slot name="after-brand" />
      </div>
    </header>
    <main class="container max-w-4xl mx-auto my-12">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script>
import tippy  from 'tippy.js'
import twemoji from 'twemoji'
import Footer from '~/components/Footer'
import ToggleTheme from '~/components/ToggleTheme'

export default {
  components: { Footer, ToggleTheme },
  mounted () {
    tippy('[data-tippy-content]', {
      placement: 'bottom',
    })

    tippy('abbr', {
      content: (reference) => reference.getAttribute('title'),
      placement: 'bottom',
    })

    twemoji.parse(this.$el)
  },
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

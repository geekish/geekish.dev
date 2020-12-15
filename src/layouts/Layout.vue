<template>
  <div class="layout">
    <div class="fixed top-0 right-0 m-6">
      <ToggleTheme />
    </div>
    <Header />
    <main class="container max-w-4xl mx-auto my-12">
      <slot/>
    </main>
    <Footer />
  </div>
</template>
<script>
import tippy  from 'tippy.js'
import twemoji from 'twemoji'
import ToggleTheme from '../components/ToggleTheme'
import Footer from '../pages/partials/Footer'
import Header from '../pages/partials/Header'

export default {
  components: { Header, Footer, ToggleTheme },
  mounted () {
    tippy('[data-tippy-content]', {
      placement: 'bottom',
    })

    tippy('abbr', {
      content: (reference) => reference.getAttribute('title'),
      placement: 'bottom',
    })

    twemoji.parse(this.$el)
  }
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<template>
  <Layout>
    <template #after-brand>
      <small class="ml-1 font-mono text-3xl leading-none tracking-tight text-gray-400 lowercase">/about</small>
    </template>
    <article class="prose">
      <p class="lead">
        Hi! I’m Hannah. I live in Iowa with my fiancé, our daughter, and two cats. My favorite food is mac & cheese. I'll write more here soon.
      </p>

      <h3>Find me elsewhere:</h3>

      <ul>
        <li><a href="https://github.com/geekish">Github</a></li>
        <li><a href="https://keybase.io/geekish">Keybase</a></li>
        <li><a href="https://reddit.com/u/geekishly">Reddit</a></li>
        <li><a href="https://twitter.com/hannahwarmbier">Twitter</a></li>
      </ul>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About',
  },
}
</script>

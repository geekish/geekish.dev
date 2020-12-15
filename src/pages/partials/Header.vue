<template>
  <header class="container mx-auto max-w-4xl">
    <div class="pt-18 flex items-center">
      <g-link to="/" class="group inline-flex text-gray-800 dark:text-gray-100 font-mono lowercase text-3xl tracking-tight leading-none hover:text-gray-900">
        <svg class="text-gray-500 group-hover:text-emerald-400 mt-1 mr-1 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
        Geekish.dev
      </g-link>
      <slot name="after-brand" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>

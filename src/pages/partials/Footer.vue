<template>
  <footer class="text-center">
    <div class="px-12 py-24">
      <div>
        <p class="text-xl text-gray-500">
          &copy; {{ year }} to
          <a class="font-normal text-gray-800 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-300" href="https://hannahwarmbier.com">Hannah Warmbier</a>.
          Powered by
          <a class="text-gray-800 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-300" href="https://gridsome.org">
            Gridsome
          </a>
          and
          <a class="text-gray-800 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-300" href="https://netlify.com">
            Netlify
          </a>
          <svg class="inline ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
        </p>
        <nav class="mt-4 space-x-5 text-center" role="navigation">
          <g-link class="font-medium text-gray-600 hover:text-indigo-600" to="/">Home</g-link>
          <g-link class="font-medium text-gray-600 hover:text-indigo-600" to="/about/">About</g-link>
          <g-link class="font-medium text-gray-600 hover:text-indigo-600" to="/uses/">Uses</g-link>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    year: () => new Date().getFullYear(),
  },
}
</script>

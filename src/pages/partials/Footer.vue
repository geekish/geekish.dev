<template>
  <footer class="footer text-center">
    <div class="px-12 pt-12 pb-24">
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
          <a class="text-gray-600 dark:text-gray-500 hover:text-indigo-700 dark:hover:text-indigo-300" href="https://github.com/geekish/geekish.dev">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline w-5 h-5 align-middle pb-1" width="44"
                 height="44" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                 stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
            </svg>
          </a>
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

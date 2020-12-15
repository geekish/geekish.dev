<template>
  <div class="flex-wrap">
    <div class="flex flex-col items-center justify-center h-screen text-center">
      <div class="transform rotate-10 leading-none font-mono text-7xl font-bold text-gray-200">404</div>
      <div class="relative">
        <h1 class="font-semibold leading-tight text-4xl text-gray-500 z-40">Page Not Found</h1>
        <p class="mt-2 leading-5 text-lg text-gray-400 z-40">These aren't the droids you are looking for.</p>
        <p class="mt-8 w-full z-50">
          <a class="text-center font-medium text-indigo-600 hover:text-link-hover trans-in-out-150" href="/">
            Home &rarr;
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404"
}
</script>

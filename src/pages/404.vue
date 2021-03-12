<template>
  <div class="flex-wrap">
    <div class="flex flex-col items-center justify-center h-screen text-center">
      <div class="font-mono font-bold leading-none text-gray-200 transform rotate-10 text-7xl">
        404
      </div>
      <div class="relative">
        <h1 class="z-40 text-4xl font-semibold leading-tight text-gray-500">
          Page Not Found
        </h1>
        <p class="z-40 mt-2 text-lg leading-5 text-gray-400">
          These aren't the droids you are looking for.
        </p>
        <p class="z-50 w-full mt-8">
          <a class="font-medium text-center text-indigo-600 hover:text-link-hover trans-in-out-150" href="/">
            Home &rarr;
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '404',
}
</script>

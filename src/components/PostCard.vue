<template>
  <article class="space-y-2 xl:space-y-0 xl:items-baseline">
    <div class="space-y-4">
      <header>
        <h2 class="text-2xl font-medium leading-8">
          <g-link class="text-gray-900 hover:text-indigo-700 dark:text-gray-100 dark:hover:text-indigo-200" :to="post.path">{{ post.title }}</g-link>
        </h2>
        <p class="mt-2 text-lg leading-6 text-gray-500">
          <time :datetime="post.date">{{ post.date }}</time>
        </p>
      </header>
      <div class="prose text-gray-700 max-w-none dark:text-gray-200">
        {{ post.excerpt }}
      </div>
      <div class="flex items-center justify-between">
        <p class="text-base font-medium leading-6">
          <g-link class="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-500" :aria-label="`Read &quot;${post.title}&quot;`" :to="post.path">Read more →</g-link>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

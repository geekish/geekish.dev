<template>
  <Layout>
    <template #after-brand>
      <small class="font-mono text-3xl tracking-tight leading-none text-gray-400 lowercase ml-1">/blog</small>
    </template>
    <article>
      <header class="leading-snug mb-8">
        <h1 class="font-medium text-2xl lg:text-3xl leading-snug text-gray-900 dark:text-gray-100">{{ post.title }}</h1>
        <p class="mt-2 text-gray-500 text-lg leading-6">
          <time :datetime="post.date">{{ date.format('MMMM Do, YYYY') }}</time>
        </p>
      </header>
      <div class="mx-auto prose text-gray-700 dark:text-gray-200" v-html="post.content" />
    </article>
  </Layout>
</template>

<script>
export default {
  name: "Post",
  computed: {
    post () {
      return this.$page.post
    },
    date () {
      return this.$date(this.$page.post.date)
    }
  }
}
</script>
<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    categories {
      id
      title
      path
    }
    content
  }
}
</page-query>

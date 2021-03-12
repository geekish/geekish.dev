<template>
  <Layout>
    <template #after-brand>
      <small class="ml-1 font-mono text-3xl leading-none tracking-tight text-gray-400 lowercase">/blog</small>
    </template>
    <article>
      <header class="mb-8 leading-snug">
        <h1 class="text-2xl font-medium leading-snug text-gray-900 lg:text-3xl dark:text-gray-100">{{ post.title }}</h1>
        <p class="mt-2 text-lg leading-6 text-gray-500">
          <time :datetime="post.date">{{ date }}</time>
        </p>
      </header>
      <div class="mx-auto prose text-gray-700 dark:text-gray-200" v-html="post.content" />
    </article>
    <hr class="my-8">
    <Webmentions :mentions="$page.mentions" :post="$page.post" />
  </Layout>
</template>

<script>
import { format, parseISO } from 'date-fns'
import Webmentions from '~/components/Webmentions'

export default {
  name: "Post",
  components: { Webmentions },
  computed: {
    post () {
      return this.$page.post
    },
    date () {
      return format(parseISO(this.$page.post.date), 'MMMM do, yyyy')
    },
  },
}
</script>
<page-query>
query Post($path: String!) {
  post: post(path: $path) {
    title
    path
    date
    timeToRead
    categories {
      id
      title
      path
    }
    content
  }
  mentions: allWebMention(filter: { wmTarget: { regex: $path } }) {
    totalCount
    edges {
      node {
        wmId
        url
        published
        wmProperty
        wmReceived
        wmSource
        content {
          text
        }
        author {
          name
          photo
          url
        }
      }
    }
  }
}
</page-query>

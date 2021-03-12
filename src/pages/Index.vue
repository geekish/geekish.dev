<template>
  <Layout>
    <div class="mx-auto my-16">
      <div class="text-center md:text-left">
        <p class="text-2xl leading-relaxed text-gray-600 dark:text-gray-400 md:mt-5 md:max-w-4xl">
          <strong class="font-medium text-gray-800 dark:text-gray-200">Hi, I'm Hannah! 👋</strong>
          I am a full-time parent and a web developer. This is the place where I write about everything <code class="text-gray-800 dark:text-gray-200">&lt;geekish&gt;</code>.
        </p>
      </div>
    </div>

    <section>
      <!--  <h2 class="text-3xl font-medium">Latest Posts</h2>-->
      <ul class="my-8 space-y-12">
        <li v-for="edge in posts.edges" :key="edge.node.id">
          <PostCard :post="edge.node" />
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
import PostCard from '~/components/PostCard'

export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
    PostCard,
  },
  computed: {
    posts () {
      return this.$page.posts
    },
  },
}
</script>
<page-query>
query {
  posts: allPost(perPage: 5, filter: { published: { eq: true } }) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date(format: "MMMM Do YYYY")
        timeToRead
        path
        excerpt
        categories {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

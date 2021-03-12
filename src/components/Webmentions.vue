<template>
  <section>
    <div class="pb-4 mb-6">
      <h5 class="text-2xl font-medium">{{ pluralize('Mention', total) }}</h5>
      <p class="mt-2">
        Want to respond?
        <a
          class="font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-500"
          :href="`https://twitter.com/intent/tweet/?via=hannahwarmbier&amp;text=${post.title}&amp;url=${post.url}`" target="_blank" rel="noopener">
          Share on Twitter &rarr;
        </a>
      </p>
    </div>

    <div v-if="hasLikes" class="mb-6">
      <h6 class="mb-4 text-xl font-medium">{{ pluralize('Like', likes.length) }}</h6>
      <div class="flex flex-wrap items-center">
        <a :href="mention.node.author.url" v-for="mention in likes" :key="mention.node.wmId" class="p-1 mr-1">
          <g-image :src="mention.node.author.photo" class="inline w-10 h-10 rounded-full" />
        </a>
      </div>
    </div>

    <div v-if="hasRetweets" class="mb-6">
      <h6 class="mb-4 text-xl font-medium">{{ pluralize('Retweet', retweets.length) }}</h6>
      <div class="flex flex-wrap items-center">
        <a :href="mention.node.url" v-for="mention in retweets" :key="mention.node.wmId" class="p-1 mr-1">
          <g-image :src="mention.node.author.photo" class="inline w-10 h-10 rounded-full" />
        </a>
      </div>
    </div>

    <div v-if="hasReplies" class="mb-6">
      <h6 class="mb-4 text-xl font-medium">{{ pluralize('Reply', replies.length) }}</h6>
      <div
        class="flex items-start p-4 my-2 bg-gray-100 group dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-700"
        v-for="mention in replies"
        :key="mention.node.wmId"
      >
        <g-image :src="mention.node.author.photo" class="w-10 h-10 rounded-full" />
        <div class="pl-4">
          <a
            :href="mention.node.author.url"
            class="text-lg font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-500">
            {{ mention.node.author.name }}
          </a>
          <span class="text-gray-500">· <a :href="mention.node.url"><time
            :datetime="mention.node.published">{{ relativeTime(mention.node.published) }}</time></a></span>
          <p class="mt-2">{{ mention.node.content.text }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import pluralize from 'pluralize'

export default {
  name: 'Webmentions',
  props: {
    mentions: {
      type: [Array, Object],
      required: true,
    },
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    total () {
      return this.mentions.totalCount
    },
    likes () {
      return this.filterMentions('like-of')
    },
    hasLikes () {
      return this.likes.length > 0
    },
    retweets () {
      return this.filterMentions('repost-of')
    },
    hasRetweets  () {
      return this.retweets.length > 0
    },
    replies () {
      return this.filterMentions('in-reply-to')
    },
    hasReplies () {
      return this.replies.length > 0
    },
  },
  methods: {
    filterMentions (type) {
      return this.mentions.edges.filter(edge => edge.node.wmProperty === type)
    },
    relativeTime (date) {
      return this.$date(date).fromNow()
    },
    pluralize (value, count, prefix = true) {
      return pluralize(value, count, prefix)
    },
  },
}
</script>

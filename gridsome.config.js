const tailwindcss = require('tailwindcss')
const postCssNested = require('postcss-nested')

module.exports = {
  siteName: 'Geekish.dev',
  icon: './src/favicon.svg',
  templates: {
    Post: '/blog/:title',
    Category: '/category/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/**/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          categories: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },
    {
      use: '@zefman/gridsome-source-webmention',
      options: {
        domain: 'geekish.dev',
        token: '5cSvovua2fSb6WjYbKquXg',
      },
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss(),
          postCssNested(),
        ],
      },
    },
  },
}


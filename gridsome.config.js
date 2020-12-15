const tailwindcss = require('tailwindcss')
const postCssNested = require('postcss-nested')

module.exports = {
  siteName: 'Geekish.dev',
  templates: {
    Post: '/:year/:month/:day/:title',
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


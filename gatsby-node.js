/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageComponent = path.resolve('./src/templates/page.js')
    resolve(
      graphql(
        `
        {
	      allContentfulPage {
	          edges {
	            node {
	              title,
	              slug,
	            }
	          }
	      }
	    }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pages = result.data.allContentfulPage.edges
        pages.forEach((post, index) => {
        console.log('* created page', post.node.title)
          createPage({
            path: `/${post.node.slug}/`,
            component: pageComponent,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  });
}


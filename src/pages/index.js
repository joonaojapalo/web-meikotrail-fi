import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Hero from '../components/hero'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero/>
    <div class="row">
      <div class="col-sm-12">
        <section>
          <h1>Hola polkujuoksun ystävä!</h1>
        </section>
      </div>
    </div>
    <Link to="/blog/kilpailuohjeet">blog/kilpailuohjeet</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query NavigationQuery {
    contentfulNavigation(name: { eq: "Main menu" }) {
      name
      pages {
        id
        title
      }
    }
  }
`

import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Header from '../components/header';
import {Row, Col12, Col8, Col4} from '../components/grid';

const Video = ({src}) => (
  <div className="box box-left">
    <div className="embed-16-9">
        <iframe
          width="820"
          height="455"
          src={src}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen/>
    </div>
  </div>
);


const IndexPage = ({ data }) => (
  <Layout>
    <Header siteTitle="Etusivu">
      <Hero src="//images.ctfassets.net/5s72vk76dutl/HXfQV1ycQdonA5sfIvU5J/1c06b23915990b8a2f034b403f36ca63/header.png"/>
    </Header>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container-fluid">
      <Row>
        <Col12>
          <h1>Hola polkujuoksun ystävä!</h1>
        </Col12>
      </Row>
      <Row>
        <Col8>
          Foo
        </Col8>
        <Col4>
          Bar
        </Col4>
      </Row>

      <Row>
        <Col12>
          <section>
            <Video src="https://www.youtube.com/embed/B2L3WGs_PF0?ecver=1"/>
          </section>
        </Col12>
      </Row>
    </div>
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

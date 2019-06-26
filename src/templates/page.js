import React from 'react';
import { Link, graphql } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { get } from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import {ContainerFluid, Row, Col12, Col8, Col4} from '../components/grid';
import Paragraph from '../components/paragraph';
import styles from './page.module.scss';

const BlockItem = ({item}) => {
  if (!item) {
    return null;
  }

  const layoutBlock = item.layout_block[0];
  return (
    <Col4 key={item.id}>
      {layoutBlock.name && <h3>{layoutBlock.name}</h3>}
      {layoutBlock.items && layoutBlock.items.map(item => <h4>{item.title}</h4>)}
    </Col4>
  )
};

const Block = ({block}) => block && (
  <Row key={block.id}>
    {block.items && block.items.map(item => <BlockItem item={item}/>)}
    <pre>{JSON.stringify(block)}</pre>
  </Row>
);

const PageLayout = ({layout}) => layout && (
  <>
    {layout.blocks && layout.blocks.map(block => <Block block={block}/>)}
  </>
);

const getRandomRotate = () => getRotate(Math.random() * 2 - 1);
const getRotate = rotation => ({
  transform: `rotate(${rotation}deg)`,
});

const Bold = ({ children }) => <strong>{children}</strong>;
const Text = ({ children }) => <p className={styles.Text} style={getRandomRotate()}>{children}</p>;
const H1 = ({children}) => <h1 className={styles.h1}>{children}</h1>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
  },
}
const RichText = ({json}) => documentToReactComponents(json, options);

const ContentfulPage = ({ data }) => {
  const title = get(data, 'contentfulPage.title');
  const pageLayout = get(data, 'contentfulPage.layout');
  const contentfulDocument = get(data, 'contentfulPage.text.body.json');

  return (
    <Layout>
      <SEO title={title} />
      <Header siteTitle={title}>
        <section>
          <div class="box box-left">
            <h1>{title}</h1>
          </div>
        </section>
      </Header>
      <ContainerFluid>
        <PageLayout layout={pageLayout}/>
        <Row>
          <Col12>
            <RichText json={contentfulDocument}/>
            <pre>{JSON.stringify(contentfulDocument)}</pre>
          </Col12>
        </Row>
      </ContainerFluid>
    </Layout>
  )
}

export default ContentfulPage

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      contentful_id
      updatedAt
      slug
      title
      text {
        body {
          json
        }
      }
      layout {
        blocks {
          id,
          items {
            id,
            layout_block {
              id,
              name
              items {
                id,
                title,
                body {
                  id,
                  json
                }
                media {
                  id
                  file {
                    url
                    fileName
                    contentType
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

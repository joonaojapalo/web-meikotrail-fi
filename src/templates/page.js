import React from "react"
import { Link, graphql } from 'gatsby'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {get} from 'lodash'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContentfulPage = ({data}) => {
	const title = get(data, 'contentfulPage.title');
	const contentfulDocument = get(data, 'contentfulPage.text.body.json');
	return (
	  <Layout>
	    <SEO title={title} />
	    <h1>{title}</h1>
	    {documentToReactComponents(contentfulDocument)}
	    <Link to="/">Go back to the homepage</Link>
	  </Layout>
	);
};


export default ContentfulPage;

export const pageQuery = graphql`
query PageQuery($slug: String!) {
  contentfulPage(slug:{eq:$slug}) {
    contentful_id,
    updatedAt,
    slug,
    title,
    text {
      body {
        json,
      }
    }
  }
}
`;

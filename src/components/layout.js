import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import 'flexboxgrid-sass';
import './layout.scss';
import Header from './header';

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <div style={{
        maxWidth: 960,
        margin: '0 auto'
      }}>
        <div className="row">
          <div className="col-xs-12">
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()} Sporzz
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

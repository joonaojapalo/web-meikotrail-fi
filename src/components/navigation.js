import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';

const NavItem = ({title, slug}) => <li key={slug}><Link to={`/${slug}`}>{title}</Link></li>;

const Navigation = () => {
    const { contentfulNavigation } = useStaticQuery(
    graphql`
      query {
        contentfulNavigation(name: {eq: "Main menu"}) {
          pages {
            slug
            title
          }
        }
      }
    `
  )
    const { pages } = contentfulNavigation;

  return (
	<ul>
		{pages.map(page => <NavItem {...page}/>)}
	</ul>
  );
};

Navigation.propTypes = {
  pages: PropTypes.array,
};

export default Navigation;

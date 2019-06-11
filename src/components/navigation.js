import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from './navigation.module.scss';
import classNames from 'classnames';

const HamburgerIcon = () => (
  <svg height="24" className="action" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
);

const NavItem = ({title, slug}) => <li key={slug}><Link to={`/${slug}`}>{title}</Link></li>;

const useToggle = (initial=false) => {
  const [state, setState] = useState({
    on: initial,
    off: !initial
  });

  return [
    state,
    () => setState({
      on: !state.on,
      off: !state.off
    })
  ];
}

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
  const [toggle, setToggle] = useToggle();

  return (
    <>
      <button className={`btn btn-link ${styles.Toggle}`} onClick={setToggle}>
        <HamburgerIcon/>
      </button>
      <ul className={classNames({
          [styles.Navigation]: true,
          [styles.Closed]: toggle.off
        })}>
        <NavItem slug="/" title="Etusivu"/>
    		{pages.map(page => <NavItem {...page}/>)}
    	</ul>
    </>
  );
};

Navigation.propTypes = {
  pages: PropTypes.array,
};

export default Navigation;

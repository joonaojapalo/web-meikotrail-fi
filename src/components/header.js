import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.scss'
import Navigation from './navigation';


const Header = ({ siteTitle }) => {
  return (
    <header className={styles.Header}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Navigation/>
      </div>
    </header>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

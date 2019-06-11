import React from 'react';
import PropTypes from 'prop-types';
import { ContainerFluid, Row, Col12 } from '../components/grid';

import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
      <ContainerFluid>
        <Row>
          <Col12>
            <footer style={{textAlign: "center", margin: 20}}>
              © {new Date().getFullYear()} Sporzz
            </footer>
          </Col12>
        </Row>
      </ContainerFluid>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

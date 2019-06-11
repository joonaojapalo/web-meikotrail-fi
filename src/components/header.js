import PropTypes from 'prop-types';
import React from 'react';
import styles from './header.module.scss';
import Navigation from './navigation';
import { ContainerFluid, Row, Col12 } from './grid';

const Header = ({ children }) => {
  return (
    <header className={styles.Header}>
      {children}
      <ContainerFluid>
      	<Row>
      		<Col12>
	      		<Navigation/>
      		</Col12>
      	</Row>
      </ContainerFluid>
    </header>
  )
};

export default Header

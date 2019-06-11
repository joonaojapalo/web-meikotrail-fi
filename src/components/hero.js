import React from 'react'
import styles from './layout.scss';

const Hero = ({src}) => {
  return (
    <section>
      <div className="box box-right">
        <img
        	className="responsive"
        	src={src}
        	alt="hero image"/>
      </div>
    </section>
  )
};


export default Hero

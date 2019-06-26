import React from 'react';

const Paragraph = ({children}) => (
  <div style={{
      background: 'white',
      padding: 10,
      marginRight: 10,
      marginBottom: 10,
      borderRadius: 4,
    }}>
    {children}
  </div>
);

export default Paragraph;

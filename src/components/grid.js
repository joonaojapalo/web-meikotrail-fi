import React from 'react';
import 'flexboxgrid-sass';

export const ContainerFluid = ({children}) => (
  <div className="container-fluid">
    {children}
  </div>
);

export const Col12 = ({children}) => (
  <div className="col-sm-12 col-xs-12">
    {children}
  </div>
);

export const Col8 = ({children}) => (
  <div className="col-sm-8 col-xs-12">
    {children}
  </div>
);

export const Row = ({children}) => (
  <div className="row">
    {children}
  </div>
);

export const Col4 = ({children}) => (
  <div className="col-sm-4 col-xs-12">
    {children}
  </div>
);

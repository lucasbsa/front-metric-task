import React from 'react';
import Menu from '../Menu';
import BoardProvider from '../../contexts/contextBoard';
import { blue } from '@material-ui/core/colors';
import { relativeLength } from 'highcharts';
import { Container } from '@material-ui/core';

const Layout = ({ children }) => {
  return (
    <html style={{ background: '#DEDFEF', width: '100%', height: '100%' }}>
      <body style={{ background: '#DEDFEF'}}>
          <Menu />
          {children}
      </body>
    </html>

  );
};

export default Layout;
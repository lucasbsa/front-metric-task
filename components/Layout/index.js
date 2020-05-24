import React from 'react';
import Menu from '../Menu';
import BoardProvider from '../../contexts/contextBoard';

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
        {children}

    </div>
  );
};

export default Layout;
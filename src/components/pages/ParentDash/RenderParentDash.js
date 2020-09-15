import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './dash.css';

import { Layout } from 'antd';
import { ParentNav, DashHome, ChildSignup } from './components';

// ParentDash component that contains a nav bar and routes to the various components
const RenderParentDash = () => {
  const [current, setCurrent] = useState('home');

  useEffect(() => {}, [current]);

  const currentPage = () => {
    if (current === 'home') {
      return (
        <>
          <Route exact path={'/login'} component={DashHome} />
          <Route path={`/login/add`} component={ChildSignup} />
        </>
      );
    }
  };
  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Layout style={{ background: 'white', height: '100vh' }}>
        <ParentNav handleClick={handleClick} current={current} />
        {currentPage()}
      </Layout>
    </>
  );
};

export default RenderParentDash;

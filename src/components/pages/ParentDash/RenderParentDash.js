import React from 'react';
import { Route } from 'react-router-dom';
import './dash.css';

import { Layout } from 'antd';
import { ParentNav, DashHome, ChildSignup } from './components';

// ParentDash component that contains a nav bar and routes to the various components
const RenderParentDash = () => {
  return (
    <>
      <Layout style={{ background: 'white', height: '100vh' }}>
        <ParentNav />
        <Route exact path={'/login'} component={DashHome} />
        <Route path={`/login/add`} component={ChildSignup} />
      </Layout>
    </>
  );
};

export default RenderParentDash;

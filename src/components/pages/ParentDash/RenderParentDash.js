import React from 'react';
import { Route } from 'react-router-dom';
import './dash.css';

import { Layout } from 'antd';
import { Nav, DashHome, ChildSignup } from './components';

// ParentDash component that contains a nav bar and routes to the various components
const RenderParentDash = props => {
  return (
    <>
      <Layout style={{ background: 'white', height: '100vh' }}>
        <Nav />
        <Route exact path={props.match.path} component={DashHome} />
        <Route path={`${props.match.path}/add`} component={ChildSignup} />
      </Layout>
    </>
  );
};

export default RenderParentDash;

import React from 'react';
import './dash.css';

import { Layout } from 'antd';
import { Nav, LinkButton } from './components';

// ParentDash component that contains a nav bar and routes to the various components
const RenderParentDash = () => {
  const { Header, Content } = Layout;
  return (
    <>
      <Layout style={{ background: 'white', height: '100vh' }}>
        <Nav />
        <Layout>
          <Header style={{ background: 'white', width: '100%' }}>
            <h1 style={{ fontFamily: 'Bangers' }}>Story Squad</h1>
          </Header>
          <Content className="Content" style={{ background: 'white' }}>
            <LinkButton to="/dashboard/add">Add a Child</LinkButton>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default RenderParentDash;

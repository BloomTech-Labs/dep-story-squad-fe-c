import React from 'react';
import '../dash.css';

import { Layout } from 'antd';
import { LinkButton } from './index';

// Home screen for parent dash
const DashHome = () => {
  const { Header, Content } = Layout;

  return (
    <>
      <Layout>
        <Header style={{ background: 'white', width: '100%' }}>
          <h1 style={{ fontFamily: 'Bangers' }}>Story Squad</h1>
        </Header>
        <Content className="Content" style={{ background: 'white' }}>
          <LinkButton className="AddCard" to="/login/add">
            Add a Child
          </LinkButton>
        </Content>
      </Layout>
    </>
  );
};

export default DashHome;

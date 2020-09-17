import React from 'react';

import { Layout } from 'antd';
import { LinkButton } from './index';

// Home screen for parent dash
const DashHome = () => {
  const { Header, Content } = Layout;

  return (
    <>
      <Layout>
        <Header
          className="parent-header"
          style={{ background: 'white', width: '100%' }}
        >
          <h1>Story Squad</h1>
        </Header>
        <Content className="Content">
          <LinkButton className="AddCard" to="/login/add">
            Add a Child
          </LinkButton>
        </Content>
      </Layout>
    </>
  );
};

export default DashHome;

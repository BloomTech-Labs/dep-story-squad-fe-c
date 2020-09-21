import React from 'react';

import { Layout } from 'antd';
import { LinkButton } from './index';
import { PlusCircleOutlined } from '@ant-design/icons';
// Home screen for parent dash
const DashHome = () => {
  const { Header, Content } = Layout;

  return (
    <>
      <Layout>
        <Header
          className="parent-header"
          style={{ background: '#fafafa', width: '100%' }}
        >
          <h1>Story Squad</h1>
        </Header>
        <Content className="Content">
          <LinkButton className="AddCard" to="/login/add">
            <PlusCircleOutlined className="icon" />
            Add a Child
          </LinkButton>
        </Content>
      </Layout>
    </>
  );
};

export default DashHome;

import React from 'react';
import { Layout } from 'antd';
import { LinkButton, ChildCard } from './index';
import { PlusCircleOutlined } from '@ant-design/icons';

// Home screen for parent dash
const DashHome = ({ userInfo }) => {
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
          {userInfo.map(child => (
            <ChildCard child={child} key={child.id} />
          ))}
          <LinkButton className="Card" to="/login/add">
            <PlusCircleOutlined className="icon" />
            Add a Child
          </LinkButton>
        </Content>
      </Layout>
    </>
  );
};

export default DashHome;

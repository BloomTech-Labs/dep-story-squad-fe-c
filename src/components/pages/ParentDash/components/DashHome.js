import React from 'react';
import { Layout } from 'antd';
import { LinkButton, ChildCard } from './index';
import { PlusCircleOutlined } from '@ant-design/icons';

// Home screen for parent dash
const DashHome = ({ userInfo }) => {
  const { Header, Content } = Layout;

  const Home = userInfo => {
    if (userInfo) {
      return userInfo.map(child => <ChildCard child={child} key={child.id} />);
    } else {
      return <h2>Loading...</h2>;
    }
  };

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
          {Home(userInfo)}
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

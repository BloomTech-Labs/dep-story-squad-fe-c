import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { LinkButton, ChildCard } from './index';
import { PlusCircleOutlined } from '@ant-design/icons';

// Home screen for parent dash
const DashHome = ({ userInfo }) => {
  const { Header, Content } = Layout;

  useEffect(() => {}, [userInfo]);

  const Home = userInfo => {
    if (userInfo) {
      return (
        <div className="dashCards">
          {userInfo.map((child, index) => (
            <ChildCard child={child} key={index} />
          ))}
          <LinkButton className="Card" to="/dashboard/add">
            <PlusCircleOutlined className="icon" />
            Add a Child
          </LinkButton>
        </div>
      );
    } else {
      return <h2 style={{ color: 'black' }}>Loading...</h2>;
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
        <Content className="Content">{Home(userInfo)}</Content>
      </Layout>
    </>
  );
};

export default DashHome;

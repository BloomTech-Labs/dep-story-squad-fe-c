import React from 'react';
import '../dash.css';

import { Layout, Menu } from 'antd';

// Nav bar for parent dash
const Nav = () => {
  const { Header, Sider } = Layout;
  const { Item } = Menu;

  return (
    <>
      <Sider
        style={{ borderRight: '1px solid #949494' }}
        width={253}
        theme="light"
      >
        <Header
          style={{
            background: 'white',
            textAlign: 'center',
            fontSize: '22px',
            margin: '10px 0',
          }}
        >
          Welcome Back
        </Header>
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Item key="1">Dashboard</Item>
          <Item key="2">Parent Settings</Item>
          <Item key="3">Help</Item>
          <Item key="4">Log out</Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Nav;

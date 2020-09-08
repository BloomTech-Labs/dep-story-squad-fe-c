import React from 'react';
import '../dash.css';

import { Layout, Menu } from 'antd';

// Nav bar for parent dash
const Nav = () => {
  const { Header, Sider } = Layout;
  const { Item } = Menu;

  return (
    <>
      <Sider width={253} theme="light">
        <Menu
          mode="inline"
          style={{
            height: '100%',
            border: '1px solid #949494',
            fontFamily: 'Nunito',
          }}
          defaultSelectedKeys={['1']}
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

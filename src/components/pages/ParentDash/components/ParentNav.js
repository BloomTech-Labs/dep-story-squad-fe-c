import React from 'react';
import '../dash.css';
import { Layout, Menu } from 'antd';

// Nav bar for parent dash
const Nav = props => {
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
        <Menu
          mode="inline"
          selectedKeys={[props.current]}
          onClick={props.handleClick}
        >
          <Item key="home">Dashboard</Item>
          <Item key="settings">Parent Settings</Item>
          <Item key="help">Help</Item>
          <Item key="logout">Log out</Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Nav;

import React from 'react';
import { Layout, Menu } from 'antd';

// Nav bar for parent dash
const Nav = props => {
  const { Header, Sider } = Layout;
  const { Item } = Menu;

  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ borderRight: '1px solid #949494' }}
        width={253}
        theme="light"
      >
        <Menu
          style={{
            background: 'white',
          }}
          mode="inline"
          selectedKeys={[props.current]}
          onClick={props.handleClick}
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

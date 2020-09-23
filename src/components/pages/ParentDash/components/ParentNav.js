import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

// Nav bar for parent dash
const Nav = props => {
  const { Header, Sider } = Layout;
  const { Item } = Menu;

  return (
    <>
      <Sider
        className="parentNav"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ borderRight: '1px solid #949494', background: '#fafafa' }}
        width={253}
        theme="light"
      >
        <Header
          style={{
            background: '#fafafa',
            textAlign: 'center',
            fontSize: '22px',
            margin: '10px 0',
          }}
        >
          Welcome Back
        </Header>
        <Menu
          style={{
            background: '#fafafa',
          }}
          mode="inline"
          selectedKeys={[props.current]}
          onClick={props.handleClick}
        >
          <Item key="home">
            <Link to="/login" />
            Dashboard
          </Item>
          <Item key="settings">Parent Settings</Item>
          <Item key="help">
            <Link to="/login/help" />
            Help
          </Item>
          <Item key="logout">Log out</Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Nav;

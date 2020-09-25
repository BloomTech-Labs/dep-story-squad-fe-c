import React from 'react';
import { Layout, Menu } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';

// Nav bar for parent dash
const Nav = () => {
  const { Header, Sider } = Layout;
  const { Item } = Menu;
  const { push } = useHistory();
  const location = useLocation();

  const handleClick = e => {
    push(e.key);
  };

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
          selectedKeys={[`${location.pathname}`]}
          onClick={handleClick}
        >
          <Item key="/dashboard">Dashboard</Item>
          <Item key="/dashboard/settings">Parent Settings</Item>
          <Item key="/dashboard/help">Help</Item>
          <Item key="/dashboard/logout">Log out</Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Nav;

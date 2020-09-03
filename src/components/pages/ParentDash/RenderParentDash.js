import React from 'react';
import Button from '../../common/Button.js';
import { Layout, Menu } from 'antd';

const RenderParentDash = () => {
  return (
    <>
      <Layout style={{ background: 'white', height: '100vh' }}>
        <Layout.Sider width={253} theme="light">
          <Menu
            mode="inline"
            style={{ height: '100%', border: '1px solid #949494' }}
            defaultSelectedKeys={['1']}
          >
            <Layout.Header
              style={{
                background: 'white',
                textAlign: 'center',
                fontSize: '23px',
                margin: '10px 0',
              }}
            >
              Welcome Back
            </Layout.Header>
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">Parent Settings</Menu.Item>
            <Menu.Item key="3">Help</Menu.Item>
            <Menu.Item key="4">Log out</Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ background: 'white', width: '100%' }}>
            <h1
              style={{
                textAlign: 'center',
                fontFamily: 'Bangers',
                fontSize: '48px',
              }}
            >
              Story Squad
            </h1>
          </Layout.Header>
          <Layout.Content style={{ background: 'white' }}>
            <Button buttonText="Subscribe" />
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};

export default RenderParentDash;

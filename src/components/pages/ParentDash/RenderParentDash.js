import React from 'react';
import Button from '../../common/Button.js';
import './dash.css';

import { Layout } from 'antd';
import { Nav, AddCard, ChildSignup } from './components';

const RenderParentDash = () => {
  const { Header, Content } = Layout;
  return (
    <>
      <Layout style={{ background: 'white', height: '100vh' }}>
        <Nav />
        <Layout>
          <Header style={{ background: 'white', width: '100%' }}>
            <h1
              style={{
                textAlign: 'center',
                fontFamily: 'Bangers',
                fontSize: '48px',
                color: '#0267C1',
              }}
            >
              Story Squad
            </h1>
          </Header>
          <Content className="Content" style={{ background: 'white' }}>
            {/* <Button classType="subButton" buttonText="Subscribe" /> */}
            {/* <AddCard /> */}
            <ChildSignup />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default RenderParentDash;

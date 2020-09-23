import React from 'react';

import { Layout } from 'antd';

const Help = () => {
  const { Header, Content } = Layout;

  return (
    <>
      <Layout className="parent-layout">
        <Header className="parent-header" style={{ background: '#fafafa' }}>
          <h1>Help</h1>
        </Header>
        <Content className="Content">
          <div className="contact">
            <h2>Contact Us</h2>
            <p>Email us: email@storysquad.com</p>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Help;

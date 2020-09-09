import React from 'react';
import { Layout } from 'antd';
import '../dash.css';

// Signup form to add children to parent account
const ChildSignup = () => {
  const { Header, Content } = Layout;

  return (
    <Layout style={{ background: 'white', height: '100vh' }}>
      <Header style={{ background: 'white', width: '100%' }}>
        <h1 style={{ fontFamily: 'Bangers' }}>Add a Child</h1>
      </Header>
      <Content>
        <form>
          <input type="text" name="name" placeholder="User Name" />
          <input type="dropdown" name="grade" placeholder="Select Grade" />
          <input type="text" name="PIN" placeholder="Create a PIN" />
          <input type="submit" value="Submit" />
        </form>
      </Content>
    </Layout>
  );
};

export default ChildSignup;

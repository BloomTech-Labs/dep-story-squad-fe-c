import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

const Logout = () => {
  const { push } = useHistory();
  const { Header, Content } = Layout;
  const { authService } = useOktaAuth();

  // clears the local storage that contains current user data so user can reselect at '/'
  const switchUser = () => {
    localStorage.removeItem('curUserType');
    localStorage.removeItem('curUserId');
    localStorage.removeItem('curUserName');
    push('/');
  };

  const logout = () => {
    authService.logout();
    window.localStorage.clear();
  };

  return (
    <Layout className="parent-layout" style={{ background: 'white' }}>
      <Header className="parent-header" style={{ background: 'white' }}>
        <h1>Logout</h1>
      </Header>
      <Content>
        <div className="contentCard">
          <div className="logout">
            <h3>What would you like to do?</h3>
            <button className="submitBtn" onClick={logout}>
              Logout
            </button>
            <button className="submitBtn" onClick={switchUser}>
              Switch Users
            </button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Logout;

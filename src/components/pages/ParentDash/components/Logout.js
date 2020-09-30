import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

// Utils
import { logout } from '../../../../utils/logout';
import { switchUser } from '../../../../utils/switchUser';

const Logout = () => {
  const { push } = useHistory();
  const { Header, Content } = Layout;
  const { authService } = useOktaAuth();

  const curUser = ['curUserType', 'curUserId', 'curUserName'];

  return (
    <Layout className="parent-layout" style={{ background: 'white' }}>
      <Header className="parent-header" style={{ background: 'white' }}>
        <h1>Logout</h1>
      </Header>
      <Content>
        <div className="contentCard">
          <div className="logout">
            <h3>What would you like to do?</h3>
            <button className="submitBtn" onClick={() => logout(authService)}>
              Logout
            </button>
            <button
              className="submitBtn"
              onClick={() => switchUser(curUser, push)}
            >
              Switch Users
            </button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Logout;

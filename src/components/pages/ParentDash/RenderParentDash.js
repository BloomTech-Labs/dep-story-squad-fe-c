import React, { useEffect, useState, useRef } from 'react';
import { Switch } from 'react-router-dom';
import { SecureRoute } from '@okta/okta-react';
import { Layout } from 'antd';
import { ParentNav, DashHome, ChildSignup, Help, Logout } from './components';
import { getParentDash } from '../../../api';

import { useSetRecoilState, useRecoilValue } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { userState } from '../../../state/userState';

// ParentDash component that contains a nav bar and routes to the various components
const RenderParentDash = props => {
  const setHeaderTitle = useSetRecoilState(headerTitle);

  // Keeps track of the state for ParentNav

  const [userInfo, setUserInfo] = useState(null);

  const token = JSON.parse(window.localStorage.getItem('curUserToken'));
  const tokenRef = useRef(token);
  const id = useRecoilValue(userState).curUserId;
  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    // The parent dashboard shouldn't have the header displayed
    // setting title to null will cause the <Header /> to not be rendered
    setHeaderTitle(null);
  }, [setHeaderTitle]);

  useEffect(() => {
    if (token) {
      getParentDash(tokenRef.current, id)
        .then(res => {
          setUserInfo(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [id, token]);

  // Keeps track of state for Nav Bar

  return (
    <>
      <Layout style={{ background: '#fafafa', height: '100vh' }}>
        <ParentNav />
        <Switch>
          <>
            <SecureRoute
              exact
              path={'/dashboard'}
              component={() => <DashHome userInfo={userInfo} />}
            />
            <SecureRoute
              exact
              path={`/dashboard/add`}
              component={() => (
                <ChildSignup setUserInfo={setUserInfo} userInfo={userInfo} />
              )}
            />
            <SecureRoute exact path={'/dashboard/help'} component={Help} />
            <SecureRoute exact path={'/dashboard/logout'} component={Logout} />
          </>
        </Switch>
      </Layout>
    </>
  );
};

export default RenderParentDash;

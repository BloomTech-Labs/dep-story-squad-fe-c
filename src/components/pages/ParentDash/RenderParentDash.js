import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { SecureRoute } from '@okta/okta-react';
import { Layout } from 'antd';
import { ParentNav, DashHome, ChildSignup, Help, Logout } from './components';
import { getParentDash } from '../../../api';

import { useSetRecoilState, useRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import StripeAccountForm from '../Stripe/StripeAccount';
// ParentDash component that contains a nav bar and routes to the various components
const RenderParentDash = () => {
  const setHeaderTitle = useSetRecoilState(headerTitle);
  const [userInfo, setUserInfo] = useState(null);
  const { curUserToken, curUserId } = useRecoilState(currentUserState);

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    // The parent dashboard shouldn't have the header displayed
    // setting title to null will cause the <Header /> to not be rendered
    setHeaderTitle(null);
  }, [setHeaderTitle]);

  useEffect(() => {
    if (curUserToken) {
      getParentDash(curUserToken, curUserId)
        .then(res => {
          setUserInfo(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [curUserId, curUserToken]);

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
            <SecureRoute
              exact
              path={'/dashboard/subscription'}
              component={StripeAccountForm}
            />
          </>
        </Switch>
      </Layout>
    </>
  );
};

export default RenderParentDash;

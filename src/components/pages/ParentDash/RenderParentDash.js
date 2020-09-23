import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SecureRoute } from '@okta/okta-react';

import { Layout } from 'antd';
import { ParentNav, DashHome, ChildSignup, Help } from './components';

// ParentDash component that contains a nav bar and routes to the various components
const RenderParentDash = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;

  // Keeps track of the state for ParentNav
  const [current, setCurrent] = useState('home');

  useEffect(() => {}, [current]);

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    // The parent dashboard shouldn't have the header displayed
    // setting title to null will cause the <Header /> to not be rendered
    setHeaderTitle(null);
  }, [setHeaderTitle]);

  // Keeps track of state for Nav Bar
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <>
      <Layout style={{ background: '#fafafa', height: '100vh' }}>
        <ParentNav handleClick={handleClick} current={current} />
        <Switch>
          <>
            <SecureRoute exact path={'/login'} component={DashHome} />
            <SecureRoute exact path={`/login/add`} component={ChildSignup} />
            <SecureRoute exact path={'/login/help'} component={Help} />
          </>
        </Switch>
      </Layout>
    </>
  );
};

export default RenderParentDash;

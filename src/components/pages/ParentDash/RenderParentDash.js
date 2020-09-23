import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { SecureRoute } from '@okta/okta-react';
import axios from 'axios';
import { Layout } from 'antd';
import { ParentNav, DashHome, ChildSignup, Help } from './components';

// ParentDash component that contains a nav bar and routes to the various components
const RenderParentDash = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;

  // Keeps track of the state for ParentNav
  const [current, setCurrent] = useState('home');
  const [userInfo, setUserInfo] = useState(null);

  const id = 1;
  const loggedUser = JSON.parse(
    window.localStorage.getItem('okta-token-storage')
  );

  useEffect(() => {
    if (loggedUser) {
      axios
        .get(`${process.env.REACT_APP_API_URI}/parent/${id}/dashboard`, {
          // Will need to be changed to JWT taken from the parent login
          headers: { Authorization: `Bearer ${loggedUser.idToken.value}` },
        })
        .then(res => {
          console.log(res.data);
          setUserInfo(res.data.childData);
        })
        .catch(err => {
          return err;
        });
    }
  });

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
            <SecureRoute
              exact
              path={'/login'}
              userInfo={userInfo}
              component={DashHome}
            />
            <SecureRoute exact path={`/login/add`} component={ChildSignup} />
            <SecureRoute exact path={'/login/help'} component={Help} />
          </>
        </Switch>
      </Layout>
    </>
  );
};

export default RenderParentDash;

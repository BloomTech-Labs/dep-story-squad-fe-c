import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import { Layout } from 'antd';
import { ParentNav, DashHome, ChildSignup } from './components';

// ParentDash component that contains a nav bar and routes to the various components
const RenderParentDash = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;

  const [current, setCurrent] = useState('home');

  useEffect(() => {}, [current]);

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    // The parent dashboard shouldn't have the header displayed
    // setting title to null will cause the <Header /> to not be rendered
    setHeaderTitle(null);
  }, [setHeaderTitle]);

  const currentPage = () => {
    if (current === 'home') {
      return (
        <>
          <Route exact path={'/login'} component={DashHome} />
          <Route path={`/login/add`} component={ChildSignup} />
        </>
      );
    }
  };
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <>
      <Layout style={{ background: '#fafafa', height: '100vh' }}>
        <ParentNav handleClick={handleClick} current={current} />
        {currentPage()}
      </Layout>
    </>
  );
};

export default RenderParentDash;

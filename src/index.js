import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

// Styles imports
import './styles/index.less';
import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/NotFound';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';

import { Dash } from './components/pages/Dash';
import { AccountPinModal } from './components/common/';
import { MissionDash } from './components/pages/MissionDash';

import { Header } from './components/common/';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  // This state will hold the title that appears in the <Header />
  const [headerTitle, setHeaderTitle] = useState('Story Squad');
  const [userType, setUserType] = useState(null);

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Header title={headerTitle} />
      <Switch>
        <Route
          path="/login"
          component={() => <LoginPage setHeaderTitle={setHeaderTitle} />}
        />

        <SecureRoute path="/implicit/callback">
          {' '}
          <LoginCallback />
        </SecureRoute>
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <AccountPinModal setUserType={setUserType} />}
        />
        <SecureRoute
          path="/dashboard"
          component={() => (
            <Dash setHeaderTitle={setHeaderTitle} userType={userType} />
          )}
        />
        <SecureRoute
          path="/mission"
          component={() => <MissionDash setHeaderTitle={setHeaderTitle} />}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}

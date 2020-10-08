import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

// provider for Recoil state
import { RecoilRoot } from 'recoil';

// Styles imports
import './styles/index.less';
import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/NotFound';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';

import { Dash } from './components/pages/Dash';
import AccountPinModal from './components/pages/AccountPinModal/AccountPinModal';
import { MissionDash } from './components/pages/MissionDash';
import { MissionRead } from './components/pages/MissionRead';
import { MissionWrite } from './components/pages/MissionWrite';
import { MissionDraw } from './components/pages/MissionDraw';

import { Header } from './components/common/';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
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

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Header />

      <Switch>
        <Route path="/login" component={() => <LoginPage />} />

        <SecureRoute path="/implicit/callback">
          <LoginCallback />
        </SecureRoute>

        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute path="/" exact component={() => <AccountPinModal />} />
        <SecureRoute path="/dashboard" component={() => <Dash />} />
        <SecureRoute path="/mission" exact component={() => <MissionDash />} />
        <SecureRoute path="/mission/read" component={() => <MissionRead />} />
        <SecureRoute path="/mission/write" component={() => <MissionWrite />} />
        <SecureRoute path="/mission/draw" component={() => <MissionDraw />} />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}

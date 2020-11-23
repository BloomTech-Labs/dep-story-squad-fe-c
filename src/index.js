import React, { useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
  useLocation,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

// provider for Recoil state
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
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
import { GameSquadup } from './components/pages/GameSquadup';
import { GameSharePoints } from './components/pages/GameSharePoints';
import { GameMatchUp } from './components/pages/GameMatchUp';
import { GameVote } from './components/pages/GameVote';
import { GameWaitForResult } from './components/pages/GameWaitForResult';

import { Header } from './components/common/';
import InstructionPanel from './components/common/InstructionPanel';
import SubmissionViewer from './components/common/SubmissionViewer';
import { routeState } from './state/routeState';

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

export function App() {
  const setCurRoute = useSetRecoilState(routeState);
  const location = useLocation();

  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  useEffect(() => {
    // get the current route. added here just in case we need to use this later
    setCurRoute(location.pathname);
  });

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
        <SecureRoute
          path="/game/squad-up"
          exact
          component={() => <GameSquadup />}
        />
        <SecureRoute
          path="/game/share-points"
          component={() => <GameSharePoints />}
        />
        <SecureRoute
          path="/game/match-up"
          exact
          component={() => <GameMatchUp />}
        />
        <SecureRoute path="/game/vote" exact component={() => <GameVote />} />
        <SecureRoute
          path="/game/waiting-for-result"
          exact
          component={() => <GameWaitForResult />}
        />

        <Route component={NotFoundPage} />
      </Switch>
      <InstructionPanel />
      <SubmissionViewer />
    </Security>
  );
}

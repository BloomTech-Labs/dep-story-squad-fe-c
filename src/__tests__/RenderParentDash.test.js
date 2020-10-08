import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import RenderParentDash from '../components/pages/ParentDash/RenderParentDash';
import {
  DashHome,
  LinkButton,
  ParentNav,
  ChildSignup,
  Help,
} from '../components/pages/ParentDash/components';
import { BrowserRouter as Router } from 'react-router-dom';

test('ParentDash renders without errors', () => {
  window.localStorage.setItem(
    'okta-token-storage',
    JSON.stringify({
      idToken: {
        claims: {
          sub: '00ulthapbErVUwVJy4x6',
        },
      },
    })
  );
  render(
    <Router>
      <RecoilRoot>
        <RenderParentDash title={null} />
      </RecoilRoot>
    </Router>
  );
});

test('Nav renders without errors', () => {
  render(
    <Router>
      <RecoilRoot>
        <ParentNav />
      </RecoilRoot>
    </Router>
  );
});

test('DashHome renders without errors', () => {
  render(
    <Router>
      <RecoilRoot>
        <DashHome />
      </RecoilRoot>
    </Router>
  );
});

test('LinkButton renders without errors', () => {
  render(
    <Router>
      <RecoilRoot>
        <LinkButton to="/login/add">Here's a Button</LinkButton>
      </RecoilRoot>
    </Router>
  );
});

test('Child signup form renders without errors', () => {
  render(
    <Router>
      <RecoilRoot>
        <ChildSignup />
      </RecoilRoot>
    </Router>
  );
});

test('Help page renders without errors', () => {
  render(<Help />);
});

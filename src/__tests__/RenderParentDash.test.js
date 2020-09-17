import React from 'react';
import { render } from '@testing-library/react';
import RenderParentDash from '../components/pages/ParentDash/RenderParentDash';
import {
  DashHome,
  LinkButton,
  ParentNav,
  ChildSignup,
} from '../components/pages/ParentDash/components';
import { BrowserRouter as Router } from 'react-router-dom';

test('ParentDash renders without errors', () => {
  render(
    <Router>
      <RenderParentDash setHeaderTitle={() => null} title={null} />
    </Router>
  );
});

test('Nav renders without errors', () => {
  render(<ParentNav />);
});

test('DashHome renders without errors', () => {
  render(
    <Router>
      <DashHome />
    </Router>
  );
});

test('LinkButton renders without errors', () => {
  render(
    <Router>
      <LinkButton to="/login/add">Here's a Button</LinkButton>
    </Router>
  );
});

test('Child signup form renders without errors', () => {
  render(
    <Router>
      <ChildSignup />
    </Router>
  );
});

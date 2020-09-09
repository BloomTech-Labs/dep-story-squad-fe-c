import React from 'react';
import { render } from '@testing-library/react';
import RenderParentDash from './RenderParentDash';
import { ChildSignup, DashHome, LinkButton, ParentNav } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

test('ParentDash renders without errors', () => {
  render(
    <Router>
      <RenderParentDash />
    </Router>
  );
});

test('ChildSignup renders without errors', () => {
  render(<ChildSignup />);
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

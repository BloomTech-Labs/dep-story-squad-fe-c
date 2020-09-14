import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RenderParentDash from './RenderParentDash';
import { DashHome, LinkButton, ParentNav, ChildSignup } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

test('ParentDash renders without errors', () => {
  render(
    <Router>
      <RenderParentDash />
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

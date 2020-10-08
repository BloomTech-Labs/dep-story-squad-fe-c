import Header from '../components/common/Header';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { render } from '@testing-library/react';

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authService: {},
    };
  },
}));

describe('<Header /> test suite', () => {
  test('header displays title passed in via props', () => {
    const { getByText } = render(
      <Router>
        <RecoilRoot>
          <Header />
        </RecoilRoot>
      </Router>
    );

    const h1 = getByText(/story squad/i);
    expect(h1.textContent).toBe('Story Squad');
    expect(h1.className).toBe('header-title');
  });
});

import Header from '../components/common/Header';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authService: {},
    };
  },
}));

describe('<Header /> test suite', () => {
  test('header displays title passed in via props', () => {
    const { getByText, rerender } = render(
      <RecoilRoot>
        <Router>
          <Header />
        </Router>
      </RecoilRoot>
    );

    const h1 = getByText(/testing title/i);
    rerender(
      <Router>
        <Header />
      </Router>
    );
    expect(h1.textContent).toBe('Changed The Title');
  });

  test('header does not render when title is set to null', () => {
    const { queryByTestId } = render(
      <Router>
        <Header title={null} />
      </Router>
    );

    const header = queryByTestId('header');

    expect(header).not.toBeInTheDocument();
  });
});

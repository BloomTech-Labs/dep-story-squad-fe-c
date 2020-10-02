import Header from '../components/common/Header';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
    const { getByText, rerender } = render(
      <Router>
        <Header title={'Testing Title'} />
      </Router>
    );

    const h1 = getByText(/testing title/i);
    expect(h1.textContent).toBe('Testing Title');
    expect(h1.className).toBe('header-title');
    rerender(
      <Router>
        <Header title={'Changed The Title'} />
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

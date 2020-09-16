import Header from '../components/common/Header';
import React from 'react';
import { render } from '@testing-library/react';

describe('<Header /> test suite', () => {
  test('header displays title passed in via props', () => {
    const { getByText, rerender } = render(
      <div>
        <Header title={'Testing Title'} />
      </div>
    );

    const h1 = getByText(/testing title/i);
    expect(h1.textContent).toBe('Testing Title');
    expect(h1.className).toBe('header-title');
    rerender(
      <div>
        <Header title={'Changed The Title'} />
      </div>
    );
    expect(h1.textContent).toBe('Changed The Title');
  });

  test('header does not render when title is set to null', () => {
    const { queryByTestId } = render(
      <div>
        <Header title={null} />
      </div>
    );

    const header = queryByTestId('header');

    expect(header).not.toBeInTheDocument();
  });
});

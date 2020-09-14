import Header from '../components/common/Header';
import React from 'react';
import { render } from '@testing-library/react';

describe('<Header /> test suite', () => {
  test('header displays title passed in via props', () => {
    const { getByText, rerender } = render(<Header title={'Testing Title'} />);

    const h1 = getByText(/testing title/i);
    expect(h1.textContent).toBe('Testing Title');
    expect(h1.className).toBe('header-title');
    rerender(<Header title={'Changed The Title'} />);
    expect(h1.textContent).toBe('Changed The Title');
  });
});

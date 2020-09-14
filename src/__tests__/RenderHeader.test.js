import Header from '../components/common/Header';
import React from 'react';
import { render } from '@testing-library/react';

describe('<Header /> test suite', () => {
  test('header displays title passed in via props', () => {
    const { getByText, rerender } = render(<Header title={'Testing Title'} />);

    const title = getByText(/testing title/i);
    expect(title.textContent).toBe('Testing Title');
    expect(title.className).toBe('header-title');
    rerender(<Header title={'Changed The Title'} />);
    expect(title.textContent).toBe('Changed The Title');
  });
});

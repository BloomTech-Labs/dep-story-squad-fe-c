import Header from '../components/common/Header';
import React from 'react';
import { render } from '@testing-library/react';

describe('<Header /> test suite', () => {
  test('header displays title passed in via props', () => {
    const { getByText } = render(<Header title={'Testing Title'} />);

    expect(getByText(/testing title/i).innerHTML).toBe('Testing Title');
  });
});

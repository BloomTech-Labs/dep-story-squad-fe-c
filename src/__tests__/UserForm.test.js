import React from 'react';
import { render } from '@testing-library/react';
import UserForm from '../components/common/accountPinModal/UserForm';

describe('UserForm component', () => {
  test('renders in the dom', () => {
    const { getByText } = render(
      <UserForm userAccounts={['Dad', 'Child1', 'Child2']} />
    );
    expect(
      getByText(
        /So we can direct you to the right place, please let us know who you are./i
      )
    ).toBeInTheDocument();
  });

  test('dynamically renders buttons', () => {
    const { getByTestId } = render(
      <UserForm userAccounts={['Dad', 'Child1', 'Child2']} />
    );
    expect(getByTestId(/Dad/i)).toBeInTheDocument();
    expect(getByTestId(/Child1/i)).toBeInTheDocument();
    expect(getByTestId(/Child2/i)).toBeInTheDocument();
  });
});

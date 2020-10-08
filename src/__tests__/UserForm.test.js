import React from 'react';
import { render } from '@testing-library/react';
import UserFormContainer from '../components/pages/AccountPinModal/UserForm/UserFormContainer';

describe('UserForm component', () => {
  test('renders in the dom', () => {
    const { getByText } = render(
      <UserFormContainer
        accounts={[{ name: 'Dad' }, { name: 'Child1' }, { name: 'Child2' }]}
      />
    );
    expect(
      getByText(
        /So we can direct you to the right place, please let us know who you are./i
      )
    ).toBeInTheDocument();
  });

  test('should render buttons dynamically', () => {
    const { getByText } = render(
      <UserFormContainer
        accounts={[{ name: 'Dad' }, { name: 'Child1' }, { name: 'Child2' }]}
      />
    );

    expect(getByText('Dad')).toBeInTheDocument();
    expect(getByText('Child1')).toBeInTheDocument();
    expect(getByText('Child2')).toBeInTheDocument();
  });
});

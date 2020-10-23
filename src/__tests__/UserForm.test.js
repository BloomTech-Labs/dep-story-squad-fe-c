import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserFormContainer from '../components/pages/AccountPinModal/UserForm/UserFormContainer';
import { RecoilRoot } from 'recoil';

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

  test('adds clicked user to local storage as "currentUser"', () => {
    const setFormVisibility = () => {};

    const { getByText } = render(
      <RecoilRoot>
        <UserFormContainer
          setFormVisibility={setFormVisibility}
          accounts={[{ name: 'Dad' }, { name: 'Child1' }, { name: 'Child2' }]}
        />
      </RecoilRoot>
    );

    // when button is clicked should set local storage obj
    const parentButton = getByText('Dad');
    userEvent.click(parentButton);

    const userStorage = JSON.parse(window.localStorage.getItem('currentUser'));
    expect(userStorage).toMatchObject({ curUserId: null, curUserType: null });
    expect(userStorage).toHaveProperty('curUserId', null);
    expect(userStorage).toHaveProperty('curUserType', null);
  });
});

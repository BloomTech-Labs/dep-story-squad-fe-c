import React from 'react';
import { render } from '@testing-library/react';
import { FormModalComp } from '../components/common';
import { FormInput } from '../components/common';
import { Button } from '../components/common';

describe('FormModalComp', () => {
  test('modal container renders in the DOM', () => {
    const { getByTestId } = render(
      <FormModalComp>
        <Button buttonText="buttonText" />
      </FormModalComp>
    );
    expect(getByTestId('formModalCont')).toBeInTheDocument();
  });

  test('modal component renders in the DOM', () => {
    const { getByTestId } = render(
      <FormModalComp>
        <Button buttonText="buttonText" />
      </FormModalComp>
    );

    expect(getByTestId(/formModal/i)).toBeInTheDocument();
  });

  test('modal renders child component(s)', () => {
    const { getByTestId } = render(
      <FormModalComp>
        <Button buttonText="Test Button" />
        <FormInput
          labelId="formInput"
          type="text"
          id="formInput"
          name="formInput"
          placeholder="placeholderText"
        />
      </FormModalComp>
    );
    const form = getByTestId('formInput');
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });
});

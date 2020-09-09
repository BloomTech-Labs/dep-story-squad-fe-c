import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PinInput from 'react-pin-input';

import { Form, Input } from 'antd';

// styles
import './PINForm.less';

function PINForm(props) {
  const [formValue, setFormValue] = useState();

  const onFinish = () => {
    return;
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const handleChange = value => {
    console.log(value);
    return setFormValue(value);
  };

  const handleSubmit = () => {
    console.log('submitted!!!');
    // need an axios call here to the back-end
    return;
  };

  return (
    <div>
      <Form
        className="pinForm"
        layout={layout}
        name="control-hooks"
        onFinish={onFinish}
      >
        <Form.Item
          name="PIN"
          label="PIN"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <PinInput
            length={4}
            initialValue=""
            // secret= {false}
            onChange={(value, index) => {
              handleChange(value);
            }}
            type="numeric"
            inputMode="number"
            style={{ padding: '10px' }}
            inputStyle={{ borderColor: 'blue' }}
            inputFocusStyle={{ borderColor: 'darkBlue' }}
            onComplete={(value, index) => {
              handleSubmit();
            }}
            autoSelect={true}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

PINForm.propTypes = {};

export default PINForm;

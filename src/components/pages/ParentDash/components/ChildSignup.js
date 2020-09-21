import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Switch } from 'antd';

// Signup form to add children to parent account
const ChildSignup = () => {
  const { push } = useHistory();
  const { Header, Content } = Layout;
  const [signup, setSignup] = useState({
    name: '',
    username: '',
    grade: '',
    pin: '',
    dys: false,
  });

  useEffect(() => {}, [signup]);

  const handleChange = e => {
    e.persist();
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggle = () => {
    setSignup({
      ...signup,
      dys: !signup.dys,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    push('/login');
    console.log('sent', signup);
  };

  return (
    <Layout className="parent-layout" style={{ background: 'white' }}>
      <Header className="parent-header" style={{ background: 'white' }}>
        <h1 style={{ fontFamily: 'Bangers' }}>Add a Child</h1>
      </Header>
      <Content>
        <div className="signupForm">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={signup.name}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={signup.username}
            />
            <input
              type="dropdown"
              name="grade"
              placeholder="Select Grade"
              onChange={handleChange}
              value={signup.grade}
            />
            <input
              type="text"
              name="pin"
              placeholder="Set PIN"
              onChange={handleChange}
              value={signup.pin}
            />
            <div className="dysBtn">
              <label className="dysLbl">Dyslexia</label>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                onChange={handleToggle}
              />
            </div>
            <input className="submitBtn" type="submit" value="Add Child" />
            <div
              className="cancel"
              onClick={() => {
                push('/login');
              }}
            >
              Cancel
            </div>
          </form>
        </div>
      </Content>
    </Layout>
  );
};

export default ChildSignup;

import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Switch } from 'antd';
import { addChild } from '../../../../api';

// Signup form to add children to parent account
const ChildSignup = ({ userInfo, setUserInfo }) => {
  const { push } = useHistory();
  const { Header, Content } = Layout;
  const [signup, setSignup] = useState({
    name: '',
    username: '',
    avatar_url:
      'https://www.uokpl.rs/fpng/d/12-129858_kid-superhero-clipart.png',
    pin: '',
    grade: '',
    dyslexic: false,
  });

  const token = JSON.parse(window.localStorage.getItem('curUserToken'));
  const tokenRef = useRef(token);
  const id = JSON.parse(window.localStorage.getItem('curUserId'));

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
      dyslexic: !signup.dyslexic,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addChild(tokenRef.current, id, signup)
      .then(res => {
        setUserInfo([...userInfo, signup]);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    push('/dashboard');
  };

  return (
    <Layout className="parent-layout" style={{ background: 'white' }}>
      <Header className="parent-header" style={{ background: 'white' }}>
        <h1>Add a Child</h1>
      </Header>
      <Content>
        <div className="contentCard">
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
              type="password"
              name="pin"
              placeholder="Set 4 digit PIN"
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
            <a
              href="/dashboard"
              className="cancel"
              onClick={() => {
                push('/dashboard');
              }}
            >
              Cancel
            </a>
          </form>
        </div>
      </Content>
    </Layout>
  );
};

export default ChildSignup;

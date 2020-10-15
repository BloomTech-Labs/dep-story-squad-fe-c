import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Switch } from 'antd';
import { postData } from '../../../../api';

import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../../../state/userState';

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

  const { curUserId } = useRecoilValue(currentUserState);

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
  const endpoint = `/parent/${curUserId}/children`;
  const handleSubmit = e => {
    e.preventDefault();
    postData(signup, endpoint)
      .then(res => {
        setUserInfo([...userInfo, signup]);
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

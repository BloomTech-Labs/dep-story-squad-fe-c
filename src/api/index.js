import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

// Okta login header
const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

// get token for curUser
const getUserToken = () => {
  const userToken = JSON.parse(window.localStorage.getItem('curUserToken'));
  if (!userToken) {
    throw new Error('Not authenticated');
  }
  return userToken;
};

// gets the Okta token
const getOktaToken = () => {
  const token = JSON.parse(window.localStorage.getItem('okta-token-storage'))
    .idToken.value;
  return token;
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};

const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

// gets associated accounts for logged in user
const getUserAccounts = () => {
  return axios.get(`${apiUrl}/auth/login`, {
    headers: { Authorization: `Bearer ${getOktaToken()}` },
  });
};

const getAccount = (url, pin, bearer) => {
  return axios.post(
    `${apiUrl}/${url}`,
    {
      pin: `${pin}`,
    },
    {
      headers: { Authorization: `Bearer ${bearer}` },
    }
  );
};

const getData = (url, userToken) => {
  return axios.get(`${apiUrl}/${url}`, {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

// https://story-squad-c-api.herokuapp.com/multer/multi-image-upload-test
const uploadSubmissionData = (url, formData) => {
  console.log('token: ', getUserToken());
  return axios.post(`${apiUrl}/${url}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
};

// gets data associated with the parent dash
const getParentDash = (token, id) => {
  return axios
    .get(`${apiUrl}/parent/${id}/dashboard`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => {
      return res.data.childData;
    })
    .catch(err => {
      return err;
    });
};

// posts a child to the database
const addChild = (token, id, body) => {
  return axios.post(`${apiUrl}/parent/${id}/children`, body, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deleteChild = (token, id, childId) => {
  return axios.delete(`${apiUrl}/parent/${id}/children/${childId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getStory = (token, id) => {
  return axios.get(`${apiUrl}/child/${id}/mission`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  getUserAccounts,
  getAccount,
  getParentDash,
  addChild,
  deleteChild,
  getStory,
  uploadSubmissionData,
  getData,
};

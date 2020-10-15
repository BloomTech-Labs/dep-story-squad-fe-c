import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}`;

// Okta token getter
// used in axios funcs below
const getAuthToken = () => {
  return (
    JSON.parse(window.localStorage.getItem('okta-token-storage')).idToken
      .value || null
  );
};

// current logged in user token getter
// used in axios funcs below
const getUserToken = () => {
  return (
    JSON.parse(window.localStorage.getItem('currentUser')).curUserToken || null
  );
};

// const getDSData = (url, authState) => {
// here's another way you can compose together your API calls.
// Note the use of GetAuthHeader here is a little different than in the getProfileData call.
//   const headers = getAuthHeader(authState);
//   if (!url) {
//     throw new Error('No URL provided');
//   }
//   return axios
//     .get(url, { headers })
//     .then(res => JSON.parse(res.data))
//     .catch(err => err);
// };

// gets associated accounts for logged in user
// used in the UserForm at account selection
// requires okta token
const userLogin = endpoint => {
  return axios.get(`${apiUrl}${endpoint}`, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
};

// gets associated accounts for logged in user after pin entry submit in the AccountPinModal
// requires okta token
const getAccount = (url, pin) => {
  return axios.post(
    `${apiUrl}${url}`,
    {
      pin: `${pin}`,
    },
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    }
  );
};

// generic get request
const getData = endpoint => {
  return axios.get(`${apiUrl}${endpoint}`, {
    headers: { Authorization: `Bearer ${getUserToken()}` },
  });
};

// generic post JSON data request
const postData = (body, endpoint) => {
  return axios.post(`${apiUrl}${endpoint}`, body, {
    headers: { Authorization: `Bearer ${getUserToken()}` },
  });
};

// generic put request for standard JSON data
const putData = (endpoint, body) => {
  return axios.put(`${apiUrl}${endpoint}`, body, {
    headers: { Authorization: `Bearer ${getUserToken()}` },
  });
};

// generic delete request
const deleteData = endpoint => {
  return axios.delete(`${apiUrl}${endpoint}`, {
    headers: { Authorization: `Bearer ${getUserToken()}` },
  });
};

// formData post request for images etc
// you must use form data when submitting images
const uploadSubmissionData = (url, formData) => {
  return axios.post(`${apiUrl}/${url}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
};

export {
  userLogin,
  getAccount,
  deleteData,
  uploadSubmissionData,
  getData,
  postData,
  putData,
};

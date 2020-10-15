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

// **** These methods were provided in intitial scaffolding but never got used ****
// const sleep = time =>
//   new Promise(resolve => {
//     setTimeout(resolve, time);
//   });

// const getExampleData = () => {
//   return axios
//     .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
//     .then(response => response.data);
// };

// const getAuthHeader = authState => {
//   if (!authState.isAuthenticated) {
//     throw new Error('Not authenticated');
//   }
//   return { Authorization: `Bearer ${authState.idToken}` };
// };

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

// const apiAuthGet = authHeader => {
//   return axios.get(apiUrl, { headers: authHeader });
// };

// const apiAuthPost = (
//   endpoint,
//   payload,
//   contentType = 'application/json',
//   authHeader
// ) => {
//   return axios.post(
//     `${apiUrl}/${endpoint}`,
//     { payload },
//     { headers: { ContentType: contentType }, authHeader }
//   );
// };

// const getProfileData = authState => {
//   try {
//     return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
//   } catch (error) {
//     return new Promise(() => {
//       console.log(error);
//       return [];
//     });
//   }
// };
//  ************ ^ unused scaffolding funcs above^ ***************

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

// // gets data associated with the parent dash
// const getParentDash = (token, id) => {
//   return axios.get(`${apiUrl}/parent/${id}/dashboard`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

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

// const getStory = (token, id) => {
//   return axios.get(`${apiUrl}/child/${id}/mission`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// Updates mission progress for the READ mission
const updateReadProgress = (token, id) => {
  return axios.put(
    `${apiUrl}/child/${id}/mission/read`,
    { progress: { read: true } },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export {
  userLogin,
  getAccount,
  addChild,
  deleteChild,
  uploadSubmissionData,
  getData,
  postData,
  updateReadProgress,
};

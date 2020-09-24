import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_URI}`;

export const GetStories = props => {
  const token =
    'eyJraWQiOiJxaUhsZllkbzFzSTEtRnJ6LXNBZUtMT0dEY0lDM2R2d2tpOXNXMkhPNGk0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHVsdGhhcGJFclZVd1ZKeTR4NiIsIm5hbWUiOiJUZXN0MDAxIFVzZXIiLCJlbWFpbCI6ImxsYW1hMDAxQG1haWxkcm9wLmNjIiwidmVyIjoxLCJpc3MiOiJodHRwczovL2F1dGgubGFtYmRhbGFicy5kZXYvb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiIwb2F2c29tejAxR3p1R2lrWTR4NiIsImlhdCI6MTYwMDg3ODg1OCwiZXhwIjoxNjAwODgyNDU4LCJqdGkiOiJJRC5jMVZNaWl2TTJRSGhRekYxMGxnYmVrSXJLS2FlNzdRWEJvS29JQzN1WUxvIiwiYW1yIjpbInB3ZCJdLCJpZHAiOiIwMG9rdml6cGJPbUI3WTczWjR4NiIsIm5vbmNlIjoiOUxhYjR2bDM4dzh5OG5mUmVkUmxCSHpBRFlreFpmb0tRUnoyRmZIVjIxV3BUVU1BeUpxc0VCRTZyRGhxODlvWSIsInByZWZlcnJlZF91c2VybmFtZSI6ImxsYW1hMDAxQG1haWxkcm9wLmNjIiwiYXV0aF90aW1lIjoxNjAwODc4ODU0LCJhdF9oYXNoIjoiVnQ1bkExc0pIQWwzU3JzazhaUHhSdyJ9.LU89I_OqdwrV31CaWVv8k7sbz28TkYu3lUhlFGB0Z_hFBxn0_xCLl0ojIOJbssu5ewTgwikIwjRPWUIH7SiOy-TLZjUdaMhJLReYibUw5W9-_2RZTyJXFwEn0rbNSkkVuk9MUU7pO2HRBLQKDeGIeRa_Erv3j1omWKt7dvCXNEeluKjC7mEVQshoL1MdV80sLT5-2HBvp_XWL6gBbXqcmyUwWuRHWlR81O5egx7ezyjmC49x4e7hsY_hmWMUpUQh0LFzmCww6MIDsdFmSgCw9-Jk9fB0JpvxXU4wyYsk8GkPi10T4Hv-29_cyRSpdsQ51N_UAYvmFqdVmXSaQgYTJw';

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/child/1/mission`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => {
        console.log('stories', res);
      })
      .catch(err => console.log({ err }));
  }, [props.id]);

  return <div></div>;
};

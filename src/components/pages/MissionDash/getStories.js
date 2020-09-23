import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_URI}`;

export const GetStories = props => {
  useEffect(() => {
    axios.get(`${apiUrl}/api/child/${props.id}/mission`).then(res => {});
  }, [props]);

  return <div></div>;
};

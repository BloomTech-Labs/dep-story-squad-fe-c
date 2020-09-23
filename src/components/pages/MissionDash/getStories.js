import React from 'react';
import axios from 'axios';

export class getStories extends React.Component {
  constructor() {
    super();
    this.state = {
      img: '',
    };
  }

  componentDidMount() {
    axios.get('https://story-squad-c-api.herokuapp.com/api/child/:1/mission');
  }

  render() {
    return <div></div>;
  }
}

export default getStories;

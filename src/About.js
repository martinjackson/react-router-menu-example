
import React, { Component } from 'react';
import axios from 'axios';
import autoBind from 'react-autobind';
import ReactMarkdown from 'react-markdown';

export default class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    autoBind(this);
  }


  render() {

    return (
        <div>About (changes)</div>
    );
  }

  }

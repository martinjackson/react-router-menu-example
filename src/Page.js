
import React, { Component } from 'react';
import axios from 'axios';
import autoBind from 'react-autobind';
const ReactMarkdown = require('react-markdown')


export default class Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      'data': '##Loading',
      'error': ''
    };

    autoBind(this);
  }

  componentDidMount() {
      axios.get(this.props.url)
        .then((response) => { this.setState({'data': response.data, 'loaded':true}); this.loaded(); })
        .catch((error) => {   this.setState({'error': error.message}); });
  }

  loaded() {
    console.log(this.props.url, 'loaded.');
  }

  render() {

    const err = this.state.error ? <div><hr />{this.state.error}</div> : null

    return (
       <div>
          <ReactMarkdown source={this.state.data} />
          {err}
       </div>
    );
  }

  }

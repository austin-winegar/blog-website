import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Resume extends Component {
  render() {
    return (
      <div>
        <Helmet title="Austin's Resume" />
        This is my resume.
      </div>
    );
  }
}

export default Resume;
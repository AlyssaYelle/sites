import React, { Component } from 'react';

import Pubs from '../pubs';

class Publications extends Component {

  constructor() {
    super();

    this.state = {
      pubs: Pubs
    }
  }

  componentDidMount() {
    console.log(Pubs)
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Publications;

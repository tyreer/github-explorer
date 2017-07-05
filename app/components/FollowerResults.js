import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';


export default class FollowerResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: null
    }
  }

  componentDidMount() {
    let followed = queryString.parse(this.props.location.search);
    console.log(followed);
  }
  render() {

    return (
      <div className='row'>
       <h1>{this.props.location.search}</h1>
     </div>
    )
  }
}

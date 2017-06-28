import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';


export default class Followers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: ''
    };

    this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
     fetchPopularRepos('JavaScript')
       .then((repos) => {
         this.setState({
           repos: repos
         })
         console.log(this.state.repos);
     });
  }

  render() {
    return (
      <div>
        <button
          className='button'
          type='submit'
          onClick={this.handleClick.bind(this)}>>
            {this.props.label}
        </button>
      </div>
    )
  }
}

Followers.propTypes = {
  label: PropTypes.string.isRequired,
}

Followers.defaultProps = {
  label: 'Testing Button',
}

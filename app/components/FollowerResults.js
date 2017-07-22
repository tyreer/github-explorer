import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { getAllFollowersData } from '../utils/api';
import logo from '../assets/github-logo.png';


export default class FollowerResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: null,
      displayedFollower: null,
      index: 0
    }
    this.nextFollower = this.nextFollower.bind(this);
  }

  componentDidMount() {
    const followed = queryString.parse(this.props.location.search);

    getAllFollowersData(followed.username)
    .then(function(data) {

      let mungedData = data.map(follower => {
        return (
          <div key={follower.data.id} onClick={this.nextFollower}>
          <img className="FollowerResults-img" src={follower.data.avatar_url}/>
          <h1>
            {follower.data.name}
          </h1>
          <h1>
            {follower.data.location}
          </h1>
          <h1>
            {follower.data.bio}
          </h1>
          <a href={follower.data.html_url}>
            <img className="FollowerResults-img--gitHub" src={logo} alt="Github logo"/>
          </a>
          </div>
        )
      })

      return this.setState(
        {
          followers: mungedData,
          displayedFollower: mungedData[0]
        }
      );
    }.bind(this));
  }

  nextFollower() {
    let incrementIndex = this.state.index;

    if (incrementIndex === (this.state.followers.length -1)) {
      incrementIndex = 0;
    } else {
      incrementIndex++;
    }

    this.setState(
      {
        displayedFollower: this.state.followers[incrementIndex],
        index: incrementIndex
      }
    );
  }

  render() {
    if (this.state.followers === null){
      return (
      <div className='FollowerResults-container'>
         <h1>Loading</h1>
      </div>
      )
    } else {
      return (
        <div className='FollowerResults-container'>
          {this.state.displayedFollower}
        </div>
      )
    }
  }
  }
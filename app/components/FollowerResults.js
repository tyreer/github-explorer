import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { getAllFollowersData } from '../utils/api';
import logo from '../assets/github-logo.png';
import shame from '../assets/shame-cubes.gif';


export default class FollowerResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: null,
      displayedFollower: null,
      index: 0
    }
    this.nextFollower = this.nextFollower.bind(this);
    this.prevFollower = this.prevFollower.bind(this);
    this.prevNextKeys = this.prevNextKeys.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.prevNextKeys);
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.prevNextKeys);
  };

  componentDidMount() {
    const followed = queryString.parse(this.props.location.search);
    const followedUrl = `https://github.com/${followed.username}`;

    getAllFollowersData(followed.username)
    .then(function(data) {
      let mungedData = data.map(follower => {

        let bio;
        if (follower.data.bio !== null && follower.data.bio.length >= 110 && window.innerWidth < 375) {
            bio = `${follower.data.bio.substring(0,110)}...`;
          } else {
            bio = follower.data.bio;
          };

        return (
          <div className="FollowerResults__container--inner" key={follower.data.id}>
            <button id="prev" className="FollowerResults__prev" onClick={this.prevFollower} type="button" aria-label="Previous" role="button">Previous</button>
            <button id="next" className="FollowerResults__next" onClick={this.nextFollower} type="button" aria-label="Next" role="button">Next</button>
            <div className="FollowerResults__topDiv">
              <h2 className="FollowerResults__h2">
                {follower.data.name}
              </h2>
              <h2 className="FollowerResults__h2">
                {follower.data.location}
              </h2>
            </div>
            <img onClick={this.nextFollower} className="FollowerResults__img" src={follower.data.avatar_url}/>
            <h3 className="FollowerResults__h3">
              {bio}
            </h3>
            <a href={follower.data.html_url} target="_blank">
              <img className="FollowerResults__img--animated FollowerResults__img--followingUser" src={follower.data.avatar_url} alt="Avatar of following GitHub user"/>
            </a>
            <img className="FollowerResults__img--animated FollowerResults__img--gitHub" src={logo} alt="Github logo"/>
            <a href={followedUrl} target="_blank">
              <img className="FollowerResults__img--animated FollowerResults__img--followedUser" src={`https://github.com/${followed.username}.png?size=200`} alt="Avatar of followed GitHub user"/>
            </a>
            <div className="FollowerResults__bottomDiv"></div>
          </div>
        )
      })

      return this.setState(
        {
          followers: mungedData,
          displayedFollower: mungedData[0],
          followed: followed,
          followedUrl: followedUrl
        }
      );
    }.bind(this));
  }

  nextFollower() {
    let incrementIndex = this.state.index;

    if (incrementIndex === (this.state.followers.length - 1)) {
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

  prevFollower() {
    let incrementIndex = this.state.index;

    if (incrementIndex === 0) {
      incrementIndex = (this.state.followers.length - 1);
    } else {
      incrementIndex--;
    }

    this.setState(
      {
        displayedFollower: this.state.followers[incrementIndex],
        index: incrementIndex
      }
    );
  }

  prevNextKeys(event) {
    if(event.which === 37) {
      this.prevFollower();
    } else if (event.which === 39) {
      this.nextFollower();
    };
  }

  render() {
    if (this.state.followers === null) {
      return (
      <div className='FollowerResults-container'>
         <h1>Loading</h1>
      </div>
      )
    } if (this.state.followers.length <= 0) {
      return (
        <div className="FollowerResults-container">
          <h2 className="FollowerResults__h2">
            OH NO
          </h2>
          <img className="FollowerResults__img" src={shame} alt='A 3D image of a shame cube decending over shamed looking young man'/>
          <h2 className="FollowerResults__h2">
            {this.state.followed.username} has no followers
          </h2>
          <li>
            <NavLink activeClassName='active' to='/followers' className="nav__a--blue">
              Try again?
            </NavLink>
          </li>
          <div className="FollowerResults__bottomDiv"></div>
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

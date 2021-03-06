import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import queryString from 'query-string';
import Loading from '../Loading/Loading';
import { getAllFollowersData } from '../../utils/api';
import logo from '../../assets/github-logo.png';

export default class FollowerResults extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  state = {
    followers: null,
    displayedFollower: null,
    index: 0,
  }

  componentWillMount() {
    document.addEventListener('keydown', this.prevNextKeys);
  }

  componentDidMount() {
    const followed = queryString.parse(this.props.location.search);
    const followedUrl = `https://github.com/${followed.username}`;

    getAllFollowersData(followed.username)
      .then((data) => {
        const mungedData = data.map((follower) => {
          let bio;
          if (follower.data.bio !== null && follower.data.bio.length >= 110 && window.innerWidth < 400) {
            bio = `: ${follower.data.bio.substring(0, 85)}...`;
          } else if (follower.data.bio !== null) {
            bio = `: ${follower.data.bio}`;
          }

          return (
            <div
              className="FollowerResults__container--inner"
              key={follower.data.id}
            >
              <button
                id="prev"
                className="FollowerResults__prev"
                onClick={this.prevFollower}
                type="button"
                aria-label="Previous"
              >
              Previous
              </button>
              <button
                id="next"
                className="FollowerResults__next"
                onClick={this.nextFollower}
                type="button"
                aria-label="Next"
              >
              Next
              </button>
              <div className="FollowerResults__topDiv">
                <h2 className="FollowerResults__h2">{follower.data.name}</h2>
              </div>
              <div
                role="presentation"
                onKeyDown={this.nextFollower}
                onClick={this.nextFollower}
              >
                <img
                  alt="Avatar of follower"
                  className="FollowerResults__img"
                  src={follower.data.avatar_url}
                />
              </div>
              <p className="FollowerResults__p">{follower.data.location} {bio}</p>
              <a href={follower.data.html_url}>
                <img
                  className="FollowerResults__img--animated followingUser"
                  src={follower.data.avatar_url}
                  alt="Avatar of following GitHub user"
                />
              </a>
              <img
                className="FollowerResults__img--animated gitHub"
                src={logo}
                alt="Github logo"
              />
              <a href={followedUrl}>
                <img
                  className="FollowerResults__img--animated followedUser"
                  src={`https://github.com/${followed.username}.png?size=200`}
                  alt="Avatar of followed GitHub user"
                />
              </a>
              <div className="FollowerResults__bottomDiv" />
            </div>
          );
        });

        return this.setState({
          followers: mungedData,
          displayedFollower: mungedData[0],
          followed,
        });
      });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.prevNextKeys);
  }

  nextFollower = () => {
    let incrementIndex = this.state.index;

    incrementIndex === (this.state.followers.length - 1)
      ? incrementIndex = 0
      : incrementIndex += 1;

    this.setState({
      displayedFollower: this.state.followers[incrementIndex],
      index: incrementIndex,
    });
  }

  prevFollower = () => {
    let incrementIndex = this.state.index;

    incrementIndex === 0
      ? incrementIndex = (this.state.followers.length - 1)
      : incrementIndex -= 1;

    this.setState({
      displayedFollower: this.state.followers[incrementIndex],
      index: incrementIndex,
    });
  }

  prevNextKeys = (event) => {
    if (event.which === 37) {
      this.prevFollower();
    } else if (event.which === 39) {
      this.nextFollower();
    }
  }

  render() {
    if (!this.state.followers) {
      return <Loading />;
    }

    if (this.state.followers.length <= 0) {
      return (
        <div>
          <div className="FollowerResults__container error">
            <h2 className="FollowerResults__h2">OH NO</h2>
            <h2 className="FollowerResults__h2">
              {this.state.followed.username} has no followers
            </h2>
            <NavLink to="/followers" className="Nav__a--blue">
              Try again?
            </NavLink>
          </div>
          <div className="FollowerResults__bottomDiv" />
        </div>
      );
    }

    return (
      <div className="FollowerResults__container">
        {this.state.displayedFollower}
      </div>
    );
  }
}

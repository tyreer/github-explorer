import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import { getProfile } from '../utils/api';

export default class Followers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: null,
      error: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
   }

   handleSubmit(id, username) {
    let errorMsg = null;

     getProfile(username)
      .then(data => {
        this.setState(() => {
          let newState = {};
          newState['image'] = data.avatar_url;
          newState['name'] = username;
          return newState;
        });
      })
      .catch(error => {
        errorMsg = error.response.status;
        this.setState(() => {
          let newState = {};
          newState['error'] = errorMsg;
          newState['name'] = username;
          return newState;
        })
      });
   }

   handleReset() {
    this.setState(() => {
      var newState = {};
      newState['name'] = '';
      newState['image'] = null;
      newState['error'] = null;
      return newState;
    })
   }

  render() {
    let match = this.props.match;
    let name = this.state.name;
    let image = this.state.image;
    let error = this.state.error;

    return (
      <div>
        {!name &&
          <div className="Followers__container">
            <h2 className='Followers__headline'>Who follows...</h2>
            <PlayerInput
              id='followed'
              label= 'github username'
              onSubmit={this.handleSubmit}
              className='PlayerInput--single'
              buttonText='?'
              buttonClass='button--followers'
              labelClass='screen-reader-text'
            />
          </div>
        }

        {error === 404 &&
          <div className="FollowerResults__container">
            <h2 className="FollowerResults__h2">
              UH OH
            </h2>
            <h2 className="FollowerResults__h2">
              <span>{name}</span> does not exist on GitHub...
            </h2>
            <li>
              <NavLink
                activeClassName='active'
                to='/followers'
                className="Nav__a--blue"
                onClick = {this.handleReset}>
                Try again?
              </NavLink>
            </li>
            <div className="FollowerResults__bottomDiv"></div>
          </div>
        }

        {image !== null &&
          <div>
            <PlayerPreview
              avatar={image}
              username={name}
              className='PlayerPreview'>
              <Link
                className='PlayerPreview__button'
                to={{
                   pathname: match.url + '/results',
                   search: '?username=' + name
                 }}>
                  Get followers
              </Link>
              <button
                className='PlayerPreview__button--reset'
                onClick={this.handleReset}>
                  Reset
              </button>
            </PlayerPreview>
          </div>
        }
      </div>
    )
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import PlayerInput from '../PlayerInput/PlayerInput';
import PlayerPreview from '../PlayerPreview/PlayerPreview';
import { getProfile } from '../../utils/api';
import RateError from '../RateError/RateError';

export default class Followers extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  state = {
    name: '',
    image: null,
    error: null,
  };

 handleSubmit = async (id, username) => {
   const data = await getProfile(username);

   (data instanceof Error)
     ? this.setState({
       error: parseInt(data.message, 10),
       name: username,
     })
     : this.setState({
       image: data.avatar_url,
       name: username,
     });
 }

  handleReset = () => {
    this.setState({
      name: '',
      image: null,
      error: null,
    });
  }

  render() {
    const { match } = this.props;
    const { name, image, error } = this.state;

    return (
      <div>
        {!name &&
          <div className="Followers__container">
            <h2 className="Followers__header">Who follows...</h2>
            <PlayerInput
              id="followed"
              label="github username"
              onSubmit={this.handleSubmit}
              className="PlayerInput--single"
              buttonText="?"
              buttonClass="Followers__button"
              labelClass="screen-reader-text"
            />
          </div>
        }

        {error === 404 &&
          <div>
            <div className="FollowerResults__container error">
              <h2 className="FollowerResults__h2">
                UH OH
              </h2>
              <h2 className="FollowerResults__h2">
                <span>{name}</span> is not a GitHub user...
              </h2>
              <NavLink
                to="/followers"
                className="Nav__a--blue"
                onClick={this.handleReset}
              >
                Try again?
              </NavLink>
            </div>
            <div className="FollowerResults__bottomDiv" />
          </div>
        }

        {this.state.error === 403 &&
          <RateError />
        }

        {image !== null &&
          <div>
            <PlayerPreview
              avatar={image}
              username={name}
            >
              <Link
                className="PlayerPreview__button"
                href={`${match.url}/results`}
                to={{
                   pathname: `${match.url}/results`,
                   search: `?username=${name}`,
                 }}
              >
                  Get followers
              </Link>
              <button
                className="PlayerPreview__button--reset"
                onClick={this.handleReset}
              >
                  Reset
              </button>
            </PlayerPreview>
          </div>
        }
      </div>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlayerPreview from '../PlayerPreview/PlayerPreview';
import PlayerInput from '../PlayerInput/PlayerInput';

export default class Battle extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  state = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null,
  };

  handleSubmit = (id, username) => {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = username;
      newState[`${id}Image`] = `https://github.com/${username}.png?size=200`;
      return newState;
    });
  }

  handleReset = (id) => {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = '';
      newState[`${id}Image`] = null;
      return newState;
    });
  }

  render() {
    const { match } = this.props;
    const {
      playerOneName, playerOneImage, playerTwoName, playerTwoImage,
    } = this.state;

    return (
      <div>
        <div className="Battle__container">

          {!playerOneName &&
            <PlayerInput
              id="playerOne"
              label="Player One"
              className="PlayerInput--battle"
              buttonClass="Battle__button"
              onSubmit={this.handleSubmit}
            />
          }

          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
              backdropClass="PlayerPreview__backdrop--battle"
            >
              <button
                className="PlayerPreview__button--reset"
                onClick={this.handleReset.bind(this, 'playerOne')}
              >
                Reset
              </button>
            </PlayerPreview>
          }

          {!playerTwoName &&
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              className="PlayerInput--battle"
              buttonClass="Battle__button"
              onSubmit={this.handleSubmit}
            />
          }

          {playerTwoImage !== null &&
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
              backdropClass="PlayerPreview__backdrop--battle"
            >
              <button
                className="PlayerPreview__button--reset"
                onClick={this.handleReset.bind(this, 'playerTwo')}
              >
                   Reset
              </button>
            </PlayerPreview>
          }
        </div>

        {playerOneImage && playerTwoImage &&
          <Link
            className="PlayerPreview__button"
            href={`${match.url}/results`}
            to={{
               pathname: `${match.url}/results`,
               search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
             }}
          >
              Battle
          </Link>
        }
      </div>
    );
  }
}

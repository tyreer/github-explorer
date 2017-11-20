import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlayerPreview from '../PlayerPreview/PlayerPreview';
import PlayerInput from '../PlayerInput/PlayerInput';

export default class Battle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = username;
      newState[`${id}Image`] = `https://github.com/${username}.png?size=200`;
      return newState;
    });
  }

  handleReset(id) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = '';
      newState[`${id}Image`] = null;
      return newState;
    });
  }

  render() {
    const { match } = this.props;
    const { playerOneName } = this.state;
    const { playerOneImage } = this.state;
    const { playerTwoName } = this.state;
    const { playerTwoImage } = this.state;

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

Battle.propTypes = {
  match: PropTypes.object.isRequired,
};

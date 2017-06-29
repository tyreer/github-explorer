import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';
import PlayerInput from './PlayerInput';

export default class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(() => {
      let newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = `https://github.com/${username}.png?size=200`;
      return newState;
    });
  }

  handleReset(id) {
   this.setState(() => {
     var newState = {};
     newState[id + 'Name'] = '';
     newState[id + 'Image'] = null;
     return newState;
   })
 }

  render() {
    let match = this.props.match;
    let playerOneName = this.state.playerOneName;
    let playerOneImage = this.state.playerOneImage;
    let playerTwoName = this.state.playerTwoName;
    let playerTwoImage = this.state.playerTwoImage;

    return (
      <div>
        <div className='row'>

          {!playerOneName &&
          <PlayerInput
            id='playerOne'
            label='Player One'
            onSubmit={this.handleSubmit}
          />}

          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}>
                <button
                  className='reset'
                  onClick={this.handleReset.bind(this, 'playerOne')}>
                    Reset
                </button>
            </PlayerPreview>}

          {!playerTwoName &&
          <PlayerInput
            id='playerTwo'
            label='Player Two'
            onSubmit={this.handleSubmit}
          />}

          {playerTwoImage !== null &&
            <PlayerPreview
             avatar={playerTwoImage}
             username={playerTwoName}>
               <button
                 className='reset'
                 onClick={this.handleReset.bind(this, 'playerTwo')}>
                   Reset
               </button>
            </PlayerPreview>}
        </div>

        {playerOneImage && playerTwoImage &&
          <Link
            className='button'
            to={{
               pathname: match.url + '/results',
               search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
             }}>
              Battle
          </Link>}
      </div>
    )
  }
}

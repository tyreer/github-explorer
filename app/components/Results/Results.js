import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { battle } from '../../utils/api';
import PlayerPreview from '../PlayerPreview/PlayerPreview';
import Loading from '../Loading/Loading';
import Profile from '../Profile/Profile';
import Player from '../Player/Player';
import RateError from '../RateError/RateError';

export default class Results extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    }
  }

  componentDidMount() {
    const players = queryString.parse(this.props.location.search);

    battle([
      players.playerOneName,
      players.playerTwoName
    ])
    .then( players => {
      if (players === null) {
        return this.setState(() => {
          return {
           error: 403,
           loading: false,
          }
        });
      }

      this.setState(() => {
        return {
          error: null,
          winner: players[0],
          loser: players[1],
          loading: false,
        }
      });
    })
  }

  render() {
    const error = this.state.error;
    const winner = this.state.winner;
    const loser = this.state.loser;
    const loading = this.state.loading;

    if (loading === true) {
     return <Loading />
   }

   if (error) {
     return (
       <RateError />
     )
   }

    return (
      <div>
         <Player
           label='Winner'
           score={winner.score}
           profile={winner.profile}
         />
         <Player
           label='Loser'
           score={loser.score}
           profile={loser.profile}
         />
       </div>
    )
  }
}

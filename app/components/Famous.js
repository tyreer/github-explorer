import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';
import Loading from './Loading';
import Nav from './Nav';


const SelectLanguage = ({ selectedLanguage, updateLanguage }) => {
  const languages = ['All', 'JavaScript', 'CSS'];

  return (
    <div>
    <Nav expanded='false' />
      <h1>FAMOUS: {selectedLanguage}</h1>
      <ul className = 'languages'>
        {languages.map(language => {
          return (
            <li
              key={language}
              style={language === selectedLanguage ? {color: 'white'} : null }
              onClick={() => {updateLanguage(language)}}
              >
              {language}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
}

const RepoGrid = ({ repos }) => {
  return (
    <ul className = 'famous-list'>
      {repos.map( (repo, index) => {

        const imgStyle = {
          width: `${repo.stargazers_count/400}px`,
          height: `${repo.stargazers_count/400}px`,
        }

        if (index === 8 || index === 10 || index === 20 || index === 29 || index === 15 ) {
          return(
            <li key={repo.name} className = 'popular-item'>
              <div className = 'popular-rank'>#{index+1}</div>
              <ul className = 'space-list-items'>
                <li className = 'Famous__repo'>
                  <img
                    className = 'avatar'
                    style= {imgStyle}
                    src={repo.owner.avatar_url}
                    alt={`Avatar for ${repo.owner.login}`} />
                    <span>⭐️</span>
                </li>
                <li><a href={repo.html_url}>{repo.name}</a></li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
            </li>
          )
        }
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default class Famous extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(language) {
    this.setState({
      selectedLanguage: language,
      repos: null
    });

    fetchPopularRepos(language)
      .then((repos) => {
        this.setState({
          repos: repos
        })
      });
  }

  render() {
    return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
        {!this.state.repos
        ? <Loading />
        : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

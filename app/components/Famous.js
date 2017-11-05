import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';
import Loading from './Loading';

const SelectLanguage = ({ selectedLanguage, updateLanguage }) => {
  const languages = ['All', 'JavaScript', 'CSS', 'Swift', 'Python', 'C', 'Java', 'Haskell'];

  return (
    <div>
      <h1 className = 'Famous__header'>Most starred repos</h1>
      <ul className = 'Famous__languages'>
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
    <ul className = 'Famous__list'>
      {repos.map( (repo, index) => {

          return (
            <li key={repo.name} className = 'Famous__repo-listing'>
              <div className = 'Famous__rank'>#{index+1}</div>
              <ul>
                <li className = 'Famous__repo'>
                  <a href={repo.html_url}>
                    <img
                      className = 'avatar'
                      src={repo.owner.avatar_url}
                      alt={`Avatar for ${repo.owner.login}`} />
                  </a>
                </li>
                <li>{repo.name}</li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
            </li>
          )
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
    return (
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

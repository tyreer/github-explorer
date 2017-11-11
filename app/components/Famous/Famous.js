import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../../utils/api';
import Loading from '../Loading/Loading';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import RepoGrid from '../RepoGrid/RepoGrid';

export default class Famous extends PureComponent {
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

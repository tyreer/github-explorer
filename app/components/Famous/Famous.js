import React, { PureComponent } from 'react';
import { fetchPopularRepos } from '../../utils/api';
import Loading from '../Loading/Loading';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import RepoGrid from '../RepoGrid/RepoGrid';
import RateError from '../RateError/RateError';

export default class Famous extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(language) {
    this.setState({
      selectedLanguage: language,
      repos: null,
    });

    fetchPopularRepos(language)
      .then((repos) => {
        this.setState({
          repos,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.response.status,
          repos: [],
        });
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

        {this.state.error === 403 &&
          <RateError />
        }
      </div>
    );
  }
}

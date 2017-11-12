import React from 'react';
import PropTypes from 'prop-types';

export default function RepoGrid(props) {
  return (
    <ul className = 'RepoGrid__list'>
      {props.repos.map( (repo, index) => {

          return (
            <li key={repo.name} className = 'RepoGrid__repo-listing'>
              <div className = 'RepoGrid__rank'>#{index+1}</div>
              <ul>
                <li className = 'RepoGrid__repo'>
                  <a href={repo.html_url}>
                    <img
                      className = 'RepoGrid__avatar'
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

import React from 'react';
import PropTypes from 'prop-types';
import LanguageListItem from '../LanguageListItem/LanguageListItem';

export default function SelectLanguage(props) {
  const languages = [
    'All',
    'JavaScript',
    'CSS',
    'Swift',
    'Python',
    'C',
    'Java',
    'Haskell',
  ];

  return (
    <div>
      <h1 className="SelectLanguage__header">Most starred repos</h1>
      <ul className="SelectLanguage__languages">
        {languages.map(language =>
          (<LanguageListItem
            key={language}
            item={language}
            selectedLanguage={props.selectedLanguage}
            onItemClick={props.updateLanguage}
          />))}
      </ul>
    </div>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
};

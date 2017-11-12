import React from 'react';
import PropTypes from 'prop-types';

export default function SelectLanguage(props) {
  const languages = ['All', 'JavaScript', 'CSS', 'Swift', 'Python', 'C', 'Java', 'Haskell'];

  return (
    <div>
      <h1 className="SelectLanguage__header">Most starred repos</h1>
      <ul className="SelectLanguage__languages">
        {languages.map(language => (
          <li
            key={language}
            style={language === props.selectedLanguage ? { color: 'white' } : null}
            onClick={() => { props.updateLanguage(language); }}
          >
            {language}
          </li>
          ))}
      </ul>
    </div>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};

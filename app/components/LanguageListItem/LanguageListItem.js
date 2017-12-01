import React from 'react';
import PropTypes from 'prop-types';

export default function LanguageListItem(props) {
  const _onClick = () => {
    props.onItemClick(props.item);
  };

  return (
    <li
      className="LanguageListItem"
    >
      <button
        className={props.item === props.selectedLanguage
          ? 'LanguageListItem__button LanguageListItem__button--selected'
          : 'LanguageListItem__button'}
        onClick={_onClick}
        onKeyDown={_onClick}
      > {props.item}
      </button>
    </li>
  );
}

LanguageListItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
};

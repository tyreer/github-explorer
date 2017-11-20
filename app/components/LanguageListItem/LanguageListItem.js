import React from 'react';
import PropTypes from 'prop-types';

export default function LanguageListItem(props) {
  const _onClick = () => {
    props.onItemClick(props.item);
  };

  return (
    <div
      role="presentation"
      onClick={_onClick}
      onKeyDown={_onClick}
    >
      <li
        style={props.item === props.selectedLanguage ? { color: 'white' } : null}
      >
        {props.item}
      </li>
    </div>
  );
}

LanguageListItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
};

var React = require('react');
var PropTypes = require('prop-types');

class Famous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
  }

  updateLanguage(language) {
    this.setState( { selectedLanguage: language } );
  }

  render() {
    const languages = ['All', 'JavaScript', 'CSS'];

    return(
      <div>
        <h1>FAMOUS: {this.state.selectedLanguage}</h1>
        <ul className = 'languages'>
          {languages.map(language => {
            return (
              <li
                style={language === this.state.selectedLanguage ? {color: 'white'}: null}
                key={language}
                onClick={() => {this.updateLanguage(language)}}
                >
                {language}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

module.exports = Famous;

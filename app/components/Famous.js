var React = require('react');
var PropTypes = require('prop-types');

class SelectLanguage extends React.Component {
  render() {
    const languages = ['All', 'JavaScript', 'CSS'];
    return(
      <div>
        <h1>FAMOUS: {this.props.selectedLanguage}</h1>
        <ul className = 'languages'>
          {languages.map(language => {
            return (
              <li
                style={language === this.props.selectedLanguage ? {color: 'white'}: null}
                key={language}
                onClick={() => {this.props.updateLanguage(language)}}
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

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
}

class Famous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    this.setState( { selectedLanguage: language } );
  }

  render() {
    return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          updateLanguage={this.updateLanguage} />
      </div>
    )
  }
}

module.exports = Famous;

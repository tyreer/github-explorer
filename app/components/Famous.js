var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

const SelectLanguage = ({ selectedLanguage, updateLanguage }) => {
  const languages = ['All', 'JavaScript', 'CSS'];

  return (
    <div>
      <h1>FAMOUS: {selectedLanguage}</h1>
      <ul className = 'languages'>
        {languages.map(language => {
          return (
            <li
              key={language}
              style={language === selectedLanguage ? {color: 'white'}: null}
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

class Famous extends React.Component {
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
    
    api.fetchPopularRepos(language)
      .then((repos) => {
        this.setState({
          repos: repos
        })
      });
  }

  render() {
    return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
        {JSON.stringify(this.state.repos, null, 2)}
      </div>
    )
  }
}

module.exports = Famous;

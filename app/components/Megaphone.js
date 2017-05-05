var React = require('react');
var PropTypes = require('prop-types');

class Megaphone extends React.Component {
  render() {
    return (
      <div style={{color: this.props.data.color}}>
        <h1>All shouts</h1>
        <ul>
          {this.props.data.map(shout => <li key={shout.id}>{shout.content}</li>)}
        </ul>
        <h1>Long shouts only!</h1>
        <ul>
          {this.props.data.filter(shout => shout.content.length > 3).map(shout => <li key={shout.id}>{shout.content}</li>)}
        </ul>
      </div>
    )
  }
}

Megaphone.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
  })).isRequired,
  color: PropTypes.string,
}

module.exports = Megaphone;
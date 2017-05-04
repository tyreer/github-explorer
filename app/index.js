var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

require('./index.css');

const SHOUT_DATA = [
    {
      id: 1,
      content: 'YOO'
    },
    {
      id: 2,
      content: 'NOO'
    },
    {
      id: 3,
      content: 'OOOOOOO'
    },
    {
      id: 4,
      content: 'BOOOO'
    }
];

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

ReactDOM.render( <Megaphone data={SHOUT_DATA} color={'white'} />, document.getElementById('app'));

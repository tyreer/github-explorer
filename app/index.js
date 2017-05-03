var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

const SHOUT_DATA = {
  shout: 'YOO',
  color: 'white'
}

class Megaphone extends React.Component {
  render() {
    return (
      <h1 style={{color: this.props.data.color}}>{this.props.data.shout}</h1>
    )
  }
}

ReactDOM.render( <Megaphone data={SHOUT_DATA} />, document.getElementById('app'));

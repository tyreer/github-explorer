var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

const SHOUT_DATA = {
  shouts: [
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
  ],
  color: 'white'
}

class Megaphone extends React.Component {
  render() {
    return (
      <div>
        <h1>All shouts</h1>
        <ul style={{color: this.props.data.color}}>
          {this.props.data.shouts.map(shout => <li key={shout.id}>{shout.content}</li>)}
        </ul>
        <h1>Long shouts only!</h1>
        <ul style={{color: this.props.data.color}}>
          {this.props.data.shouts.filter(shout => shout.content.length > 3).map(shout => <li key={shout.id}>{shout.content}</li>)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render( <Megaphone data={SHOUT_DATA} />, document.getElementById('app'));

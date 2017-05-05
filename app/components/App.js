var React = require('react');
var Famous = require('./Famous');
var Megaphone = require('./Megaphone');

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

class App extends React.Component {
  render() {
    return (
      <div>
        <Famous />
        <Megaphone data={SHOUT_DATA} color={'white'} />
      </div>
    )
  }
}

module.exports = App;

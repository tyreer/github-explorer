var React = require('react');
var Famous = require('./Famous');
var Megaphone = require('./Megaphone');

class App extends React.Component {
  render() {
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

    return (
      <div className='container'>
        <Famous />
        <Megaphone data={SHOUT_DATA} color={'white'} />
      </div>
    )
  }
}

module.exports = App;

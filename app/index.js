var React = require('react');
var ReactDOM = require('react-dom');
var Megaphone = require('../components/Megaphone.js')

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

ReactDOM.render( <Megaphone data={SHOUT_DATA} color={'white'} />, document.getElementById('app'));

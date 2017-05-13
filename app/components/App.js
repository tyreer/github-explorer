var React = require('react');
var Famous = require('./Famous');
var Megaphone = require('./Megaphone');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');

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
      <Router>
        <div className='container'>
          <Nav />
          <Route path='/famous' component={Famous} />
          <Megaphone data={SHOUT_DATA} color={'white'} />
        </div>
      </Router>
    )
  }
}

module.exports = App;

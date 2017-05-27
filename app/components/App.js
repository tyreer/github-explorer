const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Nav = require('./Nav');
const Home = require('./Home');
const Battle = require('./Battle');
const Famous = require('./Famous');
const Megaphone = require('./Megaphone');
const Results = require('./Results');

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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/famous' component={Famous} />
            <Route render= { () => <p>Not found</p> }/>
          </Switch>
          <Megaphone data={SHOUT_DATA} color={'white'} />
        </div>
      </Router>
    )
  }
}

module.exports = App;

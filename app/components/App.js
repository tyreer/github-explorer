import React, { Component } from 'react';
import { ReactRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Famous from './Famous';
import Megaphone from './Megaphone';
import Results from './Results';
import Followers from './Followers';

export default class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/famous' component={Famous} />
            <Route path='/followers' component={Followers} />
            <Route render= { () => <p>Not found</p> }/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

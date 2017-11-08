import React, { Component } from 'react';
import { ReactRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav/Nav';
import Battle from './Battle/Battle';
import Famous from './Famous/Famous';
import Results from './Results/Results';
import Followers from './Followers/Followers';
import FollowerResults from './FollowerResults/FollowerResults';

export default class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          <Nav expanded={false} />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Nav} />
              <Route exact path='/battle' component={Battle} />
              <Route path='/battle/results' component={Results} />
              <Route path='/famous' component={Famous} />
              <Route exact path='/followers' component={Followers} />
              <Route path='/followers/results' component={FollowerResults} />
              <Route render= { () => <p>Not found</p> }/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

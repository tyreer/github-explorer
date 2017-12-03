import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav, { navHomeProps, navOptionsProps } from './Nav/Nav';
import Battle from './Battle/Battle';
import Famous from './Famous/Famous';
import Results from './Results/Results';
import Followers from './Followers/Followers';
import FollowerResults from './FollowerResults/FollowerResults';
import AddProps from './AddProps/AddProps';

const HomeNav = AddProps(Nav, navHomeProps);
const OptionsNav = AddProps(Nav, navOptionsProps);

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <HomeNav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={OptionsNav} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/famous" component={Famous} />
            <Route exact path="/followers" component={Followers} />
            <Route path="/followers/results" component={FollowerResults} />
            <Route render={() => <p>Not found</p>} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

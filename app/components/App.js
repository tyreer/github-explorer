import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav, { navOptionLinks, navHomeLink } from './Nav/Nav';
import Battle from './Battle/Battle';
import Famous from './Famous/Famous';
import Results from './Results/Results';
import Followers from './Followers/Followers';
import FollowerResults from './FollowerResults/FollowerResults';
import AddProps from './AddProps/AddProps';

const GitHubExplorerHomeNav = AddProps(Nav, navHomeLink);
const GitHubExplorerOptionsNav = AddProps(Nav, navOptionLinks);

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <GitHubExplorerHomeNav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={GitHubExplorerOptionsNav} />
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

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import EditPage from '../components/EditPage';
import AddExpensePage from '../components/AddExpensePage';
import DashboardPage from '../components/DashboardPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

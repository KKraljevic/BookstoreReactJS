/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import MainContent from 'containers/MainContent/Loadable';
import DetailsPage from 'containers/DetailsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}

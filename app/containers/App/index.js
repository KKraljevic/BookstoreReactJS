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

import Search from 'containers/Search/Loadable';
import MainContent from 'containers/MainContent/Loadable';
import DetailsPage from 'containers/DetailsPage/Loadable';
import BooksPage from 'containers/BooksPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Search />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route exact path="/search/:searchTerm" component={BooksPage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}

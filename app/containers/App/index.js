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
import { Helmet } from 'react-helmet';

import Search from 'containers/Search/Loadable';
import Overview from 'containers/Overview';
import MainContent from 'containers/MainContent/Loadable';
import DetailsPage from 'containers/DetailsPage/Loadable';
import BooksPage from 'containers/BooksPage/Loadable';
import CategoryBooksPage from 'containers/CategoryBooksPage/Loadable';
import CategoriesPage from 'containers/CategoriesPage/Loadable';
import InfoPage from 'containers/InfoPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import Header from 'components/Header';
import Footer from 'components/Footer';
import RootWrapper from './RootWrapper';

export default function App() {
  return (
    <RootWrapper>
      <Header />
      <Search />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route exact path="/about" component={InfoPage} />
        <Route exact path="/categories" component={CategoriesPage} />
        <Route path="/categories/:name" component={CategoryBooksPage} />
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/search/:searchTerm?" component={BooksPage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </RootWrapper>
  );
}

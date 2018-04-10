import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


import style from './App.scss';
import NavBar from './../NavBar';

/**
 * App Component
 * @type {Class}
 */
export default class App extends React.Component {
  /**
   * Render function for App Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <Router>
        <div className={style.App}>
          <Route path='/' component={NavBar} />
        </div>
      </Router>

    );
  }
}

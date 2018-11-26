import React, { Component } from 'react';
import { Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import logo from './logo.svg';
import './App.css';

//import Top from './components/top';
import Top from './components/Top';
import Board from './components/Board';
import Sns from './components/Sns';
import Navbar from './components/Navbar';

const page_reload_in = 5000

const styles = {
  wp: {
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    //backgroundImage: "url(" + wallpaper + ")",
  },
  topContainer: {
    height: "100%",
    paddingRight: "20px",
    paddingLeft: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  topItem: {
    height: "100%"
  },
  form: {
    width: "400px",
    maxWidth: "100%",
    marginTop: "200px"
  },
  overlay: {
    position: "fixed",
    display: "block",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(128,10,247,0.8)",
    zIndex: 2,
  },
  '@media (max-width: 900px)': {
    form: {
      width: "100vw",
      marginTop: "0px"
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          <Navbar />
        </header>
        <div className="overlay">
        <Switch>
          <Route exact path='/' component={ Top } />
          <Route exact path='/Board' component={ Board } />
          <Route exact path='/Sns' component={ Sns } />
        </Switch>
        </div>
      </div>
    );
  }
}

export default (withStyles(styles)(App))
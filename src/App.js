import React, { Component } from 'react';
import { Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import logo from './logo.svg';
import './App.css';

import Top from './components/Top/index';
import Home from './components/Home/index';
import ProjectCreate from './components/ProjectCreate/index';
import Navbar from './components/Navbar/index';
import ProjectList from './components/ProjectList/index'
import Profile from './components/Profile/index';
import Ranking from './components/Ranking/index';
import Board from './components/Board/index';
import Signup from './components/Signup/index';
import Signin from './components/Signin/index';
import Project from './components/Project/index';
import Dialog_In from './components/Navbar/Dialog_In';
import Dialog_Up from './components/Navbar/Dialog_Up';

const page_reload_in = 5000

const styles = {
  wp: {
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: "#003366",
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
  color: {
    background: "#003366",
    backgroundColor: "#003366",
  },
  overlay: {
    height: "100%",
    width: "100%",
    position: "absolute",
    display: "block",
    backgroundColor: "black",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
        <header>
          <Navbar />
        </header>
        <body>
          <div >
          <Switch>
            <Route exact path='/Top' component={ Top } />
            <Route exact path='/ProjectCreate' component={ ProjectCreate } />
            <Route exact path='/Home' component={ Home } />
            <Route exact path='/ProjectList' component={ ProjectList} />
            <Route exact path='/Profile' component={ Profile } />
            <Route exact path='/Project' component={ Project } />
            <Route exact path='/Ranking' component={ Ranking } />
            <Route exact path='/board' component={ Board } />
          </Switch>
          </div>
        </body>
      </div>
    );
  }
}


export default (withStyles(styles)(App));
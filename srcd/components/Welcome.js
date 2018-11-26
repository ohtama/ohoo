import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// import './App.css';

import Test from '../components/Test';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from '../components/Form';

import wallpaper from '../wallpaper-cooperating.jpg';


const styles = {
  wp: {
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(" + wallpaper + ")",
  },
  topContainer: {
    height: "100%",
    paddingRight: "20px",
    paddingLeft: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
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
  flex: {
    paddingRight: "20px",
    paddingLeft: "20px",
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "center"
  },
  hugeText: {
    marginTop: 200,
    marginBottom: 100,
    fontSize: "100px"
  },
  '@media (max-width: 900px)': {
    form: {
      width: "100vw",
      marginTop: "0px"
    }
  }
};


class Welcome extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Navbar />
        <div className={classes.wp}>
          <div className={classes.topContainer}>
            <div className={classes.topItem}>
                <p style={{fontSize: "60px", color: "#FFFFFF"}}>
                  CriCriへようこそ
                </p>
            </div>
          </div>
        </div>
        <div className={classes.flex} style={{height: "1000px", fontSize: "40px", backgroundColor: "#cccccc"}}>
          <div className={classes.hugeText}>概要</div>
          <div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
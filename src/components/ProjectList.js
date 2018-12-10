import React, { Component } from 'react';
import { Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const styles = {
	par: {
		padding: "5%",
	},
  title:  {
    textAlign: "center",
    fontSize: "25px"
	},
	right: {
		textAlign: "right"
	},
  searchBox: {
    width: "30%",
		height: "20px",
 	  fontSize: "25px",
    borderRadius: "3px",
    border: "3px solid #cccccc",
    outline: "5px",
  	padding: "10px",
		"&:focus": {
			outline: "1px solid #4da7fe !important"
    }
	},
	buttonContainer: {
		paddingRight: "20%",
		paddingLeft: "20%",
		display: "flex",
		flexFlow: "row-reverse nowrap"
	},
	link: {
    color: "white",
    whiteSpace: "nowrap",
    margin: "8px"
  },
};

class ProjectList extends React.Component {
  render(){
  	const {classes} = this.props;
      return(
        <div className={classes.par}>
					<div className={classes.right}>
						<div className={classes.buttonContainer}>
          	    <Button onClick={this.onClickPost} variant="contained" color="secondary">
								<div>
                	<Link to= '/board' className={classes.link}>
                  	新規投稿
                	</Link>
              	</div>
             	 	</Button>
          	</div>
					</div>
          <div className={classes.title}>
            掲示板検索
          </div>
          <input onKeyPress={this.onKeyPress} className={classes.searchBox} ref="search_box"></input>
        </div>
        );
    }
}

ProjectList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ProjectList);
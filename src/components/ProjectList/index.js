import React, { Component } from 'react';
import { Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = {
	par: {
		widhth: "100%",
		minHeight: "90.5vh",
		backgroundColor: "#003366",
		padding: "5%",
	},
  title:  {
    textAlign: "center",
		fontSize: "300%",
		fontFamily: "Georgia",
	},
	right: {
		textAlign: "right"
	},
  searchBox: {
    width: "30%",
		height: "50px",
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
	shadow: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"
  },
  box: {
		marginTop: "2%",
		margin: "auto",
    flex: "0 0 auto",
    width: "300px",
    height: "200px",
    marginBottom: "30px",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    cursor: "pointer",
    transition: "backgroundColor 0.5s",
    border: "none",
    padding: "20px",
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "#eff5f6"
    }
  },
  boxTitle: {
    fontSize: "30px",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  boxDesc: {
    fontSize: "20px",
    color: "#cccccc",
    whiteSpace: "pre-line",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
};

class ProjectList extends React.Component {

	state = {
	}
	onClick = () => {
		this.props.history.push("/projects/" + this.props.projdata.id.toString())
	}

  render(){
		const {classes} = this.props;
      return(
        <div className={classes.par}>
					<div className={classes.right}>
						<div className={classes.buttonContainer}>
							<Link to= '/board' className={classes.link}>
          	    <Button onClick={this.onClickPost} variant="contained" color="secondary">
									<div>
                  	新規投稿
              		</div>
             	 	</Button>
							</Link>
          	</div>
					</div>
          <div className={classes.title}>
            Search
          </div>
          <input onKeyPress={this.onKeyPress} className={classes.searchBox} ref="search_box"></input>
						<div className={classNames(classes.box, classes.shadow)} onClick={this.onClick}>
							<div className={classes.boxTitle}>
							LoLチーム募集
							</div>
							<div className={classes.boxDesc}>
								sup@1
							</div>
						</div>
				</div>
        );
    }
}

ProjectList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ProjectList);
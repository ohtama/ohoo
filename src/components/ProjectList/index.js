import React, { Component } from 'react';
import { Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import BottomArrow from './BottomArrow.svg';
import TopArrow from './TopArrow.svg';

const styles = {
	par: {
		width: "100%",
		minHeight: "90.5vh",
		backgroundColor: "#003366",
		padding: "2%",
	},
  title:  {
		color: "white",
    textAlign: "center",
		fontSize: "300%",
		fontFamily: "Georgia",
	},
	title2:	{
		marginTop: "2%",
		color: "white",
		textAlign: "center",
		fontSize: "250%",
		fontFamily: "Georgia",
	},
	title3:	{
		marginTop: "8%",
		color: "white",
		textAlign: "center",
		fontSize: "200%",
		fontFamily: "Georgia",
	},
	right: {
		textAlign: "right"
	},
	search: {
		width: "1%",
		height: "5%",
		left: "2%",
	},
  searchBox: {
    width: "30%",
		height: "60px",
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
		marginTop: "0.2%",
		marginLeft: "1%",
		margin: "auto",
    flex: "0 0 auto",
    width: "80%",
    height: "20%",
    marginBottom: "30px",
		borderRadius: "5px",
		display: "inline-flex",
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
	a: {
		position: "absolute",
		bottom: "20px",
		left: "50%",
		zIndex: "2",
		display: "inline-block",
		WebkitTransform: "translate(0, -50%)",
		transform: "translate(0, -50%)",
		textDecoration: "none",
	}
};

class ProjectList extends React.Component {

	state = {
	}
	onClick = () => {
		//this.props.history.push("/projects/" + this.props.projdata.id.toString())
	}

  render(){
		const {classes} = this.props;
				return(
					<div className={classes.par}>
						<div className={classes.right}>
							<div className={classes.buttonContainer}>
								<Link to= '/ProjectCreate' className={classes.link}>
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
					<div>
						<input onKeyPress={this.onKeyPress} className={classes.searchBox} ref="search_box"></input>
							<Button onClick={this.onClickPost} className={classes.search}variant="contained" color="default">
								<div>
									検索
								</div>
							</Button>
					</div>
					<div className={classes.title2}>
						MyProject
					</div>
					<div className={classNames(classes.box, classes.shadow)} onClick={this.onClick}>
						<div className={classes.boxTitle} >
							あいうえお
						</div>
						<div className={classes.boxDesc}>
							アイウエオ
						</div>
					</div>
					<div className={classNames(classes.box, classes.shadow)} onClick={this.onClick}>
						<div className={classes.boxTitle}>
							かきくけこ
						</div>
						<div className={classes.boxDesc}>
							カキクケコ
						</div>
					</div>
					<div className={classNames(classes.box, classes.shadow)} onClick={this.onClick}>
						<div className={classes.boxTitle}>
							さしすせそ
						</div>
						<div className={classes.boxDesc}>
							サシスセソ
						</div>
						<div style={{
							position: "fixed",
							right: "3em",
							bottom: "8em",
							borderRadius: "100%",
							backgroundColor: "white",
							border: "1px solid black",
							width: "4em",
							height: "4em",
							display: "flex",
							justifyContent: "center"
						}}
						onClick={() => {
							window.scroll({
								top: 0,
								behavior: "smooth"
							});
						}}
						>
							<img src={TopArrow} style={{width: "2em"}}/>
						</div>
						<div style={{
							position: "fixed",
							right: "3em",
							bottom: "3em",
							borderRadius: "100%",
							backgroundColor: "white",
							border: "1px solid black",
							width: "4em",
							height: "4em",
							display: "flex",
							justifyContent: "center"
						}}
						onClick={() => {
							window.scroll({
								top: document.documentElement.getBoundingClientRect().height,
								behavior: "smooth"
							});
						}}
						>
							<img src={BottomArrow} style={{width: "2em"}}/>
						</div>
					</div>
					<div className={classes.title3}>
						OtherProject
					</div>
					<div>
						<div className={classNames(classes.box, classes.shadow)} onClick={this.onClick}>
							<div className={classes.boxTitle}>
								たちつてと
							</div>
							<div className={classes.boxDesc}>
								タチツテト
							</div>
						</div>
						<div className={classNames(classes.box, classes.shadow)} onClick={this.onClick}>
							<div className={classes.boxTitle}>
								なにぬねの
							</div>
							<div className={classes.boxDesc}>
								ナニヌネノ
							</div>
						</div>
						<div className={classNames(classes.box, classes.shadow)} onClick={this.onClick}>
							<div className={classes.boxTitle}>
								はひふへほ
							</div>
							<div className={classes.boxDesc}>
								ハヒフヘホ
							</div>
						</div>
					</div>
					<div>
						<div className={classNames(classes.box, classes.shadow)} onClick={this.onClick}>
							<div className={classes.boxTitle}>
								まみむめも
							</div>
							<div className={classes.boxDesc}>
								マミムメモ
							</div>
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
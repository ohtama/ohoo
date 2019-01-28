import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';

import Comment from '../Comment';

const styles = {
  main: {
    paddingTop: "40px",
    paddingBottom: "40px",
    paddingRight: "var(--main-padding)",
    paddingLeft: "var(--main-padding)",
  },
  header: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between"
  },
  name: {
    fontSize: "40px"
  },
  shortDesc: {
    fontSize: "20px",
    color: "#bbbbbb"
  },
  desc: {
    fontSize: "20px",
    paddingBottom: "20px",
    whiteSpace: "pre-line"
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: "100%"
  },
  joinBtn: {
    fontSize: "20px",
    width: "300px",
    height: "70px",
    marginTop: "20px"
  },
  deleteBtn: {
    fontSize: "15px",
    width: "200px",
    height: "50px",
    marginTop: "20px"
  },
  textarea: {
    width: "100%",
    height: "100px"
  },
  commentContainer: {
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-between",
    paddingTop: "40px"
  },
  comment: {
    width: "100%",
    paddingBottom: "20px"
  },
  memberContainer: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
  },
  memberBlock: {
    paddingTop: "40px",
    paddingBottom: "40px"
  },
  commentBlock: {
    paddingTop: "40px",
    paddingBottom: "40px"
  },
  blockTitle: {
    fontSize: "25px"
  }
};


class Project extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.header}>
          <div>
            <div className={classes.name}>
              DFM
            </div>
            <div className={classes.shortDesc}>
              おほー
            </div>
          </div>
          <div>
            オーナー: おーちん
          </div>
					<div>
        	<div>
            <Button className={classes.deleteBtn} onClick={this.onClickDelete} variant="contained" color="secondary">
              削除
          	</Button>
          </div>
          <div>
          <Button className={classes.joinBtn} onClick={this.onClickLeave} variant="contained" color="primary">
            脱退
        	</Button>
          </div>
          <div>
          <Button className={classes.joinBtn} onClick={this.onClickJoin} variant="contained" color="primary" href="https://discord.gg/rmMWVp">
            参加
          </Button>
        	</div>
					</div>
        </div>
        <div className={classes.desc}>
          いいいいいいいい
        </div>
        <div className={classes.memberBlock}>
          <div className={classes.blockTitle}>
            メンバー
          </div>
          <div className={classes.memberContainer}>      
					あああああああああ   
          </div>
        </div>
      	<div className={classes.commentBlock}>
          <div className={classes.blockTitle}>
            コメント
          </div>
          <div>
            <div>
              <textarea className={classes.textarea} ref="text">
              </textarea>
           	</div>
           	<div>
            <Button onClick={this.onClickPost} variant="contained" color="secondary">
              コメント投稿
            </Button>
           	</div>
       		</div>
          <div className={classes.commentContainer}>
            adsad
          </div>
        </div>
      </div>
    );
  }
}
Project.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default (withStyles(styles)(Project));
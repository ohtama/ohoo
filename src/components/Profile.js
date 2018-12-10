import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  block: {
    position:"absolute",
    marginLeft:"0%",
    width: "20%",
    height: "450px",
    background: "#042133"
  },
  profile: {
    position:"absolute",
    marginTop:"45%",
    width: "100%",
    height: "150px",
    background: "#042138"
  },
  profiletext: {
    color:"white",
    fontSize:"14px"
  },
  input: {
    display: 'none',
  },
  followbutton: {
    position:"absolute",
    color:"white",
    marginTop:"8.5%",
    marginLeft:"25%"
  },
  follow:{
    position:"absolute",
    color:"white",
    marginTop:"11%",
    fontSize:"14px",
    marginLeft:"50%"
  },
  followerbutton: {
    position:"absolute",
    color:"white",
    marginTop:"18.5%",
    marginLeft:"25%"
  },
  follower:{
    position:"absolute",
    color:"white",
    marginTop:"21%",
    fontSize:"14px",
    marginLeft:"50%"
  },
  videobutton: {
    position:"absolute",
    color:"white",
    marginTop:"28.5%",
    marginLeft:"25%"
  },
  video:{
    position:"absolute",
    color:"white",
    marginTop:"30%",
    fontSize:"14px",
    marginLeft:"50%"
  },
  settingbutton: {
    position:"absolute",
    color:"white",
    marginTop:"105%",
    marginLeft:"-45%"
  },
  helpbutton: {
    position:"absolute",
    color:"white",
    marginTop:"120%",
    marginLeft:"-45%"
  },
  logoutbutton: {
    position:"absolute",
    color:"red",
    marginTop:"135%",
    marginLeft:"-45%"
  },
  pic: {
    position:"absolute",
    marginTop:"2%",
    marginLeft:"-48%",
    width: "40%"
  }
};

class Profile extends React.Component{
  state = {
    getImage: [],
  };
  componentDidMount(){
    window.scrollTo(0, 0)
    this.getImage
  }

  render(){
    const {classes} = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.block}>
          <img src="./user.png" className={classes.pic}/>

          <div className={classes.follow}>
            フォロー
          </div>
          <Button href="#follow" size="medium" className={classes.followbutton}>
              12000
          </Button>

          <div className={classes.follower}>
            フォロワー
          </div>
          <Button  href="#follower" size="medium" className={classes.followerbutton}>
              30000
          </Button>

          <div className={classes.video}>
            動画
          </div>
          <Button href="#movie" size="medium" className={classes.videobutton}>
              18
          </Button>

          <div className={classes.profile}>
            <div className={classes.profiletext}>
              プロフィール的な
            </div>
          </div>

          <Button href="#text-buttons" size="medium" className={classes.settingbutton}>
              設定
          </Button>
          <Button href="#text-buttons" size="medium" className={classes.helpbutton}>
              ヘルプ
          </Button>
          <Button href="#text-buttons" size="medium" className={classes.logoutbutton}>
              ログアウト
          </Button>

        </div>
    </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);

import React, { Component } from 'react';
// import ReactPlayer from 'react-player';
import { Waypoint } from 'react-waypoint';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Scroll from './Scroll';
import Fade from 'react-reveal/Fade';
import config from '../../config';
import cloudsaustin from '../assets/images/cloudsaustin.mp4';
import austinlake from '../assets/images/austinlake3.mp4';
import UiZoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';

const DarkTooltip = withStyles(theme => ({
  tooltip: {
    // backgroundColor: theme.palette.common.black,
    // color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    // marginLeft: '30px',
  },
}))(Tooltip);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
    };
  }

  handleWaypointEnter = () => {
    this.setState({ playing: true });
    var vid = document.getElementById('myVideo');
    console.log('ENTER', vid);
    vid.play();
  };

  handleWaypointLeave = () => {
    this.setState({ playing: true });
    var vid = document.getElementById('myVideo');
    console.log('LEAVE', vid);
    vid.pause();
  };

  render() {
    return (
      <section id="header">
        <video id="myVideo" className="austin-clouds" loop autoPlay muted>
          <source src={cloudsaustin} type="video/mp4"></source>
        </video>
        <video
          id="myVideo"
          className="austin-clouds"
          id="austin-lake"
          loop
          autoPlay
          muted
        >
          <source src={austinlake} type="video/mp4"></source>
        </video>
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        >
          <header className="major">
            <Fade top duration={1500}>
              <ul className="icons">
                {config.socialLinks.map(social => {
                  const { icon, name, url } = social;
                  return (
                    <li key={url}>
                      <DarkTooltip
                        TransitionComponent={UiZoom}
                        title={name}
                        // placement="right"
                        arrow
                      >
                        <a
                          href={url}
                          className={`icon alt ${icon}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="label">{name}</span>
                        </a>
                      </DarkTooltip>
                    </li>
                  );
                })}
              </ul>
              <h1>{config.heading}</h1>
              <p>{config.subHeading}</p>
              <section id="section07" className="demo">
                <Scroll type="id" element="one">
                  <div className="arw-bkg">
                    <a href="#one">
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </Scroll>
              </section>
            </Fade>
          </header>
        </Waypoint>
      </section>
    );
  }
}

export default Header;

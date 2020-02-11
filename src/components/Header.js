import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Waypoint } from 'react-waypoint';
import Scroll from './Scroll';
import Fade from 'react-reveal/Fade';
import config from '../../config';
import cloudsaustin from '../assets/images/cloudsaustin.mp4';
// import austinlake from '../assets/images/austinlake3.mp4';

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
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        >
          <video id="myVideo" className="austin-clouds" loop autoPlay muted>
            <source src={cloudsaustin} type="video/mp4"></source>
          </video>
        </Waypoint>
        <header className="major">
          <Fade top duration={1500}>
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
      </section>
    );
  }
}

export default Header;

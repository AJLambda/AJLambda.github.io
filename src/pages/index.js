import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Scrollspy from 'react-scrollspy';
import UiZoom from '@material-ui/core/Fade';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import nodeimg from '../assets/images/node.png';
import htmlimg from '../assets/images/html.png';
import cssimg from '../assets/images/css3.png';
import gitimg from '../assets/images/git.png';
import reactimg from '../assets/images/react.png';
import reduximg from '../assets/images/redux.png';
import sqlimg from '../assets/images/sql.png';
import pythonimg from '../assets/images/python.png';
import jsimg from '../assets/images/javascript.png';
import austin from '../assets/images/austinjames.png';
import riy from '../assets/images/reviewityourself.png';
import molokai from '../assets/images/molokairentals.png';
import safespace from '../assets/images/safespace.png';
import topnine from '../assets/images/mytopnine.png';
import lambdamud from '../assets/images/lambdamud1.png';
import { withStyles } from '@material-ui/core/styles';

const LightToolTip = withStyles(theme => ({
  tooltip: {
    // backgroundColor: theme.palette.common.white,
    // color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    marginBottom: '10px',
  },
}))(Tooltip);

const sections = [
  // { id: 'main', bg: require('../assets/images/rocks.jpg') },
  // { id: 'two', bg: require('../assets/images/rocks.jpg') },
  // { id: 'three', bg: require('../assets/images/rocks.jpg') },
  // { id: 'footer', bg: require('../assets/images/rocks.jpg') },
];
const IndexPage = () => (
  <>
    <Layout>
      <Header id="header"></Header>

      <section id="main">
        {/* <div className="sticky"></div> */}
        {/* <div className="video-container"></div> */}

        <section id="one" className="main special">
          <div className="container">
            <div className="content">
              <header className="major">
                <Zoom>
                  <img className="profile-img" src={austin} alt="Austin" />
                </Zoom>
                <h2>About Me</h2>
              </header>

              <p>
                Hi! I am Austin James, a Full-Stack Web Developer from Orange
                County, California. I combine design and code to create websites
                and applications that are interactive, responsive, and
                performant. It is my passion to bring ideas to life.
              </p>
            </div>
            <Scroll offset={10} type="id" element="two">
              <a href="#two" className="goto-next ">
                <div className="center-con">
                  <div className="round">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </a>
            </Scroll>
          </div>
        </section>
        {/* Section 2 */}
        <section id="two" className="main special">
          <div className="container">
            <div className="content">
              <header className="major">
                <h2>Portfolio</h2>
              </header>

              <p>
                I have practiced Agile software development across multiple
                teams. Each project has provided a unique learning experience
                working under a different role. These are some of my most
                noteable creations.
              </p>

              <div className="projects-container">
                <div className="grid">
                  <Fade>
                    <div className="white-box">
                      <a
                        href="https://www.molokaicondorentals.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-anchor"
                      >
                        <figure className="effect-zoe">
                          <img src={molokai} alt="img25" />

                          <figcaption>
                            <h2>
                              Condo<span>Rentals</span>
                            </h2>
                            <div className="icon-links">
                              <LightToolTip
                                TransitionComponent={UiZoom}
                                title="URL"
                                arrow
                              >
                                <a
                                  href="https://molokaicondorentals.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="fa fa-link fa-3x" />
                                </a>
                              </LightToolTip>
                              {/* <ToolTip TransitionComponent={UiZoom} title="Code">
                              <a
                                href="https://github.com/labs13-how-to"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FontAwesomeIcon
                                  icon={faGithub}
                                  className="github-icon"
                                />
                              </a>
                            </ToolTip> */}
                            </div>
                            <p className="description">
                              A vacation property rental website I am developing
                              for a client. Built using Wordpress.
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </Fade>
                </div>

                {/* Mobile Project */}
                <div className="mobile-project-card">
                  <div className="mobile-project-img" id="molokai"></div>
                  <div className="mobile-project-info">
                    <h3>Molokai Condo Rentals</h3>
                    <p>
                      A vacation property rental website I am developing for a
                      client. Built using Wordpress.
                    </p>
                    {/* <a
                    href="https://github.com/labs13-how-to"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="github-icon-mobile"
                    />
                  </a> */}
                    <a
                      href="https://molokaicondorentals.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="fa fa-link fa-3x" />
                    </a>
                  </div>
                </div>

                <div className="grid">
                  <Fade>
                    <div className="white-box">
                      <a
                        href="https://review-it-yourself.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-anchor"
                      >
                        <figure className="effect-zoe">
                          <img src={riy} alt="img25" />

                          <figcaption>
                            <h2>
                              RI<span>Y</span>
                            </h2>
                            <div className="icon-links">
                              <LightToolTip
                                TransitionComponent={UiZoom}
                                title="URL"
                                arrow
                              >
                                <a
                                  href="https://review-it-yourself.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="fa fa-link fa-3x" />
                                </a>
                              </LightToolTip>
                              <LightToolTip
                                TransitionComponent={UiZoom}
                                title="Code"
                                arrow
                              >
                                <a
                                  href="https://github.com/labs13-how-to"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FontAwesomeIcon
                                    icon={faGithub}
                                    className="github-icon"
                                  />
                                </a>
                              </LightToolTip>
                            </div>
                            <p className="description">
                              DIY web and iOS app where users can find, create,
                              review and rate projects.
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </Fade>
                </div>

                {/* Mobile Project */}
                <div className="mobile-project-card">
                  <div className="mobile-project-img" id="riy"></div>
                  <div className="mobile-project-info">
                    <h3>Review it Yourself</h3>
                    <p>
                      DIY web and iOS app where users can find, create, review
                      and rate projects.
                    </p>
                    <a
                      href="https://github.com/labs13-how-to"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="github-icon-mobile"
                      />
                    </a>
                    <a
                      href="https://review-it-yourself.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="fa fa-link fa-3x" />
                    </a>
                  </div>
                </div>

                <div className="grid">
                  <Fade>
                    <div className="white-box">
                      <a
                        href="https://safespace-landing.netlify.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <figure className="effect-zoe">
                          <img src={safespace} alt="img25" />

                          <figcaption>
                            <h2>
                              Safe <span>Space</span>
                            </h2>
                            <div className="icon-links">
                              <LightToolTip
                                TransitionComponent={UiZoom}
                                title="URL"
                                arrow
                              >
                                <a
                                  href="https://safespace-landing.netlify.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="fa fa-link fa-3x" />
                                </a>
                              </LightToolTip>
                              <LightToolTip
                                TransitionComponent={UiZoom}
                                title="Code"
                                arrow
                              >
                                <a
                                  href="https://github.com/AJLambda/Safespace-landing"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FontAwesomeIcon
                                    icon={faGithub}
                                    className="github-icon"
                                  />
                                </a>
                              </LightToolTip>
                            </div>
                            <p className="description">
                              Self-care web app designed to send positive text
                              reminders throughout the day.
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </Fade>
                </div>

                {/* Mobile Project */}
                <div className="mobile-project-card">
                  <div className="mobile-project-img" id="safespace"></div>
                  <div className="mobile-project-info">
                    <h3>Safespace</h3>
                    <p>
                      Self-care web app designed to send positive text reminders
                      throughout the day.
                    </p>
                    <a
                      href="https://github.com/AJLambda/Safespace-landing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="github-icon-mobile"
                      />
                    </a>
                    <a
                      href="https://safespace-landing.netlify.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="fa fa-link fa-3x" />
                    </a>
                  </div>
                </div>

                <div className="grid">
                  <Fade>
                    <div className="white-box">
                      <a
                        href="https://mytopnine.netlify.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <figure className="effect-zoe">
                          <img src={topnine} alt="img25" />

                          <figcaption>
                            <h2>
                              My Top <span>Nine</span>
                            </h2>
                            <div className="icon-links">
                              <LightToolTip
                                TransitionComponent={UiZoom}
                                title="URL"
                                arrow
                              >
                                <a
                                  href="https://mytopnine.netlify.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="fa fa-link fa-3x" />
                                </a>
                              </LightToolTip>
                              <LightToolTip
                                TransitionComponent={UiZoom}
                                title="Code"
                                arrow
                              >
                                <a
                                  href="https://github.com/AJLambda/MyTopNine"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FontAwesomeIcon
                                    icon={faGithub}
                                    className="github-icon"
                                  />
                                </a>
                              </LightToolTip>
                            </div>
                            <p className="description">
                              Social web app where users can select their
                              Top-Nine in a variety of categories.
                              <br />
                              (Landing Page)
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </Fade>
                </div>

                {/* Mobile Project */}
                <div className="mobile-project-card">
                  <div className="mobile-project-img" id="mytopnine"></div>
                  <div className="mobile-project-info">
                    <h3>My Top Nine</h3>
                    <p>
                      Social web app where users can select their Top-Nine in a
                      variety of categories.
                      <br />
                      (Landing Page)
                    </p>
                    <a
                      href="https://github.com/AJLambda/MyTopNine"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="github-icon-mobile"
                      />
                    </a>
                    <a
                      href="https://mytopnine.netlify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="fa fa-link fa-3x" />
                    </a>
                  </div>
                </div>

                <div className="grid">
                  <Fade>
                    <div className="white-box">
                      <a
                        href="https://lambdamudd.netlify.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <figure className="effect-zoe">
                          <img src={lambdamud} alt="img25" />

                          <figcaption>
                            <h2>
                              Lambda <span>Mudd</span>
                            </h2>
                            <div className="icon-links">
                              <LightToolTip
                                TransitionComponent={UiZoom}
                                title="URL"
                                arrow
                              >
                                <a
                                  href="https://lambdamudd.netlify.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="fa fa-link fa-3x" />
                                </a>
                              </LightToolTip>
                              <LightToolTip
                                TransitionComponent={UiZoom}
                                title="Code"
                                arrow
                              >
                                <a
                                  href="https://github.com/CS20-BuildWeek-1"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FontAwesomeIcon
                                    icon={faGithub}
                                    className="github-icon"
                                  />
                                </a>
                              </LightToolTip>
                            </div>
                            <p className="description">
                              Multi-User-Dungeon web app game with a custom made
                              map, room chat, and retro Fx.
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </Fade>
                </div>

                {/* Mobile Project */}
                <div className="mobile-project-card">
                  <div className="mobile-project-img" id="lambdamud"></div>
                  <div className="mobile-project-info">
                    <h3>Lambda Mudd</h3>
                    <p>
                      Multi-User-Dungeon web app game with a custom made map,
                      room chat, and retro Fx.
                    </p>
                    <a
                      href="https://github.com/CS20-BuildWeek-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="github-icon-mobile"
                      />
                    </a>
                    <a
                      href="https://lambdamudd.netlify.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="fa fa-link fa-3x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Scroll offset={10} type="id" element="three">
              <a href="#three">
                <div className="center-con" id="arrow">
                  <div className="round">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </a>
            </Scroll>
          </div>
        </section>
        <section id="three" className="main special">
          <div className="container">
            <div className="content">
              <header className="major">
                <h2>Skills</h2>
              </header>

              <p>
                I am always looking to expand my skill set with cutting-edge web
                technology. My experience includes many different tools and
                languages.
              </p>

              <div className="icons-container">
                <Zoom big cascade>
                  <div className="icons-grid">
                    <div className="icons-wrapper">
                      <img src={htmlimg} alt="html5" className="icons-img" />
                    </div>
                    <div className="icons-wrapper">
                      <img src={cssimg} alt="css" className="icons-img" />
                    </div>
                    <div className="icons-wrapper">
                      <img src={jsimg} alt="css" className="icons-img" />
                    </div>
                    <div className="icons-wrapper">
                      <img src={nodeimg} alt="js" className="icons-img" />
                    </div>
                    <div className="icons-wrapper">
                      <img src={reactimg} alt="nodejs" className="icons-img" />
                    </div>
                    <div className="icons-wrapper">
                      <img src={reduximg} alt="nodejs" className="icons-img" />
                    </div>
                    <div className="icons-wrapper">
                      <img src={pythonimg} alt="nodejs" className="icons-img" />
                    </div>
                    <div className="icons-wrapper">
                      <img src={sqlimg} alt="nodejs" className="icons-img" />
                    </div>
                    <div className="icons-wrapper">
                      <img src={gitimg} alt="nodejs" className="icons-img" />
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>
            <Scroll offset={10} type="id" element="footer">
              <a href="#footer" className="goto-next ">
                <div className="center-con" id="arrow">
                  <div className="round">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </a>
            </Scroll>
          </div>
        </section>
        <section id="footer">
          <div className="container">
            <header className="major">
              <h2>Get in touch</h2>
            </header>
            <form method="post" action="https://formspree.io/apj2277@gmail.com">
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                  />
                </div>
                <div className="col-12">
                  <ul className="actions special">
                    <li>
                      <input
                        type="submit"
                        value="Send Message"
                        className="primary"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <Footer />
        </section>
      </section>
      <Scrollspy
        items={sections.map(s => s.id)}
        currentClassName="active"
        componentTag={'div'}
      >
        {sections.map(s => {
          return (
            <div
              key={s.id}
              className="main-bg"
              id={`${s.id}-bg`}
              style={{
                backgroundImage: `url(${s.bg})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
              }}
            />
          );
        })}
      </Scrollspy>
    </Layout>
  </>
);

export default IndexPage;

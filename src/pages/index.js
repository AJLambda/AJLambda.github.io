import React from 'react';
import Scrollspy from 'react-scrollspy';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import nodeimg from '../assets/images/node.png';
import htmlimg from '../assets/images/html.png';
// import jsimg from '../assets/images/jsimg.png';
import cssimg from '../assets/images/css3.png';
import gitimg from '../assets/images/git.png';
import reactimg from '../assets/images/react.png';
import reduximg from '../assets/images/redux.png';
import sqlimg from '../assets/images/sql.png';
import pythonimg from '../assets/images/python.png';
import jsimg from '../assets/images/Javascript.png';
// import me from '../assets/images/me.jpg'
import austin from '../assets/images/austinjames3.png';
import riy from '../assets/images/riy8.png';
import safespace from '../assets/images/safespace6.png';
import topnine from '../assets/images/topnine.png';
import lambdafit from '../assets/images/lambdafit.png';


const sections = [
  { id: 'one', bg: require('../assets/images/hb1.jpg') },
  { id: 'two', bg: require('../assets/images/code2.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="background1" />
        </span>
        <div className="content">
          <header className="major">
            <img className="profile-img" src={austin} alt="Austin" />
            <h2>About Me</h2>
          </header>
          <Fade bottom>
          <p>
            I am 28 year old web developer student at Lambda School. I love to create, design, and solve problems. 
          </p>
          </Fade>
        </div>
        <Scroll type="id" element="two">
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

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="background2" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Experience</h2>
          </header>
          <Fade bottom>
          <p>
            These are some of the languages and tools that I use.
          </p>
          </Fade>
          
          <Zoom big cascade>
          <div className="icons-grid">
              <div className="icons-wrapper">
                <img src={htmlimg} alt="html5" className="icons-img"/>
              </div>
              <div className="icons-wrapper">
                <img src={cssimg} alt="css" className="icons-img"/>
              </div>
            <div className="icons-wrapper">
                <img src={jsimg} alt="css" className="icons-img"/>
              </div>
              <div className="icons-wrapper">
                <img src={nodeimg} alt="js" className="icons-img"/>
              </div>
              <div className="icons-wrapper">
                <img src={reactimg} alt="nodejs" className="icons-img"/>
              </div>
              <div className="icons-wrapper">
                <img src={reduximg} alt="nodejs" className="icons-img"/>
              </div>
            <div className="icons-wrapper">            
                <img src={pythonimg} alt="nodejs" className="icons-img"/>
              </div>
            <div className="icons-wrapper">             
                <img src={sqlimg} alt="nodejs" className="icons-img"/>
              </div>
            <div className="icons-wrapper">              
                <img src={gitimg} alt="nodejs" className="icons-img"/>
              </div>
          </div>
          </Zoom>
        </div>
        <Scroll type="id" element="three">
          <a href="#three">
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

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Portfolio</h2>
          </header>
          <Fade bottom>
          <p>
            I have created many projects since I joined Lambda School. I enrolled in the Full Stack program to diversify my studies and gain a wide array of knowledge about how websites and applications are made. These are some of my most notable creations so far.
          </p>
          </Fade>
          <h3 className="project-title">Review It Yourself</h3>
          <div className="project-box">
            <div className="project-content">
              <div className="project-container">
                <div className="content-overlay"></div>
                <img className="content-image1" src={riy} alt="Review It Yourself"/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">- Review It Yourself -</h3>
                  <p className="content-text">My capstone project with Lambda School. I worked as a Full Stack Web Developer on an amazing team. We spent five weeks building the app from the ground up.</p>
                  <div className="content-links">
                  <a href="https://github.com/labs13-how-to" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="github-icon" />
                  </a>
                  <a href="https://review-it-yourself.com/" target="_blank" rel="noopener noreferrer">
                  <div className="fa fa-link fa-3x"/>
                  </a>
                  </div>
                </div>
              </div>
            </div>   
          </div>
          <h3 className="project-title">Safe Space</h3>
          <div className="project-box">
            <div className="project-content">
              <div className="project-container">
                <div className="content-overlay"></div>
                <img className="content-image" src={safespace} alt="Safespace"/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">- Safe Space -</h3>
                  <p className="content-text">A project I created during my time at Lambda School. I worked as the Front End Developer in collaboration with a UI Developer and two Back End Developers.</p>
                  <div className="content-links">
                  <a href="https://github.com/AJLambda/safespace" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="github-icon" />
                  </a>
                  <a href="https://safespace-frontend.netlify.com/" target="_blank" rel="noopener noreferrer">
                  <div className="fa fa-link fa-3x"/>
                  </a>
                  </div>
                </div>
              </div>
            </div>   
          </div>
          <h3 className="project-title">My Top Nine</h3>
          <div className="project-box">
            <div className="project-content">
              <div className="project-container">
                <div className="content-overlay"></div>
                <img className="content-image" src={topnine} alt="My Top Nine" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">- My Top Nine -</h3>
                  <p className="content-text">My first group project at Lambda School. I was the UI Designer on the team. This is the first landing page that I created on my own.</p>
                  <div className="content-links">
                  <a href="https://github.com/AJLambda/MyTopNine" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="github-icon" />
                  </a>
                  <a href="https://mytopnine.netlify.com" target="_blank" rel="noopener noreferrer">
                  <div className="fa fa-link fa-3x"/>
                  </a>
                  </div>
                </div>
              </div>
            </div>   
          </div>
          <h3 className="project-title">LambdaFIT</h3>
          <div className="project-box">
            <div className="project-content">
              <div className="project-container">
                <div className="content-overlay"></div>
                <img className="content-image" src={lambdafit} alt="Lambda Fit" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">- LambdaFIT -</h3>
                  <p className="content-text">This was another group project I worked on at Lambda School. I was a Back End Developer on the team. I worked in collaboration with a Front End Developer.</p>
                  <div className="content-links">
                  <a href="https://github.com/weight-lifting-app" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="github-icon" />
                  </a>
                  <a href="https://infallible-brattain-b0f591.netlify.com/" target="_blank" rel="noopener noreferrer">
                  <div className="fa fa-link fa-3x"/>
                  </a>
                  </div>
                </div>
                </div>
            </div>   
          </div>

        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
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

    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>Get in touch</h2>
        </header>
        <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="email" id="email" placeholder="Email" />
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
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;

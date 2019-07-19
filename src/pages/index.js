import React from 'react';
import Scrollspy from 'react-scrollspy';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import nodeimg from '../assets/images/nodeimg.jpg';
import htmlimg from '../assets/images/html5.jpg';
import jsimg from '../assets/images/jsimg.png';
import cssimg from '../assets/images/cssimg.png';
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
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>About Me</h2>
          </header>
          <p>
            I am 28 year old web developer student at Lambda School. I love to create, design, and solve problems. 
          </p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Experience</h2>
          </header>
          <p>
            These are some of the languages/tools that I am currently working with.
          </p>
          {/* <img src={tools} alt="tools" className="tools-img"/> */}
          <ul className="icons-grid">
            <li>
              <div className="icons-wrapper">
                <Flip>
                <img src={htmlimg} alt="html5" className="icons-img1"/>
                </Flip>
              </div>
              <h3>Html5</h3>
            </li>
            <li>
              <div className="icons-wrapper">
              <Flip>
                <img src={cssimg} alt="css" className="icons-img1"/>
                </Flip>
              </div>
              <h3>CSS</h3>
            </li>
            <li>
              <div className="icons-wrapper">
              <Flip>
                <img src={jsimg} alt="js" className="icons-img2"/>
                </Flip>
              </div>
              <h3>Javascript</h3>
            </li>
            <li>
              <div className="icons-wrapper">
              <Flip>
                <img src={nodeimg} alt="nodejs" className="icons-img2"/>
                </Flip>
              </div>
              <h3>NodeJS</h3>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
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
            <h2>Projects</h2>
          </header>
          <p>
            Aliquam ante ac id. Adipiscing interdum lorem praesent fusce
            pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed
            adipiscing eu amet interdum lorem blandit vis ac commodo aliquet
            integer vulputate phasellus lorem ipsum dolor lorem magna consequat
            sed etiam adipiscing interdum.
          </p>
          <img src={riy} alt="RIY" className="project-pics"/>
          <img src={safespace} alt="safespace" className="project-pics"/>
          <img src={topnine} alt="topnine" className="project-pics"/>
          <img src={lambdafit} alt="lambdafit" className="project-pics"/>

        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
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

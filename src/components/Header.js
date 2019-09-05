import React from 'react';
import Scroll from './Scroll';
import Fade from 'react-reveal/Fade';
import config from '../../config';

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <Fade top>
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

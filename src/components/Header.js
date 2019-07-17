import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <h1>{config.heading}</h1>
        <p>{config.subHeading}</p>
        <Scroll type="id" element="one">
              <a href="#one" className="button primary">
                Begin
              </a>
          </Scroll>
      </header>
    </section>
  );
}

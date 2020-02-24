import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      {/* <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a
                href={url}
                className={`icon alt ${icon}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul> */}
      {/* <ul className="copyright">
        <li>&copy; Highlights</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
        <li>Customization: Austin James</li>
      </ul> */}
    </footer>
  );
}

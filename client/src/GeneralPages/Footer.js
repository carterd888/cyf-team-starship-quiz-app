import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-links-div">
        <div>
          <h4>Community:</h4>
          <ul className="footer-links">
            <li>
              <a href="https://www.codeyourfuture.io" target="_blank">
                Website
              </a>
            </li>
            <li>
              <a href="https://docs.codeyourfuture.io" target="_blank">
                Documentation
              </a>
            </li>
            <li>
              <a href="https://github.com/codeyourfuture/" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Socials:</h4>
          <ul className="footer-links">
            <li>
              <a href="https://www.facebook.com/codeyourfuture.io" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/codeyourfuture_" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/CodeYourFuture" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <div>Copyright © 2020 CodeYourFuture</div>
      </div>
    </div>
  );
};

export default Footer;
import React from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="wrapper"></div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">

            <div className="contact"></div>
            <div className="socials">
              <a
                href="https://www.facebook.com/profile.php?id=xxxxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <FontAwesomeIcon icon={faFacebook} size="xl"/>
              </a>
              <a
                href="https://www.instagram.com/xxxx/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="xl"/>
              </a>
            </div>
            <p className="copyright">
              Copyright&nbsp;&copy;&nbsp; Shri Ganesh Kisan Vitaran
            </p>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

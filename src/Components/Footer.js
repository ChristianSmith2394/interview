import React from "react";
import seal from "../photos/seal.gif";
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__text">
        <p>© 2022 - VITG-OSCAL Generator (VGEN) v1.0</p>
      </div>
      <img
        className="footer__seal"
        src={seal}
        alt="SSL site seal - click to verify"
      />
    </div>
  );
}

export default Footer;

import React from 'react';
import './Footer.scss';

const Footer = () => (
  <div className="footer-background">
    <div><a href="https://rs.school/"><img className="footer-photo" src={require('../../../../../assets/rsschool.svg')} alt="it's a logo" /></a></div>
    <div className="footer__year">2021</div>
    <div><a href="https://github.com/ksy336"><img className="footer-github" src={require('../../../../../assets/github.svg')} alt="it's a github" /></a></div>
  </div>
);
export default Footer;

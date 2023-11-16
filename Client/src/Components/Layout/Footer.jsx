import React from "react";
import "./Footer.css";
import { AiTwotoneHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer-comp">
      <div>
        <p className="footer-txt">
          made with <AiTwotoneHeart className="heart-icon-footer" /> by Om Pawar 
        </p>
      </div>
    </div>
  );
};

export default Footer;

import Link from "next/link";
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footersec flex flex-center flex-col gap-2">
        <div className="logo">
          <img src="/img/logo.png" alt="" />
        </div>

        <div className="ui flex gap-2">
          <li>
            <Link href={"/service"}>Services</Link>
          </li>
          <li>
            <Link href={"/service"}>Services</Link>
          </li>
          <li>
            <Link href={"/service"}>Services</Link>
          </li>
          <li>
            <Link href={"/service"}>Services</Link>
          </li>
          <li>
            <Link href={"/service"}>Services</Link>
          </li>
          <li>
            <Link href={"/service"}>Services</Link>
          </li>
        </div>
        <ul className="hero_social">
          <li>
            <a href={"/"} target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href={"/"} target="_blank">
              <LiaBasketballBallSolid />
            </a>
          </li>
          <li>
            <a href={"/"} target="_blank">
              <GrLinkedinOption />
            </a>
          </li>
          <li>
            <a href={"/"} target="_blank">
              <FaGithub />
            </a>
          </li>
        </ul>
        <div className="copyrights">
          &copy;2024 All Rights Reserved By <span>Mr, Phat Menghor</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

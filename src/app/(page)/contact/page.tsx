import Head from "next/head";
import React from "react";
import { FaPhoneVolume, FaTwitter } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdAttachEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <>
      <Head>Contact Page</Head>
      <div className="contactpage">
        <div className="container">
          <div className="contactformp">
            <div className="leftcontp">
              <h2>Get in touch</h2>
              <h2>Let's Take with me</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque quos.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque quos.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque quos.
              </p>
              <div className="leftsociinfo">
                <ul>
                  <li>
                    <FaPhoneVolume />
                    <span>
                      Phone:{" "}
                      <a
                        className="cursor"
                        href="tel:+855070411260"
                        target="_blank"
                      >
                        +855-70411260
                      </a>
                    </span>
                  </li>
                  <li>
                    <MdAttachEmail />
                    <span>
                      Email:{" "}
                      <a
                        className="cursor"
                        href="mailto:phatmenghor19@gmail.com"
                        target="_blank"
                      >
                        phatmenghor19@gmail.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <GrLinkedin />
                    <span>
                      Linkedin:{" "}
                      <a
                        className="cursor"
                        href="tel:+855070411260"
                        target="_blank"
                      >
                        Phat Menghor
                      </a>
                    </span>
                  </li>
                  <li>
                    <FaTwitter />
                    <span>
                      Phone:{" "}
                      <a
                        className="cursor"
                        href="tel:+855070411260"
                        target="_blank"
                      >
                        @phatmenghor
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rightcontp h-20">
              <div className="h-screen">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

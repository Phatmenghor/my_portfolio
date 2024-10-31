/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMoonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Header = () => {
  const pathname = usePathname();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [mobile, setMobile] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    const dartModeValue = localStorage.getItem("dartMode");
    setDarkMode(dartModeValue === "true");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", JSON.stringify(true));
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", JSON.stringify(false));
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleLinkClick(link: string) {
    setActiveLink(link);
  }

  function handleMobileOpen() {
    setMobile(true);
  }

  function handleMobileClose() {
    setMobile(false);
  }

  return (
    <header>
      <nav className="container flex flex-sb">
        <div className="logo flex gap-2">
          <Link href={"/"}>
            <img src={`/img/${darkMode ? "white" : "logo"}.png`} alt="logo" />
          </Link>
          <h2>phatmenghor19@gmail.com</h2>
        </div>
        <div className="navlist flex gap-2">
          <ul className="flex gap-2">
            <li>
              <Link
                href={"/"}
                onClick={() => handleLinkClick("/")}
                className={activeLink == "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/service"}
                onClick={() => handleLinkClick("/service")}
                className={activeLink == "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/project"}
                onClick={() => handleLinkClick("/project")}
                className={activeLink == "/project" ? "active" : ""}
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                href={"/blog"}
                onClick={() => handleLinkClick("/blog")}
                className={activeLink == "/blog" ? "active" : ""}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href={"/shop"}
                onClick={() => handleLinkClick("/shop")}
                className={activeLink == "/shop" ? "active" : ""}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                onClick={() => handleLinkClick("/contact")}
                className={activeLink == "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="darkmodetoggle" onClick={toggleDarkMode}>
            {darkMode ? <IoMoonSharp /> : <LuSun />}
          </div>
          <button>
            <Link href={"/contact"}>Hire Me!</Link>
          </button>
          <div className="mobiletogglesvg" onClick={handleMobileOpen}>
            <HiMiniBars3BottomRight />
          </div>
        </div>
        <div className={mobile ? "mobilenavlist active" : "mobilenavlist"}>
          <span
            onClick={handleMobileClose}
            className={mobile ? "active" : ""}
          ></span>
          <div className="mobilelogo">
            <img src="/img/white.png" alt="logo" />
            <h2>vbmcoder</h2>
          </div>

          <ul
            className="flex gap-1 flex-col flex-left mt-3"
            onClick={handleMobileClose}
          >
            <li>
              <Link
                href={"/"}
                onClick={() => handleLinkClick("/")}
                className={activeLink == "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/service"}
                onClick={() => handleLinkClick("/service")}
                className={activeLink == "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/project"}
                onClick={() => handleLinkClick("/project")}
                className={activeLink == "/project" ? "active" : ""}
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                href={"/blog"}
                onClick={() => handleLinkClick("/blog")}
                className={activeLink == "/blog" ? "active" : ""}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href={"/shop"}
                onClick={() => handleLinkClick("/shop")}
                className={activeLink == "/shop" ? "active" : ""}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                onClick={() => handleLinkClick("/contact")}
                className={activeLink == "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
          <p>Copyright &copy; 2024 | vbncoder.in</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;

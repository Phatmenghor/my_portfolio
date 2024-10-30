/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/data";
import imagePaths from "@/constants/imagePaths ";

interface NavLink {
  id: string;
  title: string;
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {}, [pathname]);

  return (
    <nav
      className={`w-full  flex items-center py-2.5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center sm:px-8 px-4 lg:container mx-auto">
        <Link href="/" passHref>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={imagePaths.logo}
              alt="logo"
              className="w-9 h-9 object-contain"
            />
            <p className="text-white text-[18px] font-bold flex">
              Phat Menghor &nbsp;
              <span className="sm:block hidden"> | Software Mastery</span>
            </p>
          </div>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav: NavLink) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {}}
            >
              <a>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? imagePaths.close : imagePaths.menu}
            alt="menu"
            className="w-4 h-4 lg:w-6 lg:h-6 object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            }  p-6 bg-[#915EFF] absolute top-14 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav: NavLink) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] text-white
                  `}
                  onClick={() => {}}
                >
                  <a>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

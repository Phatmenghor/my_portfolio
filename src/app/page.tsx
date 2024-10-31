/* eslint-disable @next/next/no-img-element */
"use client";

import { projectBlogs, projectsRecent } from "@/constants/data";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { LuMedal } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";

// services data
const services = [
  {
    title: "Web Development",
    description:
      "I am very good in web development offering services, I offer reliable web development services to generate the most remarkable results which your business need.",
  },
  {
    title: "Mobile Development",
    description:
      "Experienced mobile developer offering innovative solutions. Proficient in creating high-performance, user-centric mobile apps. Expertise in iOS, Android, and cross-platform development.",
  },
  {
    title: "Digital Marketing(SEO)",
    description:
      "My digital marketing services will take your business to the next level, we offer remarkable digital marketing strategies that drives traffic to your website, your business, and improves your brand awareness to potential customers.",
  },
  {
    title: "Content Creator",
    description:
      "Passionate photographer and videographer capturing moments with creativity. Transforming visions into visual stories. Expert in visual storytelling, skilled in both photography and videography to deliver captivating content.",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedType, setSelectedType] = useState<string>("All");

  function handleHover(index: number) {
    setActiveIndex(index);
  }

  function handleMouseOut() {
    setActiveIndex(0);
  }

  const handleFilterChange = (type: string) => {
    setSelectedType(type);
  };

  const filteredProjects =
    selectedType === "All"
      ? projectsRecent
      : projectsRecent.filter((project) => project.type === selectedType);

  return (
    <>
      <Head>
        <title>vbmcoder - Personal Portfolio</title>
        <meta name="description" content="vbmcoder - Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* hero section */}
      <section className="hero">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text
              x="50%"
              y="50%"
              text-anchor="middle"
              className="animate-stroke"
            >
              HI
            </text>
          </svg>
        </div>
        <div className="container">
          <div className="flex w-100">
            <div className="heroinfoleft">
              <span className="hero_sb_title">I am menghor</span>
              <h1 className="hero_title">
                Software Developer
                <br />
                <span className="typed-text">Backend Developer</span>
              </h1>
              <div className="hero_img_box heroimgbox">
                <img src="/img/me.jpng" alt="phatmenghor" />
              </div>

              <div className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, harum odio repellat quo voluptatum magnam quod!s
              </div>
              <div className="hero_btn_box">
                <Link
                  download={"img/resume.pdf"}
                  href="/"
                  className="download_cv"
                >
                  Download CV
                  <BiDownload />
                </Link>
                <ul className="hero_social">
                  <li>
                    <a href="/">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <LiaBasketballBallSolid />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <GrLinkedinOption />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* rightside image section */}
            <div className="heroimageright justify-end flex ">
              <div className="hero_img_box">
                <img src="/img/me.png" alt="phatmenghor" />
              </div>
            </div>
          </div>

          <div className="funfect_area flex flex-sb">
            <div className="funfect_item">
              <h3>7+</h3>
              <h4>
                Year of <br />
                Experience
              </h4>
            </div>

            <div className="funfect_item">
              <h3>7+</h3>
              <h4>
                Year of <br />
                Experience
              </h4>
            </div>
            <div className="funfect_item">
              <h3>7+</h3>
              <h4>
                Year of <br />
                Experience
              </h4>
            </div>
            <div className="funfect_item">
              <h3>7+</h3>
              <h4>
                Year of <br />
                Experience
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <div className="services_titles">
            <h2>My Quality Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              provident, praesentium quibusdam distinctio porro, aut pariatur
              odit!
            </p>
          </div>

          <div className="services_menu">
            {services.map((services, index) => (
              <div
                key={index}
                className={`services_item ${
                  activeIndex == index + 1 ? "sactive" : ""
                }`}
                onMouseOver={() => handleHover(index + 1)}
                onMouseOut={handleMouseOut}
              >
                <div className="left_s_box">
                  <span>0{index + 1}</span>
                  <h3>{services.title}</h3>
                </div>

                <div className="right_s_box">
                  <p>{services.description}</p>
                </div>
                <GoArrowUpRight />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <div className="container">
          <div className="services_titles">
            <h2>My Recent Works</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              provident, praesentium quibusdam distinctio porro, aut pariatur
              odit!
            </p>
          </div>

          <div className="project_buttons">
            <button
              className={selectedType == "All" ? "active" : ""}
              onClick={() => handleFilterChange("All")}
            >
              All
            </button>
            <button
              className={selectedType == "Website" ? "active" : ""}
              onClick={() => handleFilterChange("Website")}
            >
              Website
            </button>
            <button
              className={selectedType == "App" ? "active" : ""}
              onClick={() => handleFilterChange("App")}
            >
              Apps
            </button>
            <button
              className={selectedType == "Backend" ? "active" : ""}
              onClick={() => handleFilterChange("Backend")}
            >
              Backends
            </button>
          </div>

          <div className="projects_cards">
            {filteredProjects.length == 0 ? (
              <h1>No Project Found</h1>
            ) : (
              filteredProjects.slice(0, 4).map((project, index) => (
                <Link key={index} href={"/"} className="procard">
                  <div className="proimgbox">
                    <img src={project.image} alt="" />
                  </div>

                  <div className="procontentbox">
                    <h2>{project.projectName}</h2>
                    <GoArrowUpRight />
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Experience study */}
      <section className="exstudy">
        <div className="container flex flex-left flex-sb">
          <div className="experience">
            <div className="experince_title flex gap-1">
              <LuMedal />
              <h2>My Experience</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2020 - Present</span>
                <h3>DVTECH IT SOLUTION</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2020 - Present</span>
                <h3>DVTECH IT SOLUTION</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2020 - Present</span>
                <h3>DVTECH IT SOLUTION</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2020 - Present</span>
                <h3>DVTECH IT SOLUTION</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
          <div className="education">
            <div className="experince_title flex gap-1">
              <PiGraduationCap />
              <h2>My Education</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2020 - Present</span>
                <h3>DVTECH IT SOLUTION</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2020 - Present</span>
                <h3>DVTECH IT SOLUTION</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2020 - Present</span>
                <h3>DVTECH IT SOLUTION</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Skills */}
      <section className="myskills">
        <div className="container">
          <div className="myskills_title">
            <h2>My Skills</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis corrupti ipsam qui quisquam maiores, illum possimus
              provident! Facere eos ex eaque doloribus?
            </p>
          </div>

          <div className="myskils_cards">
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/python.svg" alt="python" />
                <h3>92%</h3>
              </div>
              <p className="text-center">Python</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/firebase.svg" alt="firebase" />
                <h3>92%</h3>
              </div>
              <p className="text-center">Firebase</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/mongodb.svg" alt="mongodb" />
                <h3>92%</h3>
              </div>
              <p className="text-center">Mongodb</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/redux.svg" alt="redux" />
                <h3>100%</h3>
              </div>
              <p className="text-center">Redux</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/react.svg" alt="react" />
                <h3>92%</h3>
              </div>
              <p className="text-center">React</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/js.svg" alt="js" />
                <h3>92%</h3>
              </div>
              <p className="text-center">JavaScript</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="recentblogs">
        <div className="container">
          <div className="myskills_title">
            <h2>Recenet Blogs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              necessitatibus cum odit est recusandae laborum eveniet facere
              rerum minima est.
            </p>
          </div>

          <div className="recent_blogs">
            {projectBlogs.slice(0, 4).map((blog, index) => {
              return (
                <Link href={"/"} key={index} className="re_blog">
                  <div className="re_blogimg">
                    <img src={blog.image} alt={blog.image} />
                    <span>{blog.frameworkName}</span>
                  </div>
                  <div className="re_bloginfo ">
                    <span>{blog.date}</span>
                    <h2>{blog.description}</h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Head from "next/head";
import { GoArrowUpRight } from "react-icons/go";
import { projectsRecent } from "@/constants/data";
import Link from "next/link";

const ProjectPage = () => {
  const [selectedType, setSelectedType] = useState<string>("All");

  const handleFilterChange = (type: string) => {
    setSelectedType(type);
  };

  const filteredProjects =
    selectedType === "All"
      ? projectsRecent
      : projectsRecent.filter((project) => project.type === selectedType);

  return (
    <>
      <Head>My Project</Head>

      <div className="projectpage">
        <div className="projects">
          <div className="container">
            <div className="project_titles">
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
                filteredProjects.map((project, index) => (
                  <Link
                    key={index}
                    href={`/project/${project.id}`}
                    className="procard"
                  >
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
        </div>
      </div>
    </>
  );
};

export default ProjectPage;

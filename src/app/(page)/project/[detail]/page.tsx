"use client";

import { ProjectDetail, projectsRecentDetail } from "@/constants/data";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const ProjectDetailPage = ({ params }: { params: { detail: number } }) => {
  const id = params.detail;
  const [data, setData] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  function fetchData() {
    const project = projectsRecentDetail.find((project) => project.id == id);
    setData(project || null);
  }

  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <div className="projectslug">
        <div className="projectslugimg">
          <div className="container">
            <div className="proslugimg">
              <img
                className="h-screen object-cover"
                src={data?.image}
                alt={data?.projectName}
              />
            </div>

            <div className="projectsluginfo">
              <div className="leftmainproinfo">
                <h1>{`${data?.title} Development`}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos accusantium doloremque necessitatibus dolorem
                  facere aut earum non veritatis quis perspiciatis ipsa neque,
                  ex possimus?
                </p>
                <a target="_blank" href={data?.urlWebsite}>
                  Live Preview
                </a>
              </div>

              <div className="rightmainproinfo">
                <div>
                  <h3>Project management</h3>
                  <h2>{data?.projectManagementName}</h2>
                </div>
                <div>
                  <h3>Clinet</h3>
                  <h2>{data?.clientName}</h2>
                </div>
                <div>
                  <h3>Start Date</h3>
                  <h2>{data?.startDate}</h2>
                </div>
                <div>
                  <h3>Designer</h3>
                  <h2>{data?.designerName}</h2>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto whitespace-nowrap w-full mt-8">
              <div className="flex space-x-4">
                {projectsRecentDetail.map((image, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      className="object-cover w-64 h-64 rounded-lg"
                      src={image.image}
                      alt={image.projectName}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="projectslugdescription">
          <div className="container">
            <div className="psdescri">
              <h2>Project Description</h2>
              <div className="blogcontent">
                <p>{data?.projectDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;

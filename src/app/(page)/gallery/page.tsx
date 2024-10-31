/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { galleryList } from "@/constants/data";
import Head from "next/head";
import Link from "next/link";

const page = () => {
  const loading = false;
  return (
    <>
      <Head>Gallery Photos</Head>

      <div className="gallerypage">
        <div className="container">
          <div>
            <div className="topphonesec">
              <div className="lefttitlesec">
                <h4>PHAT MENGHOR GALLERY PHOTOS</h4>
                <h1>
                  King <br /> Photographes
                </h1>
                <Link href={"/gallery#galleryimages"}>
                  <button>VIEW MORE</button>
                </Link>
              </div>

              <div className="rightimgsec">
                <img src="https://picsum.photos/400/300?random=1000" alt="" />
                <div className="r_imge_top">
                  <img src="https://picsum.photos/400/300?random=1001" alt="" />
                  <img src="https://picsum.photos/400/300?random=1001" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gallerybtmphotos" id="galleryimages">
          <div className="container">
            <div className="gbtmtitles text-center">
              <h3>
                <span>01//</span>OUR PORTFOLIO
              </h3>
              <h2>
                PHATMENGHOR Capture <span>All of your</span>
                <br /> beautiful memories
              </h2>
            </div>

            <div className="gallery_image_grid">
              {loading ? (
                <h1>Loading ...</h1>
              ) : (
                <>
                  {galleryList.map((photo, index) => {
                    return (
                      <div key={index} className="image-item">
                        <img src={photo.imageUrl} alt={photo.title} />
                        <div className="galeryimgiteminfo">
                          <h2>{photo.title}</h2>
                          <p>{photo.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
              <div className="image-item"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

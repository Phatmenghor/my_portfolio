"use client";
import { projectsRecentDetail } from "@/constants/data";
import { ProductShop, productsShop } from "@/constants/data/productShop";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const ShopDetail = ({ params }: { params: { detail: number } }) => {
  const id = params.detail;
  const [data, setData] = useState<ProductShop | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const response = productsShop.find((project) => project.id == id);
    setData(response || null);
  }

  return (
    <>
      <Head>
        <title>Shop Detail Page</title>
      </Head>
      <div className="shopslugpage">
        <div className="shopcontent">
          <div className="container">
            <div className="shopcontbox">
              <div className="leftshopimgbox">
                <div className="leftshopmainimg">
                  <img src={data?.imageProduct} alt={data?.titleNameProduct} />
                </div>
                <div className="leftsimgboxlist">
                  <div className="overflow-x-auto whitespace-nowrap w-full mt-8">
                    <div className="flex space-x-4">
                      {data?.imageDetail.map((image, index) => (
                        <div key={index} className="flex-shrink-0">
                          <img className="rounded-lg" src={image} alt={image} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rightshopcontbox">
                <h1>{data?.titleNameProduct}</h1>
                <h3 className="rightshopprice">
                  Price: <span>{data?.price}</span>
                </h3>
                <a
                  className="shopnowbtn"
                  target="_blank"
                  href={data?.telegramLink}
                >
                  Shop now
                </a>

                <div className="blogcontent">
                  <h2 className="bctitle">Product Details:</h2>

                  <p>{data?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetail;

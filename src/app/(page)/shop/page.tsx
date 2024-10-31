import { productsShop } from "@/constants/data/productShop";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Head>Shop</Head>
      <div className="shoppage">
        <div className="shoppagetoptitle">
          <div className="container">
            <h3>SHOP ONLINE</h3>
            <h2>OUR PRODUCTS</h2>
          </div>
        </div>

        <div className="shopproducts">
          <div className="container">
            <div className="shopprocards">
              {productsShop.map((shop, index) => (
                <Link
                  key={index}
                  href={`/shop/${shop.id}`}
                  className="spprocard"
                >
                  <div className="spprocardimg">
                    <img src={shop.imageProduct} alt={shop.titleNameProduct} />
                  </div>
                  <div className="spprocinfo">
                    <h2>{shop.titleNameProduct}</h2>
                    <h3>{shop.price}</h3>
                    <div className="spprotags">
                      {shop.productList.map((title, index) => (
                        <span key={index}> {title}</span>
                      ))}
                    </div>
                    <p>{shop.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

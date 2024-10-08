"use client";

import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border brder-x-0 border-y-stroke bg-custom">
        <div className="mx-auto max-w-c-1390 py-4 px-4 md:px-8 2xl:px-0">
          <div className="grid items-center justify-center gap-7.5 md:grid-cols-1 lg:grid-cols-4 xl:gap-29">
            <div className="h-55">
              {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
            </div>
             <h1 className="mb-5 pr-16 text-3xl font-bold text-white dark:text-white xl:text-hero ">
              Szakértelem.
            </h1>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-white dark:text-white xl:text-hero ">
              Kényelem.
            </h1>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-white dark:text-white xl:text-hero ">
              Biztonság.
            </h1>
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;

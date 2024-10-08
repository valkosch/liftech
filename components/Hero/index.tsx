"use client"; import Image from "next/image"; import { useState } from "react";
import Link from "next/link";
const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
             <div className="py-10">
                <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                A Liftech csapatától:
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                 Kiváló minőségű lépcsőliftek és platformliftek{"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Önre szabva! 
                </span>
              </h1>
              <p>
               Legyen szó kültéri vagy beltéri, kanyarodó vagy egyenes, használt vagy új liftről, biztos lehet abban, hogy
               nálunk otthonra talál igényeivel. Segítőkész szakembereink kényelmet vísznek otthaikba, elérhető áron.
              </p>
             </div>
            <div className="mt-7 flex items-center gap-6 xl:mt-0">
              <Link
                href="/termekek"
                className="flex items-center justify-center rounded-full bg-custom px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
              >
               Nézze meg termékeinket! 
              </Link>
          </div>
           </div>
            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" mx-auto relative aspect-[800/512] ">
                  <Image
                    className="shadow-solid-l"
                    src="/images/hero/hero_img.webp"
                    alt="Szakember beszereli a lépcsőfelvonót"
                    fill
                  />
                </div>
                              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

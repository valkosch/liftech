"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"
const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >s
  l            <Image
                src="/images/features/alpha.webp"
                alt="Alpha lépcsőlift felszerelve"
                className="dark:hidden"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-primaryho px-4.5 py-1 text-metatitle uppercase text-white ">
                  ÚJ
                </span>{" "}
                Kanyarodó lépcső? Mi megoldjuk!
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Lépcsőlift otthonához:
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Alpha
                </span>
              </h2>
                  <h3 className="mb-5.5 text-metatitle2 text-black dark:text-white">
               Az Alpha lépcsőlift megszünteti a lépcső akadályát, azoknál a lépcső típusoknál, ahol az Essental(Egyenes) típus nem alkalmazható. Biztonságos és könnyű hozzáférést biztosít más szintekre, ezt a lépcsőliftet kanyarodó lépcsőkre, közbenső lépcsőfokokra, vagy akár akkor is, ha diszkrét, az úttesten kívüli parkolásra van szükség.
                  </h3>
              <Link
                href=""
                className="inline-flex gap-2.5 items-center w-3/4 rounded-full bg-custom px-7.5 py-2.5 text-lg text-white duration-300 ease-in-out hover:bg-primaryho"
              >
               Tudjon meg többet lépcsőliftjeinkről! 
              <Image src="/images/icon/icon-arrow-dark.svg" alt="nyíl" width={30} height={30}/>
              </Link>

             </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

           </>
  );
};

export default About;

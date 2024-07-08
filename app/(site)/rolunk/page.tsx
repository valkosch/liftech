import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rólunk | Liftech.hu",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  description: "Ezen az oldalon megismerheti a Liftech Group Kft-t",
  // other metadata
};
const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
Rólunk
                </h2>
            <div className=" lg:justify-between lg:gap-0">
                    <div className="blog-details">
<p>Cégünket 12 évvel ezelőtt azzal a céllal hívtuk életre, hogy megoldást találjunk a megváltozott
mozgáshelyzetű emberek egy égető problémájára, az otthonukban való akadálymentes közlekedésre.</p>

<p>Új és használt (de teljes mértékben szervízelt és karbantartott) lépcsőliftek és platformliftek
telepítése során az elmúlt években számtalan esetben találkoztunk nagyon nehéz emberi sorsokkal,
de nagyon sokat jelent számunkra, segítségünkkel ügyfeleink újra teljesebb életet tudnak élni.</p>

<p>A szolgáltatás érzékenysége megköveteli tőlünk megrendelőink speciális igényeinek, személyes
biztonságuknak, kényelmüknek folyamatos szem előtt tartását. Partnercégünk, a nemzetközileg
elismert Lehner Liftechnik csúcsminőségű termékei segítségével, és közel két évtizedes szakmai
tapasztalatunkkal tudjuk ezt megvalósítani.</p>

<p>Sok éves kitartó munkánk eredményeként mára képessé vált cégünk az egész ország területén liftek
telepítésére.</p>

<p>Ezúton is köszönjük eddigi ügyfeleink bizalmát és bízunk benne, hogy új ügyfeleink számára is mi
tudjuk a megfelelő megoldást nyújtani.</p>

<p>Liftech Group Kft Csapata</p>
                      </div> 
                      <div className="mx-auto">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/liftech_logo.webp"
                    alt="Logo"
                  />
                      </div>
                     </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default SingleBlogPage;

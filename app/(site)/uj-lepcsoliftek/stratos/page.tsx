import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stratos lépcsőlift | Liftech.hu",
  viewport: "width=device-width, initial-scale=1",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  description: "Ez az oldal bemutatja a Stratos nevezetű kanyaradó lépcsőre helyezhető lépcsőliftet",
  // other metadata
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white ">
                  Technikai információk
                </h4>
                <h5 className="text-xl font-semibold text-black" >Rakodóképesség:</h5>
                <p className="mb-5">225kg (opcionálisan 300kg)</p>
                <h5 className="text-xl font-semibold text-black" >Lehetséges meredekség:</h5>
                <p className="mb-5">0 – 47°</p>
                <h5 className="text-xl font-semibold text-black" >Sebesség:</h5>
                <p className="mb-5">0,06 – 0,1 m/s</p>
                <h5 className="text-xl font-semibold text-black" >Tápellátás:</h5>
                <p className="mb-5">1 x 230 V / 50-60 Hz</p>
                <h5 className="text-xl font-semibold text-black" >Max. platform méret:</h5>
                <p className="mb-0">Szélesség: 90 cm</p>
                <p className="mb-5">Hosszúság: 130 cm</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/termekek/stra/stratos1.webp"}
                      alt="Omega lépcsőliftről egy példa kép"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Stratos - a tökéletes lift a kanyarodó lépcsőkre

                </h2>
                <div className="blog-details">
                  <p>
A Stratos platform lift íves lépcsőkhöz egy elegáns, megbízható és könnyen telepíthető lépcsőlift. A kompakt kialakítás lehetővé teszi az egység telepítését a legtöbb lépcsőhöz, és minimális akadályt jelent az arra járók számára. Minden platform lift tökéletesen illeszkedik környezetébe, köszönhetően a sínek és a platform különböző színeinek és anyagainak választékának.</p>

                  <p>
A felső síncső tiszta, sima és teljesen zárt, így tökéletesen szolgálhat korlátként. Ez a tulajdonság, nagy platformméretek opciójával kombinálva, a Stratos-t a kereskedelmi alkalmazásokhoz a középületekben előnyben részesített platformos lépcsőliftté teszi.</p>
<ul>
    <li>Kompakt kialakítás a legtöbb lépcsőn történő telepítéshez</li>
    <li>Robusztus lift kültéri telepítéshez</li>
    <li>Minden RAL színben</li>
    <li>A sínek és a platform borítása rozsdamentes acélból készülhet</li>
    <li>Könnyű és gyors telepítés</li>
    <li>Felső sín korlátként használható</li>
</ul>

                 <div className="">
                    <Link
                  href="/kapcsolat"
                  className="items-center justify-center rounded-full bg-custom px-7.5 py-2.5 text-lg text-white duration-300 ease-in-out hover:bg-primaryho"
                    >
                    Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <Image
                      src={"/images/termekek/stra/stratos3.webp"}
                      width={350}
                      height={200}
                      alt="A statos lépcsőliftről egy alternatív kép"
                    />
                    <Image
                      src={"/images/termekek/stra/stratos2.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép a statos liftről"
                    />
                  </div>

                  </div> 
                  <h3 className="pt-8">
                    CE és TÜV tanúsítvánnyal rendelkezik a legújabb EN 81-40 európai irányelv szerint.
                  </h3>
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

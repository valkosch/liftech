import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sigma platformlift | Liftech.hu",
  viewport: "width=device-width, initial-scale=1",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  charset: "utf-8",
  description: "Ez az oldal bemutatja az Sigma nevezetű platformliftet",
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
                <h5 className="text-xl font-semibold text-black" >Emelési magasság:</h5>
                <p className="mb-5">min. 0,65m, max. 3m</p>
                <h5 className="text-xl font-semibold text-black" >Teherbírás:</h5>
                <p className="mb-5">385kg</p>
                <h5 className="text-xl font-semibold text-black" >Megállók maximális száma:</h5>
                <p className="mb-5">4</p>
                <h5 className="text-xl font-semibold text-black" >Platformméret:</h5>
                <p className="mb-5">1,1 x 1,4 m</p>
                <h5 className="text-xl font-semibold text-black" >Meghajtási rendszer:</h5>
                <p className="mb-5">Dupla lánchajtás</p>
                <h5 className="text-xl font-semibold text-black" >Tápellátás:</h5>
                <p className="mb-5">1 x 230 V / 50-60 Hz</p>
                <h5 className="text-xl font-semibold text-black" >Zajszint:</h5>
                <p className="mb-5">60 dB alatt</p>
                <h5 className="text-xl font-semibold text-black" >Opcionálisan rendelhető:</h5>
                <p className="mb-5">Automatikus ajtónyitó</p>

                 </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/termekek/sigma/sigma2.webp"}
                      alt="Sigma platform lépcsőliftről egy példa kép"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">Sigma</h2>
                <div className="blog-details">
                  <p>Számos jól megtervezett részlet teszi a Sigma függőleges emelvényliftet tökéletes mobilitási megoldássá a magán- és a közszféra számára.</p>

                  <p>Főbb jellemzők:</p>
                  <ul>
                    <li>Kompakt kialakítás karcsú hajtótoronnyal 3 m-es emelési magasságig.</li>
                    <li>Dupla láncos meghajtás a zökkenőmentes működésért</li>
                    <li>Bármilyen RAL-színben lehetséges bevonat</li>
                    <li>Az alumínium alkatrészek garantálják a korrózióvédelmet és a kis súlyt</li>
                    <li>Audió visszajelzés az intuitív kezeléshez</li>
                    <li>Külső rádiós vezérlés (oszlopon vagy hordozhatóan)</li>
                    <li>Integrált feljáró rámpa</li>
                    <li>Integrált vészhelyzeti áramellátás</li>
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
                      src={"/images/termekek/sigma/sigma3.webp"}
                      width={350}
                      height={200}
                      alt="Az sigma platformosliftről egy alternatív kép"
                    />
                    <Image
                      src={"/images/termekek/sigma/sigma4.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép az sigma liftről"
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

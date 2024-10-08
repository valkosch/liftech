import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SA-3 & SA-S | Liftech.hu",
  viewport: "width=device-width, initial-scale=1",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  description: "Ez az oldal bemutatja a SA-3 és SA-S nevezetű lépcsőjárókat",
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
                <p className="mb-0">SA-3: 160kg</p>
                <p className="mb-5">SA-S: 150kg</p>
                <h5 className="text-xl font-semibold text-black" >Min. kanyarodási sugár:</h5>
                <p className="mb-0">SA-3: 1250x1250 mm</p>
                <p className="mb-5">SA-S: 970x970 mm</p>
                <h5 className="text-xl font-semibold text-black" >Súly:</h5>
                <p className="mb-0">SA-3: 65kg</p>
                <p className="mb-5">SA-S: 59kg</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/termekek/s/sa2.webp"}
                      alt="Omega lépcsőliftről egy példa kép"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  SA-3 & SA-S - a robusztus lépcsőjárók
                </h2>
                <div className="blog-details">
                  <p>
Lépcsőjáróinkkal egyenes lépcsősorok akár 35°-os dőlésszögig biztonságosan és egyszerűen megmászhatóak.</p>

                  <p>
A lépcsőjáró a legtöbb kerekesszékhez alkalmazkodik, és könnyen szétszerelhető tárolás vagy autóban történő szállítás céljából. A termék nagyon robusztus és minimális karbantartást igényel.</p>
                  <p>
A SA-S lépcsőjáróval nagyon kevés hely szükséges a szűk fordulóknál való forduláshoz.</p>
                  <p>
A SA-3 lépcsőjáró különleges előnye a 160 kg teherbírás, valamint az összes típusú kézi kerekesszék szállításának lehetősége! Különleges tartozékok lehetővé teszik az összecsukható, levehető háttámlájú, állítható fogantyús, kézifékkarú vagy gyermek kerekesszékek használatát.</p>

<ul>
    <li>Teherbírás akár 160 kg-ig</li>
    <li>Beltéri és kültéri használatra</li>
    <li>A legtöbb kerekesszékhez alkalmas</li>
    <li>Stabli, önhordó szerkezet</li>
    <li>Egyszerű és biztonságos működés</li>
    <li>Akár 30 emeletet is megmászható vele töltés nélkül</li>
    <li>Könnyen szétszerelhető tároláshoz vagy autóban történő szállításhoz</li>
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
                      src={"/images/termekek/s/sa3.webp"}
                      width={350}
                      height={200}
                      alt="A SA lépcsőzőről gy alternatív kép"
                    />
                    <Image
                      src={"/images/termekek/s/sa1.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép a SA lépcsőzőről"
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

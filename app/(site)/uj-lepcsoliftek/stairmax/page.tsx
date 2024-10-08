import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stairmax lépcsőjáró | Liftech.hu",
  viewport: "width=device-width, initial-scale=1",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  description: "Ez az oldal bemutatja a Stairmax nevezetű lépcsőjárót",
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
                <p className="mb-5">110kg</p>
                <h5 className="text-xl font-semibold text-black" >Lehetséges meredekség:</h5>
                <p className="mb-5">0 – 35°</p>
                <h5 className="text-xl font-semibold text-black" >Tápellátás:</h5>
                <p className="mb-5">2 x 6V akkumulátor</p>
                <h5 className="text-xl font-semibold text-black" >Súly:</h5>
                <p className="mb-5">54kg</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/termekek/stair/stairmax1.webp"}
                      alt="Stairmax lépcsőjáróról egy példa kép"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Stairmax - az önálló lécspőjáró
                </h2>
                <div className="blog-details">
                  <p>
A Stairmax az egyetlen lépcsőjáró a világon, amely lehetővé teszi az aktív kerekesszék-használók számára, hogy segítség nélkül fel- és lemenjenek a lépcsőkön.</p>

                  <p>
Teljesen autonóm módon használható, és segít a kerekesszék-használóknak visszanyerni a függetlenséget.</p>
                  <p>
Ez a mobil kerekesszék lépcsőlift képes fordulni a legalább 1 m sugaró lépcsőforduló.</p>

<ul>
    <li>Mobil lépcsőlift, amelyhez nincs szükség segítő személyre</li>
    <li>Beltéri és kültéri lépcsőkön is használható</li>
    <li>Gazdaságos alternatíva a hagyományos kerekesszék lépcsőliftekhez képest</li>
    <li>Kis átalakítás szükséges a felhasználó kerekesszékén</li>
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
                      src={"/images/termekek/stair/stairmax3.webp"}
                      width={350}
                      height={200}
                      alt="A Stairmax lépcsőzőről egy alternatív kép"
                    />
                    <Image
                      src={"/images/termekek/stair/stairmax2.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép az stairmax liftről"
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

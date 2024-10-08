import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Deplhin medencelift | Liftech.hu",
    viewport: "width=device-width, initial-scale=1",
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    description: "Ez az oldal bemutatja az Alpin nevezetű kültéri platformliftet",
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
        <p className="mb-5">1,6 m</p>
        <h5 className="text-xl font-semibold text-black" >Rakodóképesség:</h5>
        <p className="mb-5">120kg</p>
        <h5 className="text-xl font-semibold text-black" >Szükséges víznyomás</h5>
        <p className="mb-5">4 bar</p>
        <h5 className="text-xl font-semibold text-black" >Anyag:</h5>
        <p className="mb-5">rozsdamentes acél AISI 316</p>
        </div>
        </div>

        <div className="lg:w-2/3">
        <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
        <div className="mb-10 w-full overflow-hidden ">
        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
        <Image
        src={"/images/termekek/del/delphin1.webp"}
        alt="Delphin lifről egy példa kép"
        fill
        className="rounded-md object-cover object-center"
        />
        </div>
        </div>

        <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">Delphin - a rozsdamentes acélból készült medencelift</h2>
        <div className="blog-details">
        <p>Nyerje vissza az önálló hozzáférést a medencédhez! A Delphin medencelift értékes segítséget nyújt a medencébe való be- és kiszálláshoz anélkül, hogy segítő személyre lenne szükség. Nem szükséges víz alatti telepítés. A liftet csak egyszer kell rögzíteni, minimum 300 mm-re a medence szélétől. Nincs szükség elektromos telepítésre vagy akkumulátor használatára. A medencelift mindössze 4 bar víznyomáson működik!</p>

        <p>A felső és az alsó szinten található működtető karok egyszerűvé teszik az egység használatát. A magasságában állítható ülés automatikusan 90°-ot fordul, amikor leereszkedik vagy felemelkedik. Ez a medencelift nagyon könnyen telepíthető (és tárolás céljából könnyen szétszerelhető), valamint magas minőségű (316S) rozsdamentes acélból készült!</p>
        <ul>
        <li>Nincs szükség segítségre – önálló hozzáférés a medencékhez</li>
        <li>Nem szükséges víz alatti rögzítés</li>
        <li>Elegáns kialakítás rozsdamentes acélban</li>
        <li>4 bar víznyomáson működik</li>
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
                      src={"/images/termekek/del/delphin3.webp"}
                      width={350}
                      height={200}
                      alt="A delphin medenceliftről egy alternatív kép"
                    />
                    <Image
                      src={"/images/termekek/del/delphin2.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép a deplhin liftről"
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

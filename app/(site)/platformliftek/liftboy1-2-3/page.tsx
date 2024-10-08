import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Liftboy  1/2/3 platformlift | Liftech.hu",
    viewport: "width=device-width, initial-scale=1",
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    description: "Ez az oldal bemutatja a Liftboy 1/2/3 nevezetű platformlifteket",
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
        <h5 className="text-xl font-semibold text-black" >Emelési magasság / Terhelhetőség:</h5>
        <ul className="mb-5">
        <li>Liftboy 1: 59,5 cm / 180 kg</li>
        <li>Liftboy 2: 83 cm / 300 kg</li>
        <li>Liftboy 3: 97 cm / 240 kg</li>
        </ul>
        <h5 className="text-xl font-semibold text-black" >Emelési sebesség</h5>
        <p className="mb-5">1 cm/s</p>
        <h5 className="text-xl font-semibold text-black" >Platformméret:</h5>
        <p className="mb-5">1,1 x 1,4 m</p>
        <ul className="mb-5">
        <li>Liftboy 1: 1,180 x 0,81 m</li>
        <li>Liftboy 2/3: 1,5 x 0,924 m</li>
        </ul>
        <h5 className="text-xl font-semibold text-black" >Nettó súly:</h5>
        <ul className="mb-5">
        <li>Liftboy 1: 53 kg</li>
        <li>Liftboy 2/3: 95 kg</li>
        </ul>
        <h5 className="text-xl font-semibold text-black" >Tápellátás:</h5>
        <p className="mb-5">1 x 230 V / 50-60 Hz</p>
        <h5 className="text-xl font-semibold text-black" >Opcionálisan rendelhető:</h5>
        <ul className="mb-5">
        <li>Oldalsó bejárat az alsó szinten</li>
        <li>Oldalsó kijárat a felső szinten</li>
        <li>Vezérlőoszlop</li>
        <li>Rádiós távirányító</li>
        <li>Szállító kerekek</li>
        <li>Automatikus ajtónyitó</li>
        <li>Távvezérlő oszlopok</li>
        <li>Kézi rámpa</li>
        <li>Hosszabbított rámpa</li>
        <li>Választható rozsdamentes acélból</li>
        </ul>
        </div>
        </div>

        <div className="lg:w-2/3">
        <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
        <div className="mb-10 w-full overflow-hidden ">
        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
        <Image
        src={"/images/termekek/liftboy1/liftboy2.webp"}
        alt="Liftboy 1 platform lépcsőliftről egy példa kép"
        fill
        className="rounded-md object-cover object-center"
        />
        </div>
        </div>

        <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">Liftboy 1/2/3</h2>
        <div className="blog-details">
        <p>A Liftboy az ideális kerekesszék-emelő 97 cm-es magasságkülönbségig.</p>

        <p>A Lfitboy fő előnyei:</p>
        <ul>
        <li>Beltéren és kültéren is használható</li>
        <li>Kis súlya lehetővé teszi a különböző helyszínek közötti könnyű szállítást</li>
        <li>Nincs szükség a padlóhoz való rögzítésre</li>
        <li>Számos különböző kivitelezési változat</li>
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
                      src={"/images/termekek/liftboy1/liftboy4.webp"}
                      width={350}
                      height={200}
                      alt="A Liftboy 2 platformosliftről egy alternatív kép"
                    />
                    <Image
                      src={"/images/termekek/liftboy1/liftboy3.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép a Liftboy liftről"
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

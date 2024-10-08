import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Liftboy  4 platformlift | Liftech.hu",
  viewport: "width=device-width, initial-scale=1",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  description: "Ez az oldal bemutatja a Liftboy 4 nevezetű platformlifteket",
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
                <h5 className="text-xl font-semibold text-black" >Max. emelési magasság:</h5>
                <ul className="mb-5">
                  <li>Liftboy 4/S: 1,075 m</li>
                  <li>Liftboy 4/L: 1,4 m</li>
                </ul>
                <h5 className="text-xl font-semibold text-black" >Min. emelési magasság:</h5>
                <ul className="mb-5">
                  <li>Liftboy 4/S: 18,2 cm</li>
                  <li>Liftboy 4/L: 25 cm</li>
                </ul>
                 <h5 className="text-xl font-semibold text-black" >Platformméret (külső)</h5>
                <ul className="mb-5">
                  <li>Liftboy 4/S: 1,215 x 1,628 m</li>
                  <li>Liftboy 4/L: 1,188 x 1,571 m</li>
                </ul>
                  <h5 className="text-xl font-semibold text-black" >Platformméret (belső)</h5>
                <ul className="mb-5">
                  <li>Liftboy 4/S: 0,845 x 1,5 m</li>
                  <li>Liftboy 4/L: 0,862 x 1,41 m</li>
                </ul>              
                <h5 className="text-xl font-semibold text-black" >Emelési sebesség</h5>
                <p className="mb-5">1,7 cm/s</p>
                <h5 className="text-xl font-semibold text-black" >Teherbírás</h5>
                <p className="mb-5">300 kg</p>
                <h5 className="text-xl font-semibold text-black" >Biztonsági függőny</h5>
                <ul className="mb-5">
                  <li>Liftboy 4/S: Igen</li>
                  <li>Liftboy 4/L: Nem</li>
                </ul>
                <h5 className="text-xl font-semibold text-black" >Tápellátás:</h5>
                <p className="mb-5">24 V DC, elemmel működik</p>
                 </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/termekek/liftboy4/liftboy4_2.webp"}
                      alt="Liftboy 4 platform lépcsőliftről egy példa kép"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">Liftboy 4</h2>
                <div className="blog-details">
                  <p>A Liftboy 4 mobil, és beltéren és kültéren egyaránt használható. A Liftboy 4-et eredetileg a kerekesszékesek kocsik és peronok közötti szállítására fejlesztették ki, de színházi és koncertszínpadokon is használják.</p>
                  
                  <p>A mobil lift korszerű és könnyen kezelhető a felhasználóbarát kialakításnak és a könnyűszerkezetes kivitelnek köszönhetően.</p>
                  <p>Az emelvény összecsukható rámpákkal van felszerelve, amelyek mérete a helyszínen a kívánt szélességhez igazítható.</p>
                 <div className="">
                    <Link
                  href="/kapcsolat"
                  className="items-center justify-center rounded-full bg-custom px-7.5 py-2.5 text-lg text-white duration-300 ease-in-out hover:bg-primaryho"
                    >
                    Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <Image
                      src={"/images/termekek/liftboy4/liftboy4_4.webp"}
                      width={350}
                      height={200}
                      alt="A Liftboy 4 platformosliftről egy alternatív kép"
                    />
                    <Image
                      src={"/images/termekek/liftboy4/liftboy4_3.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép a Liftboy 4 liftről"
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

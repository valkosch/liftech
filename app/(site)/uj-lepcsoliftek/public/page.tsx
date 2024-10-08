import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Public lépcsőlift | Liftech.hu",
  viewport: "width=device-width, initial-scale=1",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  description: "Ez az oldal bemutatja az Omega nevezetű lépcsőjáró",
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
                <p className="mb-5">200kg</p>
                <h5 className="text-xl font-semibold text-black" >Lehetséges meredekség:</h5>
                <p className="mb-5">0 – 35°</p>
                <h5 className="text-xl font-semibold text-black" >Súly:</h5>
                <p className="mb-5">115kg</p>
                <h5 className="text-xl font-semibold text-black" >Méret:</h5>
                <p className="mb-5">1258 x 757 x 1280</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/termekek/pub/public2.webp"}
                      alt="Public lépcsőzőről egy példa kép"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Public - általános használatra tervezett lépcsőjáró
                </h2>
                <div className="blog-details">
                  <p>
A Public lépcsőjáró minden típusú kézi és elektromos kerekesszéket képes szállítani akár 35°-os lépcsőkön.</p>

                  <p>
Különösen középületek számára, mint például iskolák, múzeumok, egyetemek stb., ez a lépcsőjáró gazdaságos alternatívát kínál a hagyományos platformos lépcsőlift telepítéséhez.</p>
<ul>
    <li>Kézi és elektromos kerekesszékek szállítása</li>
    <li>Beltéri és kültéri használatra</li>
    <li>Költséghatékony alternatíva a hagyományos platformos lépcsőlifttel szemben</li>
</ul>
                  <p>
Ez a lépcsőjáró rendkívül tartós és robusztus. Ezért ideális bérbeadásra különféle középületek számára is, feltéve, hogy csak ideiglenesen kell biztosítaniuk az akadálymentességet alternatív módon.</p>

                 <div className="">
                    <Link
                  href="/kapcsolat"
                  className="items-center justify-center rounded-full bg-custom px-7.5 py-2.5 text-lg text-white duration-300 ease-in-out hover:bg-primaryho"
                    >
                    Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <Image
                      src={"/images/termekek/pub/public3.webp"}
                      width={350}
                      height={200}
                      alt="A public lépcsőjáróról egy alternatív kép"
                    />
                    <Image
                      src={"/images/termekek/pub/public1.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép a public lépcsőzőről"
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

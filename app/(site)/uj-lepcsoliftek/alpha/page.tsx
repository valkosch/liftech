import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alpha lépcsőlift | Liftech.hu",
  viewport: "width=device-width, initial-scale=1",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  charset: "utf-8",
  description: "Ez az oldal bemutatja az Alpha nevezetű kanyarodó lépcsőre helyezhető lépcsőliftet",
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
                <p className="mb-5">130kg (opcionálisan 145kg)</p>
                <h5 className="text-xl font-semibold text-black" >Lehetséges meredekség:</h5>
                <p className="mb-5">0 – 52°</p>
                <h5 className="text-xl font-semibold text-black" >Motor:</h5>
                <p className="mb-5">24 V DC, akkumulátorral működik</p>
                <h5 className="text-xl font-semibold text-black" >Sebesség:</h5>
                <p className="mb-5">0,06 – 0,12 m/s</p>
                <h5 className="text-xl font-semibold text-black" >Meghajtási rendszer:</h5>
                <p className="mb-5">Fogasléc és fogaskerék</p>
                <h5 className="text-xl font-semibold text-black" >Tápellátás:</h5>
                <p className="mb-5">1 x 230 V / 50-60 Hz</p>
                <h5 className="text-xl font-semibold text-black" >Alkalmazás:</h5>
                <p className="mb-5">Lakossági, beltéri vagy kültéri</p>
                <h5 className="text-xl font-semibold text-black" >Összecsukható szélesség:</h5>
                <p className="mb-5">37 cm</p>
                <h5 className="text-xl font-semibold text-black" >Kihajtható szélesség:</h5>
                <p className="mb-5">64,5 cm</p>
                <h5 className="text-xl font-semibold text-black" >Sínrendszer:</h5>
                <p className="mb-5">44,5 mm-es porszórt acélcsőprofilok</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/termekek/alpha/alpha2.webp"}
                      alt="Alpha lépcsőliftről egy példa kép"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Alpha - a széklift az íves lépcsőkhöz
                </h2>
                <div className="blog-details">
                  <p>
                  Az Alpha lépcsőlift megszünteti a lépcső akadályát, azoknál a lépcső típusoknál, ahol az Essental(Egyenes) típus nem alkalmazható. Biztonságos és könnyű hozzáférést biztosít más szintekre, ezt a lépcsőliftet kanyarodó lépcsőkre, közbenső lépcsőfokokra, vagy akár akkor is, ha diszkrét, az úttesten kívüli parkolásra van szükség.
                  </p>

                  <p>
                    Sima vezetés, kényelmes és megbízható; az Alpha lépcsőlift dupla sínrendszerrel rendelkezik az erősség és a tartósság érdekében.
                  </p>
                  <p>
A pontos számítógépes tervezés révén minden sínünket az Ön lépcsőjének pontos specifikációjára hajlítjuk, és a szék a műszaki és tervezési lehetőségek széles választékát kínálja.
                  </p>
                 <div className="">
                    <Link
                  href="/kapcsolat"
                  className="items-center justify-center rounded-full bg-custom px-7.5 py-2.5 text-lg text-white duration-300 ease-in-out hover:bg-primaryho"
                    >
                    Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <Image
                      src={"/images/termekek/alpha/alpha3.webp"}
                      width={350}
                      height={200}
                      alt="Az alpha lépcsőliftről egy alternatív kép"
                    />
                    <Image
                      src={"/images/termekek/alpha/alpha1.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép az alpha liftről"
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

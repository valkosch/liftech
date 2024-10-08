import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "StepSaver lépcsőlift | Liftech.hu",
    viewport: "width=device-width, initial-scale=1",
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    description: "Ez az oldal bemutatja a StepSaver nevezetű lépcsőliftet",
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
        <p className="mb-5">0,5 m</p>
        <h5 className="text-xl font-semibold text-black" >Rakodóképesség:</h5>
        <p className="mb-5">250kg</p>
        <h5 className="text-xl font-semibold text-black" >Súly::</h5>
        <p className="mb-5">150kg</p>
        <h5 className="text-xl font-semibold text-black" >Méretek:</h5>
        <p className="mb-0">Belső: 780 x 1040 mm</p>
        <p className="mb-5">Külső: 940 x 1110 mm</p>
        <h5 className="text-xl font-semibold text-black" >Sebesség:</h5>
        <p className="mb-5">18 mm/s</p>
        <h5 className="text-xl font-semibold text-black" >Vészhelyzeti áramellátás:</h5>
        <p className="mb-5">Igen</p>
        </div>
        </div>

        <div className="lg:w-2/3">
        <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
        <div className="mb-10 w-full overflow-hidden ">
        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
        <Image
        src={"/images/termekek/step/stepsaver3.webp"}
        alt="StepSaver lifről egy példa kép"
        fill
        className="rounded-md object-cover object-center"
        />
        </div>
        </div>

        <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">StepSaver - a lift alacsony szintkülönbségekhez</h2>
        <div className="blog-details">
        <p>A StepSaver az egyetlen lift a piacon, amely akár két stabil, integrált áthidaló lépcsővel rendelkezik. Ahogy a neve is sugallja, a lépcsők használhatóságát nem befolyásolja. Az innovatív lift gyors és költséghatékony alternatívát kínál az utólagos átalakításokhoz, különösen magánlakásokban.</p>

        <p>Főbb jellemzők:</p>
        <ul>
        <li>Egyszerű mobilitási megoldás meglévő lépcsőkhöz</li>
        <li>A gyalogosok továbbra is használhatják a lépcsőket</li>
        <li>Nincs szükség építési módosításokra*</li>
        <li>Gyors telepítés kevesebb mint két óra alatt</li>
        <li>Különböző lépcsőmagasságokhoz igazítható</li>
        </ul>
        <p>*A standard padlófelület csúszásmentes PVC. Az egyedi padlóburkolatok helyszíni testreszabást igényelnek.</p>

        <div className="">
        <Link
        href="/kapcsolat"
        className="items-center justify-center rounded-full bg-custom px-7.5 py-2.5 text-lg text-white duration-300 ease-in-out hover:bg-primaryho"
        >
        Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <Image
                      src={"/images/termekek/step/stepsaver1.webp"}
                      width={350}
                      height={200}
                      alt="A StepSaver lépcsőliftről egy alternatív kép"
                    />
                    <Image
                      src={"/images/termekek/step/stepsaver2.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép a StepSaver liftről"
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

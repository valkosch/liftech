import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rólunk | Liftech.hu",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  description: "Ezen az oldalon megismerheti a Liftech Group Kft-t",
  // other metadata
};
const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
Rólunk
                </h2>
            <div className=" lg:justify-between lg:gap-0">
                    <div className="blog-details">
<p>Használt, de teljes mértékben szervízelt és karbantartott, illetve új lépcsőliftek és platform liftek telepítésével és forgalmazásával foglalkozunk immár 12 éve. Gyakorlatilag a piacon első résztvevőként jelentősen hozzátettünk, hogy minél nagyobb körben ismert és elérhető legyen ez a segítség azok számára, akiknek erre szüksége van. Eleinte műhelyünkben kanyarodó lépcsőlifteket is gyártottunk, de miután sikeresen csatlakoztunk egy nemzetközileg is kimagasló minőséget képviselő cégcsoporthoz,(Lehner Lifttechnik) így jóval professzionálisabban és személyre szabottabban tudjuk megrendelőink igényeit kiszolgálni. Gyakorlatilag az elmúlt két évben egy igen nagy változáson ment végbe cégünk, szintet léptünk, és már vezető szerepet tudunk magunkénak ezen a piacon. De a fejlődés folyamatosságát szem előtt tartva, igyekszünk újabb és újabb termékekkel a megrendelőink legextrémebb kívánságaiknak is megfelelni. Ez úton is köszönjük, hogy minket választott, bízunk benne, hogy a legmegfelelőbb megoldást találjuk meg az Ön egyedi elképzeléséhez. Szép napot!</p>

<p>Liftech Group Kft Csapata</p>
                      </div> 
                      <div className="mx-auto">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/liftech_logo.webp"
                    alt="Logo"
                  />
                      </div>
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

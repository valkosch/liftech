import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kapcsolat | Liftech.hu",
  description: "Ezen az oldalon tud kapcsolatba lépni velünk, az űrlap segítségével",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;

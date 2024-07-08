"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageViewer from "@/components/Gallery/ImageViewer";

export default function IndexPage(){
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  interface ImageProps {
    src: string;
    alt: string;
  }
const images: ImageProps[] = [
    { src: "/images/galeria/img1.jpg", alt: "Image 1" },
    { src: "/images/galeria/img2.jpg", alt: "Image 2" },
    { src: "/images/galeria/img3.jpg", alt: "Image 3" },
    { src: "/images/galeria/img4.jpg", alt: "Image 4" },
    { src: "/images/galeria/img5.jpg", alt: "Image 5" },
    { src: "/images/galeria/img6.jpg", alt: "Image 6" },
    { src: "/images/galeria/img8.jpg", alt: "Image 8" },
    { src: "/images/galeria/img9.jpg", alt: "Image 9" },
    { src: "/images/galeria/img10.jpg", alt: "Image 10" },
    { src: "/images/galeria/img11.jpg", alt: "Image 11" },
    { src: "/images/galeria/img12.jpg", alt: "Image 12" },
    { src: "/images/galeria/img13.jpg", alt: "Image 13" },
    { src: "/images/galeria/img14.jpg", alt: "Image 14" },
    { src: "/images/galeria/img15.jpg", alt: "Image 15" },
    { src: "/images/galeria/img16.jpg", alt: "Image 16" },
    { src: "/images/galeria/img17.jpg", alt: "Image 17" },
    { src: "/images/galeria/img18.jpg", alt: "Image 18" },
    { src: "/images/galeria/img19.jpg", alt: "Image 19" },
    { src: "/images/galeria/img20.jpg", alt: "Image 20" },
    { src: "/images/galeria/img21.jpg", alt: "Image 21" },
    { src: "/images/galeria/img23.jpg", alt: "Image 24" },
    { src: "/images/galeria/img24.jpg", alt: "Image 24" },
    { src: "/images/galeria/img25.jpg", alt: "Image 25" },
    { src: "/images/galeria/img26.jpg", alt: "Image 26" },
    { src: "/images/galeria/img27.jpg", alt: "Image 27" },
    { src: "/images/galeria/img28.jpg", alt: "Image 28" },
    { src: "/images/galeria/img30.jpg", alt: "Image 30" },

  ];

  const handleOnClicked = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(images[nextIndex].src as string);
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setSelectedImage(images[prevIndex].src as string);
    setCurrentImageIndex(prevIndex);
  };

  return (
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                <h2 className=" mt-11 text-4xl text-center font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
Tekintse meg eddigi munkáinkat
                </h2>    <div className=" flex flex-col">
      {selectedImage && (
        <ImageViewer
          selectedImage={selectedImage}
          onNext={handleNextImage}
          onPrev={handlePreviousImage}
        />
      )}
      <div className="flex flex-row flex-wrap gap-3 mt-50 justify-center px-3 md:px-0">
        {images.map((image, index) => (
          <Image
            key={index}
            {...image}
            className="border-2 border-solid border-blue-900  w-40 cursor-pointer hover:border-blue-500"
            width={800}
            height={700}
            onClick={() => handleOnClicked(image.src as string, index)}
          />
        ))}
      </div>
    </div>
    </div>
    </div>
 </div>
</div>
</section>
      );
};

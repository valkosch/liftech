import React from "react";
import Image from "next/image";

interface ImageViewerProps {
  selectedImage: string;
  onNext: () => void;
  onPrev: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  selectedImage,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <Image
          src={selectedImage}
          alt={selectedImage}
          width={800}
          height={800}
          style={{
            width: 800,
            maxWidth: "100%",
          }}
          className="py-2 mt-30"
        />

        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white py-14 px-4 md:py-28 md:px-5 text-6xl md:text-8xl"
          onClick={onPrev}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 text-white py-14 px-4 md:py-28 md:px-5 text-6xl md:text-8xl"
          onClick={onNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;

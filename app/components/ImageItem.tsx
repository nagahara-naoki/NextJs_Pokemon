import Image from "next/image";
import React from "react";

interface ImageType {
  src: string;
  alt: string;
  name: string | undefined;
  width: number;
  isDetail: boolean;
}

export default function ImageItem(props: ImageType) {
  const { src, alt, name, width, isDetail } = props;

  return (
    <div className="p-3">
      {isDetail && (
        <div className="bg-white w-full mb-4 rounded">
          <p className="text-center text-lg py-1">{name}</p>
        </div>
      )}
      <Image
        src={`/assets/images/${src}.png`}
        alt={alt}
        width={width}
        height={100}
      ></Image>
      {!isDetail && (
        <div className="bg-slate-200 w-full mt-4 rounded">
          <p className="text-center text-sm">{name}</p>
        </div>
      )}
    </div>
  );
}

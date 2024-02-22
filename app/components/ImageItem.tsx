import Image from "next/legacy/image";
import { tv } from "tailwind-variants";

import React from "react";

interface ImageType {
  src: string;
  alt: string;
  name: string | undefined;
  width: number;
  isDetail: boolean;
}

export default function ImageItem(props: ImageType) {
  const { src, alt, name, isDetail } = props;
  const sizeStyle = tv({
    base: isDetail ? "relative w-80 h-80" : "relative w-28 h-28",
  });

  return (
    <div>
      {isDetail && (
        <div className="bg-white w-full mb-4 rounded">
          <p className="text-center text-lg py-1">{name}</p>
        </div>
      )}
      <div className={sizeStyle()}>
        <Image
          src={`/assets/images/${src}.png`}
          alt={alt}
          layout="fill"
        ></Image>
      </div>
      {!isDetail && (
        <div>
          <p className="text-center text-sm">{name}</p>
        </div>
      )}
    </div>
  );
}

"use client";

import { CaseColor } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhonePreviewProps {
  croppedImageUrl: string;
  color: CaseColor;
}

const PhonePreview = ({ croppedImageUrl, color }: PhonePreviewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [renderedDimensions, setRenderedDimensions] = useState({
    height: 0,
    width: 0,
  });

  const caseBackgroundColor =
    color === "blue"
      ? "bg-blue-950"
      : color === "rose"
        ? "bg-rose-950"
        : "bg-zinc-950";

  const handleResize = () => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setRenderedDimensions({ width, height });
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimensions.width / 2 -
            renderedDimensions.width / (1216 / 121),
          top: renderedDimensions.height / 6.22,
        }}
      >
        <Image
          width={renderedDimensions.width / (3000 / 637)}
          height={renderedDimensions.height}
          src={croppedImageUrl}
          className={cn(
            "phone-skew relative z-20 rounded-b-[10px] rounded-t-[15px] md:rounded-b-[20px] md:rounded-t-[30px]",
            caseBackgroundColor,
          )}
          alt="cropped image"
        />
      </div>

      <div className="relative z-40 h-full w-full">
        <Image
          src="/clearphone.png"
          width={3000}
          height={2001}
          className="pointer-events-none h-full w-full antialiased"
          alt="phone"
        />
      </div>
    </AspectRatio>
  );
};

export default PhonePreview;

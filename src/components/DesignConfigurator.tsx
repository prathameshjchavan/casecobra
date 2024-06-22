import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

interface DesignConfiguratorProps {
  configId: string;
  imageUrl: string;
  imageDimentions: { width: number; height: number };
}

const DesignConfigurator = ({
  configId,
  imageUrl,
  imageDimentions,
}: DesignConfiguratorProps) => {
  return (
    <div className="relative mb-20 mt-20 grid grid-cols-3 pb-20">
      <div className="relative col-span-2 flex h-[37.5rem] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <div className="pointer-events-none relative aspect-[896/1831] w-60 bg-opacity-50">
          <AspectRatio
            ratio={896 / 1831}
            className="pointer-events-none relative z-50 aspect-[896/1831] w-full"
          >
            <Image
              src="/phone-template.png"
              alt="phone image"
              width={896}
              height={1831}
              className="pointer-events-none z-50 select-none"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default DesignConfigurator;

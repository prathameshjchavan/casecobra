"use client";

import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Rnd } from "react-rnd";
import HandleComponent from "./HandleComponent";
import { ScrollArea } from "./ui/scroll-area";
import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { COLORS } from "@/validators/option-validator";
import { Label } from "./ui/label";

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
  const [options, setOptions] = useState<{ color: (typeof COLORS)[number] }>({
    color: COLORS[0],
  });

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
              fill
              className="pointer-events-none z-50 select-none"
            />
          </AspectRatio>
          <div className="absolute bottom-px left-[3px] right-[3px] top-px z-40 rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
          <div
            className={cn(
              "absolute inset-x-[3px] inset-y-px rounded-[32px]",
              `bg-blue-950`,
            )}
          />
        </div>
        <Rnd
          default={{
            x: 150,
            y: 205,
            height: imageDimentions.height / 4,
            width: imageDimentions.width / 4,
          }}
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}
          className="absolute z-20 border-[3px] border-primary"
        >
          <div className="relative h-full w-full">
            <Image
              src={imageUrl}
              fill
              alt="your image"
              className="pointer-events-none"
            />
          </div>
        </Rnd>
      </div>

      <div className="flex h-[37.5rem] flex-col bg-white">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-white"
          />

          <div className="px-8 pb-12 pt-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Customize your case
            </h2>

            <div className="my-6 h-px w-full bg-zinc-200" />

            <div className="relative mt-4 flex h-full flex-col justify-between">
              <RadioGroup
                value={options.color}
                onChange={(val) => {
                  setOptions((prev) => ({ ...prev, color: val }));
                }}
              >
                <Label>Color: {options.color.label}</Label>
                <div className="mt-3 flex items-center space-x-3">
                  {COLORS.map((color) => (
                    <Radio value={color} key={color.label}>
                      {({ checked }) => (
                        <span
                          className={cn(
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full border-2 border-transparent p-0.5 focus:outline-none focus:ring-0 active:outline-none active:ring-0",
                            { [`border-${color.tw}`]: checked },
                          )}
                        >
                          <span
                            className={cn(
                              `bg-${color.tw}`,
                              "h-8 w-8 rounded-full border border-black border-opacity-10",
                            )}
                          />
                        </span>
                      )}
                    </Radio>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default DesignConfigurator;

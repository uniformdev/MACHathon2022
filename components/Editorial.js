import { Slot } from "@uniformdev/canvas-react";

export default function Editorial({ component }) {
  const { srcset } = component.parameters.cloudinary.value[0];
  return (
    <section className="flex flex-col lg:flex-row bg-light justify-between p-8 lg:p-12">
      <div className="flex flex-col items-stretch w-full lg:w-2/4">
        <Slot name="callsToAction" />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        srcSet={srcset}
        alt="rediscover your skin"
        className="w-full lg:w-2/4 mt-8 lg:mt-0 lg:ml-12"
      />
    </section>
  );
}

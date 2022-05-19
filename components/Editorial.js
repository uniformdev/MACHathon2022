import { Slot } from "@uniformdev/canvas-react";

export default function Editorial({ component }) {
  const { srcset } = component.parameters.cloudinary.value[0];
  return (
    <section className="flex bg-light justify-between">
      <div className="flex flex-col items-stretch w-2/4 p-12">
        <Slot name="callsToAction" />
      </div>

      <img
        width={625}
        height={1013}
        srcSet={srcset}
        alt="rediscover your skin"
        className="w-2/4"
      />
    </section>
  );
}

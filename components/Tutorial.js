import { Parallax } from "react-scroll-parallax";

export default function Tutorial({ component }) {
  const { srcset, alt, width, height } =
    component.parameters.cloudinary.value[0];

  const { title, steps } = component.parameters.entry.value;

  const stepsRendered = steps.map((step, index) => (
    <li
      key={step._metadata.uid}
      className="grid mb-12 items-center"
      style={{ gridTemplateColumns: "1fr 5fr" }}
    >
      <span className="text-6xl font-semibold">{index + 1}.</span>
      <span className="text-md">{step.step}</span>
    </li>
  ));

  return (
    <section className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        srcSet={srcset}
        alt={alt}
        width={width}
        height={height}
        className="absolute h-full w-full object-cover"
      />

      <Parallax speed={10} className="max-w-2xl px-12 py-24 md:px-24 md:py-36">
        <h1 className="text-6xl mb-12">{title}</h1>
        <ul>{stepsRendered}</ul>
      </Parallax>
    </section>
  );
}

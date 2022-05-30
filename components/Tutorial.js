import { Parallax } from "react-scroll-parallax";

export default function Tutorial({ component }) {
  const { srcset } = component.parameters.cloudinary.value[0];

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
    <section className="aspect-[1440/978] relative">
      <img
        width={1440}
        height={978}
        srcSet={srcset}
        alt={title}
        className="absolute"
      />

      <Parallax
        speed={10}
        className="max-w-2xl absolute md:top-24 lg:56 left-28"
      >
        <h1 className="text-6xl mb-12">{title}</h1>
        <ul>{stepsRendered}</ul>
      </Parallax>
    </section>
  );
}

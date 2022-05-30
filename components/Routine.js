import { Parallax } from "react-scroll-parallax";

export default function Routine({ component }) {
  const { srcset, alt, width, height } =
    component.parameters.cloudinary.value[0];
  const url = component.parameters.url.value;
  const { chapeau, copy, cta, title } = component.parameters.entry.value;

  return (
    <section className="py-16 relative bg-light">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="lg:w-2/4"
        srcSet={srcset}
        alt={alt}
        width={width}
        height={height}
      />

      <Parallax
        speed={5}
        className="w-full bg-tertiary p-8 lg:max-w-2xl lg:absolute top-32 right-32"
      >
        <h2 className="mb-8">
          <span className="block text-primary font-semibold text-4xl lg:text-6xl">
            {chapeau}
          </span>
          <span className="block text-dark font-semibold text-4xl lg:text-6xl ml-8 -mt-2">
            {title}
          </span>
        </h2>

        <p className="text-xl ml-8 mb-8">{copy}</p>
        <a href={url} className="inline-block cta ml-8">
          {cta}
        </a>
      </Parallax>
    </section>
  );
}

import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

export default function ProductHighlight({ component }) {
  const { name, description } = component.parameters.entry.value;
  const { url, ctaText, theme } = component.parameters;
  const { alt, srcset, width, height } =
    component.parameters.cloudinary.value[0];
  const variant = component?.variant || "default";

  return (
    <section className="md:aspect-[1440/722] relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        srcSet={srcset}
        alt={alt}
        width={width}
        height={height}
        className="md:absolute md:object-cover"
      />
      <Parallax
        speed={10}
        className={`p-8 md:p-0 md:max-w-md lg:max-w-2xl md:absolute md:top-24 lg:top-56 ${
          variant === "imageLeft"
            ? "md:right-16 lg:right-44"
            : "md:left-16 lg:left-44"
        }`}
      >
        <h2 className="mb-8">
          <span className="block text-primary font-semibold text-4xl md:text-6xl">
            your
          </span>
          <span
            className={`${
              theme.value === "light" ? "text-light" : "text-dark"
            } font-semibold text-3xl sm:text-4xl md:text-6xl sm:ml-8 sm:-mt-2 block`}
          >
            {name}
          </span>
        </h2>

        <p
          className={`${
            theme.value === "light" ? "text-light" : "text-dark"
          } text-xl ml-8 mb-8`}
        >
          {description}
        </p>
        <Link href={url.value}>
          <a className="inline-block cta ml-8">{ctaText.value}</a>
        </Link>
      </Parallax>
    </section>
  );
}

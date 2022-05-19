import Link from "next/link";

export default function ProductHighlight({ component }) {
  const { name, description } = component.parameters.entry.value;
  const { url, ctaText, theme } = component.parameters;
  const { srcset } = component.parameters.cloudinary.value[0];
  const variant = component?.variant || "default";

  return (
    <section className="aspect-[1440/722] relative">
      <img
        width={1440}
        height={722}
        srcSet={srcset}
        alt="rediscover your skin"
        className="absolute"
      />
      <article
        className={`max-w-2xl absolute top-56 ${
          variant === "imageLeft" ? "right-44" : "left-44"
        }`}
      >
        <h2 className="mb-8">
          <span className="block text-primary font-semibold text-6xl">
            your
          </span>
          <span
            className={`${
              theme.value === "light" ? "text-light" : "text-dark"
            } font-semibold text-6xl ml-8 -mt-2 block`}
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
      </article>
    </section>
  );
}

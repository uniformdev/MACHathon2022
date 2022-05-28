import { Parallax } from "react-scroll-parallax";

export default function Hero({ component }) {
  const { srcset } = component.parameters.cloudinary?.value[0];
  const { title, subtitle } = component.parameters.entry.value;
  const titleParts = title.split("your");

  return (
    <section className="aspect-[1440/632] relative">
      {srcset ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          width={1440}
          height={632}
          srcSet={srcset}
          alt="rediscover your skin"
          className="absolute"
        />
      ) : null}
      <Parallax className="absolute max-w-xl top-44 left-56" speed={10}>
        <h1 className="font-semibold text-6xl mb-8 xl:text-7xl 2xl:text-8xl">
          {titleParts.length > 1 ? (
            <>
              {titleParts[0]} <span className="text-primary">your</span>{" "}
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h1>
        <p className="text-xl">{subtitle}</p>
      </Parallax>
    </section>
  );
}

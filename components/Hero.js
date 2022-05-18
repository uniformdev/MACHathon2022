export default function Hero({ component }) {
  const { title, subtitle } = component.parameters.entry.value;

  function addColorToYour(title) {
    return title.replace("your", '<span class="text-primary">your</span>');
  }

  const { srcset } = component.parameters.cloudinary.value[0];
  return (
    <section className="aspect-[1440/632] relative">
      <img
        width={1440}
        height={632}
        srcSet={srcset}
        alt="rediscover your skin"
        className="absolute"
      />
      <article className="absolute max-w-xl top-56 left-56">
        <h1
          className="font-semibold text-8xl mb-8"
          dangerouslySetInnerHTML={{ __html: addColorToYour(title) }}
        />
        <p className="text-xl">{subtitle}</p>
      </article>
    </section>
  );
}

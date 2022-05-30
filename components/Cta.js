import Link from "next/link";

export default function Cta({ component }) {
  const { url } = component.parameters;
  const { chapeau, copy, cta_text, title } = component.parameters.entry.value;

  return (
    <div className="w-full mb-12 bg-tertiary p-8">
      <h3 className="mb-8">
        <span className="block text-primary font-semibold text-4xl md:text-6xl">
          {chapeau}
        </span>
        <span className="block text-dark font-semibold text-3xl sm:text-4xl md:text-6xl sm:ml-8 sm:-mt-2">
          {title}
        </span>
      </h3>

      <p className="text-xl sm:ml-8 mb-8">{copy}</p>
      <Link href={url.value}>
        <a className="inline-block cta ml-8">{cta_text}</a>
      </Link>
    </div>
  );
}

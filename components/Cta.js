import Link from "next/link";

export default function Cta({ component }) {
  const { url } = component.parameters;
  const { chapeau, copy, cta_text, title } = component.parameters.entry.value;

  return (
    <div className="w-full mb-12 bg-tertiary p-8">
      <h3 className="mb-8">
        <span className="block text-primary font-semibold text-6xl">
          {chapeau}
        </span>
        <span className="block text-dark font-semibold text-6xl ml-8 -mt-2">
          {title}
        </span>
      </h3>

      <p className="text-xl ml-8 mb-8">{copy}</p>
      <Link href={url.value}>
        <a className="inline-block cta ml-8">{cta_text}</a>
      </Link>
    </div>
  );
}

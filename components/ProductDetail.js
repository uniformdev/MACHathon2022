import { Parallax } from "react-scroll-parallax";

export default function ProductDetail({ component }) {
  const { ctaText } = component.parameters;
  const { id, name, product_description, price, ingredients, images } =
    component.parameters.entry.value;

  return (
    <section className="bg-light product-detail pb-12">
      <div className="grid grid-cols-2">
        <Parallax speed={-10}>
          <img
            width={540}
            height={540}
            src={images[0]}
            alt={name}
            className="aspect-[1/1]"
          />
        </Parallax>
        <Parallax speed={-10}>
          <img
            width={625}
            height={1013}
            src={images[3]}
            alt={name}
            className="aspect-[1/1]"
          />
        </Parallax>
      </div>
      <div className="flex mx-16 mb-12 ">
        <Parallax speed={3} className="bg-secondary p-8 -mt-12 flex-1 w-2/4">
          <h1>
            <span className="block text-primary font-semibold text-6xl">
              your
            </span>
            <span className="block text-light font-semibold text-6xl ml-8 -mt-2">
              {name}
            </span>
          </h1>
        </Parallax>
        <Parallax speed={3} className="bg-tertiary p-8 -mt-12 w-2/4">
          <p className="text-5xl font-semibold mb-4">&euro;{price}</p>
          <a href={`/api/addtocart?productId=${id}`} className="cta">
            {ctaText.value}
          </a>
        </Parallax>
      </div>
      <div className="grid grid-cols-2 gap-8 mx-16">
        <div className="pr-2">
          <h3 className="text-3xl font-semibold mb-4">product description</h3>
          <article dangerouslySetInnerHTML={{ __html: product_description }} />
        </div>
        <div className="pl-2">
          <h3 className="text-3xl font-semibold mb-4">ingredients</h3>
          <article dangerouslySetInnerHTML={{ __html: ingredients }} />
        </div>
      </div>
    </section>
  );
}

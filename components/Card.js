import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

const Card = ({ product }) => {
  return (
    <div className="bg-tertiary aspect-[1/1] relative">
      <Link href={product.url}>
        <a className="block absolute w-full h-full top-0 left-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute w-100 h-auto"
          />

          <button className="cta absolute bottom-4 right-4">
            {product.ctaText}
          </button>

          <Parallax
            speed={3}
            className="absolute top-6 md:top-auto md:-bottom-6 left-8"
          >
            <h3>
              <span className="block text-primary font-semibold text-4xl md:text-6xl">
                your
              </span>
              <span className="block text-dark font-semibold text-3xl sm:text-4xl md:text-6xl sm:ml-8 sm:-mt-2">
                {product.name}
              </span>
            </h3>
          </Parallax>
        </a>
      </Link>
    </div>
  );
};

export default Card;

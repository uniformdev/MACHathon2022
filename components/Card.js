import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

const Card = ({ product }) => {
  return (
    <div className="bg-tertiary aspect-[1/1] relative">
      <Link href={product.url}>
        <a className="block absolute w-full h-full top-0 left-0">
          <img
            width={540}
            height={540}
            src={product.images[0]}
            alt={product.name}
            className="absolute w-100 h-auto"
          />

          <button className="cta absolute top-4 left-4">
            {product.ctaText}
          </button>

          <Parallax speed={5} className="absolute -bottom-6 left-8">
            <h3>
              <span className="block text-primary font-semibold text-6xl">
                your
              </span>
              <span className="block text-dark font-semibold text-6xl ml-8 -mt-2">
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

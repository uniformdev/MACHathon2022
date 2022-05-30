import Link from "next/link";

const GlobalHeader = () => {
  return (
    <header className="bg-dark mx-auto" style={{ maxWidth: "1440px" }}>
      <div className="mx-auto flex flex-wrap gap-4 justify-between items-center px-5 py-5 md:py-8">
        <Link href="/">
          <a className="text-light font-semibold text-3xl">skncre</a>
        </Link>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 items-center md:text-xl">
          <Link href="/pdp/face-serum">
            <a className="text-light">face serum</a>
          </Link>
          <Link href="/pdp/face-cream">
            <a className="text-light">face cream</a>
          </Link>
          <Link href="/pdp/eye-contour">
            <a className="text-light">eye contour</a>
          </Link>
          <Link href="/pdp/bundle">
            <a className="text-light">skncre bundle</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default GlobalHeader;

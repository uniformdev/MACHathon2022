import Link from "next/link";

const GlobalHeader = () => {
  return (
    <header className="bg-dark h-20 mx-auto" style={{ maxWidth: "1440px" }}>
      <div
        className="mx-auto h-20 flex justify-between"
        style={{ maxWidth: "1440px" }}
      >
        <Link href="/">
          <a className="text-light font-semibold text-3xl mt-5 ml-8">skncre</a>
        </Link>

        <nav className="mt-6 mr-8 text-xl space-x-6 hidden sm:block">
          <Link href="/">
            <a className="text-light">serum</a>
          </Link>
          <Link href="/">
            <a className="text-light">cream</a>
          </Link>
          <Link href="/">
            <a className="text-light">eye contour</a>
          </Link>
          <Link href="/">
            <a className="text-light">about us</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default GlobalHeader;

import Link from "next/link";
import { useRouter } from "next/router";

const GlobalHeader = () => {
  const router = useRouter();

  return (
    <header className="bg-dark h-20 mx-auto" style={{ maxWidth: "1440px" }}>
      <div
        className="mx-auto h-20 flex justify-between"
        style={{ maxWidth: "1440px" }}
      >
        <Link href="/" prefetch={!router.isPreview}>
          <a className="text-light font-semibold text-3xl mt-5 ml-8">skncre</a>
        </Link>

        <nav className="mt-6 mr-8 text-xl space-x-6 hidden sm:block">
          <Link href="/pdp/face-serum" prefetch={!router.isPreview}>
            <a className="text-light">face serum</a>
          </Link>
          <Link href="/pdp/face-cream" prefetch={!router.isPreview}>
            <a className="text-light">face cream</a>
          </Link>
          <Link href="/pdp/eye-contour" prefetch={!router.isPreview}>
            <a className="text-light">eye contour</a>
          </Link>
          <Link href="/pdp/bundle" prefetch={!router.isPreview}>
            <a className="text-light">skncre bundle</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default GlobalHeader;

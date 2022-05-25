import Link from "next/link";
import { useRouter } from "next/router";

const GlobalHeader = () => {
  const router = useRouter();

  return (
    <header className="bg-dark h-72 mx-auto" style={{ maxWidth: "1440px" }}>
      <div className="mx-auto max-w-screen-xl flex flex-col justify-between text-center pt-24">
        <Link href="/" prefetch={!router.isPreview}>
          <a className="text-light font-semibold text-3xl">skncre</a>
        </Link>
        <nav className="mt-6 mr-5 text-xl space-x-6 hidden sm:block">
          <Link href="/pdp/face-serum" prefetch={!router.isPreview}>
            <a className="text-light">serum</a>
          </Link>
          <Link href="/pdp/face-cream" prefetch={!router.isPreview}>
            <a className="text-light">cream</a>
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

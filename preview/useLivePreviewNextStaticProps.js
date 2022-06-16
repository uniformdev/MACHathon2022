import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useCompositionEventEffect } from "@uniformdev/canvas-react";

function useLivePreviewNextStaticProps(options) {
  const router = useRouter();

  useEffect(() => {
    console.log(
      router.isPreview ? "🥽 Preview enabled ✅" : "🥽 Preview disabled ⛔"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const effect = useCallback(async () => {
    console.log("🥽 Preview updated.", router.asPath);

    // Can be removed after https://github.com/vercel/next.js/issues/37190 is resolved
    delete window.next.router.sdc[
      new URL(
        `/_next/data/${window.__NEXT_DATA__.buildId}${
          router.asPath === "/" ? "/index" : router.asPath
        }.json`,
        location.href
      ).toString()
    ];
    router.replace(router.asPath, undefined, { scroll: false });
  }, [router]);

  return useCompositionEventEffect({
    ...options,
    enabled: router.isPreview,
    effect,
  });
}

export default useLivePreviewNextStaticProps;

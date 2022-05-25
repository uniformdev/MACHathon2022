import { useRouter } from "next/router";
import next from "next";
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

  const effect = useCallback(() => {
    console.log("🥽 Preview updated.", router.asPath);

    // Can be removed after https://github.com/vercel/next.js/issues/37190 is resolved
    delete next.router.sdc[
      new URL(
        `/_next/data/${window.__NEXT_DATA__.buildId}${router.asPath}.json`,
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

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

  const effect = useCallback(() => {
    console.log("🥽 Preview updated.", router.asPath);
    router.replace(router.asPath, undefined, { scroll: false });
  }, [router]);

  return useCompositionEventEffect({
    ...options,
    enabled: router.isPreview,
    effect,
  });
}

export default useLivePreviewNextStaticProps;

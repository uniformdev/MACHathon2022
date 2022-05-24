import { useRouter } from "next/router";
import { useCallback } from "react";
import {
  useCompositionEventEffect,
} from "@uniformdev/canvas-react";

function useLivePreviewNextStaticProps(
  options
) {
  const router = useRouter();

  const effect = useCallback(() => {
    console.log("🥽 Preview updated.");
    router.replace(router.asPath, undefined, { scroll: false });
  }, [router]);

  return useCompositionEventEffect({
    ...options,
    enabled: router.isPreview,
    effect,
  });
}

export default useLivePreviewNextStaticProps;

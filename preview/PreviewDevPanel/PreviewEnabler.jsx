import useLivePreviewNextStaticProps from "../useLivePreviewNextStaticProps";
import getConfig from "next/config";
import PreviewSwitch from "./PreviewSwitch/PreviewSwitch";
import previewEnabled from "../previewEnabled";

function PreviewEnabler({ previewActive, composition }) {
  const { publicRuntimeConfig } = getConfig();
  const { projectId } = publicRuntimeConfig;
  useLivePreviewNextStaticProps({
    compositionId: composition?._id,
    projectId,
  });
  return previewEnabled() ? <PreviewSwitch previewing={previewActive} /> : null;
}

export default PreviewEnabler;

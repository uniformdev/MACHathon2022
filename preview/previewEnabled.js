import getConfig from "next/config";

export default function previewEnabled() {
  const {
    publicRuntimeConfig: { previewEnabled },
  } = getConfig();
  const previewEnabledBool =
    previewEnabled === true || previewEnabled === "true";
  console.log(
    previewEnabledBool ? "🥽 Preview enabled ✅" : "🥽 Preview disabled ⛔"
  );
  return previewEnabledBool;
}

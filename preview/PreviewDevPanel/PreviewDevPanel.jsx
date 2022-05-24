import CompositionPreview from "./CompositionPreview/CompositionPreview";
import PreviewEnabler from "./PreviewEnabler";
import styles from "./PreviewDevPanel.module.css";

function PreviewDevPanel({ preview, composition }) {
  return (
    <div className={styles["panel"]}>
      <div className={styles["preview-switch"]}>
        <PreviewEnabler previewActive={preview} composition={composition} />
      </div>
      <div className={styles["composition-preview"]}>
        <CompositionPreview composition={composition} />
      </div>
    </div>
  );
}

export default PreviewDevPanel;

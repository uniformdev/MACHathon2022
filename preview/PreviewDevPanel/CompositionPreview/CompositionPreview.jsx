import { useState } from "react";
import dynamic from "next/dynamic";
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

import styles from "./CompositionPreview.module.css";

function CompositionPreview({ composition }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        title="Composition toggle"
        type="button"
        onClick={() => {
          setActive(!active);
        }}
        className={[
          styles["composition-button"],
          active
            ? styles["composition-button-on"]
            : styles["composition-button-off"],
        ].join(" ")}
      >
        <CodeIcon />
      </button>

      {active && (
        <div
          className={[styles["sidenav"], active && styles["sidenav-open"]].join(
            " "
          )}
        >
          <a
            className={styles["sidenav-close"]}
            onClick={() => {
              setActive(false);
            }}
          >
            &times;
          </a>
          <ReactJson src={composition} />
        </div>
      )}
    </>
  );
}

const CodeIcon = () => (
  <svg
    style={{ height: 30, width: 30, paddingTop: 2 }}
    viewBox="0 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

export default CompositionPreview;

import React from "react";
import styles from "./frame.module.css";

type FrameProps = {};

export default function Frame({
  children,
}: React.PropsWithChildren<FrameProps>) {
  return (
    <div className={styles.frameContainer}>
      <div className={styles.frameWrap}>{children}</div>
    </div>
  );
}

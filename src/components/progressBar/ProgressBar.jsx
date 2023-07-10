import React from "react";
import styles from "./ProgressBar.module.css";
import { questions } from "../../data/questions";

const ProgressBar = ({ step }) => {

  let barWidth = (100 / questions.length) * step + "%";
  return (
    <div className={styles.progressContainer}>
      <div
        style={{ background: "linear-gradient(#e66465, #9198e5)", width: barWidth, height: "20px", borderRadius: '15px' }}
      ></div>
    </div>
  );
};

export default ProgressBar;

import React from "react";
import styles from "./Result.module.css";
import { questions } from "../../data/questions";

const Result = ({ wrightAnswersCounter }) => {
  const numberOfQuestions = questions.length;
  const isCongratulate =
    wrightAnswersCounter === numberOfQuestions ? styles.congratulate : "";
  const allWrapperStyles = [styles.wrapper, isCongratulate].join(" ");
  return (
    <div className={allWrapperStyles}>
      <h2>Result</h2>
      <p>
        <b>{wrightAnswersCounter}</b> of <span>{numberOfQuestions}</span>
      </p>
      {wrightAnswersCounter === numberOfQuestions && (
        <p>Congratulations! Best result!</p>
      )}
      <a href="/">
        <div>Test again</div>
      </a>
    </div>
  );
};

export default Result;

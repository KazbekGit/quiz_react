import React from "react";
import styles from "./AnswersList.module.css";

const AnswersList = ({ answers, onAnswerClick }) => {
  return (
    <ul className={styles.list}>
      {answers.map((answer, index) => {
        return (
          <li
            onClick={() => onAnswerClick(index)}
            className={styles.item}
            key={index}
          >
            {answer}
          </li>
        );
      })}
    </ul>
  );
};

export default AnswersList;

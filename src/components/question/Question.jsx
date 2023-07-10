import React from "react";
import style from "./Question.module.css";
import AnswersList from "../answer/AnswersList";
import ProgressBar from "../progressBar/ProgressBar";

const Question = ({ question, step, onAnswerClick }) => {
  return (
    <div className={style.container}>
      <ProgressBar step={step} />
      <div className={style.wrapper}>
        <h3>{question.title}</h3>
        {
          <AnswersList
            answers={question.answers}
            onAnswerClick={onAnswerClick}
          />
        }
      </div>
    </div>
  );
};

export default Question;

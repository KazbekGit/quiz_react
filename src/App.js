import { useState } from "react";
import "./App.css";
import Question from "./components/question/Question";
import { questions } from "./data/questions";
import Result from "./components/result/Result";

function App() {
  const [step, setStep] = useState(0);
  const [wrightAnswersCounter, setWrightAnswersCounter] = useState(0);

  const question = questions[step] ? questions[step] : null;

  const onAnswerClick = (index) => {
    setStep((prev) => prev + 1);

    if (question.wrightAnswerIndex === index)
      setWrightAnswersCounter((prev) => prev + 1);
  };
  return (
    <div className="App">
      {question ? (
        <Question
          question={question}
          step={step}
          onAnswerClick={onAnswerClick}
        />
      ) : (
        <Result wrightAnswersCounter={wrightAnswersCounter} />
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { getTotalNumberOfQuestions } from "../utilities/questionFetcher";

type Props = {
  onStartButtonClick: () => void;
};

const Intro: React.FC<Props> = ({ onStartButtonClick }) => {
  const [totalQuestions, setTotalQuestions] = useState<number>(0);

  useEffect(() => {
    setTotalQuestions(getTotalNumberOfQuestions());
  }, []);

  return (
    <main className="main-container">
      <section className="intro-container">
        <header className="title-container">
          <img src="./icon-transparent.png" alt="Python Quizzer Icon" />
          <h1>Welcome to the Python Quizzer!</h1>
        </header>

        <article>
          <p>
            Get ready for a bit of Python fun. In total, we have{" "}
            {totalQuestions > 0 ? totalQuestions : "...loading"} Python
            questions available. You will get{" "}
            <strong>20 random questions</strong> each round. Each question
            contains a code snippet and six possible answers; your job is to
            choose the correct one!
          </p>
          <p>
            These questions will start easy and gradually get trickier. After
            each question, we'll explain how the code works.{" "}
            <em>Learning Python while having fun</em>, what could be better?
          </p>
          <p>
            Feel free to tackle the problems your way, but we suggest making
            your best guess first. If you're curious, copy the code and play
            around with it. Python is all about experimenting and learning as
            you go.
          </p>
          <button className="wide-button" onClick={onStartButtonClick}>
            Ready to roll? Start the quiz!
          </button>
        </article>
      </section>
    </main>
  );
};

export default Intro;

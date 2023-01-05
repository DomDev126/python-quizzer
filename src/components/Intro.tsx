import React from "react";
import { getTotalNumberOfQuestions } from "../utilities/questionFetcher";

type Props = {
  onStartButtonClick: () => void;
};

const Intro: React.FC<Props> = ({ onStartButtonClick }) => {
  return (
    <>
      <div className="main-container">
        <div className="intro-container">
          <div className="title-container">
            <img src="./icon-transparent.png" />
            <h1>Welcome to the Python Quizzer!</h1>
          </div>

          <p>
            Get ready for a bit of Python fun. In total, we have{" "}
            {getTotalNumberOfQuestions()} Python questions available. You will
            get <b>20 random questions</b> each round. Each question contain a
            code snippet and six possible answers, your job is to choose the
            correct answer!
          </p>
          <p>
            These questions will start easy and gradually get trickier. After
            each question, we'll explain how the code works.{" "}
            <i>Learning Python while having fun</i>, what could be better?
          </p>
          <p>
            Feel free to tackle the problems your way but we suggest making your
            best guess first. If you're curious, copy the code and play around
            with it. Python is all about experimenting and learning as you go.
          </p>
          <button className="wide-button" onClick={onStartButtonClick}>
            Ready to roll? Start the quiz!
          </button>
        </div>
      </div>
    </>
  );
};

export default Intro;

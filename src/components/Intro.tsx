import React from "react";

type Props = {
  onStartButtonClick: () => void;
};

const Intro: React.FC<Props> = ({ onStartButtonClick }) => {
  return (
    <>
      <div className="main-container">
        <div className="intro-container">
          <h1>Welcome to the Python Quizzer!</h1>
          <p>
            Get ready for a bit of Python fun. We've got 20 Python questions
            lined up for you. You'll have to pick the right answer from choices
            labeled 'a' to 'f'. No pressure, just some Python exploration ahead!
          </p>
          <p>
            These questions will start easy and gradually get trickier. After
            each question, we'll explain how the code works. Learning Python
            while having fun, what could be better?
          </p>
          <p>
            Feel free to tackle the problems your way. We suggest making your
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

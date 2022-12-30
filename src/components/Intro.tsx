import React from "react";

type Props = {
  onButtonClick: () => void; // Type definition for the function prop
};

const Intro: React.FC<Props> = ({ onButtonClick }) => {
  return (
    <>
      <div className="main-container">
        <div className="intro-container">
          <h1>Welcome to Python Quizzer!</h1>
          <p>
            Welcome to our Python quiz challenge! Here, you'll encounter a
            series of 20 Python questions, each one designed to gradually
            increase in difficulty as you progress. Your task is to answer as
            many questions correctly as possible, testing both your foundational
            knowledge and advanced understanding of Python. Dive in and aim for
            the highest score, enhancing your skills and enjoying the journey
            through the dynamic world of Python programming!
          </p>
          <button className="wide-button" onClick={onButtonClick}>
            Start the quiz!
          </button>
        </div>
      </div>
    </>
  );
};

export default Intro;

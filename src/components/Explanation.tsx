import React from "react";

type Props = {
  explanation: string;
  correctAnswer: boolean;
};

const Explanation: React.FC<Props> = ({ explanation, correctAnswer }) => {
  return (
    <>
      <div className="explanation-container">
        {correctAnswer ? (
          <h2 className="correct-answer">Correct!</h2>
        ) : (
          <h2 className="incorrect-answer">Incorrect!</h2>
        )}
        <p>{explanation}</p>
      </div>
    </>
  );
};

export default Explanation;

import React from "react";

type Props = {
  explanation: string;
  correctAnswer: boolean;
};

const Explanation: React.FC<Props> = ({ explanation, correctAnswer }) => {
  const statusHeading = correctAnswer ? "Correct!" : "Incorrect!";
  const statusClass = correctAnswer ? "correct-answer" : "incorrect-answer";

  return (
    <section className="explanation-container" aria-live="polite">
      <h2 className={statusClass}>{statusHeading}</h2>
      <p>{explanation}</p>
    </section>
  );
};

export default Explanation;

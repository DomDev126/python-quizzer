import React, { useEffect, useState } from "react";

type Props = {
  score: number;
  restart: () => void;
};

const Score: React.FC<Props> = ({ score, restart }) => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    if (score > 19) {
      setMessage(
        "You got everything correct, amazing! You're a Python wizard, casting flawless code spells!"
      );
    } else if (score > 17) {
      setMessage(
        "Almost perfect! Your Python skills are hissing at an expert level. Just a bit more to reach the summit!"
      );
    } else if (score > 15) {
      setMessage(
        "Great job! You're slithering your way up to Python mastery. Keep going!"
      );
    } else if (score > 13) {
      setMessage(
        "Nice work! You've python-wrapped a good chunk of knowledge. Time to constrict the rest!"
      );
    } else if (score > 11) {
      setMessage(
        "You're halfway to Python greatness! Like a diligent coder, you keep debugging your way up."
      );
    } else if (score > 9) {
      setMessage(
        "Not bad, but there's room for growth. You're like a Python in progress, steadily learning new tricks."
      );
    } else if (score > 7) {
      setMessage(
        "You've got the basics down, but Python has more secrets to reveal. Time to dive deeper into the code jungle!"
      );
    } else if (score > 5) {
      setMessage(
        "A fair attempt! Remember, every Python master once started as a beginner. Keep practicing!"
      );
    } else if (score > 3) {
      setMessage(
        "A modest start. Unleash your inner coder, and soon you'll be Python proficient!"
      );
    } else if (score > 1) {
      setMessage(
        "Looks like Python's got you in a bit of a loop. Shake it off and try again!"
      );
    } else if (score === 1) {
      setMessage(
        "At least you got one point, maybe it was a guess? Every coder's journey starts with a single step (or guess)!"
      );
    } else {
      setMessage(
        "Not a single point, but don't fret! Every coding hero begins with zero. Time to hit those Python books!"
      );
    }
  }, [score]);

  return (
    <main className="main-container">
      <section className="score-container">
        <h1>Your Score: {score}/20 Points</h1>
        <p>
          <strong>{message}</strong>
        </p>
        {score < 10 && (
          <p>
            Enhance your Python skills by exploring the official documentation.
            It's a great resource to deepen your understanding and improve your
            performance.{" "}
            <a
              href="https://docs.python.org/3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discover more about Python documentation"
            >
              Discover more here!
            </a>
          </p>
        )}

        <p>
          Do you want to create your own questions or did you find any errors in
          the quiz? Contribute to this project on{" "}
          <a
            href="https://github.com/alexandengstrom/python-quizzer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contribute to Python Quizzer on GitHub"
          >
            GitHub
          </a>
          .
        </p>
        <button className="wide-button" onClick={restart}>
          Restart the quiz!
        </button>
      </section>
    </main>
  );
};

export default Score;

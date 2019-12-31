import { useEffect, useState } from "react";
import "./App.css";
import Question from "./components/Question";
import Options from "./components/Options";
import Explanation from "./components/Explanation";
import { questionFetcher } from "./utilities/questionFetcher";
import Score from "./components/Score";

type QuestionData = {
  difficulty: string;
  question: string;
  codeSnippet: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
  };
  correctAnswer: string;
  explanation: string;
};

function App() {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const [canContinue, setCanContinue] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const fetchedQuestions = questionFetcher();
    if (fetchedQuestions.length > 0) {
      setQuestions(fetchedQuestions);
      setCurrentQuestionIndex(0);
    }
  }, []);

  const handleOptionClick = (option: string) => {
    if (questions && questions.length > 0) {
      setSelectedOption(option);
      const answeredCorrect =
        option === questions[currentQuestionIndex].correctAnswer;
      setIsCorrectAnswer(answeredCorrect);
      if (answeredCorrect) setScore((oldScore) => oldScore + 1);
      setCanContinue(true);
    }
  };

  const handleNextQuestionClick = () => {
    setCurrentQuestionIndex((current) => (current += 1));
    setCanContinue(false);
    setSelectedOption(null);
  };

  useEffect(() => {
    if (canContinue) {
      scrollToBottom();
    } else {
      scrollToTop();
    }
  }, [canContinue]);

  const scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 50);
  };

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const restartQuiz = () => {
    const fetchedQuestions = questionFetcher();
    console.log(fetchedQuestions.length);
    if (fetchedQuestions.length > 0) {
      setQuestions(fetchedQuestions);
      setCurrentQuestionIndex(0);
      setScore(0);
      setCanContinue(false);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  } else if (currentQuestionIndex >= questions.length) {
    return <Score score={score} restart={restartQuiz} />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="main-container">
        <h4>Question {currentQuestionIndex + 1}/20</h4>
        <Question
          question={currentQuestion.question}
          codeSnippet={currentQuestion.codeSnippet}
        />
        <Options
          options={currentQuestion.options}
          answer={currentQuestion.correctAnswer}
          onOptionClick={handleOptionClick}
        />
        {selectedOption != null && (
          <Explanation
            explanation={currentQuestion.explanation}
            correctAnswer={isCorrectAnswer}
          />
        )}
        {canContinue && (
          <button className="wide-button" onClick={handleNextQuestionClick}>
            Continue
          </button>
        )}
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  question: string;
  codeSnippet: string;
};

const Question: React.FC<Props> = ({ question, codeSnippet }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleDarkModeToggle = (e: MediaQueryListEvent) =>
      setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleDarkModeToggle);

    return () =>
      darkModeMediaQuery.removeEventListener("change", handleDarkModeToggle);
  }, []);

  return (
    <>
      <div className="question-container">
        <h2>{question}</h2>
        <SyntaxHighlighter
          className="code-snippet"
          language="python"
          style={isDarkMode ? vs2015 : docco}
        >
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Question;

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
    <article className="question-container" aria-labelledby="questionHeading">
      <header>
        <h2 id="questionHeading">{question}</h2>
      </header>

      <section aria-labelledby="codeSnippetHeading">
        <SyntaxHighlighter
          className="code-snippet"
          language="python"
          style={isDarkMode ? vs2015 : docco}
        >
          {codeSnippet}
        </SyntaxHighlighter>
      </section>
    </article>
  );
};

export default Question;

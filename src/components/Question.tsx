import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  question: string;
  codeSnippet: string;
};

const Question: React.FC<Props> = ({ question, codeSnippet }) => {
  return (
    <>
      <div className="question-container">
        <h2>{question}</h2>
        <SyntaxHighlighter
          className="code-snippet"
          language="python"
          style={docco}
        >
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Question;
